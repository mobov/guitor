<template>
  <m-app-bar class="timeline" variety="flat" :size="60" :elevation="2" justify="center">
    <div class="timeline-item-thumb" @click="handleRollBack(item.data)" v-for="item in Data">
      <img alt="" :src="item.shot" />
    </div>
  </m-app-bar>
</template>
<script>
  import { exportVueTemplate } from '@/exports'
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
        this.$store.commit('project/SET_UI_NODES', data)
        console.log(data)
      }
    }
  }
</script>
<style lang="scss">
  @import "~@mobov/scss-helper/import";
  .timeline {
    height: 100%;
    width: 100%;
    @include scroller();
    @include no-scroll-bar();
    .timeline-item-thumb {
      padding: 5px;
      cursor: pointer;
      transition: all ease .3s;
      height: 50px;
      /*filter: blur(1px);*/
      img {
        height: 100%;
        width: auto;
      }

      &:hover {
        /*filter: blur(0);*/
        opacity: .4;
      }
    }
  }
</style>
