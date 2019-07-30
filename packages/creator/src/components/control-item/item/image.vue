<style lang='scss'>
  .control-item-image {
    cursor: pointer;
    height: 48px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    display: flex;
    align-items: center;
    padding: 5px;
  }
  .control-item-image-cover {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .control-item-image-uploader {
    height: 100%;
    flex: 1;
    background-color: darkgray;
    border-radius: 2px;
    position: relative;
  }
  .control-item-image-backer {
    opacity: 0;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
</style>
<template>
  <div class="control-item-image">
    <div class="control-item-image-uploader">
      <div class="control-item-image-cover"
           :style="{backgroundImage: `url(${value})`}"/>
      <input class="control-item-image-backer"
             @change="handleValueChange"
             type="file">
    </div>
    <m-button :disabled="deleteDisable"
              color="error"
              :height="36"
              :marginLeft="5"
              :font-size="30"
              @click="handleDelete">
      <m-icon value="close"></m-icon>
    </m-button>
  </div>
</template>
<script>
  const sizeLimit = 1024 * 1024

  export default {
    name: 'control-item-image',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      deleteDisable () {
        return this.value === ''
      }
    },
    methods: {
      handleValueChange (e) {
        const file = e.target.files[0]

        if (file.size < sizeLimit) {
          let reader = new FileReader()

          const onLoad = () => {
            this.$emit('input', reader.result)
            reader.removeEventListener('load', onLoad)
            reader = null
            e.target.value = ''
          }

          reader.addEventListener('load', onLoad, false)

          if (file) {
            reader.readAsDataURL(file)
          }
        } else {
          // @ts-ignore
          // this.$app.showMessage({
          //   color: 'error',
          //   msg: '图片不能大于1M'
          // })
        }
      },
      handleDelete () {
        this.$emit('input', '')
      }
    }
  }
</script>
