import { UiNode, UiNodes } from '@/typings/project'
// @ts-ignore
import JSZip from 'jszip'
import { merge, cloneDeep } from 'lodash'
import defPackageData from './files/package'
import defMainData from './files/main'
import AppData from './files/App'
import { handleExportNodeAssets, handleImportNodeAssets } from './utils'
import { saveAs } from 'file-saver'

export async function exportProject (project: any) {
  console.log(project)
  const Pack = new JSZip()
  const PackSrc = Pack.folder('src')
  const PackSrcAssets = PackSrc.folder('assets')
  const PackageData = cloneDeep(project.ProjectConfig)
  const GuitorData = cloneDeep(project)
  const MainData = cloneDeep(defMainData)

  merge(PackageData, {
    name: project.ProjectConfig.name,
    version: project.ProjectConfig.version
  })
  // Guitor5Data base64提取成静态资源
  handleExportNodeAssets(GuitorData.UiNodes, PackSrcAssets)
  // PackSrcAssets.file("smile.gif", imgData, { base64: true })
  PackSrc.file('guitor.json', JSON.stringify(GuitorData, null, 2))
  PackSrc.file('main.js', MainData)
  PackSrc.file('App.vue', AppData)
  Pack.file('package.json', JSON.stringify(PackageData, null, 2))

  const content = await Pack.generateAsync({ type: 'blob' })
  saveAs(content, `${PackageData.name}.zip`)
}

export async function importProject (file: any): Promise<any> {
  const Zip = await JSZip.loadAsync(file)
  const guitorDataStr = await Zip.file('src/guitor.json').async('text')
  const guitorData: any = JSON.parse(guitorDataStr)
  await handleImportNodeAssets(guitorData.UiNodes, Zip)
  return cloneDeep(guitorData)
}
