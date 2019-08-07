import Vue, { VNode } from 'vue'
import { DirectiveFunction } from 'vue'
import { strStyle } from '@mobov/es-helper'

type dragDirection = 'xy' | 'x' | 'y'
interface DragAniOpts {
  el: HTMLElement
  container: string
  direction: dragDirection
  vnode: VNode
  uid: string
}


class DragAni {

  constructor (opts: DragAniOpts) {
    this.$el = opts.el
    this.uid = opts.uid
    this.$container = document.querySelector(opts.container) as HTMLElement
    this.direction = opts.direction
    this.$faker.style.zIndex = '999999'
    this.addListeners()
  }
  uid!: string
  $el!: HTMLElement
  $container!: HTMLElement
  $target!: HTMLElement
  $drager!: HTMLElement
  $faker: HTMLElement = document.createElement('img')
  fakerZIndex: number = 999999
  fixTimer: WindowTimers | null = null
  direction: dragDirection = 'xy'
  lastX: number = 0
  lastY: number = 0
  targetWidth: number = 0
  targetHeight: number = 0
  targetX: number = 0
  targetY: number = 0
  startX: number = 0
  startY: number = 0

  handleMouseDown = (e: MouseEvent) => {
    this.$el.setAttribute('draggable', 'true')
  }

  handleMouseUp = (e: MouseEvent) => {
    this.$el.setAttribute('draggable', 'false')
  }

  handleDragStart = (e: any) => {
    if (this.fixTimer) { return }
    this.fixTimer = setTimeout(() => {
      this.fixTimer = null
    }, 50)
    this.$target = e.target as HTMLElement

    const targetRect = this.$target.getBoundingClientRect() as any
    this.targetWidth = targetRect.width
    this.targetHeight = targetRect.height
    this.targetX = targetRect.x
    this.targetY = targetRect.y
    // 隐藏html元素样式
    e.dataTransfer.setDragImage(this.$faker, e.x, e.y)
    // 创建克隆元素
    this.$drager = this.$target.cloneNode(true) as HTMLElement
    this.$drager.classList.add('drag-anim-item')
    if (this.$drager.classList.contains('comp-suit')) {
      this.$drager.classList.remove('comp-suit')
    }
    // console.log(this.$drager)
    this.$drager.setAttribute('draggable', 'false')
    const styles = {
      'pointer-events': 'none',
      'cursor': 'pointer',
      'position': 'absolute',
      'will-change': 'position',
      'z-index': '99999',
      'transition': 'none',
      'left': `${this.targetX}px`,
      'top': `${this.targetY}px`,
      'width': `${this.targetWidth}px`,
      'height': `${this.targetHeight}px`
    }
    this.$drager.style.cssText = this.$target.style.cssText + strStyle(styles)
    this.lastX = e.x
    this.lastY = e.y
    this.$container.appendChild(this.$drager)
  }

  handleDrag = (e: MouseEvent) => {
    // console.log(this.$drager)
    if (
      e.x === this.lastX &&
      e.y === this.lastY
    ) {
      return
    }
    // console.log(this.$drager)
    if (this.$drager) {
      if (this.direction.indexOf('x') !== -1) {
        this.targetX += (e.x - this.lastX)
        this.$drager.style.left = `${this.targetX}px`
        this.lastX = e.x
      }
      if (this.direction.indexOf('y') !== -1) {
        this.targetY += (e.y - this.lastY)
        this.$drager.style.top = `${this.targetY}px`
        this.lastY = e.y
      }
    }
  }

  handleDragEnd = (e: MouseEvent) => {
    if (this.$drager) {
      this.$container.removeChild(this.$drager)
      // @ts-ignore
      this.$drager = null
    }
  }

  addListeners () {
    document.addEventListener('mouseup', this.handleMouseUp)
    this.$el.addEventListener('mousedown', this.handleMouseDown)
    this.$el.addEventListener('dragstart', this.handleDragStart)
    this.$el.addEventListener('drag', this.handleDrag)
    this.$el.addEventListener('dragend', this.handleDragEnd)
  }

  removeListeners () {
    document.removeEventListener('mouseup', this.handleMouseUp)
    this.$el.removeEventListener('mousedown', this.handleMouseDown)
    this.$el.removeEventListener('dragstart', this.handleDragStart)
    this.$el.removeEventListener('drag', this.handleDrag)
    this.$el.removeEventListener('dragend', this.handleDragEnd)
  }

  destroy () {
    this.removeListeners()
  }
}

const DragAniItems: { [field: string]: DragAni } = {}

const bind: DirectiveFunction = (el, binding, vnode, oldVnode) => {
  DragAniItems[binding.value] = new DragAni({
    el,
    container: 'body',
    direction: 'xy',
    vnode: vnode,
    uid: binding.value
  })
}

const unbind: DirectiveFunction = (el, binding, vnode, oldVnode) => {
  DragAniItems[binding.value].destroy()
}

Vue.directive('drag-ani', {
  bind,
  unbind,
  componentUpdated: bind
})

