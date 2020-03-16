<template>
  <div class="user-base-info">
    <el-form label-position="top"
             label-width="80px"
             ref="loginForm">
      <el-form-item label="用户名" prop="userName">
        一只帅哥
        <i class="el-icon-edit form-edit-icon" @click="edit('userName')"></i>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input>m15622201762@163.com</el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="sex">
          <el-radio label="man">男</el-radio>
          <el-radio label="woman">女</el-radio>
          <el-radio label="other">其他</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'base-info',
    data () {
      return {
        sex: 'man'
      }
    },
    methods: {
      edit (prop) {
      }
    },
    computed: {}
  }
</script>


<style lang="scss">
  .user-base-info{
    .el-form-item{
      margin-bottom: 0;
    }
  }
</style>
<style scoped lang="scss">
  .form-edit-icon {
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      color: #409EFF;
    }
  }
</style>
