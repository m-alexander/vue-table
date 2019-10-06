<template>
  <div id="app">
    <main>
      <Table
        :rows="rows"
        :columns="columns"
      />
    </main>
  </div>
</template>

<script>
import Table from '@/components/Table/Table.vue'
import data from './data'

export default {
  components: {
    Table,
  },

  data: () => ({
    rows: data.rows,
    columns: data.columns,
  })
}
</script>

<style lang="stylus">
@import './themes/gray.styl'

* {
  box-sizing border-box
}

#app
  font-family Roboto, 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin 0

  display: flex
  height: 100vh
  overflow: hidden

  main
    flex 1
    overflow auto

  .datagrid
      height: 300px

body
  margin 0

</style>
