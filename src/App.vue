<template>
  <div id="app">
    <my-menu :data="menuData"></my-menu>
    <router-view/>
  </div>
</template>

<script>
  import myMenu from 'src/components/common/menu/my-menu'

  export default {
    components: {myMenu},
    name: 'App',
    data () {
      return {
        menuData: [{
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
            }, {
              title: '一键谷歌',
              index: 'Google',
            }]
          },{
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
        ]
      }
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
