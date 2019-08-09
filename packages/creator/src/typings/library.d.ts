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
    domProps?: fieldItem
  }
  control: {
    props: fieldItem
    style?: fieldItem
    attrs?: fieldItem
    domProps?: fieldItem
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
    domProps: fieldItem
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

