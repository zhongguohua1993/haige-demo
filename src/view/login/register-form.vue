<template>
  <div class="register-form">
    <el-form label-position="right"
             label-width="80px"
             :model="registerForm"
             ref="registerForm"
             hide-required-asterisk
             :rules="registerFormRules">
      <el-form-item label="用户名:" prop="userName">
        <el-input v-model="registerForm.userName" class="register-form-input"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="registerForm.email" class="register-form-input"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="registerForm.password" class="register-form-input" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="password2">
        <el-input v-model="registerForm.password2" class="register-form-input" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="registerForm.keepLogin">保持登录</el-checkbox>
        <el-checkbox v-model="registerForm.keepPassword">记住密码</el-checkbox>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="register-form-submit" @click="login('registerForm')">加入我们</el-button>
  </div>
</template>

<script>
  export default {
    name: 'register-form',
    data () {
      return {
        registerForm: {
          userName: '',
          email: '',
          password: '',
          password2: '',
          keepLogin: false,
          keepPassword: false
        },
        registerFormRules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          password2: [
            {required: true, message: '请再次输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login (formName) {
        this.validForm(formName)
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
  .register-form {
    padding: 0 20px;
    width: 480px;
    /*height: 320px;*/
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: #ffffff;
    &-input {
      /*width: 390px;*/
    }
    &-submit {
      width: 100%;
    }
  }
</style>
