<template>
  <div class="question">
    <div class="upper">
      <div class="titleBox">
        <div class="title left">{{ question.title }}</div>
      </div>
      <div class="answer right small">{{ question.answer }}<div>回答</div></div>
    </div>
    <div class="lower small">
      <div class="category left">
        <div v-for="cat in question.category" class="cat">{{ cat }}</div>
      </div>
      <div class="time right">{{ question.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionUnit',
  props: ['question']
}
</script>

<style scoped="">
  .question{
    padding: .8em;
    border-bottom: 1px solid darkgrey;
  }
  .small{
    font-size: .7em;
  }
  .left{
    width: 80%;
    display: inline-block;
  }
  .right{
    width: 15%;
    display: inline-block;
    text-align: center;
    margin-left: 1em;
  }
  .upper, .lower{
    display: flex;
    justify-content: center;
    margin-bottom: .5em;
  }
  .answer{
    align-self: center;
    padding: .4em 0;
    background-color: #E5F4EF;
  }
  .cat{
    display: inline-block;
    padding: .2em .5em;
    margin-right: .5em;
    background-color: #E5F4EF;
  }
  .titleBox{
    width: 80%;
    display: inline-block;
  }
  .title{
    display: -webkit-box;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>
