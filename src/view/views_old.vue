<template>
  <div>
    <div class="top-menu-content">
      <my-menu class="top-menu" :data="menuData"></my-menu>
      <div class="user-info">
        <div class="user-info-avatar">
          <el-avatar :size="52"
                     :src="require('src/assets/home/users/default.jpg')"></el-avatar>
        </div>
        <div class="user-info-desc">
          <div v-if="$store.state.login.status">
            <el-dropdown @command="userMenuClick">
              <span class="user-drop-down">{{$store.state.login.userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <template v-for="item in userDropDownMenu">
                  <el-dropdown-item :command="item.command">{{item.label}}</el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="to-login" v-else>
            <el-link type="primary" @click="toLogin">请登录</el-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import myMenu from 'src/components/common/menu/my-menu'

  export default {
    components: {myMenu},
    name: 'views',
    data () {
      return {
        menuData: [
          {
            title: '海哥的摸鱼成果',
            index: 'haige',
            children: [{
              title: '富婆通讯录',
              index: 'richWomen',
              children: [{
                title: '广东地区',
                index: 'gd',
              }, {
                title: '北京地区',
                index: 'bj',
              }
              ]
            }, {
              title: '骗人的东西',
              index: 'pianzi',
              type: 'group',
              group: [{
                title: '一键百度',
                index: 'baidu',
                children: [{
                  title: '广东地区',
                  index: 'gd',
                }, {
                  title: '北京地区',
                  index: 'bj',
                }
                ]
              }, {
                title: '一键谷歌',
                index: 'Google',
              }]
            }, {
              title: '如何找女朋友',
              index: 'gf',
            }]
          }, {
            title: '紧紧的摸鱼成果',
            index: 'jinjin',
            children: [{
              title: '全能紧成长之路',
              index: 'wooooo',
            }]
          }
        ],
        userDropDownMenu: [
          {label: '个人信息', command: ''},
          {label: '修改密码', command: ''},
          {label: '退出登录', command: 'logout'},
          {label: '迷你登录', command: 'miniLogin'},
        ]
      }
    },
    methods: {
      toLogin () {
        this.$router.push({name: 'login'})
      },
      userMenuClick (command) {
        if (typeof  this[command] === 'function') {
          this[command]()
        }
      },
      logout () {
        this.$store.commit('logout')
        // this.$router.push({name: 'login'})
      },
      miniLogin () {
        this.$store.commit('toggleMiniLogin', true)
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .top-menu-content {
    background-color: #545c64;
    display: flex;
    justify-content: space-between;
    .top-menu {
      width: fit-content;
    }
    .user-info {
      display: flex;
      &-avatar {
        margin-top: 4px;
        margin-right: 10px;
      }
      .user-info-desc {
        width: 180px;
        margin-left: 10px;
        padding-top: 18px;
        .user-drop-down {
          cursor: pointer;
          color: #ffffff;
        }
        .to-login {
          color: #ffffff;
        }
      }
    }
  }
</style>
