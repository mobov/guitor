import store from '@/store'
import Template from '@/typings/template'

export function register (data: Template.Plugin) {
  store.dispatch('template/register', data)
}
