import { UiNode } from '@/typings/project'
import JSZip from 'jszip'
import md5 from 'blueimp-md5'
const base64Reg = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i

interface KV {
  [field: string]: string
}
const base64TypeMap: KV = {
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'png': 'image/png'
}
function getBase64Header (fileName: string): string {
  const fileSuffix = fileName.split('.')[1]

  return `data:${base64TypeMap[fileSuffix]};base64,`
}

function dataURLtoBlob (dataurl: string) {
  // @ts-ignore
  let arr = dataurl.split(',')
  // @ts-ignore
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

export function handleExportNodeAssets (nodeData: UiNode[], Zip: typeof JSZip) {
  const AssetsMap: string[] = []
  if (typeof nodeData === 'string') {
    return
  }
  nodeData.forEach(data => {
    if (data.nodeData.props) {
      const Props = data.nodeData.props
      Reflect.ownKeys(Props).forEach((propKey: any) => {
        if (base64Reg.test(Props[propKey])) {
          const fileName = md5(Props[propKey])
          if (!AssetsMap.includes(fileName)) {
            let suffix = Props[propKey].match(base64Reg)
            suffix = suffix[1].split('/')[1]
            Zip.file(`${fileName}.${suffix}`, dataURLtoBlob(Props[propKey]))
            Props[propKey] = `@/assets/${fileName}.${suffix}`
            AssetsMap.push(fileName)
          }
        }
      })
    }

    handleExportNodeAssets(data.children, Zip)
  })
}

const assetsReg = /@\/assets\//
export async function handleImportNodeAssets (nodeData: UiNode[], Zip: typeof JSZip): Promise<void> {
  const promises: Promise<any> [] = []
  const format = (nodeData: UiNode[], Zip: typeof JSZip) => {
    if (typeof nodeData === 'string') {
      return
    }
    nodeData.forEach(data => {
      if (data.nodeData.props) {
        const Props = data.nodeData.props
        Reflect.ownKeys(Props).forEach((propKey: any) => {
          if (assetsReg.test(Props[propKey])) {
            let fileName = Props[propKey].replace(assetsReg, '')
            promises.push(
              Zip.file(`src/assets/${fileName}`).async('base64').then(res => {
                Props[propKey] = `${getBase64Header(fileName)}${res}`
              })
            )
          }
        })
      }

      format(data.children, Zip)
    })
  }
  format(nodeData, Zip)

  await Promise.all(promises)
}
