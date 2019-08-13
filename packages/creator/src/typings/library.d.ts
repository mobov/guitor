import { BoxConfig, UiConfig, UiNode, UiNodes } from '@/typings/project'
import { VNodeData } from 'vue'

type fieldItem = {
  [field: string]: any
}

export interface PluginComponentPack {
  tag: string
  label: string
  uiConfig?: fieldItem
  nodeData: {
    props: fieldItem
    style?: fieldItem
    attrs?: fieldItem
  }
  control: {
    props: fieldItem
    style?: fieldItem
    attrs?: fieldItem
  }
}

export interface ComponentOption {
  tag: string
  label: string
  name: string
  library: string
  uiConfig: {
    isContainer: boolean
    isLocked: boolean
  }
  nodeData: {
    props: fieldItem
    style: fieldItem
    attrs: fieldItem
  }
}

export type Options = {
  name: string
  label: string
  components: {
    [name: string]: ComponentOption
  }
}

export type Plugin = {
  name: string
  label: string
  components: {
    [name: string]: PluginComponentPack
  }
}

export type TemplateOption = {
  name?: string
  tag?: string
  uid?: string
  pid?: string
  uiConfig?: UiConfig
  boxConfig?: BoxConfig
  nodeData?: any
  children?: TemplateOption
}

export type Template = {
  name: string
  UiNode: any
}
