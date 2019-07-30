<style lang='scss'>
  @import "~@mobov/scss-helper/import";
  .library {
    width: 100%;
   .library-item {
     width: 100%;
     height: 60px;
   }
  }
</style>
<template>
  <m-view class="library">
    <m-list title="onev">
      <m-row paddingX="sm">
        <m-col :xs="4" :md="6" v-for="item in 240">
          <m-flex class="library-item" justify="center" align="center">
            组件
          </m-flex>
        </m-col>
      </m-row>
    </m-list>
  </m-view>

</template>
<script>
export default {
  name: 'library'
}
</script>
