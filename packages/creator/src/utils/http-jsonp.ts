import { reject } from 'q'

const $container = document.body

export type assetType = 'script' | 'css'

export default function (url: string = '', assetType: assetType = 'script') {
  return new Promise((resolve, reject) => {
    const $iframe = document.createElement('iframe')
    let tag = 'script'
    let attrs = ''
    if (assetType === 'script') {
      tag = 'script'
      attrs = `src="${url}"`
    } else if (
      assetType === 'css'
    ) {
      tag = 'link'
      attrs = `href="${url}"`
    }

    $iframe.style.height = '0px'
    $iframe.style.width = '0px'
    $iframe.style.position = 'absolute'
    $iframe.style.top = '-9999px'

    $iframe.setAttribute('srcDoc', `
      <${tag} ${attrs}></${tag}>
    `)
    $container.appendChild($iframe)

    $iframe.onload = () => {
      console.log($iframe)
    }
  })
}
