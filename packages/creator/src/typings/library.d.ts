import { BoxConfig, UiConfig, UiNode, UiNodes } from '@/typings/project'
import { VNodeData } from 'vue'

type fieldItem = {
  [field: string]: any
}

export interface ComponentOption {
  tag: string
  label: string
  name?: string
  library?: string
  uiConfig?: {
    isContainer: boolean
    isLocked: boolean
  }
  nodeData?: {
    props: fieldItem
    style: fieldItem
    attrs: fieldItem
  },
  control?: {
    props: fieldItem
    style?: fieldItem
    attrs?: fieldItem
  }
}

export type Plugin = {
  name: string
  label: string
  components: {
    [name: string]: ComponentOption
  }
}
