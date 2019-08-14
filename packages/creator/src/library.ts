import store from '@/store'
import Library from '@/typings/library'

export function register (data: Library.Plugin) {
  store.dispatch('library/register', data)
}
