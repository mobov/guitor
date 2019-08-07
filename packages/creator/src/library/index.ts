import store from '@/store'
import Library from '@/typings/library'

export function register (data: Library.Options) {
  store.commit('library/SET_DATA', data)
}
