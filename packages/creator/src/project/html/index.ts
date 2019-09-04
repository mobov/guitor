import { UiNode, UiNodes } from '@/typings/project'
import { saveAs } from 'file-saver'
import { deepCopy } from '@mobov/es-helper'
import getHtml from '@/compiler/html'

const JSMap = [
  'http://unpkg.com/vue@2.6.10/dist/vue.js',
  'http://unpkg.com/element-ui@2.10.0/lib/index.js',
  // 'http://unpkg.com/@mobov/es-helper@1.1.8',
  // 'http://unpkg.com/@guitor/base-ui@0.1.6'
]

const CSSMap = [
  'http://unpkg.com/element-ui@2.10.0/lib/theme-chalk/index.css'
]
const a = document.createElement("a");

export default async function exportHtml (project: any): Promise<any> {
  const UiNodes = deepCopy(project.UiNodes)
  const html = await getHtml({
    style: CSSMap,
    script: JSMap,
    UiNode: UiNodes[0] as UiNode
  })
  const filename = 'name'
  console.log(html)
  // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
  //@ts-ignore
  const blob = new Blob([html], { filename,  type: 'text/html' });
  // 利用URL.createObjectURL()方法为a元素生成blob URL
  a.href = URL.createObjectURL(blob);
  // 设置文件名，目前只有Chrome和FireFox支持此属性
  a.download = filename +".html";
  a.click();

}
