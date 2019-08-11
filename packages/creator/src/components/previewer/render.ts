import { CreateElement, VNode, VNodeData } from 'vue'
import Project from '../../typings/project'
import { deepCopy } from '@mobov/es-helper'

export function renderComponentChildren (h: CreateElement, PNode: Project.UiNodes): VNode[] {
  const result: VNode[] = []
  if (PNode !== undefined && PNode.length > 0) {
    for (let node of PNode) {
      node = deepCopy(node)
      result.push(h(
        node.tag,
        node.nodeData,
        node.children ? node.children : <any>[]
      ))
    }
  }

  return result
}

export function renderComponent (h: CreateElement, PNode: Project.UiNodes): VNode[] {
  const result: VNode[] = []
  if (PNode !== undefined && PNode.length > 0) {
    for (let node of PNode) {
      node = deepCopy(node)
      const compSuitData: VNodeData = {
        key: node.uid,
        props: {
          node,
        }
      }

      if (node.nodeData.slot) {
        compSuitData.slot = node.nodeData.slot
      }

      result.push(h(
        'comp-suit',
        compSuitData,
        []
      ))
    }
  }

  return result
}
