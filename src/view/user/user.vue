<template>
  <div class="user-info-content">
    <div class="user-info">
      <!-- <div class="user-info-menu">
         <el-menu default-active="/user/baseInfo" router>
           <el-menu-item index="/user/baseInfo">基本信息</el-menu-item>
           <el-menu-item index="/user/detailInfo">详细信息</el-menu-item>
           <el-menu-item index="/user/passwordChange">修改密码</el-menu-item>
         </el-menu>
       </div>
       <div class="user-info-view">
         <router-view></router-view>
       </div>-->
      <div class="user-info-base">
        <base-info></base-info>
      </div>
      <div class="user-info-other"></div>
    </div>
  </div>
</template>

<script>
  import baseInfo from './base-info'

  export default {
    name: 'user',
    components: {baseInfo},
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped lang="scss">
  $bg-color: rgba(255, 255, 255, .75);
  .user-info-content {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/user/background.jpg");
    .user-info {
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      background-color: $bg-color;
      /*&-menu {
        width: 140px;
        height: 100%;
        background-color: $bg-color;
        .el-menu-item {
          background-color: $bg-color;
        }
      }
      &-view {
        background-color: $bg-color;
        flex-grow: 1;
      }*/
      &-base {
        width: 100%;
      }
      &-other {
        width: 100%;
      }
    }
  }
</style>
