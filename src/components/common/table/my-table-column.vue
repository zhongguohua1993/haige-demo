<template>

</template>

<script>
  export default {
    name: 'my-table-column',
    components: {},
    props: {
      column: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        renderELTableColumn (h, data) {
          return h('el-table-column', {
            props: data
          })
        },
        renderMYTableColumn (h, data) {
          return h('my-table-column', {
            props: data
          })
        }
      }
    },
    methods: {},
    computed: {},
    render (h) {
      if (this.column.children) {
        return this.column.children.map(item => {
          return this.renderMYTableColumn(h, item)
        })
      } else {
        return this.renderELTableColumn(h, this.column)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
