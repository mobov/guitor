/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import BaseUI from './base-ui'
import ElementUI from 'element-ui'
import './style/style.scss'
// import './components/comp-suit/style.scss'
import Mobov, {
  MApp, MFrame, MView, MIcon, MButton, MFlexFiller, MFlex, MList, MListItem, MChip,
  MCheckbox, MRadio, MAppBar, MRow, MCol, MAvatar, MTable, MTableCol
} from '@mobov/vui'
import LibraryBaseUi from './base-ui/library'
import LibraryElementUi from '@mobov/gui-creator-library-element-ui'
import * as Library from '@/library'
import '@/directives/drag-ani'
// @ts-ignore
import arrow_downward from '@mobov/vui/lib/icons/arrow_downward'
// @ts-ignore
import arrow_upward from '@mobov/vui/lib/icons/arrow_upward'
// @ts-ignore
import unfold_more from '@mobov/vui/lib/icons/unfold_more'
// @ts-ignore
import unfold_less from '@mobov/vui/lib/icons/unfold_less'
// @ts-ignore
import icon_delete from '@mobov/vui/lib/icons/delete'
// @ts-ignore
import delete_outline from '@mobov/vui/lib/icons/delete_outline'
// @ts-ignore
import lock_open from '@mobov/vui/lib/icons/lock_open'
// @ts-ignore
import lock_outline from '@mobov/vui/lib/icons/lock_outline'
// @ts-ignore
import folder_shared from '@mobov/vui/lib/icons/folder_shared'
// @ts-ignore
import laptop_chromebook from '@mobov/vui/lib/icons/laptop_chromebook'
// @ts-ignore
import phone_android from '@mobov/vui/lib/icons/phone_android'


Library.register(LibraryBaseUi as any)
Library.register(LibraryElementUi as any)
Vue.use(ElementUI)
Vue.use(BaseUI)
Vue.use(Mobov, {
  components: {
    MApp,
    MAvatar,
    MFrame,
    MAppBar,
    MIcon,
    MButton,
    MFlexFiller,
    MFlex,
    MList,
    MListItem,
    MView,
    MCheckbox,
    MRadio,
    MRow,
    MCol,
    MChip,
    MTable,
    MTableCol
  },
  icons: {
    arrow_downward,
    arrow_upward,
    unfold_more,
    unfold_less,
    icon_delete,
    delete_outline,
    lock_open,
    lock_outline,
    folder_shared,
    laptop_chromebook,
    phone_android
  }
})

Vue.config.productionTip = false
// 事件总线
Vue.prototype.eventBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
