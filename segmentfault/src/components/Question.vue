<template>
  <div>
    <search></search>
    <navbar :cats="munits"></navbar>
    <div class="navbarHidden" style="display: none">hidden</div>
    <router-view :questions="questions"></router-view>
  </div>
</template>

<script>
import QuestionContent from './contentComps/QuestionContent'
import Search from './commonComps/search'
import Navbar from './commonComps/Navbar'
import data from '../../programData/data'
export default {
  components: {
    'Navbar': Navbar,
    'Search': Search,
    'QuestionContent': QuestionContent
  },
  name: 'Question',
  data () {
    return {
      questions: [],
      munits: [
        {
          'path': '/question/new',
          'name': '最新的'
        },
        {
          'path': '/question/hot',
          'name': '热门的'
        },
        {
          'path': '/question/unanswered',
          'name': '未回答的'
        },
        {
          'path': '/question/ecmascript',
          'name': 'ecmascript'
        }
      ]
    }
  },
  watch: {
    '$route': function (to, from) {
      let path = to.path.replace('/question/', '')
      this.questions = data.question[path]
    }
  },
  created: function () {
    this.questions = data.question.new
  }
}
</script>
