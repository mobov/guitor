import store from '@/store'
import Library from '@/typings/library'
import langCheckbox from './templates/lang-checkbox'
import formItemLangCheckbox from './templates/form-item-lang-checkbox'

export function register (data: Library.Options) {
  store.dispatch('library/registerLibrary', data)
}

export function registerTemplate (data: Library.Template) {
  store.dispatch('library/registerTemplate', data)
}

registerTemplate(langCheckbox)
registerTemplate(formItemLangCheckbox)
