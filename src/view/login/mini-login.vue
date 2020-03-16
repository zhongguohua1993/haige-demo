<template>
  <div class="mini-login-dialog">
    <el-dialog title="登录" :visible="visible" @close="close" width="520px">
      <login-form></login-form>
    </el-dialog>
  </div>
</template>

<script>
  import loginForm from 'src/view/login/login-form'

  export default {
    components: {loginForm},
    name: 'mini-login',
    data () {
      return {}
    },
    methods: {
      close () {
        this.$store.commit('toggleMiniLogin', false)
      }
    },
    computed: {
      visible () {
        return this.$store.state.login.miniLoginShow
      }
    }
  }
</script>

<style lang="scss">
  .mini-login-dialog {
    .el-dialog__body {
      padding: 20px 0;
    }
  }
</style>
