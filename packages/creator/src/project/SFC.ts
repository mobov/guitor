import { UiNode, UiNodes, ProjectConfig } from '@/typings/project'
import { deepCopy } from '@mobov/es-helper'
import compileVue from '@/compiler/vue'

export default function (UiNode: UiNode): string {
  const vueData = compileVue(deepCopy(UiNode))
  const result = `
   <template>
      ${vueData.template}
   </template>
   <script>
      export default {
      	data () {
      		return ${vueData.data}
      	}
      }
   </script>
  `
  return result
}
