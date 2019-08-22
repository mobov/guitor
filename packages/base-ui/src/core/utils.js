/* eslint-disable */
const Color = ['default', 'primary', 'success', 'info', 'warning', 'danger']
const Size = ['xs', 'sm', 'md', 'lg', 'xl']
const Shape = ['circle', 'round', 'corner', 'square']
const Variety = ['default', 'flat', 'outline']

/**
 * 获取尺寸值
 * @param val
 */
export function getSpaceVal (val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      val = `${val}px`
    }
  }
  return val
}

/**
 * 获取尺寸值
 * @param val
 */
export function getUnitVal (val) {
	if (val !== undefined) {
		if (typeof val === 'number') {
			val = `${val}px`
		}
	}
	return val
}

/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */
export function genSize (styles = {}, compName, val) {
	if (val !== undefined) {
		if (Size.includes(val)) {
			styles[`--${compName}-size`] = `var(--${compName}-size-${val})`
		} else {
			val = getUnitVal(val)
			styles[`--${compName}-size`] = val
		}
	}
}
