import { findNode, deepCopy } from '@mobov/es-helper'
import { merge } from 'lodash'
import { Vue, Component, Prop, Provide, Emit, Inject, Mixins } from 'vue-property-decorator'
import { CreateElement, VNode, VNodeData, VueConstructor } from 'vue'
import Project from '@/typings/project'

export function getPathNode (uid: string, rootNode: Project.UiNodes): Project.UiNode {
  const result = findNode({
    data: rootNode,
    field: 'uid',
    key: uid,
    childField: 'children'
  })

  return result
}

export function getPathParentNode (uid: string, rootNode: Project.UiNodes): Project.UiNode {
  const result = findNode({
    data: rootNode,
    field: 'uid',
    key: uid,
    childField: 'children'
  })

  return result
}

export function compiler (h: CreateElement, PNode: Project.UiNodes): VNode[] {
  const result: VNode[] = []
  if (PNode !== undefined) {
    for (let node of PNode) {
      node = deepCopy(node)
      // @ts-ignore
      // const nodeModule = deepCopy(Store.state.UiModules.find(item => item.name === node.name)) as UiModule
      // @ts-ignore
      // node.nodeData = merge(nodeModule.nodeData, node.nodeData)
      // @ts-ignore
      result.push(h(node.name, node.nodeData, node.children ? compiler(h, node.children) : []))
      // if (nodeModule.uiConfig.disabled) {
      //   result.push(h(node.name, node.nodeData, node.children ? compiler(h, node.children) : []))
      // } else {
      //   const elementData: VNodeData = {
      //     key: node.uid,
      //     props: {
      //       node
      //     }
      //   }
      //
      //   if (node.nodeData.slot) {
      //     elementData.slot = node.nodeData.slot
      //     // delete node.nodeData.slot
      //   }
      //
      //   result.push(h(
      //     'comp-suit',
      //     elementData,
      //     []
      //   ))
      // }
    }
  }

  return result
}
