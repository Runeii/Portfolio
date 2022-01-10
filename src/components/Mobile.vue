<template>
  <div class="mobile">
    <div :class="`mobile__images step--${visibleIndex}`">
      <Img class="mobile__image--dummy" :path="`${project.slug}/${images[0]}`" :mobile="true" />
      <Img v-for="(img, i) in readyImages" :key="i" class="mobile__image" :path="`${project.slug}/${img}`" @load="(e) => _imageLoaded(e, i)" :mobile="true" />
    </div>
    <div class="mobile__live" v-html="url"></div>
  </div>
</template>

<script>
import Img from '@/components/Img.vue'
export default {
  name: 'Mobile',
  props: ['project'],
  components: {
    Img
  },
  data () {
    return {
      loadingIndex: 1,
      loadedImageIndexes: [],
      visibleIndex: 0,
      paused: false,
      timer: false
    }
  },
  computed: {
    images () {
      return this.project.images || []
    },
    readyImages () {
      return this.images.slice(0, this.loadingIndex)
    },
    url () {
      if (this.project.url) {
        let url = typeof this.project.url === 'string'
          ? `<a href="${this.project.url}" target="_blank">Live site</a>`
          : Object.keys(this.project.url).map(k => `<a href="${this.project.url[k]}" target="_blank">${k}</a>`).join(' / ')
        return `<h2 class="project__heading project__url-title">Find on</h2>${url}`
      }
      return ''
    }
  },
  methods: {
    _imageLoaded (e, i) {
      this.loadedImageIndexes.push((i + 1))
      this.loadingIndex++
      if (i === 0) this.startTimer()
    },
    startTimer () {
      this.imageStepper()
      this.timer = window.setInterval(this.imageStepper, 4000)
    },
    imageStepper () {
      if (this.visibleIndex < this.loadedImageIndexes.length && this.loadedImageIndexes.includes(this.visibleIndex + 1)) {
        this.visibleIndex++
      } else if (this.visibleIndex === this.images.length) {
        this.visibleIndex = 1
      } else {
        this.paused = true
        window.clearInterval(this.timer)
      }
    }
  },
  watch: {
    paused: function (newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.imageStepper()
        this.startTimer()
      }
    }
  }
}
</script>

<style lang="scss">
.mobile {
  height: auto;
  max-height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  @media (min-width: $xl) {
    height: 75vh;
    flex-direction: column;
    justify-content: center;
  }
  &__images {
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: block;
    margin-bottom: vr(0.5);
    order: 2;
    @media (min-width: $xl) {
      order: 1;
      position: relative;
      display: flex;
      flex: 0 0 auto;
    }
  }
  &__image {
    width: 100%;
    height: auto;
    margin-bottom: vr(0.5);
    @media (min-width: $xl) {
      position: absolute;
      top: 0;
      left: 50%;
      width: auto;
      height: 100%;
      margin-bottom: 0;
      opacity: 0;
      transform: translateX(calc(-50% + (vr(1))));
      transition: all 300ms ease-in;
      @for $i from 1 through 8 {
        &:nth-child(#{$i + 1}) {
          z-index: #{($i * -1) + 9};
        }
        .step--#{$i} &:nth-child(#{$i + 1}) {
          opacity: 1;
          transform: translateX(-50%);
          transition-delay: 300ms;
        }
      }
    }
    &--dummy {
      display: none;
      @media (min-width: $xl) {
        display: block;
        position: relative;
        visibility: hidden;
      }
    }
  }
  &__live {
    line-height: 1.45;
    margin-bottom: vr(0.5);
    order: 1;
    @media (min-width: $xl) {
      order: 2;
    }
  }
}
</style>
