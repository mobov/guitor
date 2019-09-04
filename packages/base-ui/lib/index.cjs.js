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

/* eslint-disable */
var Size = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * 获取尺寸值
 * @param val
 */

function getSpaceVal(val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      val = "".concat(val, "px");
    }
  }

  return val;
}
/**
 * 获取尺寸值
 * @param val
 */

function getUnitVal(val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      val = "".concat(val, "px");
    }
  }

  return val;
}
/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */

function genSize() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (Size.includes(val)) {
      styles["--".concat(compName, "-size")] = "var(--".concat(compName, "-size-").concat(val, ")");
    } else {
      val = getUnitVal(val);
      styles["--".concat(compName, "-size")] = val;
    }
  }
}

var script = {
  name: 'HView',
  props: {
    // direction: {
    //   type: String,
    //   default: 'y' // x / y / xy
    // },
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: [String, Number],
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
        padding: getSpaceVal(this.space)
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
  inject("data-v-3b607739_0", {
    source: "@charset \"UTF-8\";\n/**\n* 滚动容器\n*/\n/**\n   * 隐藏滚动条\n   */\n/**\n   * slim bar样式滚动条\n   */\n.h-view {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  flex-direction: column;\n  /*flex-basis: auto;*/\n}\n.h-view .h-view-main {\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    /*align-items: stretch;*/\n}\n.h-view .h-view-main::-webkit-scrollbar-thumb {\n      background-color: #a6a6a6;\n}\n.h-view .h-view-main::-webkit-scrollbar-track {\n      background-color: #e5e5e5;\n}\n.h-view .h-view-main::-webkit-scrollbar {\n      width: 7px;\n}\n.h-view .h-view-main::-webkit-scrollbar-thumb {\n      border-left: 2px solid transparent;\n}\n.h-view .h-view-mainl::-webkit-scrollbar-track {\n      border-left: 2px solid transparent;\n}\n.h-view.--direction-x {\n    flex-direction: row;\n}\n.h-view.--direction-y {\n    flex-direction: column;\n}\n\n/*# sourceMappingURL=view.vue.map */",
    map: {
      "version": 3,
      "sources": ["view.vue", "D:\\Projects\\mobov\\guitor\\packages\\base-ui\\src\\components\\view.vue"],
      "names": [],
      "mappings": "AAAA,gBAAgB;AAChB;;CAEC;ACWD;;IDRI;ACkBJ;;IDfI;ACPJ;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;AAAA;AARA;IAUA,YAAA;IACA,WAAA;IACA,cAAA;IAEA,iBAAA;IACA,0BAAA;IACA,wBAAA;AAAA;AAhBA;MDyBM,yBAAyB;AAAE;ACzBjC;MD2BM,yBAAyB;AAAE;AC3BjC;MD6BM,UAAU;AAAE;AC7BlB;MD+BM,kCAAkC;AAAE;AC/B1C;MDiCM,kCAAkC;AAAE;ACjC1C;IAmBA,mBAAA;AAAA;AAnBA;IAsBA,sBAAA;AAAA;;ADiBA,mCAAmC",
      "file": "view.vue",
      "sourcesContent": ["@charset \"UTF-8\";\n/**\n* 滚动容器\n*/\n/**\n   * 隐藏滚动条\n   */\n/**\n   * slim bar样式滚动条\n   */\n.h-view {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  flex-direction: column;\n  /*flex-basis: auto;*/ }\n  .h-view .h-view-main {\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    /*align-items: stretch;*/ }\n    .h-view .h-view-main::-webkit-scrollbar-thumb {\n      background-color: #a6a6a6; }\n    .h-view .h-view-main::-webkit-scrollbar-track {\n      background-color: #e5e5e5; }\n    .h-view .h-view-main::-webkit-scrollbar {\n      width: 7px; }\n    .h-view .h-view-main::-webkit-scrollbar-thumb {\n      border-left: 2px solid transparent; }\n    .h-view .h-view-mainl::-webkit-scrollbar-track {\n      border-left: 2px solid transparent; }\n  .h-view.--direction-x {\n    flex-direction: row; }\n  .h-view.--direction-y {\n    flex-direction: column; }\n\n/*# sourceMappingURL=view.vue.map */", "<style lang=\"scss\">\r\n  @import \"../core/style/mixin\";\r\n  .h-view {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: relative;\r\n    flex-direction: column;\r\n    /*flex-basis: auto;*/\r\n    .h-view-main {\r\n      height: 100%;\r\n      width: 100%;\r\n      overflow: auto;\r\n      @include slim-scroll-bar();\r\n      /*display: flex;*/\r\n      /*flex-direction: column;*/\r\n      /*align-items: stretch;*/\r\n    }\r\n    &.--direction-x {\r\n      flex-direction: row;\r\n    }\r\n    &.--direction-y {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-view\" :class=\"classes\" :style=\"styles\">\r\n    <section ref=\"main\" class=\"h-view-main\" :style=\"mainStyles\">\r\n      <slot></slot>\r\n    </section>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { getSpaceVal } from '../core/utils'\r\nexport default {\r\n  name: 'HView',\r\n  props: {\r\n    // direction: {\r\n    //   type: String,\r\n    //   default: 'y' // x / y / xy\r\n    // },\r\n    flex: {\r\n      type: Number,\r\n      default: 1\r\n    },\r\n    space: {\r\n      type: [String, Number],\r\n      default: 5\r\n    }\r\n  },\r\n  computed: {\r\n    styles () {\r\n      return {\r\n        flex: this.flex\r\n      }\r\n    },\r\n    mainStyles () {\r\n      return {\r\n        padding: getSpaceVal(this.space)\r\n      }\r\n    },\r\n    classes () {\r\n      return {\r\n        [`--direction-${this.direction}`]: true\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n"]
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

var script$1 = {
  name: 'HContainerY',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: [String, Number],
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
        // flexGrow: this.flex,
        // flexShrink: this.flex,
        flex: this.flex,
        padding: getSpaceVal(this.space)
      };
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "--align-".concat(this.align), true), _defineProperty(_ref, "--justify-".concat(this.justify), true), _ref;
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
    staticClass: "h-container-y",
    class: _vm.classes,
    style: _vm.styles
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0caf51a6_0", {
    source: ".h-container-y {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*flex-basis: auto;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  height: auto;\n  flex-wrap: nowrap;\n  flex-direction: column;\n}\n.h-container-y.--justify-start {\n    justify-content: flex-start;\n}\n.h-container-y.--justify-center {\n    justify-content: center;\n}\n.h-container-y.--justify-end {\n    justify-content: flex-end;\n}\n.h-container-y.--justify-around {\n    justify-content: space-around;\n}\n.h-container-y.--justify-between {\n    justify-content: space-between;\n}\n.h-container-y.--align-start {\n    align-items: flex-start;\n}\n.h-container-y.--align-center {\n    align-items: center;\n}\n.h-container-y.--align-end {\n    align-items: flex-end;\n}\n.h-container-y.--align-stretch {\n    align-items: stretch;\n}\n\n/*# sourceMappingURL=container-y.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Projects\\mobov\\guitor\\packages\\base-ui\\src\\components\\container-y.vue", "container-y.vue"],
      "names": [],
      "mappings": "AACA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;AAAA;AAVA;IAYA,2BAAA;AAAA;AAZA;IAeA,uBAAA;AAAA;AAfA;IAkBA,yBAAA;AAAA;AAlBA;IAqBA,6BAAA;AAAA;AArBA;IAwBA,8BAAA;AAAA;AAxBA;IA2BA,uBAAA;AAAA;AA3BA;IA8BA,mBAAA;AAAA;AA9BA;IAiCA,qBAAA;AAAA;AAjCA;IAoCA,oBAAA;AAAA;;ACPA,0CAA0C",
      "file": "container-y.vue",
      "sourcesContent": ["<style lang=\"scss\">\r\n  .h-container-y {\r\n    display: flex;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    /*flex-basis: auto;*/\r\n    /*width: 100%;*/\r\n    /*height: 100%;*/\r\n    width: 100%;\r\n    height: auto;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    &.--justify-start {\r\n      justify-content: flex-start;\r\n    }\r\n    &.--justify-center  {\r\n      justify-content: center;\r\n    }\r\n    &.--justify-end  {\r\n      justify-content: flex-end;\r\n    }\r\n    &.--justify-around  {\r\n      justify-content: space-around;\r\n    }\r\n    &.--justify-between  {\r\n      justify-content: space-between;\r\n    }\r\n    &.--align-start {\r\n      align-items: flex-start;\r\n    }\r\n    &.--align-center  {\r\n      align-items: center;\r\n    }\r\n    &.--align-end  {\r\n      align-items: flex-end;\r\n    }\r\n    &.--align-stretch  {\r\n      align-items: stretch;\r\n    }\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-container-y\" :class=\"classes\" :style=\"styles\">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { getSpaceVal } from '../core/utils'\r\n\r\nexport default {\r\n  name: 'HContainerY',\r\n  props: {\r\n    flex: {\r\n      type: Number,\r\n      default: 1\r\n    },\r\n    space: {\r\n      type: [String, Number],\r\n      default: 5\r\n    },\r\n    wrap: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    align: {\r\n      type: String,\r\n      default: 'center' // start / center / end / stretch\r\n    },\r\n    justify: {\r\n      type: String,\r\n      default: 'center' // start / center / end / between / around\r\n    }\r\n  },\r\n  computed: {\r\n    styles () {\r\n      return {\r\n        // flexGrow: this.flex,\r\n        // flexShrink: this.flex,\r\n        flex: this.flex,\r\n        padding: getSpaceVal(this.space)\r\n      }\r\n    },\r\n    classes () {\r\n      return {\r\n        [`--align-${this.align}`]: true,\r\n        [`--justify-${this.justify}`]: true\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n", ".h-container-y {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*flex-basis: auto;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  height: auto;\n  flex-wrap: nowrap;\n  flex-direction: column; }\n  .h-container-y.--justify-start {\n    justify-content: flex-start; }\n  .h-container-y.--justify-center {\n    justify-content: center; }\n  .h-container-y.--justify-end {\n    justify-content: flex-end; }\n  .h-container-y.--justify-around {\n    justify-content: space-around; }\n  .h-container-y.--justify-between {\n    justify-content: space-between; }\n  .h-container-y.--align-start {\n    align-items: flex-start; }\n  .h-container-y.--align-center {\n    align-items: center; }\n  .h-container-y.--align-end {\n    align-items: flex-end; }\n  .h-container-y.--align-stretch {\n    align-items: stretch; }\n\n/*# sourceMappingURL=container-y.vue.map */"]
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

var HContainerY = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

var script$2 = {
  name: 'HContainerX',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: [String, Number],
      default: 5
    },
    wrap: {
      type: Boolean,
      default: true
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
        // flexGrow: this.flex,
        // flexShrink: this.flex,
        flex: this.flex,
        padding: getSpaceVal(this.space)
      };
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "--wrap", this.wrap), _defineProperty(_ref, "--align-".concat(this.align), true), _defineProperty(_ref, "--justify-".concat(this.justify), true), _ref;
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
    staticClass: "h-container-x",
    class: _vm.classes,
    style: _vm.styles
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-778d711c_0", {
    source: ".h-container-x {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*flex-basis: auto  ;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  height: auto;\n  flex-wrap: nowrap;\n  flex-direction: row;\n}\n.h-container-x.--wrap {\n    flex-wrap: wrap;\n}\n.h-container-x.--justify-start {\n    justify-content: flex-start;\n}\n.h-container-x.--justify-center {\n    justify-content: center;\n}\n.h-container-x.--justify-end {\n    justify-content: flex-end;\n}\n.h-container-x.--justify-around {\n    justify-content: space-around;\n}\n.h-container-x.--justify-between {\n    justify-content: space-between;\n}\n.h-container-x.--align-start {\n    align-items: flex-start;\n}\n.h-container-x.--align-center {\n    align-items: center;\n}\n.h-container-x.--align-end {\n    align-items: flex-end;\n}\n.h-container-x.--align-stretch {\n    align-items: stretch;\n}\n\n/*# sourceMappingURL=container-x.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Projects\\mobov\\guitor\\packages\\base-ui\\src\\components\\container-x.vue", "container-x.vue"],
      "names": [],
      "mappings": "AACA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EAIA,mBAAA;AAAA;AAbA;IAWA,eAAA;AAAA;AAXA;IAeA,2BAAA;AAAA;AAfA;IAkBA,uBAAA;AAAA;AAlBA;IAqBA,yBAAA;AAAA;AArBA;IAwBA,6BAAA;AAAA;AAxBA;IA2BA,8BAAA;AAAA;AA3BA;IA8BA,uBAAA;AAAA;AA9BA;IAiCA,mBAAA;AAAA;AAjCA;IAoCA,qBAAA;AAAA;AApCA;IAuCA,oBAAA;AAAA;;ACRA,0CAA0C",
      "file": "container-x.vue",
      "sourcesContent": ["<style lang=\"scss\">\r\n  .h-container-x {\r\n    display: flex;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    /*flex-basis: auto  ;*/\r\n    /*width: 100%;*/\r\n    /*height: 100%;*/\r\n    width: 100%;\r\n    height: auto;\r\n    flex-wrap: nowrap;\r\n    &.--wrap {\r\n      flex-wrap: wrap;\r\n    }\r\n    flex-direction: row;\r\n    &.--justify-start {\r\n      justify-content: flex-start;\r\n    }\r\n    &.--justify-center  {\r\n      justify-content: center;\r\n    }\r\n    &.--justify-end  {\r\n      justify-content: flex-end;\r\n    }\r\n    &.--justify-around  {\r\n      justify-content: space-around;\r\n    }\r\n    &.--justify-between  {\r\n      justify-content: space-between;\r\n    }\r\n    &.--align-start {\r\n      align-items: flex-start;\r\n    }\r\n    &.--align-center  {\r\n      align-items: center;\r\n    }\r\n    &.--align-end  {\r\n      align-items: flex-end;\r\n    }\r\n    &.--align-stretch  {\r\n      align-items: stretch;\r\n    }\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-container-x\" :class=\"classes\" :style=\"styles\">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { getSpaceVal } from '../core/utils'\r\n\r\nexport default {\r\n  name: 'HContainerX',\r\n  props: {\r\n    flex: {\r\n      type: Number,\r\n      default: 1\r\n    },\r\n    space: {\r\n      type: [String, Number],\r\n      default: 5\r\n    },\r\n    wrap: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    align: {\r\n      type: String,\r\n      default: 'center' // start / center / end / stretch\r\n    },\r\n    justify: {\r\n      type: String,\r\n      default: 'center' // start / center / end / between / around\r\n    }\r\n  },\r\n  computed: {\r\n    styles () {\r\n      return {\r\n        // flexGrow: this.flex,\r\n        // flexShrink: this.flex,\r\n        flex: this.flex,\r\n        padding: getSpaceVal(this.space)\r\n      }\r\n    },\r\n    classes () {\r\n      return {\r\n        [`--wrap`]: this.wrap,\r\n        [`--align-${this.align}`]: true,\r\n        [`--justify-${this.justify}`]: true\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n", ".h-container-x {\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  /*flex-basis: auto  ;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  width: 100%;\n  height: auto;\n  flex-wrap: nowrap;\n  flex-direction: row; }\n  .h-container-x.--wrap {\n    flex-wrap: wrap; }\n  .h-container-x.--justify-start {\n    justify-content: flex-start; }\n  .h-container-x.--justify-center {\n    justify-content: center; }\n  .h-container-x.--justify-end {\n    justify-content: flex-end; }\n  .h-container-x.--justify-around {\n    justify-content: space-around; }\n  .h-container-x.--justify-between {\n    justify-content: space-between; }\n  .h-container-x.--align-start {\n    align-items: flex-start; }\n  .h-container-x.--align-center {\n    align-items: center; }\n  .h-container-x.--align-end {\n    align-items: flex-end; }\n  .h-container-x.--align-stretch {\n    align-items: stretch; }\n\n/*# sourceMappingURL=container-x.vue.map */"]
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

var HContainerX = normalizeComponent_1({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, browser, undefined);

//
var script$3 = {
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
      type: [String, Number],
      default: 5
    }
  },
  computed: {
    styles: function styles() {
      return {
        flex: this.flex,
        // flexGrow: this.flex,
        // flexShrink: this.flex,
        width: this.width,
        padding: getSpaceVal(this.space)
      };
    },
    classes: function classes() {
      return {};
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "h-box",
    class: _vm.classes,
    style: _vm.styles
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-45da733a_0", {
    source: ".h-box {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  /*flex-basis: auto;*/\n}\n\n/*# sourceMappingURL=box.vue.map */",
    map: {
      "version": 3,
      "sources": ["D:\\Projects\\mobov\\guitor\\packages\\base-ui\\src\\components\\box.vue", "box.vue"],
      "names": [],
      "mappings": "AACA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;AAAA;;ACCA,kCAAkC",
      "file": "box.vue",
      "sourcesContent": ["<style lang=\"scss\">\r\n  .h-box {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    /*flex-basis: auto;*/\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"h-box\" :class=\"classes\" :style=\"styles\">\r\n    <slot></slot>\r\n  </div>\r\n</template>\r\n<script>\r\n  import { getSpaceVal } from '../core/utils'\r\n\r\n  export default {\r\n    name: 'HBox',\r\n    props: {\r\n      width: {\r\n        type: String,\r\n        default: 'auto'\r\n      },\r\n      flex: {\r\n        type: Number,\r\n        default: 1\r\n      },\r\n      space: {\r\n        type: [String, Number],\r\n        default: 5\r\n      }\r\n    },\r\n    computed: {\r\n      styles () {\r\n        return {\r\n          flex: this.flex,\r\n          // flexGrow: this.flex,\r\n          // flexShrink: this.flex,\r\n          width: this.width,\r\n          padding: getSpaceVal(this.space)\r\n        }\r\n      },\r\n      classes () {\r\n        return {\r\n\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n", ".h-box {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  /*flex-basis: auto;*/ }\n\n/*# sourceMappingURL=box.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject SSR */

var HBox = normalizeComponent_1({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, browser, undefined);

var compName = 'h-frame';
var script$4 = {
  name: 'HFrame',
  props: {
    fillHeader: {
      type: String,
      default: 'both'
    },
    fillFooter: {
      type: String,
      default: 'both'
    },
    isHeader: {
      type: Boolean,
      default: false
    },
    isFooter: {
      type: Boolean,
      default: false
    },
    isLeft: {
      type: Boolean,
      default: false
    },
    isRight: {
      type: Boolean,
      default: false
    },
    transition: {
      type: Boolean,
      default: false
    },
    headerSize: {
      type: [String, Number],
      default: 50
    },
    footerSize: {
      type: [String, Number],
      default: 50
    },
    leftSize: {
      type: [String, Number],
      default: 100
    },
    rightSize: {
      type: [String, Number],
      default: 100
    },
    headerIndex: {
      type: Number,
      default: 1
    },
    footerIndex: {
      type: Number,
      default: 1
    },
    leftIndex: {
      type: Number,
      default: 1
    },
    rightIndex: {
      type: Number,
      default: 1
    },
    headerFloat: {
      type: Boolean,
      default: false
    },
    footerFloat: {
      type: Boolean,
      default: false
    },
    leftFloat: {
      type: Boolean,
      default: false
    },
    rightFloat: {
      type: Boolean,
      default: false
    }
  },
  // data () {
  //   return {
  //     isHeader: false,
  //     isFooter: false,
  //     isLeft: false,
  //     isRight: false
  //   };
  // },
  computed: {
    classes: function classes() {
      var _ref;

      var fillHeader = this.fillHeader,
          fillFooter = this.fillFooter,
          isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight,
          headerFloat = this.headerFloat,
          footerFloat = this.footerFloat,
          leftFloat = this.leftFloat,
          rightFloat = this.rightFloat,
          transition = this.transition;
      return _ref = {
        'h--with-header': isHeader,
        'h--with-footer': isFooter,
        'h--with-left': isLeft,
        'h--with-right': isRight,
        'h--float-header': headerFloat,
        'h--float-footer': footerFloat,
        'h--float-left': leftFloat,
        'h--float-right': rightFloat,
        'h--transition': transition
      }, _defineProperty(_ref, "h--fill-header-".concat(fillHeader), true), _defineProperty(_ref, "h--fill-footer-".concat(fillFooter), true), _ref;
    },
    styles: function styles() {
      var isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight,
          headerSize = this.headerSize,
          footerSize = this.footerSize,
          leftSize = this.leftSize,
          rightSize = this.rightSize;
      var styles = {};
      genSize(styles, "".concat(compName, "-header"), headerSize);
      genSize(styles, "".concat(compName, "-footer"), footerSize);
      genSize(styles, "".concat(compName, "-left"), leftSize);
      genSize(styles, "".concat(compName, "-right"), rightSize);
      return styles;
    }
  },
  methods: {
    /**
     * @return {undefined}
     */
    RHeader: function RHeader(h) {
      var result = this.isHeader ? h('div', {
        staticClass: "".concat(compName, "-header")
      }, [this.$slots.header]) : undefined;
      return this.transition ? h('transition', {
        props: {
          name: 'h-frame-transition-header'
        }
      }, [result]) : result;
    },

    /**
     * @return {undefined}
     */
    RFooter: function RFooter(h) {
      var result = this.isFooter ? h('div', {
        staticClass: "".concat(compName, "-footer")
      }, [this.$slots.footer]) : undefined;
      return this.transition ? h('transition', {
        props: {
          name: 'h-frame-transition-footer'
        }
      }, [result]) : result;
    },

    /**
     * @return {undefined}
     */
    RLeft: function RLeft(h) {
      var result = this.isLeft ? h('div', {
        staticClass: "".concat(compName, "-left")
      }, [this.$slots.left]) : undefined;
      return this.transition ? h('transition', {
        props: {
          name: 'h-frame-transition-left'
        }
      }, [result]) : result;
    },

    /**
     * @return {undefined}
     */
    RRight: function RRight(h) {
      var result = this.isRight ? h('div', {
        staticClass: "".concat(compName, "-right")
      }, [this.$slots.right]) : undefined;
      return this.transition ? h('transition', {
        props: {
          name: 'h-frame-transition-right'
        }
      }, [result]) : result;
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        styles = this.styles,
        classes = this.classes,
        RHeader = this.RHeader,
        RFooter = this.RFooter,
        RLeft = this.RLeft,
        RRight = this.RRight;
    this.isHeader = $slots.header !== undefined;
    this.isFooter = $slots.footer !== undefined;
    this.isLeft = $slots.left !== undefined;
    this.isRight = $slots.right !== undefined;
    return h('div', {
      staticClass: compName,
      class: classes,
      style: styles
    }, [h('section', {
      staticClass: "".concat(compName, "-main")
    }, [$slots.default]), RHeader(h), RLeft(h), RRight(h), RFooter(h)]);
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-05053c40_0", {
    source: "@charset \"UTF-8\";\n/**\n* 滚动容器\n*/\n/**\n   * 隐藏滚动条\n   */\n/**\n   * slim bar样式滚动条\n   */\n/**\n\t * variables register.\n\t */\n.h-frame {\n  --h-frame-header-size-xs: 30px;\n  --h-frame-header-size-sm: 40px;\n  --h-frame-header-size-md: 50px;\n  --h-frame-header-size-lg: 60px;\n  --h-frame-header-size-xl: 70px;\n  --h-frame-footer-size-xs: 30px;\n  --h-frame-footer-size-sm: 40px;\n  --h-frame-footer-size-md: 50px;\n  --h-frame-footer-size-lg: 60px;\n  --h-frame-footer-size-xl: 70px;\n  --h-frame-left-size-xs:   30px;\n  --h-frame-left-size-sm:   40px;\n  --h-frame-left-size-md:   50px;\n  --h-frame-left-size-lg:   60px;\n  --h-frame-left-size-xl:   70px;\n  --h-frame-right-size-xs:  30px;\n  --h-frame-right-size-sm:  40px;\n  --h-frame-right-size-md:  50px;\n  --h-frame-right-size-lg:  60px;\n  --h-frame-right-size-xl:  70px;\n  --h-frame-header-size: 0;\n  --h-frame-footer-size: 0;\n  --h-frame-left-size: 0;\n  --h-frame-right-size: 0;\n  --h-frame-header-z-index: 1;\n  --h-frame-footer-z-index: 1;\n  --h-frame-left-z-index: 1;\n  --h-frame-right-z-index: 1;\n  --h-frame-header-grow: 100%;\n  --h-frame-footer-grow: 100%;\n  --h-frame-left-grow: 100%;\n  --h-frame-right-grow: 100%;\n  --h-frame-header-shrink: 0;\n  --h-frame-footer-shrink: 0;\n  --h-frame-left-shrink: 0;\n  --h-frame-right-shrink: 0;\n}\n\n/**\n\t * components styles.\n\t */\n.h-frame {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-size: var(--m-font-base);\n  color: var(--m-font-color);\n  position: relative;\n}\n.h-frame.m--transition {\n    transition: padding-left 0.25s ease, padding-right 0.25s ease, padding-top 0.25s ease, padding-bottom 0.25s ease;\n}\n.h-frame.m--transition > .h-frame-header,\n    .h-frame.m--transition > .h-frame-footer,\n    .h-frame.m--transition > .h-frame-left,\n    .h-frame.m--transition > .h-frame-right {\n      transition: all 0.25s ease;\n}\n.h-frame.h--with-header {\n  padding-top: var(--h-frame-header-size);\n}\n.h-frame.h--with-footer {\n  padding-bottom: var(--h-frame-footer-size);\n}\n.h-frame.h--with-left {\n  padding-left: var(--h-frame-left-size);\n}\n.h-frame.h--with-right {\n  padding-right: var(--h-frame-right-size);\n}\n.h-frame.h--with-header.h--fill-header-left {\n  --h-frame-left-shrink: var(--h-frame-header-size);\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size));\n}\n.h-frame.h--with-header.h--fill-header-both {\n  --h-frame-left-shrink: var(--h-frame-header-size);\n  --h-frame-right-shrink: var(--h-frame-header-size);\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size));\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size));\n}\n.h-frame.h--with-header.h--fill-header-right {\n  --h-frame-right-shrink: var(--h-frame-header-size);\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size));\n}\n.h-frame.h--with-footer.h--fill-footer-left {\n  --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));\n}\n.h-frame.h--with-footer.h--fill-footer-both {\n  --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));\n  --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));\n}\n.h-frame.h--with-footer.h--fill-footer-right {\n  --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));\n}\n.h-frame.h--with-left.h--fill-header-none, .h-frame.h--with-left.h--fill-header-right {\n  --h-frame-header-shrink: var(--h-frame-left-size);\n  --h-frame-header-grow: calc(100% - var(--h-frame-left-size));\n}\n.h-frame.h--with-left.h--fill-footer-right, .h-frame.h--with-left.h--fill-footer-none {\n  --h-frame-footer-shrink: var(--h-frame-left-size);\n  --h-frame-footer-grow: calc(100% - var(--h-frame-left-size));\n}\n.h-frame.h--with-right.h--fill-header-none, .h-frame.h--with-right.h--fill-header-left {\n  --h-frame-header-grow: calc(100% - var(--h-frame-right-size));\n}\n.h-frame.h--with-right.h--fill-footer-left, .h-frame.h--with-right.h--fill-footer-none {\n  --h-frame-footer-grow: calc(100% - var(--h-frame-right-size));\n}\n.h-frame.h--with-header.h--with-footer.h--fill-header-left.h--fill-footer-left, .h-frame.h--with-header.h--with-footer.h--fill-header-left.h--fill-footer-both, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-left, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-both {\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));\n}\n.h-frame.h--with-header.h--with-footer.h--fill-header-right.h--fill-footer-right, .h-frame.h--with-header.h--with-footer.h--fill-header-right.h--fill-footer-both, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-right, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-both {\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));\n}\n.h-frame.h--with-left.h--with-right.h--fill-header-none {\n  --h-frame-header-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));\n}\n.h-frame.h--with-left.h--with-right.h--fill-footer-none {\n  --h-frame-footer-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));\n}\n.h-frame-main {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n.h-frame-main::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6;\n}\n.h-frame-main::-webkit-scrollbar-track {\n    background-color: #e5e5e5;\n}\n.h-frame-main::-webkit-scrollbar {\n    width: 7px;\n}\n.h-frame-main::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent;\n}\n.h-frame-mainl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent;\n}\n.h-frame-header, .h-frame-footer, .h-frame-left, .h-frame-right {\n  box-sizing: border-box;\n  position: absolute;\n}\n.h-frame-header {\n  top: 0;\n  left: var(--h-frame-header-shrink);\n  width: var(--h-frame-header-grow);\n  height: var(--h-frame-header-size);\n  z-index: var(--h-frame-header-z-index);\n}\n.h-frame-footer {\n  bottom: 0;\n  width: var(--h-frame-footer-grow);\n  left: var(--h-frame-footer-shrink);\n  height: var(--h-frame-footer-size);\n  z-index: var(--h-frame-footer-z-index);\n}\n.h-frame-left {\n  left: 0;\n  top: var(--h-frame-left-shrink);\n  height: var(--h-frame-left-grow);\n  width: var(--h-frame-left-size);\n  z-index: var(--h-frame-left-z-index);\n}\n.h-frame-right {\n  right: 0;\n  top: var(--h-frame-right-shrink);\n  height: var(--h-frame-right-grow);\n  width: var(--h-frame-right-size);\n  z-index: var(--h-frame-right-z-index);\n}\n.h-frame-transition-header-enter,\n.h-frame-transition-header-leave-to {\n  transform: translateY(-100%);\n}\n.h-frame-transition-footer-enter,\n.h-frame-transition-footer-leave-to {\n  transform: translateY(100%);\n}\n.h-frame-transition-left-enter,\n.h-frame-transition-left-leave-to {\n  transform: translateX(-100%);\n}\n.h-frame-transition-right-enter,\n.h-frame-transition-right-leave-to {\n  transform: translateX(100%);\n}\n.h-frame-transition-header-enter-active,\n.h-frame-transition-header-leave-active {\n  will-change: transform;\n  transition: transform 0.25s ease;\n}\n\n/*# sourceMappingURL=frame.vue.map */",
    map: {
      "version": 3,
      "sources": ["frame.vue", "D:\\Projects\\mobov\\guitor\\packages\\base-ui\\src\\components\\frame.vue"],
      "names": [],
      "mappings": "AAAA,gBAAgB;AAChB;;CAEC;ACWD;;IDRI;AACJ;;IAEI;ACiBJ;;GDdG;ACiBH;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EAMA,wBAAA;EACA,wBAAA;EACA,sBAAA;EACA,uBAAA;EAEA,2BAAA;EACA,2BAAA;EACA,yBAAA;EACA,0BAAA;EAEA,2BAAA;EACA,2BAAA;EACA,yBAAA;EACA,0BAAA;EAEA,0BAAA;EACA,0BAAA;EACA,wBAAA;EACA,yBAAA;AAAA;;AAGA;;GDvBG;ACxBH;EAmDA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,6BAAA;EACA,0BAAA;EACA,kBAAA;AAAA;AATA;IAWA,gHAnEA;AAAA;AAwDA;;;;MAmBA,0BA3EA;AAAA;AA+EA;EAGA,uCAAA;AAAA;AAHA;EAMA,0CAAA;AAAA;AANA;EASA,sCAAA;AAAA;AATA;EAYA,wCAAA;AAAA;AAZA;EAgBA,iDAAA;EACA,4DAAA;AAAA;AAjBA;EAoBA,iDAAA;EACA,kDAAA;EACA,4DAAA;EACA,6DAAA;AAAA;AAvBA;EA0BA,kDAAA;EACA,6DAAA;AAAA;AA3BA;EAgCA,4DAAA;AAAA;AAhCA;EAmCA,4DAAA;EACA,6DAAA;AAAA;AApCA;EAuCA,6DAAA;AAAA;AAvCA;EA6CA,iDAAA;EACA,4DAAA;AAAA;AA9CA;EAkDA,iDAAA;EACA,4DAAA;AAAA;AAnDA;EAyDA,6DAAA;AAAA;AAzDA;EA6DA,6DAAA;AAAA;AA7DA;EAqEA,yFAAA;AAAA;AArEA;EA2EA,0FAAA;AAAA;AA3EA;EAgFA,wFAAA;AAAA;AAhFA;EAmFA,wFAAA;AAAA;AAIA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAAA;AAhKA;IACA,yBAJA;AAAA;AAMA;IACA,yBANA;AAAA;AASA;IACA,UAZA;AAAA;AAIA;IAWA,kCAAA;AAAA;AAEA;IACA,kCAAA;AAAA;AAqJA;EACA,sBAAA;EACA,kBAAA;AAAA;AAEA;EAEA,MAAA;EACA,kCAAA;EACA,iCAAA;EACA,kCAAA;EACA,sCAAA;AAAA;AAEA;EAEA,SAAA;EACA,iCAAA;EACA,kCAAA;EACA,kCAAA;EACA,sCAAA;AAAA;AAEA;EAEA,OAAA;EACA,+BAAA;EACA,gCAAA;EACA,+BAAA;EACA,oCAAA;AAAA;AAEA;EAEA,QAAA;EACA,gCAAA;EACA,iCAAA;EACA,gCAAA;EACA,qCAAA;AAAA;AAGA;;EAEA,4BAAA;AAAA;AAEA;;EAEA,2BAAA;AAAA;AAEA;;EAEA,4BAAA;AAAA;AAEA;;EAEA,2BAAA;AAAA;AAGA;;EAGA,sBAAA;EACA,gCAvOA;AAAA;;ADoLA,oCAAoC",
      "file": "frame.vue",
      "sourcesContent": ["@charset \"UTF-8\";\n/**\n* 滚动容器\n*/\n/**\n   * 隐藏滚动条\n   */\n/**\n   * slim bar样式滚动条\n   */\n/**\n\t * variables register.\n\t */\n.h-frame {\n  --h-frame-header-size-xs: 30px;\n  --h-frame-header-size-sm: 40px;\n  --h-frame-header-size-md: 50px;\n  --h-frame-header-size-lg: 60px;\n  --h-frame-header-size-xl: 70px;\n  --h-frame-footer-size-xs: 30px;\n  --h-frame-footer-size-sm: 40px;\n  --h-frame-footer-size-md: 50px;\n  --h-frame-footer-size-lg: 60px;\n  --h-frame-footer-size-xl: 70px;\n  --h-frame-left-size-xs:   30px;\n  --h-frame-left-size-sm:   40px;\n  --h-frame-left-size-md:   50px;\n  --h-frame-left-size-lg:   60px;\n  --h-frame-left-size-xl:   70px;\n  --h-frame-right-size-xs:  30px;\n  --h-frame-right-size-sm:  40px;\n  --h-frame-right-size-md:  50px;\n  --h-frame-right-size-lg:  60px;\n  --h-frame-right-size-xl:  70px;\n  --h-frame-header-size: 0;\n  --h-frame-footer-size: 0;\n  --h-frame-left-size: 0;\n  --h-frame-right-size: 0;\n  --h-frame-header-z-index: 1;\n  --h-frame-footer-z-index: 1;\n  --h-frame-left-z-index: 1;\n  --h-frame-right-z-index: 1;\n  --h-frame-header-grow: 100%;\n  --h-frame-footer-grow: 100%;\n  --h-frame-left-grow: 100%;\n  --h-frame-right-grow: 100%;\n  --h-frame-header-shrink: 0;\n  --h-frame-footer-shrink: 0;\n  --h-frame-left-shrink: 0;\n  --h-frame-right-shrink: 0; }\n\n/**\n\t * components styles.\n\t */\n.h-frame {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-size: var(--m-font-base);\n  color: var(--m-font-color);\n  position: relative; }\n  .h-frame.m--transition {\n    transition: padding-left 0.25s ease, padding-right 0.25s ease, padding-top 0.25s ease, padding-bottom 0.25s ease; }\n    .h-frame.m--transition > .h-frame-header,\n    .h-frame.m--transition > .h-frame-footer,\n    .h-frame.m--transition > .h-frame-left,\n    .h-frame.m--transition > .h-frame-right {\n      transition: all 0.25s ease; }\n\n.h-frame.h--with-header {\n  padding-top: var(--h-frame-header-size); }\n\n.h-frame.h--with-footer {\n  padding-bottom: var(--h-frame-footer-size); }\n\n.h-frame.h--with-left {\n  padding-left: var(--h-frame-left-size); }\n\n.h-frame.h--with-right {\n  padding-right: var(--h-frame-right-size); }\n\n.h-frame.h--with-header.h--fill-header-left {\n  --h-frame-left-shrink: var(--h-frame-header-size);\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size)); }\n\n.h-frame.h--with-header.h--fill-header-both {\n  --h-frame-left-shrink: var(--h-frame-header-size);\n  --h-frame-right-shrink: var(--h-frame-header-size);\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size));\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size)); }\n\n.h-frame.h--with-header.h--fill-header-right {\n  --h-frame-right-shrink: var(--h-frame-header-size);\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size)); }\n\n.h-frame.h--with-footer.h--fill-footer-left {\n  --h-frame-left-grow: calc(100% - var(--h-frame-footer-size)); }\n\n.h-frame.h--with-footer.h--fill-footer-both {\n  --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));\n  --h-frame-right-grow: calc(100% - var(--h-frame-footer-size)); }\n\n.h-frame.h--with-footer.h--fill-footer-right {\n  --h-frame-right-grow: calc(100% - var(--h-frame-footer-size)); }\n\n.h-frame.h--with-left.h--fill-header-none, .h-frame.h--with-left.h--fill-header-right {\n  --h-frame-header-shrink: var(--h-frame-left-size);\n  --h-frame-header-grow: calc(100% - var(--h-frame-left-size)); }\n\n.h-frame.h--with-left.h--fill-footer-right, .h-frame.h--with-left.h--fill-footer-none {\n  --h-frame-footer-shrink: var(--h-frame-left-size);\n  --h-frame-footer-grow: calc(100% - var(--h-frame-left-size)); }\n\n.h-frame.h--with-right.h--fill-header-none, .h-frame.h--with-right.h--fill-header-left {\n  --h-frame-header-grow: calc(100% - var(--h-frame-right-size)); }\n\n.h-frame.h--with-right.h--fill-footer-left, .h-frame.h--with-right.h--fill-footer-none {\n  --h-frame-footer-grow: calc(100% - var(--h-frame-right-size)); }\n\n.h-frame.h--with-header.h--with-footer.h--fill-header-left.h--fill-footer-left, .h-frame.h--with-header.h--with-footer.h--fill-header-left.h--fill-footer-both, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-left, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-both {\n  --h-frame-left-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size)); }\n\n.h-frame.h--with-header.h--with-footer.h--fill-header-right.h--fill-footer-right, .h-frame.h--with-header.h--with-footer.h--fill-header-right.h--fill-footer-both, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-right, .h-frame.h--with-header.h--with-footer.h--fill-header-both.h--fill-footer-both {\n  --h-frame-right-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size)); }\n\n.h-frame.h--with-left.h--with-right.h--fill-header-none {\n  --h-frame-header-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size)); }\n\n.h-frame.h--with-left.h--with-right.h--fill-footer-none {\n  --h-frame-footer-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size)); }\n\n.h-frame-main {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n  .h-frame-main::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6; }\n  .h-frame-main::-webkit-scrollbar-track {\n    background-color: #e5e5e5; }\n  .h-frame-main::-webkit-scrollbar {\n    width: 7px; }\n  .h-frame-main::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent; }\n  .h-frame-mainl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent; }\n\n.h-frame-header, .h-frame-footer, .h-frame-left, .h-frame-right {\n  box-sizing: border-box;\n  position: absolute; }\n\n.h-frame-header {\n  top: 0;\n  left: var(--h-frame-header-shrink);\n  width: var(--h-frame-header-grow);\n  height: var(--h-frame-header-size);\n  z-index: var(--h-frame-header-z-index); }\n\n.h-frame-footer {\n  bottom: 0;\n  width: var(--h-frame-footer-grow);\n  left: var(--h-frame-footer-shrink);\n  height: var(--h-frame-footer-size);\n  z-index: var(--h-frame-footer-z-index); }\n\n.h-frame-left {\n  left: 0;\n  top: var(--h-frame-left-shrink);\n  height: var(--h-frame-left-grow);\n  width: var(--h-frame-left-size);\n  z-index: var(--h-frame-left-z-index); }\n\n.h-frame-right {\n  right: 0;\n  top: var(--h-frame-right-shrink);\n  height: var(--h-frame-right-grow);\n  width: var(--h-frame-right-size);\n  z-index: var(--h-frame-right-z-index); }\n\n.h-frame-transition-header-enter,\n.h-frame-transition-header-leave-to {\n  transform: translateY(-100%); }\n\n.h-frame-transition-footer-enter,\n.h-frame-transition-footer-leave-to {\n  transform: translateY(100%); }\n\n.h-frame-transition-left-enter,\n.h-frame-transition-left-leave-to {\n  transform: translateX(-100%); }\n\n.h-frame-transition-right-enter,\n.h-frame-transition-right-leave-to {\n  transform: translateX(100%); }\n\n.h-frame-transition-header-enter-active,\n.h-frame-transition-header-leave-active {\n  will-change: transform;\n  transition: transform 0.25s ease; }\n\n/*# sourceMappingURL=frame.vue.map */", "<style lang=\"scss\">\n  @import \"../core/style/mixin\";\n  $--h-frame-header-size-xs: 30px;\n  $--h-frame-header-size-sm: 40px;\n  $--h-frame-header-size-md: 50px;\n  $--h-frame-header-size-lg: 60px;\n  $--h-frame-header-size-xl: 70px;\n  $--h-frame-footer-size-xs: 30px;\n  $--h-frame-footer-size-sm: 40px;\n  $--h-frame-footer-size-md: 50px;\n  $--h-frame-footer-size-lg: 60px;\n  $--h-frame-footer-size-xl: 70px;\n  $--h-frame-left-size-xs: 30px;\n  $--h-frame-left-size-sm: 40px;\n  $--h-frame-left-size-md: 50px;\n  $--h-frame-left-size-lg: 60px;\n  $--h-frame-left-size-xl: 70px;\n  $--h-frame-right-size-xs: 30px;\n  $--h-frame-right-size-sm: 40px;\n  $--h-frame-right-size-md: 50px;\n  $--h-frame-right-size-lg: 60px;\n  $--h-frame-right-size-xl: 70px;\n\n  $--h-frame-transition-base: .25s ease;\n\n\n  /**\n\t * variables register.\n\t */\n  .h-frame {\n    --h-frame-header-size-xs: #{ $--h-frame-header-size-xs};\n    --h-frame-header-size-sm: #{ $--h-frame-header-size-sm};\n    --h-frame-header-size-md: #{ $--h-frame-header-size-md};\n    --h-frame-header-size-lg: #{ $--h-frame-header-size-lg};\n    --h-frame-header-size-xl: #{ $--h-frame-header-size-xl};\n    --h-frame-footer-size-xs: #{ $--h-frame-footer-size-xs};\n    --h-frame-footer-size-sm: #{ $--h-frame-footer-size-sm};\n    --h-frame-footer-size-md: #{ $--h-frame-footer-size-md};\n    --h-frame-footer-size-lg: #{ $--h-frame-footer-size-lg};\n    --h-frame-footer-size-xl: #{ $--h-frame-footer-size-xl};\n    --h-frame-left-size-xs:   #{ $--h-frame-left-size-xs};\n    --h-frame-left-size-sm:   #{ $--h-frame-left-size-sm};\n    --h-frame-left-size-md:   #{ $--h-frame-left-size-md};\n    --h-frame-left-size-lg:   #{ $--h-frame-left-size-lg};\n    --h-frame-left-size-xl:   #{ $--h-frame-left-size-xl};\n    --h-frame-right-size-xs:  #{ $--h-frame-right-size-xs};\n    --h-frame-right-size-sm:  #{ $--h-frame-right-size-sm};\n    --h-frame-right-size-md:  #{ $--h-frame-right-size-md};\n    --h-frame-right-size-lg:  #{ $--h-frame-right-size-lg};\n    --h-frame-right-size-xl:  #{ $--h-frame-right-size-xl};\n\n    //--h-frame-header-size: #{$--h-frame-header-size-md};\n    //--h-frame-footer-size: #{$--h-frame-footer-size-md};\n    //--h-frame-left-size: #{$--h-frame-side-size-md};\n    //--h-frame-right-size: #{$--h-frame-side-size-md};\n    --h-frame-header-size: 0;\n    --h-frame-footer-size: 0;\n    --h-frame-left-size: 0;\n    --h-frame-right-size: 0;\n\n    --h-frame-header-z-index: 1;\n    --h-frame-footer-z-index: 1;\n    --h-frame-left-z-index: 1;\n    --h-frame-right-z-index: 1;\n\n    --h-frame-header-grow: 100%;\n    --h-frame-footer-grow: 100%;\n    --h-frame-left-grow: 100%;\n    --h-frame-right-grow: 100%;\n\n    --h-frame-header-shrink: 0;\n    --h-frame-footer-shrink: 0;\n    --h-frame-left-shrink: 0;\n    --h-frame-right-shrink: 0;\n  }\n\n  /**\n\t * components styles.\n\t */\n  .h-frame {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    font-size: var(--m-font-base);\n    color: var(--m-font-color);\n    position: relative;\n    &.m--transition {\n      transition: padding-left $--h-frame-transition-base,\n      padding-right $--h-frame-transition-base,\n      padding-top $--h-frame-transition-base,\n      padding-bottom $--h-frame-transition-base;\n      >.h-frame-header,\n      >.h-frame-footer,\n      >.h-frame-left,\n      >.h-frame-right {\n        transition: all $--h-frame-transition-base;\n      }\n    }\n  }\n  .h-frame {\n    // layout\n    &.h--with-header {\n      padding-top: var(--h-frame-header-size);\n    }\n    &.h--with-footer {\n      padding-bottom: var(--h-frame-footer-size);\n    }\n    &.h--with-left {\n      padding-left: var(--h-frame-left-size);\n    }\n    &.h--with-right {\n      padding-right: var(--h-frame-right-size);\n    }\n    &.h--with-header {\n      &.h--fill-header-left {\n        --h-frame-left-shrink: var(--h-frame-header-size);\n        --h-frame-left-grow: calc(100% - var(--h-frame-header-size));\n      }\n      &.h--fill-header-both {\n        --h-frame-left-shrink: var(--h-frame-header-size);\n        --h-frame-right-shrink: var(--h-frame-header-size);\n        --h-frame-left-grow: calc(100% - var(--h-frame-header-size));\n        --h-frame-right-grow: calc(100% - var(--h-frame-header-size));\n      }\n      &.h--fill-header-right {\n        --h-frame-right-shrink: var(--h-frame-header-size);\n        --h-frame-right-grow: calc(100% - var(--h-frame-header-size));\n      }\n    }\n    &.h--with-footer {\n      &.h--fill-footer-left {\n        --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));\n      }\n      &.h--fill-footer-both {\n        --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));\n        --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));\n      }\n      &.h--fill-footer-right {\n        --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));\n      }\n    }\n    &.h--with-left {\n      &.h--fill-header-none,\n      &.h--fill-header-right {\n        --h-frame-header-shrink: var(--h-frame-left-size);\n        --h-frame-header-grow: calc(100% - var(--h-frame-left-size));\n      }\n      &.h--fill-footer-right,\n      &.h--fill-footer-none {\n        --h-frame-footer-shrink: var(--h-frame-left-size);\n        --h-frame-footer-grow: calc(100% - var(--h-frame-left-size));\n      }\n    }\n    &.h--with-right {\n      &.h--fill-header-none,\n      &.h--fill-header-left {\n        --h-frame-header-grow: calc(100% - var(--h-frame-right-size));\n      }\n      &.h--fill-footer-left,\n      &.h--fill-footer-none {\n        --h-frame-footer-grow: calc(100% - var(--h-frame-right-size));\n      }\n    }\n    &.h--with-header.h--with-footer {\n      &.h--fill-header-left.h--fill-footer-left,\n      &.h--fill-header-left.h--fill-footer-both,\n      &.h--fill-header-both.h--fill-footer-left,\n      &.h--fill-header-both.h--fill-footer-both {\n        --h-frame-left-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));\n      }\n      &.h--fill-header-right.h--fill-footer-right,\n      &.h--fill-header-right.h--fill-footer-both,\n      &.h--fill-header-both.h--fill-footer-right,\n      &.h--fill-header-both.h--fill-footer-both {\n        --h-frame-right-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));\n      }\n    }\n    &.h--with-left.h--with-right {\n      &.h--fill-header-none {\n        --h-frame-header-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));\n      }\n      &.h--fill-footer-none {\n        --h-frame-footer-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));\n      }\n    }\n  }\n  .h-frame-main {\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    @include slim-scroll-bar();\n  }\n  %h-frame-parts-base {\n    box-sizing: border-box;\n    position: absolute;\n  }\n  .h-frame-header {\n    @extend %h-frame-parts-base;\n    top: 0;\n    left: var(--h-frame-header-shrink);\n    width: var(--h-frame-header-grow);\n    height: var(--h-frame-header-size);\n    z-index: var(--h-frame-header-z-index);\n  }\n  .h-frame-footer {\n    @extend %h-frame-parts-base;\n    bottom: 0;\n    width: var(--h-frame-footer-grow);\n    left: var(--h-frame-footer-shrink);\n    height: var(--h-frame-footer-size);\n    z-index: var(--h-frame-footer-z-index);\n  }\n  .h-frame-left {\n    @extend %h-frame-parts-base;\n    left: 0;\n    top: var(--h-frame-left-shrink);\n    height: var(--h-frame-left-grow);\n    width: var(--h-frame-left-size);\n    z-index: var(--h-frame-left-z-index);\n  }\n  .h-frame-right {\n    @extend %h-frame-parts-base;\n    right: 0;\n    top: var(--h-frame-right-shrink);\n    height: var(--h-frame-right-grow);\n    width: var(--h-frame-right-size);\n    z-index: var(--h-frame-right-z-index);\n  }\n\n  .h-frame-transition-header-enter,\n  .h-frame-transition-header-leave-to {\n    transform: translateY(-100%);\n  }\n  .h-frame-transition-footer-enter,\n  .h-frame-transition-footer-leave-to {\n    transform: translateY(100%);\n  }\n  .h-frame-transition-left-enter,\n  .h-frame-transition-left-leave-to {\n    transform: translateX(-100%);\n  }\n  .h-frame-transition-right-enter,\n  .h-frame-transition-right-leave-to {\n    transform: translateX(100%);\n  }\n\n  .h-frame-transition-header-enter-active,\n  .h-frame-transition-header-leave-active {\n    //transform: translateZ(0);\n    will-change: transform;\n    transition: transform $--h-frame-transition-base;\n  }\n</style>\n<script>\n  import { genSize } from '../core/utils'\n\n  const compName = 'h-frame'\n\n  export default {\n    name: 'HFrame',\n\n    props: {\n      fillHeader: {\n        type: String,\n        default: 'both'\n      },\n      fillFooter: {\n        type: String,\n        default: 'both'\n      },\n      isHeader: {\n        type: Boolean,\n        default: false\n      },\n      isFooter: {\n        type: Boolean,\n        default: false\n      },\n      isLeft: {\n        type: Boolean,\n        default: false\n      },\n      isRight: {\n        type: Boolean,\n        default: false\n      },\n      transition: {\n        type: Boolean,\n        default: false\n      },\n      headerSize: {\n        type: [String, Number],\n        default: 50\n      },\n      footerSize: {\n        type: [String, Number],\n        default: 50\n      },\n      leftSize: {\n        type: [String, Number],\n        default: 100\n      },\n      rightSize: {\n        type: [String, Number],\n        default: 100\n      },\n      headerIndex: {\n        type: Number,\n        default: 1\n      },\n      footerIndex: {\n        type: Number,\n        default: 1\n      },\n      leftIndex: {\n        type: Number,\n        default: 1\n      },\n      rightIndex: {\n        type: Number,\n        default: 1\n      },\n      headerFloat: {\n        type: Boolean,\n        default: false\n      },\n      footerFloat: {\n        type: Boolean,\n        default: false\n      },\n      leftFloat: {\n        type: Boolean,\n        default: false\n      },\n      rightFloat: {\n        type: Boolean,\n        default: false\n      },\n    },\n\n    // data () {\n    //   return {\n    //     isHeader: false,\n    //     isFooter: false,\n    //     isLeft: false,\n    //     isRight: false\n    //   };\n    // },\n\n    computed: {\n      classes () {\n        const { fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight,\n          headerFloat, footerFloat, leftFloat, rightFloat, transition } = this\n\n        return {\n          'h--with-header': isHeader,\n          'h--with-footer': isFooter,\n          'h--with-left': isLeft,\n          'h--with-right': isRight,\n          'h--float-header': headerFloat,\n          'h--float-footer': footerFloat,\n          'h--float-left': leftFloat,\n          'h--float-right': rightFloat,\n          'h--transition': transition,\n          [`h--fill-header-${fillHeader}`]: true,\n          [`h--fill-footer-${fillFooter}`]: true\n        }\n      },\n      styles () {\n        const {\n          isHeader, isFooter, isLeft, isRight, headerSize, footerSize, leftSize, rightSize\n        } = this\n\n        const styles = { }\n\n        genSize(styles, `${compName}-header`, headerSize)\n        genSize(styles, `${compName}-footer`, footerSize)\n        genSize(styles, `${compName}-left`, leftSize)\n        genSize(styles, `${compName}-right`, rightSize)\n\n        return styles\n      }\n    },\n    methods: {\n      /**\n       * @return {undefined}\n       */\n      RHeader (h) {\n        const result = this.isHeader ? h('div', {staticClass: `${compName}-header`}, [this.$slots.header]) : undefined\n\n        return this.transition ? h('transition', { props: { name: 'h-frame-transition-header' } }, [result]) : result\n      },\n      /**\n       * @return {undefined}\n       */\n      RFooter (h) {\n        const result = this.isFooter ? h('div', {staticClass: `${compName}-footer`}, [this.$slots.footer]) : undefined\n        return this.transition ? h('transition', { props: { name: 'h-frame-transition-footer' } }, [result]) : result\n      },\n      /**\n       * @return {undefined}\n       */\n      RLeft (h) {\n        const result = this.isLeft ? h('div', {staticClass: `${compName}-left`}, [this.$slots.left]) : undefined\n        return this.transition ? h('transition', { props: { name: 'h-frame-transition-left' } }, [result]) : result\n      },\n      /**\n       * @return {undefined}\n       */\n      RRight (h) {\n        const result = this.isRight ? h('div', {staticClass: `${compName}-right`}, [this.$slots.right]) : undefined\n        return this.transition ? h('transition', { props: { name: 'h-frame-transition-right' } }, [result]) : result\n      }\n    },\n    render (h) {\n      const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this\n\n      this.isHeader = $slots.header !== undefined\n      this.isFooter = $slots.footer !== undefined\n      this.isLeft = $slots.left !== undefined\n      this.isRight = $slots.right !== undefined\n\n      return h('div', {\n        staticClass: compName,\n        class: classes,\n        style: styles\n      }, [\n        h('section', {\n          staticClass: `${compName}-main`\n        },[\n          $slots.default\n        ]),\n        RHeader(h),\n        RLeft(h),\n        RRight(h),\n        RFooter(h)\n      ])\n    }\n  };\n</script>\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = undefined;
/* style inject SSR */

var HFrame = normalizeComponent_1({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, browser, undefined);

var BaseUi = {
  installed: false,
  install: function install(Vue) {
    Vue.component('HFrame', HFrame);
    Vue.component('HView', HView);
    Vue.component('HContainerY', HContainerY);
    Vue.component('HContainerX', HContainerX);
    Vue.component('HBox', HBox);
  }
}; // @ts-ignore

if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  window.Vue.use(BaseUi);
}

exports.default = BaseUi;
