<template>
  <div :contents="contents">
    <ColumnUnit v-for="content in contents" :content="content"></ColumnUnit>
  </div>
</template>

<script>
  import ColumnUnit from './compUnits/ColumnUnit'
  export default {
    props: ['contents'],
    name: 'ColumnContent',
    components: {
      ColumnUnit: ColumnUnit
    }
  }
</script>
