import Vue from 'vue'
import { deepCopy } from '@mobov/es-helper'
/**
 * 对象合并对象
 * @param source
 * @param target
 */
export function setObjectData (source: any, target: any) {
  if (source instanceof Object && target instanceof Object) {
    const fields = Object.keys(target)
    fields.forEach(field => {
      if (source.hasOwnProperty(field)) {
        source[field] = target[field]
      } else {
        Vue.set(source, field, target[field])
      }
    })
  }
}
/**
 * 组合并对象(仅限非集合属性)
 * @param source
 * @param target
 * @param key
 */
export function setArrayData ({source, target, key} = {} as any) {
  if (source instanceof Array && target instanceof Object) {
    const targetItem = source.find(_ => _[key] === target[key])

    if (targetItem) {
      target = deepCopy(target)
      Object.keys(target).forEach(field => {
        if (field !== key) {
          // 合并数据
          if (targetItem.hasOwnProperty(field)) {
            targetItem[field] = target[field]
          } else {
            Vue.set(targetItem, field, target[field])
          }
        }
      })
    } else {
      source.unshift(target)
    }
  }
}

/**
 * 组合并组
 * @param source
 * @param target
 * @param key
 */
export function setArrayGroup ({source, target, key} = {} as any) {
  if (source instanceof Array && target instanceof Array) {
    target.forEach(item => {
      const sourceItem = source.find(_ => _[key] === item[key])
      if (sourceItem) {
        // 合并数据
        // Vue.set(source, itemIndex, cloneDeep(item))
        Object.keys(item).forEach(field => {
          if (field !== key) {
            // 合并数据
            if (sourceItem.hasOwnProperty(field)) {
              sourceItem[field] = item[field]
            } else {
              Vue.set(sourceItem, field, item[field])
            }
          }
        })
      } else {
        source.unshift(item)
      }
    })
  }
}
