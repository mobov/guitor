import { VueConstructor, Component } from 'vue'
import * as components from './entries'

export type ComponentOrPack = Component & { $subcomponents?: Record<string, ComponentOrPack> }

export interface MegH5UseOptions {
  components?: Record<string, ComponentOrPack>
}

export interface MegH5Plugin {
  installed: boolean
  install: (Vue: VueConstructor, opts: MegH5UseOptions) => void
  version: string
}

const MegH5: MegH5Plugin = {
  installed: false,
  install (Vue, opts = {}) {
    if (MegH5.installed) { return }
    MegH5.installed = true

    const componentsList = opts.components || components

    Object.values(componentsList).forEach((entry) => {
      Vue.use(entry)
    })
  },
  version: '0.0.1'
}

export * from './entries'

export * from './core'

export default MegH5
