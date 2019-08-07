export type ComponentsPack = {
  [name: string]: {
    label: string
    library?: string
    props: {
      [name: string]: any
    }
    style?: {
      [name: string]: any
    }
  }
}

export type Options = {
  name: string
  label: string
  components: ComponentsPack
}

