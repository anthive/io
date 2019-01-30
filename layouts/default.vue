<template lang="pug">
  div(id="app")
    v-app(id="inspire")
      defaultHeader
      defaultContent
      defaultFooter
</template>

<script>
import defaultHeader from '@/layouts/defaultHeader';
import defaultContent from '@/layouts/defaultContent';
import defaultFooter from '@/layouts/defaultFooter';

export default {
  components: {
    defaultHeader,
    defaultContent,
    defaultFooter
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style>
</style>
