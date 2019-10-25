<template>
  <m-view class="flow" paddingY="md" paddingX="sm">
    <el-input class="checkbox"></el-input>
  </m-view>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers('project')

  export default {
    name: 'flow',
    data () {
      return {
        template: {
          show: false,
          value: '新建模板'
        }
      }
    },
    computed: {
      ...mapState([
        'Data'
      ])
    },
    methods: {
      handleRollBack (data) {
        this.$store.commit('project/SET_ACTIVE_NODE', 'root')
        this.$store.commit('project/SET_UI_NODES', data)
      }
    }
  }
</script>
<style lang="scss">

</style>
