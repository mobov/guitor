import { findNode, deepCopy } from '@mobov/es-helper'
import { merge } from 'lodash'
import { Vue, Component, Prop, Provide, Emit, Inject, Mixins } from 'vue-property-decorator'
import { CreateElement, VNode, VNodeData, VueConstructor } from 'vue'
import Project from '@/typings/project'

export function getPathNode (uid: string, rootNode: Project.UiNodes): Project.UiNode {
  return findNode({
    data: rootNode,
    field: 'uid',
    key: uid,
    childField: 'children'
  })
}
