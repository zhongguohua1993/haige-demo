<template>
  <div class="login-form">
    <el-form label-position="right"
             label-width="120px"
             :model="loginForm"
             ref="loginForm"
             hide-required-asterisk
             :rules="loginFormRules">
      <el-form-item label="用户名/邮箱/ID:" prop="userName">
        <el-input v-model="loginForm.userName" class="login-form-input"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="loginForm.password" class="login-form-input" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginForm.keepLogin">保持登录</el-checkbox>
        <el-checkbox v-model="loginForm.keepPassword">记住密码</el-checkbox>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="login-form-submit" @click="login('loginForm')">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login-form',
    data () {
      return {
        loginForm: {
          userName: '',
          password: '',
          keepLogin: false,
          keepPassword: false
        },
        loginFormRules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login (formName) {
        this.validForm(formName).then(()=>{
          this.$store.commit('login')
          this.$store.commit('toggleMiniLogin', false)
          this.$router.push({name: 'home'})
        })
      },
      validForm (formName) {
        return new Promise(((resolve, reject) => {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$message('登录成功！！！')
              resolve()
            } else {
              this.$message('登录失败！！！')
              reject()
              return false
            }
          })
        }))
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .login-form {
    width: 480px;
    padding: 0 20px;
    /*height: 320px;*/
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: #ffffff;
    &-input {
      /*width: 340px;*/
    }
    &-submit {
      width: 100%;
      /*margin-left: 40px;*/
    }
  }
</style>
