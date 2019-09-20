import { UiNode, UiNodes, ProjectConfig } from '@/typings/project'
import npmFiles from '@/constants/npm'
import { deepCopy } from '@mobov/es-helper'
import getHtml from '@/compiler/html'

const exportA = document.createElement('a')
const previewA = document.createElement('a')

async function createHtml (ProjectConfig: ProjectConfig, UiNodes: UiNodes): Promise<string>  {
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

  return URL.createObjectURL(blob)
}

export async function exportHtml ({ ProjectConfig, UiNodes } = {} as { ProjectConfig: ProjectConfig, UiNodes: UiNodes }): Promise<any> {
  const filename = ProjectConfig.name
  exportA.href = await createHtml(ProjectConfig, UiNodes)
  exportA.download = `${filename}.html`
  exportA.click()
}

export async function previewHtml ({ ProjectConfig, UiNodes } = {} as { ProjectConfig: ProjectConfig, UiNodes: UiNodes }): Promise<any> {
  previewA.href = await createHtml(ProjectConfig, UiNodes)
  previewA.target = 'blank'
  previewA.click()
}
