<template>
  <m-view class="event" paddingY="md" paddingX="sm">

  </m-view>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers('timeline')

  export default {
    name: 'timeline',
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
