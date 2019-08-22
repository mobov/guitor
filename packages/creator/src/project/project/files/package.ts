/* eslint-disable */
export default {
  "name": "guitor-project",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "serve": "cross-env  ENV=development vue-cli-service serve",
    "build:production": "cross-env  ENV=production vue-cli-service build",
    "build:debug": "cross-env  ENV=debug vue-cli-service build",
    "i18n": "onemt-i18n --config=./config/i18n.js"
  },
  "dependencies": {
    "@guitor/base-ui": "^0.1.6",
    "vue-i18n": "^7.8.0",
    "vue-property-decorator": "^7.3.0",
    "core-js": "^2.6.5",
    "vue": "^2.6.6"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.5.0",
    "@vue/cli-service": "^3.5.0",
    "cross-env": "^5.2.0",
    "fibers": "^3.1.1",
    "sass": "^1.17.2",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.5.21"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
