import { VNodeData, VNodeChildren, VNode } from 'vue'

export namespace Project {
  export type BaseConfig = {
    show: true
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
    baseConfig: BaseConfig
    uiConfig: UiConfig
    boxConfig: BoxConfig
    nodeData: VNodeData
    children: UiNodes
  }

  export type UiNodes = Array<UiNode>

  export type UiDocument = Array<UiNode>

  export type UiComponents = {}

  export type UiFlow = {}
}

export type BaseConfig = {
  show: true
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
  baseConfig: BaseConfig
  uiConfig: UiConfig
  boxConfig: BoxConfig
  nodeData: VNodeData
  children: Array<UiNode>
}

export type UiTree = {}

export type UiFlow = {}

export type ProjectConfig = {
  name: string
  version: string
  npmCDN: string
  dependencies: {
    [name: string]: string
  }
  Constants: {
    [name: string]: any
  }
  UiTrees: Array<UiNode>
  UiNodes: {
    [uid: string]: UiNode
  }
  UiFlows: {
    [uid: string]: UiFlow
  }
}

