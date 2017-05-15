<template>
  <div class="content">
    <search></search>
    <div class="navbar">
      <navbar :cats="munits"></navbar>
      <div class="arrow"></div>
    </div>
    <div class="navbarHidden" style="display: none">hidden</div>
    <router-view :contents="contents"></router-view>
  </div>
</template>

<script>
import data from '../../programData/data'
import Navbar from './commonComps/Navbar'
import Search from './commonComps/Search'
// const axios = require('axios')
export default {
  name: 'hello',
  data () {
    return {
      contents: [],
      munits: [
        {
          'path': '/column/recommend',
          'name': '推荐的'
        },
        {
          'path': '/column/hot',
          'name': '热门的'
        },
        {
          'path': '/column/all',
          'name': '全部的'
        },
        {
          'path': '/column/ecmascript',
          'name': 'ecmascript'
        }
      ]
    }
  },
  components: {
    'Search': Search,
    'Navbar': Navbar
  },
  /* methods: {
    fetchData: function (path) {
      let that = this
      let url = 'http://localhost:3000/column'
      if (arguments.length !== 0) {
        url += path
      } else {
        url += '/all'
      }
      axios.get(url).then((res) => {
        that.contents = res.data
      })
    }
  }, */
  watch: {
    '$route': function (to, from) {
      let path = to.path.replace('/column/', '')
      // this.fetchData(path)
      this.contents = data.column[path]
    }
  },
  created: function () {
    // this.fetchData()
    this.contents = data.column.recommend
  }
}
</script>
