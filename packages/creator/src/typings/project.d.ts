import { VNodeData, VNodeChildren, VNode } from 'vue'

export type PackageConfig = {
  name: string
  version: string
  dependencies: {
    [name: string]: string
  }
}

export type UiNodes = Array<UiNode>

export type Data = {
  PackageConfig: PackageConfig
  UiNodes: UiNodes
}

export type UiConfig = {
  disabled?: boolean
  locked: boolean
}

export type UiNode = {
  name: string
  uid: string
  pid: string
  uiConfig: UiConfig
  nodeData: VNodeData
  children: UiNodes
}
