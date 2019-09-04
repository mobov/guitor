/* eslint-disable */
import { UiNode, UiNodes } from '@/typings/project'
import vueCompiler from '@/compiler/vue'


function getScripts (arr: Array<string>) {
  let result = ''
  arr.forEach(async _ => {
//     result += `
//     <script type="text/javascript">
//        ${require(`./library/script/${_}.json`).data}
//     </script>
// `
    result += `
      <script src="${_}"></script>
`
  })
  return result
}

function getStyles (arr: Array<string>) {
  let result = ''
  arr.forEach(_ => {
//     result += `
//       <style type="text/css" >
//       ${require(`./library/style/${_}.json`).data}
//       </style>
// `
    result += `
      <link href="${_}" type="text/css" rel="stylesheet"/>
`
  })

  return result
}


export default function ({
  style = '', script = '', UiNode
} = {} as {
  style: any,
  script: any,
  UiNode: UiNode
}) {
  const vueData = vueCompiler(UiNode)
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>creator</title>
        ${getStyles(style)}
      </head>
      <body>
        <noscript>
          <strong>We're sorry but creator doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app">
          ${vueData}
        </div>
        ${getScripts(script)}
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
