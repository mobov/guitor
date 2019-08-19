import Vue from 'vue'
import ElementUI from 'element-ui'
import BaseUI from '@guitor/base-ui'
import Mobov, { MApp, MAppBar, MAvatar, MButton, MCheckbox,
       MChip, MFrame, MIcon, MRadio, MView, MFlex, MFlexFiller, MList, MListItem, MTableCol, MTable, MRow, MCol } from '@mobov/vui'
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
// @ts-ignore
import dvr from '@mobov/vui/lib/icons/dvr'
// @ts-ignore
import tv from '@mobov/vui/lib/icons/tv'
// @ts-ignore
import screen_share from '@mobov/vui/lib/icons/screen_share'


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
    MChip,
    MTableCol,
    MTable,
    MRow,
    MCol
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
    phone_android,
    dvr,
    tv,
    screen_share
  }
})
