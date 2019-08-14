'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var HView = _interopDefault(require('@/src/components/view.vue'));
var HContainer = _interopDefault(require('@/src/components/container.vue'));
var HBox = _interopDefault(require('@/src/components/box.vue'));

var index = {
  installed: false,
  install: function install(Vue) {
    Vue.component('HView', HView);
    Vue.component('HContainer', HContainer);
    Vue.component('HBox', HBox);
  }
};

exports.default = index;
