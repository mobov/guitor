import { VNodeData, VNodeChildren, VNode } from 'vue'

export type ProjectConfig = {
  name: string
  version: string
  npmCDN: string
  dependencies: {
    [name: string]: string
  }
}

export type UiNodes = Array<UiNode>

export type Options = {
  ProjectConfig: ProjectConfig
  UiNodes: UiNodes
}

export type BoxConfig = {

}

export type UiConfig = {
  // 组件项
  isContainer?: boolean
  isBoxWrap?: boolean
  isHidden?: boolean
  enableDelete?: boolean
  parentExcludes: []
  parentIncludes: []
  // 独立项
  isLocked?: boolean
}

export type UiNode = {
  name: string
  tag: string
  uid: string
  pid: string
  show: boolean
  baseConfig: {
    show: true,
  }
  uiConfig: UiConfig
  boxConfig: BoxConfig
  nodeData: VNodeData
  children: UiNodes
}
