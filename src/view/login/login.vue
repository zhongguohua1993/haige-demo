<template>
  <div class="login">
    <el-image class="login-image"
              :src="require('src/assets/login/mingrixiang.jpg')"
              fit="cover"
              :style="imageStyle"></el-image>
    <div class="login-center">
      <div class="login-center-top">
        <div class="login-center-top-text login-center-top-left">加入我们</div>
        <div class="login-center-top-text login-center-top-right">一起摸鱼</div>
      </div>
      <div class="login-center-main">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="登录" name="login">
            <login-form></login-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <register-form></register-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-image class="login-image"
              :src="require('src/assets/login/xiangzhi.jpg')"
              fit="cover"
              :style="imageStyle"></el-image>
  </div>
</template>

<script>
  import loginForm from 'src/view/login/login-form'
  import registerForm from 'src/view/login/register-form'

  export default {
    name: 'login',
    components: {loginForm,registerForm},
    data () {
      return {
        imageStyle: {
          height: `${document.body.clientHeight}px`,
          width: this.getImageWidth() + 'px'
        },
        activeName: 'login'
      }
    },
    methods: {
      getImageWidth () {
        return 1080 * document.body.clientHeight / 1920
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .login {
    height: 100%;
    display: flex;
    &-center {
      background: linear-gradient(to right, #99baff 50%, #fea500 50%);
      height: 100%;
      flex-grow: 1;
      &-top {
        width: 100%;
        margin-top: 100px;
        height: 200px;
        &-text {
          height: 100px;
          width: 50%;
          color: white;
          font-size: 64px;
          font-style: italic;
        }
        &-left {
          width: calc(50% - 20px);
          text-align: right;
          margin-right: calc(50% + 20px);
        }
        &-right {
          margin-left: 50%;
        }
      }
      &-main {
        width: fit-content;
        border-radius: 8px;
        /*height: 400px;*/
        margin: 40px auto;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.6)
      }
    }
    .login-image {
    }
  }
</style>

<style lang="scss">
  .login {
    .el-tabs__item.is-top {
      width: 50%;
    }
  }
</style>
