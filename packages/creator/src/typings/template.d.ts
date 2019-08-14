import { BoxConfig, UiConfig, UiNode, UiNodes } from '@/typings/project'
import { VNodeData } from 'vue'

type fieldItem = {
  [field: string]: any
}

// export interface PluginComponentPack {
//   tag: string
//   label: string
//   uiConfig?: fieldItem
//   nodeData: {
//     props: fieldItem
//     style?: fieldItem
//     attrs?: fieldItem
//   }
//   control: {
//     props: fieldItem
//     style?: fieldItem
//     attrs?: fieldItem
//   }
// }

export type ItemOption = {
  name?: string
  tag?: string
  uid?: string
  pid?: string
  uiConfig?: UiConfig
  boxConfig?: BoxConfig
  nodeData?: any
  children?: Array<ItemOption>
}

export type Option = {
  name: string
  label: string
  UiNode: Array<ItemOption>
}

export type Plugin = {
  name: string
  label: string
  templates: Array<Option>
}
