<style lang="scss">
  @import "../core/style/mixin";
  $--h-frame-header-size-xs: 30px;
  $--h-frame-header-size-sm: 40px;
  $--h-frame-header-size-md: 50px;
  $--h-frame-header-size-lg: 60px;
  $--h-frame-header-size-xl: 70px;
  $--h-frame-footer-size-xs: 30px;
  $--h-frame-footer-size-sm: 40px;
  $--h-frame-footer-size-md: 50px;
  $--h-frame-footer-size-lg: 60px;
  $--h-frame-footer-size-xl: 70px;
  $--h-frame-left-size-xs: 30px;
  $--h-frame-left-size-sm: 40px;
  $--h-frame-left-size-md: 50px;
  $--h-frame-left-size-lg: 60px;
  $--h-frame-left-size-xl: 70px;
  $--h-frame-right-size-xs: 30px;
  $--h-frame-right-size-sm: 40px;
  $--h-frame-right-size-md: 50px;
  $--h-frame-right-size-lg: 60px;
  $--h-frame-right-size-xl: 70px;

  $--h-frame-transition-base: .25s ease;


  /**
	 * variables register.
	 */
  .h-frame {
    --h-frame-header-size-xs: #{ $--h-frame-header-size-xs};
    --h-frame-header-size-sm: #{ $--h-frame-header-size-sm};
    --h-frame-header-size-md: #{ $--h-frame-header-size-md};
    --h-frame-header-size-lg: #{ $--h-frame-header-size-lg};
    --h-frame-header-size-xl: #{ $--h-frame-header-size-xl};
    --h-frame-footer-size-xs: #{ $--h-frame-footer-size-xs};
    --h-frame-footer-size-sm: #{ $--h-frame-footer-size-sm};
    --h-frame-footer-size-md: #{ $--h-frame-footer-size-md};
    --h-frame-footer-size-lg: #{ $--h-frame-footer-size-lg};
    --h-frame-footer-size-xl: #{ $--h-frame-footer-size-xl};
    --h-frame-left-size-xs:   #{ $--h-frame-left-size-xs};
    --h-frame-left-size-sm:   #{ $--h-frame-left-size-sm};
    --h-frame-left-size-md:   #{ $--h-frame-left-size-md};
    --h-frame-left-size-lg:   #{ $--h-frame-left-size-lg};
    --h-frame-left-size-xl:   #{ $--h-frame-left-size-xl};
    --h-frame-right-size-xs:  #{ $--h-frame-right-size-xs};
    --h-frame-right-size-sm:  #{ $--h-frame-right-size-sm};
    --h-frame-right-size-md:  #{ $--h-frame-right-size-md};
    --h-frame-right-size-lg:  #{ $--h-frame-right-size-lg};
    --h-frame-right-size-xl:  #{ $--h-frame-right-size-xl};

    //--h-frame-header-size: #{$--h-frame-header-size-md};
    //--h-frame-footer-size: #{$--h-frame-footer-size-md};
    //--h-frame-left-size: #{$--h-frame-side-size-md};
    //--h-frame-right-size: #{$--h-frame-side-size-md};
    --h-frame-header-size: 0;
    --h-frame-footer-size: 0;
    --h-frame-left-size: 0;
    --h-frame-right-size: 0;

    --h-frame-header-z-index: 1;
    --h-frame-footer-z-index: 1;
    --h-frame-left-z-index: 1;
    --h-frame-right-z-index: 1;

    --h-frame-header-grow: 100%;
    --h-frame-footer-grow: 100%;
    --h-frame-left-grow: 100%;
    --h-frame-right-grow: 100%;

    --h-frame-header-shrink: 0;
    --h-frame-footer-shrink: 0;
    --h-frame-left-shrink: 0;
    --h-frame-right-shrink: 0;
  }

  /**
	 * components styles.
	 */
  .h-frame {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: var(--m-font-base);
    color: var(--m-font-color);
    position: relative;
    &.m--transition {
      transition: padding-left $--h-frame-transition-base,
      padding-right $--h-frame-transition-base,
      padding-top $--h-frame-transition-base,
      padding-bottom $--h-frame-transition-base;
      >.h-frame-header,
      >.h-frame-footer,
      >.h-frame-left,
      >.h-frame-right {
        transition: all $--h-frame-transition-base;
      }
    }
  }
  .h-frame {
    // layout
    &.h--with-header {
      padding-top: var(--h-frame-header-size);
    }
    &.h--with-footer {
      padding-bottom: var(--h-frame-footer-size);
    }
    &.h--with-left {
      padding-left: var(--h-frame-left-size);
    }
    &.h--with-right {
      padding-right: var(--h-frame-right-size);
    }
    &.h--with-header {
      &.h--fill-header-left {
        --h-frame-left-shrink: var(--h-frame-header-size);
        --h-frame-left-grow: calc(100% - var(--h-frame-header-size));
      }
      &.h--fill-header-both {
        --h-frame-left-shrink: var(--h-frame-header-size);
        --h-frame-right-shrink: var(--h-frame-header-size);
        --h-frame-left-grow: calc(100% - var(--h-frame-header-size));
        --h-frame-right-grow: calc(100% - var(--h-frame-header-size));
      }
      &.h--fill-header-right {
        --h-frame-right-shrink: var(--h-frame-header-size);
        --h-frame-right-grow: calc(100% - var(--h-frame-header-size));
      }
    }
    &.h--with-footer {
      &.h--fill-footer-left {
        --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));
      }
      &.h--fill-footer-both {
        --h-frame-left-grow: calc(100% - var(--h-frame-footer-size));
        --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));
      }
      &.h--fill-footer-right {
        --h-frame-right-grow: calc(100% - var(--h-frame-footer-size));
      }
    }
    &.h--with-left {
      &.h--fill-header-none,
      &.h--fill-header-right {
        --h-frame-header-shrink: var(--h-frame-left-size);
        --h-frame-header-grow: calc(100% - var(--h-frame-left-size));
      }
      &.h--fill-footer-right,
      &.h--fill-footer-none {
        --h-frame-footer-shrink: var(--h-frame-left-size);
        --h-frame-footer-grow: calc(100% - var(--h-frame-left-size));
      }
    }
    &.h--with-right {
      &.h--fill-header-none,
      &.h--fill-header-left {
        --h-frame-header-grow: calc(100% - var(--h-frame-right-size));
      }
      &.h--fill-footer-left,
      &.h--fill-footer-none {
        --h-frame-footer-grow: calc(100% - var(--h-frame-right-size));
      }
    }
    &.h--with-header.h--with-footer {
      &.h--fill-header-left.h--fill-footer-left,
      &.h--fill-header-left.h--fill-footer-both,
      &.h--fill-header-both.h--fill-footer-left,
      &.h--fill-header-both.h--fill-footer-both {
        --h-frame-left-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));
      }
      &.h--fill-header-right.h--fill-footer-right,
      &.h--fill-header-right.h--fill-footer-both,
      &.h--fill-header-both.h--fill-footer-right,
      &.h--fill-header-both.h--fill-footer-both {
        --h-frame-right-grow: calc(100% - var(--h-frame-header-size) - var(--h-frame-footer-size));
      }
    }
    &.h--with-left.h--with-right {
      &.h--fill-header-none {
        --h-frame-header-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));
      }
      &.h--fill-footer-none {
        --h-frame-footer-grow: calc(100% - var(--h-frame-left-size) - var(--h-frame-right-size));
      }
    }
  }
  .h-frame-main {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: auto;
    @include slim-scroll-bar();
  }
  %h-frame-parts-base {
    box-sizing: border-box;
    position: absolute;
  }
  .h-frame-header {
    @extend %h-frame-parts-base;
    top: 0;
    left: var(--h-frame-header-shrink);
    width: var(--h-frame-header-grow);
    height: var(--h-frame-header-size);
    z-index: var(--h-frame-header-z-index);
  }
  .h-frame-footer {
    @extend %h-frame-parts-base;
    bottom: 0;
    width: var(--h-frame-footer-grow);
    left: var(--h-frame-footer-shrink);
    height: var(--h-frame-footer-size);
    z-index: var(--h-frame-footer-z-index);
  }
  .h-frame-left {
    @extend %h-frame-parts-base;
    left: 0;
    top: var(--h-frame-left-shrink);
    height: var(--h-frame-left-grow);
    width: var(--h-frame-left-size);
    z-index: var(--h-frame-left-z-index);
  }
  .h-frame-right {
    @extend %h-frame-parts-base;
    right: 0;
    top: var(--h-frame-right-shrink);
    height: var(--h-frame-right-grow);
    width: var(--h-frame-right-size);
    z-index: var(--h-frame-right-z-index);
  }

  .h-frame-transition-header-enter,
  .h-frame-transition-header-leave-to {
    transform: translateY(-100%);
  }
  .h-frame-transition-footer-enter,
  .h-frame-transition-footer-leave-to {
    transform: translateY(100%);
  }
  .h-frame-transition-left-enter,
  .h-frame-transition-left-leave-to {
    transform: translateX(-100%);
  }
  .h-frame-transition-right-enter,
  .h-frame-transition-right-leave-to {
    transform: translateX(100%);
  }

  .h-frame-transition-header-enter-active,
  .h-frame-transition-header-leave-active {
    //transform: translateZ(0);
    will-change: transform;
    transition: transform $--h-frame-transition-base;
  }
</style>
<script>
  import { genSize } from '../core/utils'

  const compName = 'h-frame'

  export default {
    name: 'HFrame',

    props: {
      fillHeader: {
        type: String,
        default: 'both'
      },
      fillFooter: {
        type: String,
        default: 'both'
      },
      isHeader: {
        type: Boolean,
        default: false
      },
      isFooter: {
        type: Boolean,
        default: false
      },
      isLeft: {
        type: Boolean,
        default: false
      },
      isRight: {
        type: Boolean,
        default: false
      },
      transition: {
        type: Boolean,
        default: false
      },
      headerSize: {
        type: [String, Number],
        default: 50
      },
      footerSize: {
        type: [String, Number],
        default: 50
      },
      leftSize: {
        type: [String, Number],
        default: 100
      },
      rightSize: {
        type: [String, Number],
        default: 100
      },
      headerIndex: {
        type: Number,
        default: 1
      },
      footerIndex: {
        type: Number,
        default: 1
      },
      leftIndex: {
        type: Number,
        default: 1
      },
      rightIndex: {
        type: Number,
        default: 1
      },
      headerFloat: {
        type: Boolean,
        default: false
      },
      footerFloat: {
        type: Boolean,
        default: false
      },
      leftFloat: {
        type: Boolean,
        default: false
      },
      rightFloat: {
        type: Boolean,
        default: false
      },
    },

    // data () {
    //   return {
    //     isHeader: false,
    //     isFooter: false,
    //     isLeft: false,
    //     isRight: false
    //   };
    // },

    computed: {
      classes () {
        const { fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight,
          headerFloat, footerFloat, leftFloat, rightFloat, transition } = this

        return {
          'h--with-header': isHeader,
          'h--with-footer': isFooter,
          'h--with-left': isLeft,
          'h--with-right': isRight,
          'h--float-header': headerFloat,
          'h--float-footer': footerFloat,
          'h--float-left': leftFloat,
          'h--float-right': rightFloat,
          'h--transition': transition,
          [`h--fill-header-${fillHeader}`]: true,
          [`h--fill-footer-${fillFooter}`]: true
        }
      },
      styles () {
        const {
          isHeader, isFooter, isLeft, isRight, headerSize, footerSize, leftSize, rightSize
        } = this

        const styles = { }

        genSize(styles, `${compName}-header`, headerSize)
        genSize(styles, `${compName}-footer`, footerSize)
        genSize(styles, `${compName}-left`, leftSize)
        genSize(styles, `${compName}-right`, rightSize)

        return styles
      }
    },
    methods: {
      /**
       * @return {undefined}
       */
      RHeader (h) {
        const result = this.isHeader ? h('div', {staticClass: `${compName}-header`}, [this.$slots.header]) : undefined

        return this.transition ? h('transition', { props: { name: 'h-frame-transition-header' } }, [result]) : result
      },
      /**
       * @return {undefined}
       */
      RFooter (h) {
        const result = this.isFooter ? h('div', {staticClass: `${compName}-footer`}, [this.$slots.footer]) : undefined
        return this.transition ? h('transition', { props: { name: 'h-frame-transition-footer' } }, [result]) : result
      },
      /**
       * @return {undefined}
       */
      RLeft (h) {
        const result = this.isLeft ? h('div', {staticClass: `${compName}-left`}, [this.$slots.left]) : undefined
        return this.transition ? h('transition', { props: { name: 'h-frame-transition-left' } }, [result]) : result
      },
      /**
       * @return {undefined}
       */
      RRight (h) {
        const result = this.isRight ? h('div', {staticClass: `${compName}-right`}, [this.$slots.right]) : undefined
        return this.transition ? h('transition', { props: { name: 'h-frame-transition-right' } }, [result]) : result
      }
    },
    render (h) {
      const { $slots, styles, classes, RHeader, RFooter, RLeft, RRight } = this

      this.isHeader = $slots.header !== undefined
      this.isFooter = $slots.footer !== undefined
      this.isLeft = $slots.left !== undefined
      this.isRight = $slots.right !== undefined

      return h('div', {
        staticClass: compName,
        class: classes,
        style: styles
      }, [
        h('section', {
          staticClass: `${compName}-main`
        },[
          $slots.default
        ]),
        RHeader(h),
        RLeft(h),
        RRight(h),
        RFooter(h)
      ])
    }
  };
</script>
