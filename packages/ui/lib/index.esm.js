import HView from '@/src/components/view.vue';
import HContainer from '@/src/components/container.vue';
import HBox from '@/src/components/box.vue';

var index = {
  installed: false,
  install: function install(Vue) {
    Vue.component('HView', HView);
    Vue.component('HContainer', HContainer);
    Vue.component('HBox', HBox);
  }
};

export default index;
