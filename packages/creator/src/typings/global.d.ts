import {
  VueConstructor,
  ComponentOptions,
  FunctionalComponentOptions,
  VNodeData, PluginFunction, DirectiveFunction, DirectiveOptions
} from 'vue'

declare global {
  interface ProcessEnv {
    env: any
  }
  interface Window {
    attachEvent(event: string, listener: EventListener): boolean
    detachEvent(event: string, listener: EventListener): void
  }

  interface HTMLCollection {
    [Symbol.iterator] (): IterableIterator<Element>
  }

  interface Element {
    getElementsByClassName(classNames: string): NodeListOf<HTMLElement>
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject
    _onResize?: {
      callback: () => void
      options?: boolean | AddEventListenerOptions
    }
    _onScroll?: {
      callback: EventListenerOrEventListenerObject
      options: boolean | AddEventListenerOptions
      target: EventTarget
    }
    attachEvent(event: string, listener: EventListener): boolean
    detachEvent(event: string, listener: EventListener): void
  }

  function parseInt(s: string | number, radix?: number): number
  function parseFloat(string: string | number): number

}
