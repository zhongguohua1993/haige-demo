<template>
  <div id="app">
    <router-view/>
    <mini-login></mini-login>
  </div>
</template>

<script>
  import miniLogin from 'src/view/login/mini-login'

  export default {
    components: {miniLogin},
    name: 'App',
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
<style lang="scss" scoped>
  #app {
    height: 100%;
  }
</style>
