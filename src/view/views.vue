<template>
  <div class="views">
    <div class="left-side-menu">
      <div class="system-title">
        <img src="../assets/logo.png" class="system-logo">
        <div class="system-name">摸鱼研究所</div>
      </div>
      <div class="system-menu">
        <my-menu class="top-menu" :data="menuData" mode="vertical"></my-menu>
      </div>
    </div>
    <div class="right-side-content">
      <div class="top-bar"></div>
      <div class="tabs-show"></div>
      <div class="view-show"></div>
    </div>
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
  $top-height: 60px;
  $top-bg-color: #2b2f3a;
  $menu-bg-color: #304156;
  .views {
    display: flex;
    width: 100%;
    height: 100%;
    .left-side-menu {
      width: 240px;
      background-color: $menu-bg-color;
      .system-title {
        height: $top-height;
        background-color: $top-bg-color;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        .system-logo {
          width: 40px;
          height: 32px;
          margin-right: 20px;
        }
        .system-name {
          height: $top-height;
          line-height: $top-height;
          font-size: 22px;
          font-weight: 600;
          color: #FFFFFF;
        }
      }
    }
    .right-side-content {
      flex-grow: 1;
    }
  }
</style>
