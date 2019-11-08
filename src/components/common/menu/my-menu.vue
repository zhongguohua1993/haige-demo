<template>
  <el-menu :mode="mode"
           :background-color="backgroundColor"
           :text-color="textColor"
           :active-text-color="activeTextColor"
           v-bind="$attrs"
           menu-trigger="click"
           unique-opened
           @select="handleSelect">
    <template v-for="item in data">
      <my-menu-item :data="item"></my-menu-item>
    </template>
  </el-menu>
</template>

<script>
  import myMenuItem from 'src/components/common/menu/my-menu-item'

  /**
   * data的数据格式
   * [
   * {title：标题，
   * index：唯一标识符，应与路由配置中的名称一致
   * children：子菜单，
   * type：如果需要分组则可选group，
   * group：分组内的菜单，配合上面的type：group使用}
   * ]
   *
   * */
  export default {
    name: 'my-menu',
    components: {myMenuItem},
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      mode: {
        type: String,
        default: 'horizontal'
      },
      'background-color': {
        type: String,
        default: '#545c64'
      },
      'text-color': {
        type: String,
        default: '#fff'
      },
      'active-text-color': {
        type: String,
        default: '#ffd04b'
      }
    },
    data () {
      return {}
    },
    methods: {
      handleSelect (index, indexPath) {
        // console.log(this.$router.resolve({name: index}))
        this.$router.push({name: index})
      }
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  .el-menu.el-menu--horizontal {
    border: 0;
  }
</style>
