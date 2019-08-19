// import formItemLangCheckbox from './templates/form-item-lang-checkbox'
import layout2cols from './templates/layout-2-cols'
import layout3cols from './templates/layout-3-cols'
import table from './templates/table'
import LangCheckbox from './templates/lang-checkbox'
import frameLeftMain from './templates/frame-left-main'
import formCommon from './templates/form-common'

export default {
  name: 'onemt-templates',
  dependencies: ['onev-ui'],
  label: 'onemt模板',
  templates: [
    layout2cols,
    layout3cols,
    table,
    LangCheckbox,
    frameLeftMain,
    formCommon
  ]
}
