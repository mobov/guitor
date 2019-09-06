import { UiNode, UiNodes, ProjectConfig } from '@/typings/project'
import npmFiles from '@/constants/npm'
import { deepCopy } from '@mobov/es-helper'
import getHtml from '@/compiler/html'
import project from '@/store/project'

const a = document.createElement("a");

export default async function exportHtml ({ ProjectConfig, UiNodes } = {} as { ProjectConfig: ProjectConfig, UiNodes: UiNodes }): Promise<any> {
  // const UiNodes = deepCopy(UiNodes)
  const dependences = ProjectConfig.dependencies
  const npmPkgs = Object.keys(npmFiles)
  const JSMap = npmPkgs
    .filter(file => npmFiles[file].script)
    .map(file => `${ProjectConfig.npmCDN}${file}@${dependences[file]}/${npmFiles[file].script}`)
  const CSSMap = npmPkgs
    .filter(file => npmFiles[file].style)
    .map(file => `${ProjectConfig.npmCDN}${file}@${dependences[file]}/${npmFiles[file].style}`)
  const html = await getHtml({
    style: CSSMap,
    script: JSMap,
    UiNode: deepCopy(UiNodes[0]) as UiNode
  })
  const filename = ProjectConfig.name
  //@ts-ignore
  const blob = new Blob([html], { filename, type: 'text/html' })
  // 利用URL.createObjectURL()方法为a元素生成blob URL
  a.href = URL.createObjectURL(blob)
  // 设置文件名，目前只有Chrome和FireFox支持此属性
  a.download = `${filename}.html`
  a.click()
}
