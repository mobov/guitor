import { UiNode, UiNodes } from '@/typings/project'
// @ts-ignore
import { lineCase } from '@mobov/es-helper'

function prependStrSpace (str: string,  length: number) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += ' '
  }
  return `${result}${str}`
}

export default function (node: UiNode) {
  let vueTemplate = ''
  const vueData: any = {}

  const formatNode = (data: UiNode, space = 0) => {
    if (data.uiConfig.isBoxWrap) {
      data.uiConfig.isBoxWrap = false
      vueTemplate += prependStrSpace(`<h-box`, space)
      if (data.boxConfig !== undefined) {
        Object.keys(data.boxConfig).forEach(prop => {
          // @ts-ignore
          const value = data.boxConfig[prop]
          console.log(typeof value)
          if (typeof value === 'boolean') {
            vueTemplate += ` :${prop}="${value}" `
          } else if (typeof value === 'number') {
            vueTemplate += ` :${prop}="${value}" `
          } else {
            vueTemplate += ` ${prop}="${value}" `
          }
        })
      }
      vueTemplate += `>
    `
      formatNode(data, space + 2)
      vueTemplate += prependStrSpace(`</h-box>
`, space)
    } else {
      // tag
      vueTemplate += prependStrSpace(`<${lineCase(data.tag)}`, space)

      if (data.nodeData !== undefined) {
        //props
        if (data.nodeData.props !== undefined) {
          const dataKey = `${data.name}_${data.uid}`
          console.info(data)
         // vueData[]
          Object.keys(data.nodeData.props).forEach(prop => {
            // @ts-ignore
            const value = data.nodeData.props[prop]
            console.log(typeof value)
            if (typeof value === 'boolean') {
              vueTemplate += ` :${prop}="${value}" `
            } else if (typeof value === 'number') {
              vueTemplate += ` :${prop}="${value}" `
            } else if (typeof value === 'string') {
              vueTemplate += ` ${prop}="${value}" `
            } else if (value !== undefined) {
              // vueTemplate += ` ${prop}="${value}" `
              vueTemplate += ` ${prop}="${value}" `
              if (vueData[dataKey] === undefined) {
                vueData[dataKey] = {}
              }
              vueData[dataKey][prop] = value
              vueTemplate += ` :${prop}="${dataKey}.${prop}" `
            }
          })
        }
        //styles
        if (data.nodeData.style !== undefined) {
          vueTemplate += ` :style="{`
          Object.keys(data.nodeData.style).forEach(prop => {
            // @ts-ignore
            const value = node.nodeData.style[prop]
            console.log(typeof value)
            if (typeof value === 'boolean') {
              vueTemplate += `${prop}: ${value} `
            } else if (typeof value === 'number') {
              vueTemplate += `${prop}: ${value} `
            } else if (value !== undefined) {
              vueTemplate += `${prop}: "${value}" `
            }
          })
          vueTemplate += `}" `
        }
      }

      vueTemplate += `>
    `

      if (data.children) {
        if (typeof data.children !== 'string') {
          data.children.forEach(item => {
            formatNode(item, space + 2)
          })
        } else {
          vueTemplate += data.children
        }
      }
      vueTemplate += prependStrSpace(`</${lineCase(data.tag)}>
`, space)
    }

  }
  formatNode(node, 0)
  return {
    template: vueTemplate,
    data: JSON.stringify(vueData)
  }
}
