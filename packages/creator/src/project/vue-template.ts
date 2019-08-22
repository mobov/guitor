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
    // tag
    template += prependStrSpace(`<${lineCase(data.tag)}`, space)

    if (node.nodeData !== undefined) {
      //props
      if (node.nodeData.props !== undefined) {
        Object.keys(node.nodeData.props).forEach(prop => {
          // @ts-ignore
          const value = node.nodeData.props[prop]
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
      if (node.nodeData.style !== undefined) {
        template += ` :style="{`
        Object.keys(node.nodeData.style).forEach(prop => {
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

    if (data.children && data.children.length > 0) {
      data.children.forEach(item => {
        formatNode(item, space + 2)
      })
    }
    template += prependStrSpace(`</${lineCase(data.tag)}>
`, space)
  }
  formatNode(node, 0)
  return template
}
