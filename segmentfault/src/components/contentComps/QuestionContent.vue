<template>
  <div>
    <QuestionUnit v-for="question in questions" :question="question"></QuestionUnit>
  </div>
</template>

<script>
  import QuestionUnit from './compUnits/QuestionUnit'
  export default {
    name: 'QuestionContent',
    props: ['questions'],
    components: {
      QuestionUnit
    }
  }
</script>
