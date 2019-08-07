import { CreateElement, VNode } from 'vue'
import Project from '../../typings/project'
import { deepCopy } from '@mobov/es-helper'
import store from '../src/store'

export default function render (h: CreateElement, PNode: Project.UiNodes): VNode[] {
  const result: VNode[] = []
  if (PNode !== undefined && PNode.length > 0) {
    console.log(PNode)
    for (let node of PNode) {
      node = deepCopy(node)
      node.nodeData.attrs = node.nodeData.attrs === undefined ? {} : node.nodeData.attrs
      node.nodeData.domProps = node.nodeData.domProps === undefined ? {} : node.nodeData.domProps
      node.nodeData.class = node.nodeData.class === undefined ? {} : node.nodeData.class
      // node.nodeData.attrs['id'] = node.uid
      node.nodeData.directives = node.nodeData.directives === undefined ? [] : node.nodeData.directives

      node.nodeData.class['comp-suit'] = true
      if (store.state.project.activeUid === node.uid) {
        node.nodeData.class['--active'] = true
      }
      node.nodeData.directives.push({
        name: 'comp-suit',
        value: node.uid
        // expression: '1 + 1',
        // arg: 'foo',
        // modifiers: {
        //   bar: true
        // }
      })

      const elementData: VNodeData = {
        key: node.uid,
        props: {
          ...nodeModule.uiConfig,
          node
        }
      }

      if (node.nodeData.slot) {
        elementData.slot = node.nodeData.slot
        // delete node.nodeData.slot
      }

      result.push(h(
        'comp-suit',
        elementData,
        []
      ))

      result.push(h(node.name, node.nodeData, node.children && node.children ? render(h, node.children) : []))
    }
  }

  return result
}
