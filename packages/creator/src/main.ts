import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './style/style.scss'
import Mobov, {
  MApp, MFrame, MView, MIcon, MButton, MFlexFiller, MFlex, MList, MListItem, MChip,
  MCheckbox, MRadio, MAppBar, MRow, MCol, MAvatar
} from '@mobov/vui'
// @ts-ignore
import add from '@mobov/vui/lib/icons/add'
// @ts-ignore
import close from '@mobov/vui/lib/icons/close'
// @ts-ignore
import settings from '@mobov/vui/lib/icons/settings'
// @ts-ignore
import tv from '@mobov/vui/lib/icons/tv'
// @ts-ignore
import list_alt from '@mobov/vui/lib/icons/list_alt'
// @ts-ignore
import now_widgets from '@mobov/vui/lib/icons/now_widgets'
// @ts-ignore
import dvr from '@mobov/vui/lib/icons/dvr'
// @ts-ignore
import home_filled from '@mobov/vui/lib/icons/home_filled'
// @ts-ignore
import format_list_bulleted from '@mobov/vui/lib/icons/format_list_bulleted'
// @ts-ignore
import filter_none from '@mobov/vui/lib/icons/filter_none'
// @ts-ignore
import zoom_out_map from '@mobov/vui/lib/icons/zoom_out_map'
// @ts-ignore
import access_time from '@mobov/vui/lib/icons/access_time'
// @ts-ignore
import pause from '@mobov/vui/lib/icons/pause'
// @ts-ignore
import play_arrow from '@mobov/vui/lib/icons/play_arrow'
// @ts-ignore
import arrow_back from '@mobov/vui/lib/icons/arrow_back'
// @ts-ignore
import arrow_forward from '@mobov/vui/lib/icons/arrow_forward'
// @ts-ignore
import home from '@mobov/vui/lib/icons/home'
// @ts-ignore
import star_outline from '@mobov/vui/lib/icons/star_outline'
// @ts-ignore
import star from '@mobov/vui/lib/icons/star'
// @ts-ignore
import refresh from '@mobov/vui/lib/icons/refresh'
// @ts-ignore
import minimize from '@mobov/vui/lib/icons/minimize'
// @ts-ignore
import remove from '@mobov/vui/lib/icons/remove'
// @ts-ignore
import search from '@mobov/vui/lib/icons/search'
// @ts-ignore
import file_download from '@mobov/vui/lib/icons/file_download'
// @ts-ignore
import folder_open from '@mobov/vui/lib/icons/folder_open'
// @ts-ignore
import icon_public from '@mobov/vui/lib/icons/public'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// // @ts-ignore
// import theme from 'muse-ui/lib/theme'
//
// Vue.use(MuseUI)
// theme.add('custom', {
//   primary: '#512da8',
//   secondary: '#ff1744',
//   success: '##4caf50',
//   warning: '##ff6d0',
// }, 'light');
// theme.use('custom')

Vue.use(ElementUI)
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
    MChip
  },
  icons: {
    minimize,
    remove,
    add,
    close,
    pause,
    folder_open,
    play_arrow,
    settings,
    tv,
    list_alt,
    now_widgets,
    dvr,
    home_filled,
    format_list_bulleted,
    filter_none,
    zoom_out_map,
    access_time,
    arrow_back,
    arrow_forward,
    home,
    star,
    star_outline,
    refresh,
    search,
    file_download,
    icon_public
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
