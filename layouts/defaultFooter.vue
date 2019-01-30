<template  lang="pug">
  v-footer.mt-5.py-4.px-4.white.elevation-2
    v-flex(wrap)
      strong AntHive.IO
      span.ml-2 Copyright&copy;, 2018
      a.ml-2(href="https://github.com/anthive/io/issues") Issue on GitHub
</template>

<script>
export default {
  name: 'defaultFooter',
  data: () => ({
  }),
  mounted() {
  },
  components: {
  }
}
</script>

<style>
</style>
