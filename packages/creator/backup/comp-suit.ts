import './comp-suit.scss'
import Vue, { VNode } from 'vue'
import store from '@/store'
import { DirectiveFunction } from 'vue'

// 订阅store mutation
interface CompSuitOpts {
  el: HTMLElement
  vnode: VNode
  uid: string
}

class CompSuit {
  static readonly handlerDirections =  [
    '↖', '↑', '↗',
    '←', '→',
    '↙', '↓', '↘'
  ]

  constructor (opts: CompSuitOpts) {
    this.el = opts.el
    this.uid = opts.uid
    this.vnode = opts.vnode

    CompSuit.handlerDirections.forEach(direction => {
      const $dom = document.createElement('div')
      $dom.classList.add('comp-suit-handler')
      $dom.classList.add(`--${direction}`)
      this.el.appendChild($dom)
    })
    this.bindActiveEvent()
    this.addSuitListeners()
  }

  el!: HTMLElement
  vnode!: VNode
  uid!: string
  isActive = false
  isMove = false
  isSizeL = false
  isSizeR = false
  isSizeT = false
  isSizeB = false
  moveX = 0
  moveY = 0
  sizeX = 0
  sizeY = 0

  get vm () {
    return this.vnode.componentInstance
  }

  get isLocked (): boolean {
    return store.getters['project/ActiveNode'].uiConfig.locked
  }

  get isHanding (): boolean {
    return this.isMove ||
      this.isSizeL ||
      this.isSizeR ||
      this.isSizeT ||
      this.isSizeB
  }

  get classes (): any {
    return {
      'comp-suit': true,
      '--active': this.isActive,
      '--isHanding': this.isHanding,
      '--isLocked': this.isLocked,
      [`--size-xy`]: true
    }
  }

  handleMouseDown = (e: MouseEvent) => {
    e.stopPropagation()
    // @ts-ignore
    const className = e.target.className

    switch (true) {
      case className.indexOf('↖') !== -1: this.isSizeT = true; this.isSizeL = true; break
      case className.indexOf('↑') !== -1: this.isSizeT = true; break
      case className.indexOf('↗') !== -1: this.isSizeT = true; this.isSizeR = true; break
      case className.indexOf('→') !== -1: this.isSizeR = true; break
      case className.indexOf('↘') !== -1: this.isSizeR = true; this.isSizeB = true; break
      case className.indexOf('↓') !== -1: this.isSizeB = true; break
      case className.indexOf('↙') !== -1: this.isSizeB = true; this.isSizeL = true; break
      case className.indexOf('←') !== -1: this.isSizeL = true; break
    }

    if (
      !this.isSizeT &&
      !this.isSizeL &&
      !this.isSizeR &&
      !this.isSizeB
    ) {
      this.handleActive()
    }
  }

  handleActive = () => {
    store.commit('project/SET_ACTIVE_NODE', this.uid)
  }

  appendClass (className: string) {
    this.el.classList.add(className)
  }

  removeClass (className: string) {
    if (this.el.classList.contains(className)) {
      this.el.classList.remove(className)
    }
  }

  active () {
    this.isActive = true
    this.appendClass('--active')
    // if (this.isLocked) { return }
    this.isMove = true
  }

  deactive () {
    this.isActive = false
    this.removeClass('--active')
  }

  bindActiveEvent () {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'project/SET_ACTIVE_NODE') {
        if (this.uid === mutation.payload) {
          this.active()
        } else {
          this.deactive()
        }
      }
    })
  }

  addSuitListeners () {
    // document.addEventListener('mousemove', this.handleMouseMove as EventListener)
    // document.addEventListener('mouseup', this.handleMouseUp as EventListener)
    this.el.addEventListener('mousedown', this.handleMouseDown)
  }

  removeSuitListeners () {
    // document.removeEventListener('mousemove', this.handleMouseMove as EventListener)
    // document.removeEventListener('mouseup', this.handleMouseUp as EventListener)
    this.el.removeEventListener('mousedown', this.handleMouseDown)
  }
}

const CompSuitGroups: { [field: string]: CompSuit } = {}

const bind: DirectiveFunction = (el, binding, vnode, oldVnode) => {
  console.log('bind')
  CompSuitGroups[binding.value] = new CompSuit({ el, vnode: vnode, uid: binding.value })
}

const unbind: DirectiveFunction = (el, binding, vnode, oldVnode) => {
  console.log('unbind')
  // console.log(el)
  // console.log(binding)
  // console.log(vnode)
  // console.log(oldVnode)
}

const componentUpdated: DirectiveFunction = (el, binding, vnode, oldVnode) => {
  console.log('componentUpdated')
}

Vue.directive('comp-suit', {
  bind,
  unbind,
  componentUpdated
})

