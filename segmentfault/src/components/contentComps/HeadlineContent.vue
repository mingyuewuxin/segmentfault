<template>
  <div :contents="contents">
    <HeadlineUnit v-for="content in contents" :content="content"></HeadlineUnit>
  </div>
</template>

<script>
import HeadlineUnit from './compUnits/HeadlineUnit'
export default {
  props: ['contents'],
  name: 'Headline',
  components: {
    HeadlineUnit: HeadlineUnit
  }
}
</script>
