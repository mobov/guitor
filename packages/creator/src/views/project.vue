<template>
  <div class="project" style="padding-top: 20px">
    <control-item class="m-mb-sm m-px-sm"
                  v-model="Project.name"
                  type="text"
                  label="项目名称"></control-item>
    <control-item class="m-mb-sm m-px-sm"
                  v-model="Project.version"
                  type="text"
                  label="项目版本"></control-item>
  </div>
</template>
<script>
  import ControlItem from '@/components/control-item'
  import { createNamespacedHelpers } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'

  const { mapGetters, mapState, mapMutations } = createNamespacedHelpers('project')

  export default {
    name: 'project',
    components: {
      ControlItem
    },
    computed: {
      ...mapState([
        'Data'
      ]),
      Project () {
        return this.Data.ProjectConfig
      }
    }
  }
</script>
