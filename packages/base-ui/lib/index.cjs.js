'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'HView',
  props: {
    direction: {
      type: String,
      default: 'y' // x / y / xy

    },
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: Number,
      default: 5
    }
  },
  computed: {
    styles: function styles() {
      return {
        flex: this.flex
      };
    },
    mainStyles: function mainStyles() {
      return {
        padding: "".concat(this.space, "px")
      };
    },
    classes: function classes() {
      return _defineProperty({}, "--direction-".concat(this.direction), true);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "h-view",
    class: _vm.classes,
    style: _vm.styles
  }, [_c("section", {
    ref: "main",
    staticClass: "h-view-main",
    style: _vm.mainStyles
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5ee59adf_0", {
    source: "@charset \"UTF-8\";\n/**\n * 滚动容器\n */\n/**\n\t * 隐藏滚动条\n\t */\n/**\n\t * slim bar样式滚动条\n\t */\n.h-view {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  position: relative;\n}\n.h-view .h-view-main {\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n.h-view .h-view-main::-webkit-scrollbar-thumb {\n      background-color: #a6a6a6;\n}\n.h-view .h-view-main::-webkit-scrollbar-track {\n      background-color: #e5e5e5;\n}\n.h-view .h-view-main::-webkit-scrollbar {\n      width: 7px;\n}\n.h-view .h-view-main::-webkit-scrollbar-thumb {\n      border-left: 2px solid transparent;\n}\n.h-view .h-view-mainl::-webkit-scrollbar-track {\n      border-left: 2px solid transparent;\n}\n.h-view.--direction-x {\n    flex-direction: row;\n}\n.h-view.--direction-y {\n    flex-direction: column;\n}\n\n/*# sourceMappingURL=view.vue.map */",
    map: {
      "version": 3,
      "sources": ["view.vue", "D:\\Projects\\mobov\\gui-creator\\packages\\base-ui\\src\\components\\view.vue"],
      "names": [],
      "mappings": "AAAA,gBAAgB;ACChB;;EDEE;ACYF;;GDTG;ACmBH;;GDhBG;ACmEH;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;AAAA;AANA;IAQA,YAAA;IACA,WAAA;IACA,cAAA;AAAA;AApDA;MACA,yBAJA;AAAA;AAMA;MACA,yBANA;AAAA;AASA;MACA,UAZA;AAAA;AAcA;MACA,kCAAA;AAAA;AAEA;MACA,kCAAA;AAAA;AA4BA;IAcA,mBAAA;AAAA;AAdA;IAiBA,sBAAA;AAAA;;ADzDA,mCAAmC",
      "file": "view.vue",
      "sourcesContent": ["@charset \"UTF-8\";\n/**\n * 滚动容器\n */\n/**\n\t * 隐藏滚动条\n\t */\n/**\n\t * slim bar样式滚动条\n\t */\n.h-view {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  position: relative; }\n  .h-view .h-view-main {\n    height: 100%;\n    width: 100%;\n    overflow: auto; }\n    .h-view .h-view-main::-webkit-scrollbar-thumb {\n      background-color: #a6a6a6; }\n    .h-view .h-view-main::-webkit-scrollbar-track {\n      background-color: #e5e5e5; }\n    .h-view .h-view-main::-webkit-scrollbar {\n      width: 7px; }\n    .h-view .h-view-main::-webkit-scrollbar-thumb {\n      border-left: 2px solid transparent; }\n    .h-view .h-view-mainl::-webkit-scrollbar-track {\n      border-left: 2px solid transparent; }\n  .h-view.--direction-x {\n    flex-direction: row; }\n  .h-view.--direction-y {\n    flex-direction: column; }\n\n/*# sourceMappingURL=view.vue.map */", "<style lang=\"scss\">\r\n  /**\r\n * 滚动容器\r\n */\r\n  @mixin scroller($dir:y){\r\n    @if($dir == y){\r\n      overflow: auto;\r\n      overflow-x: hidden;\r\n    } @else {\r\n      overflow-x: auto;\r\n      overflow-y: hidden;\r\n    }\r\n    -webkit-overflow-scrolling: touch;\r\n    transform: translateZ(0);\r\n  }\r\n  /**\r\n\t * 隐藏滚动条\r\n\t */\r\n  @mixin no-scroll-bar(){\r\n    &::-webkit-scrollbar {\r\n      width: 0;\r\n      height: 0;\r\n    }\r\n  }\r\n\r\n  /**\r\n\t * slim bar样式滚动条\r\n\t */\r\n  @mixin slim-scroll-bar(\r\n    $direction : y,\r\n\t\t$size: 7px,\r\n\t\t$bgColor:#a6a6a6,\r\n\t\t$color:#e5e5e5\r\n  ){\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: $bgColor;\r\n    }\r\n    &::-webkit-scrollbar-track {\r\n      background-color: $color;\r\n    }\r\n    @if ($direction == y) {\r\n      &::-webkit-scrollbar {\r\n        width: $size;\r\n      }\r\n      &::-webkit-scrollbar-thumb {\r\n        border-left: 2px solid transparent;\r\n      }\r\n      &l::-webkit-scrollbar-track {\r\n        border-left: 2px solid transparent;\r\n      }\r\n    }  @else if ($direction == x) {\r\n      &::-webkit-scrollbar {\r\n        height: $size;\r\n      }\r\n      &::-webkit-scrollbar-thumb {\r\n        border-top: 2px solid transparent;\r\n      }\r\n      &::-webkit-scrollbar-track {\r\n        border-top: 2px solid transparent;\r\n      }\r\n    } @else {\r\n      &::-webkit-scrollbar {\r\n        width: $size;\r\n        height: $size;\r\n      }\r\n      &::-webkit-scrollbar-thumb {\r\n        border-left: 2px solid transparent;\r\n        border-top: 2px solid transparent;\r\n      }\r\n      &l::-webkit-scrollbar-track {\r\n        border-left: 2px solid transparent;\r\n        border-top: 2px solid transparent;\r\n      }\r\n    }\r\n  }\r\n\r\n  .h-view {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: relative;\r\n    .h-view-main {\r\n      height: 100%;\r\n      width: 100%;\r\n      overflow: auto;\r\n      @include slim-scroll-bar();\r\n    }\r\n    &.--direction-x {\r\n      flex-direction: row;\r\n    }\r\n    &.--direction-y {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-view\" :class=\"classes\" :style=\"styles\">\r\n    <section ref=\"main\" class=\"h-view-main\" :style=\"mainStyles\">\r\n      <slot></slot>\r\n    </section>\r\n  </div>\r\n</template>\r\n<script>\r\n\r\nexport default {\r\n  name: 'HView',\r\n  props: {\r\n    direction: {\r\n      type: String,\r\n      default: 'y' // x / y / xy\r\n    },\r\n    flex: {\r\n      type: Number,\r\n      default: 1\r\n    },\r\n    space: {\r\n      type: Number,\r\n      default: 5\r\n    }\r\n  },\r\n  computed: {\r\n    styles () {\r\n      return {\r\n        flex: this.flex\r\n      }\r\n    },\r\n    mainStyles () {\r\n      return {\r\n        padding: `${this.space}px`\r\n      }\r\n    },\r\n    classes () {\r\n      return {\r\n        [`--direction-${this.direction}`]: true\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var HView = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'HContainer',
  props: {
    direction: {
      type: String,
      default: 'y' // x / y

    },
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: Number,
      default: 5
    },
    wrap: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center' // start / center / end / stretch

    },
    justify: {
      type: String,
      default: 'center' // start / center / end / between / around

    }
  },
  computed: {
    styles: function styles() {
      return {
        flex: this.flex,
        padding: "".concat(this.space, "px")
      };
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "--wrap", this.wrap), _defineProperty(_ref, "--direction-".concat(this.direction), true), _defineProperty(_ref, "--align-".concat(this.align), true), _defineProperty(_ref, "--justify-".concat(this.justify), true), _ref;
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "h-container",
    class: _vm.classes,
    style: _vm.styles
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-748625f4_0", {
    source: ".h-container {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  flex-wrap: nowrap;\n}\n.h-container.--wrap {\n    flex-wrap: wrap;\n}\n.h-container.--direction-x {\n    flex-direction: row;\n    height: auto;\n}\n.h-container.--direction-y {\n    flex-direction: column;\n    height: 100%;\n}\n.h-container.--justify-start {\n    justify-content: flex-start;\n}\n.h-container.--justify-center {\n    justify-content: center;\n}\n.h-container.--justify-end {\n    justify-content: flex-end;\n}\n.h-container.--justify-around {\n    justify-content: space-around;\n}\n.h-container.--justify-between {\n    justify-content: space-between;\n}\n.h-container.--align-start {\n    align-items: flex-start;\n}\n.h-container.--align-center {\n    align-items: center;\n}\n.h-container.--align-end {\n    align-items: flex-end;\n}\n.h-container.--align-stretch {\n    align-items: stretch;\n}\n\n/*# sourceMappingURL=container.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Projects\\mobov\\gui-creator\\packages\\base-ui\\src\\components\\container.vue", "container.vue"],
      "names": [],
      "mappings": "AACA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,iBAAA;AAAA;AAPA;IASA,eAAA;AAAA;AATA;IAYA,mBAAA;IACA,YAAA;AAAA;AAbA;IAgBA,sBAAA;IACA,YAAA;AAAA;AAjBA;IAoBA,2BAAA;AAAA;AApBA;IAuBA,uBAAA;AAAA;AAvBA;IA0BA,yBAAA;AAAA;AA1BA;IA6BA,6BAAA;AAAA;AA7BA;IAgCA,8BAAA;AAAA;AAhCA;IAmCA,uBAAA;AAAA;AAnCA;IAsCA,mBAAA;AAAA;AAtCA;IAyCA,qBAAA;AAAA;AAzCA;IA4CA,oBAAA;AAAA;;ACVA,wCAAwC",
      "file": "container.vue",
      "sourcesContent": ["<style lang=\"scss\">\r\n  .h-container {\r\n    display: flex;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    /*width: 100%;*/\r\n    /*height: 100%;*/\r\n    width: 100%;\r\n    flex-wrap: nowrap;\r\n    &.--wrap {\r\n      flex-wrap: wrap;\r\n    }\r\n    &.--direction-x {\r\n      flex-direction: row;\r\n      height: auto;\r\n    }\r\n    &.--direction-y {\r\n      flex-direction: column;\r\n      height: 100%;\r\n    }\r\n    &.--justify-start {\r\n      justify-content: flex-start;\r\n    }\r\n    &.--justify-center  {\r\n      justify-content: center;\r\n    }\r\n    &.--justify-end  {\r\n      justify-content: flex-end;\r\n    }\r\n    &.--justify-around  {\r\n      justify-content: space-around;\r\n    }\r\n    &.--justify-between  {\r\n      justify-content: space-between;\r\n    }\r\n    &.--align-start {\r\n      align-items: flex-start;\r\n    }\r\n    &.--align-center  {\r\n      align-items: center;\r\n    }\r\n    &.--align-end  {\r\n      align-items: flex-end;\r\n    }\r\n    &.--align-stretch  {\r\n      align-items: stretch;\r\n    }\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-container\" :class=\"classes\" :style=\"styles\">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n<script>\r\n\r\nexport default {\r\n  name: 'HContainer',\r\n  props: {\r\n    direction: {\r\n      type: String,\r\n      default: 'y' // x / y\r\n    },\r\n    flex: {\r\n      type: Number,\r\n      default: 1\r\n    },\r\n    space: {\r\n      type: Number,\r\n      default: 5\r\n    },\r\n    wrap: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    align: {\r\n      type: String,\r\n      default: 'center' // start / center / end / stretch\r\n    },\r\n    justify: {\r\n      type: String,\r\n      default: 'center' // start / center / end / between / around\r\n    }\r\n  },\r\n  computed: {\r\n    styles () {\r\n      return {\r\n        flex: this.flex,\r\n        padding: `${this.space}px`\r\n      }\r\n    },\r\n    classes () {\r\n      return {\r\n        [`--wrap`]: this.wrap,\r\n        [`--direction-${this.direction}`]: true,\r\n        [`--align-${this.align}`]: true,\r\n        [`--justify-${this.justify}`]: true\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n", ".h-container {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  flex-wrap: nowrap; }\n  .h-container.--wrap {\n    flex-wrap: wrap; }\n  .h-container.--direction-x {\n    flex-direction: row;\n    height: auto; }\n  .h-container.--direction-y {\n    flex-direction: column;\n    height: 100%; }\n  .h-container.--justify-start {\n    justify-content: flex-start; }\n  .h-container.--justify-center {\n    justify-content: center; }\n  .h-container.--justify-end {\n    justify-content: flex-end; }\n  .h-container.--justify-around {\n    justify-content: space-around; }\n  .h-container.--justify-between {\n    justify-content: space-between; }\n  .h-container.--align-start {\n    align-items: flex-start; }\n  .h-container.--align-center {\n    align-items: center; }\n  .h-container.--align-end {\n    align-items: flex-end; }\n  .h-container.--align-stretch {\n    align-items: stretch; }\n\n/*# sourceMappingURL=container.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject SSR */

var HContainer = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: 'HBox',
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: Number,
      default: 5
    },
    spaceY: {
      type: Number,
      default: 5
    },
    spaceX: {
      type: Number,
      default: 5
    },
    spaceT: {
      type: Number,
      default: 5
    },
    spaceB: {
      type: Number,
      default: 5
    },
    spaceL: {
      type: Number,
      default: 5
    },
    spaceR: {
      type: Number,
      default: 5
    }
  },
  computed: {
    styles: function styles() {
      return {
        flex: this.flex,
        width: this.width,
        padding: "".concat(this.space, "px")
      };
    },
    classes: function classes() {
      return {};
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "h-box",
    class: _vm.classes,
    style: _vm.styles
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-df47d218_0", {
    source: ".h-box {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n}\n\n/*# sourceMappingURL=box.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Projects\\mobov\\gui-creator\\packages\\base-ui\\src\\components\\box.vue", "box.vue"],
      "names": [],
      "mappings": "AACA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;AAAA;;ACCA,kCAAkC",
      "file": "box.vue",
      "sourcesContent": ["<style lang=\"scss\">\r\n  .h-box {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-box\" :class=\"classes\" :style=\"styles\">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n<script>\r\n  export default {\r\n    name: 'HBox',\r\n    props: {\r\n      width: {\r\n        type: String,\r\n        default: 'auto'\r\n      },\r\n      flex: {\r\n        type: Number,\r\n        default: 1\r\n      },\r\n      space: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceY: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceX: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceT: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceB: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceL: {\r\n        type: Number,\r\n        default: 5\r\n      },\r\n      spaceR: {\r\n        type: Number,\r\n        default: 5\r\n      }\r\n    },\r\n    computed: {\r\n      styles () {\r\n        return {\r\n          flex: this.flex,\r\n          width: this.width,\r\n          padding: `${this.space}px`\r\n        }\r\n      },\r\n      classes () {\r\n        return {\r\n\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n", ".h-box {\n  position: relative;\n  box-sizing: border-box;\n  height: auto; }\n\n/*# sourceMappingURL=box.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject SSR */

var HBox = normalizeComponent_1({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, browser, undefined);

var index = {
  installed: false,
  install: function install(Vue) {
    Vue.component('HView', HView);
    Vue.component('HContainer', HContainer);
    Vue.component('HBox', HBox);
  }
};

exports.default = index;
