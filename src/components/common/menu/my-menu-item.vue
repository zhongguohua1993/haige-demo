<script>
  export default {
    name: 'my-menu-item',
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      isSubmenu (item) {
        return item.hasOwnProperty('children') && Array.isArray(item.children) && item.children.length > 0
      },
      renderSubmenu (h, data) {
        let {index, title, children} = data
        return h('el-submenu', {
          props: {
            index,
          }
        }, children.map(item => {
          if (this.isSubmenu(item)) {
            return this.renderSubmenu(h, item)
          } else {
            if (item.type === 'group') {
              return this.renderMenuItemGroup(h, item)
            } else {
              return this.renderMenuItem(h, item)
            }
          }
          // this.renderMyMenuItem(h, item)
        }).concat(
          h('span', {
            slot: 'title'
          }, title)
        ))
      },
      renderMenuItem (h, data) {
        return h('el-menu-item', {
          props: data
        }, data.title)
      },
      renderMenuItemGroup (h, data) {
        return h('el-menu-item-group', {
          props: {}
        }, data.group.map(item => {
          return this.renderMenuItem(h, item)
        }).concat(
          h('span', {
            slot: 'title',
            class: ['group-title']
          }, data.title)
        ))
      },
      renderMyMenuItem (h, data) {
        return h('my-menu-item', {
          props: data
        })
      },
    },
    computed: {},
    render (h) {
      let method
      if (this.isSubmenu(this.data)) {
        method = this.renderSubmenu
      } else {
        if (this.data.type === 'group') {
          method = this.renderMenuItemGroup
        } else {
          method = this.renderMenuItem
        }
      }
      return method(h, this.data)
    }
  }
</script>

<style scoped lang="scss">
  .group-title {
  color: gainsboro;
  }
</style>
