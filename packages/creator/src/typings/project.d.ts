import { VNodeData, VNodeChildren, VNode } from 'vue'

export type PackageConfig = {
  name: string
  version: string
  dependencies: {
    [name: string]: string
  }
}

export type UiNodes = Array<UiNode>

export type Options = {
  PackageConfig: PackageConfig
  UiNodes: UiNodes
}



export type BoxConfig = {

}

export type UiConfig = {
  isContainer?: boolean
  isLocked?: boolean
  parentExcludes: []
  parentIncludes: []
}

export type UiNode = {
  name: string
  tag: string
  uid: string
  pid: string
  uiConfig: UiConfig
  boxConfig: BoxConfig
  nodeData: VNodeData
  children: UiNodes
}
