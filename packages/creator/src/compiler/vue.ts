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
  let template = ''

  const formatNode = (data: UiNode, space = 0) => {
    if (data.uiConfig.isBoxWrap) {
      console.log(data)
      data.uiConfig.isBoxWrap = false
      template += prependStrSpace(`<h-box`, space)
      if (data.boxConfig !== undefined) {
        Object.keys(data.boxConfig).forEach(prop => {
          // @ts-ignore
          const value = data.boxConfig[prop]
          console.log(typeof value)
          if (typeof value === 'boolean') {
            template += ` :${prop}="${value}" `
          } else if (typeof value === 'number') {
            template += ` :${prop}="${value}" `
          } else {
            template += ` ${prop}="${value}" `
          }
        })
      }
      template += `>
    `
      formatNode(data, space + 2)
      template += prependStrSpace(`</h-box>
`, space)
    } else {
      // tag
      template += prependStrSpace(`<${lineCase(data.tag)}`, space)

      if (data.nodeData !== undefined) {
        //props
        if (data.nodeData.props !== undefined) {
          Object.keys(data.nodeData.props).forEach(prop => {
            // @ts-ignore
            const value = data.nodeData.props[prop]
            console.log(typeof value)
            if (typeof value === 'boolean') {
              template += ` :${prop}="${value}" `
            } else if (typeof value === 'number') {
              template += ` :${prop}="${value}" `
            } else {
              template += ` ${prop}="${value}" `
            }
          })
        }
        //styles
        if (data.nodeData.style !== undefined) {
          template += ` :style="{`
          Object.keys(data.nodeData.style).forEach(prop => {
            // @ts-ignore
            const value = node.nodeData.style[prop]
            console.log(typeof value)
            if (typeof value === 'boolean') {
              template += `${prop}: ${value} `
            } else if (typeof value === 'number') {
              template += `${prop}: ${value} `
            } else {
              template += `${prop}: "${value}" `
            }
          })
          template += `}" `
        }
      }

      template += `>
    `

      if (data.children) {
        if (typeof data.children !== 'string') {
          data.children.forEach(item => {
            formatNode(item, space + 2)
          })
        } else {
          template += data.children
        }
      }
      template += prependStrSpace(`</${lineCase(data.tag)}>
`, space)
    }

  }
  formatNode(node, 0)
  return template
}
