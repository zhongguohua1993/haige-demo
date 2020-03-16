<template>
  <div class="my-table">
    <el-table :data="data" v-bind="options" v-on="events">
      <template v-for="item in columns">
        <my-table-column :column="item"></my-table-column>
      </template>
    </el-table>
    <el-pagination></el-pagination>
  </div>
</template>

<script>
  import myTableColumn from 'my-table-column'

  export default {
    name: 'my-table',
    components: {myTableColumn},
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      },
      events: {
        type: Object,
        default () {
          return {}
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped lang="scss">

</style>
