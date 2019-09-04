/* eslint-disable */
import axios from 'axios'
// @ts-ignore
// import httpJsonp from '@/utils/http-jsonp'
import httpJsonp from 'http-jsonp'


export default function ({
  style = '', script = '', VNode = ''
}) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>creator</title>
        ${style}
      </head>
      <body>
        <noscript>
          <strong>We're sorry but creator doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app">
          ${vueTemplate}
        </div>
        ${script}
        <script>
        var app = new Vue({
          el: '#app',
          data () {
          	return {
          		
          	}
          }  
        })
        </script>
      </body>
    </html>
`
}

export async function getScripts (arr: Array<string>) {
  let result = ''
  arr.forEach(async _ => {
    result += `
      <script src="${_}"></script>
`
  })
  return result
}

export async function getStyles (arr: Array<string>) {
  let result = ''
  arr.forEach(_ => {
    result += `
      <link href="${_}" type="text/css" rel="stylesheet"/>
`
  })

  return result
}
