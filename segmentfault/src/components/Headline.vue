<template>
  <div class="content">
    <div class="banner">SegmentFault</div>
    <navbar :cats="munits"></navbar>
    <div class="navbarHidden" style="display: none">hidden</div>
    <transition name="fade">
      <router-view :contents="contents"></router-view>
    </transition>
  </div>
</template>

<script>
import data from '../../programData/data'
import Navbar from './commonComps/Navbar'
import HeadlineContent from './contentComps/HeadlineContent'
// const axios = require('axios')
export default {
  name: 'Headline',
  data () {
    return {
      contents: '',
      munits: [
        {
          'path': '/headline/all',
          'name': '全部'
        },
        {
          'path': '/headline/frontend',
          'name': '前端'
        },
        {
          'path': '/headline/backend',
          'name': '后端'
        },
        {
          'path': '/headline/ios',
          'name': 'iOS'
        },
        {
          'path': '/headline/android',
          'name': 'Android'
        },
        {
          'path': '/headline/safety',
          'name': '安全'
        },
        {
          'path': '/headline/tools',
          'name': '工具'
        },
        {
          'path': '/headline/iter',
          'name': '程序员'
        },
        {
          'path': '/headline/market',
          'name': '行业'
        }
      ]
    }
  },
  components: {
    'Navbar': Navbar,
    'HeadlineContent': HeadlineContent
  },
  /* methods: {
    fetchData: function (path) {
      console.log(path)
      let that = this
      let url = 'http://localhost:3000/headline'
      if (arguments.length !== 0) {
        url = url + path
      } else {
        url = url + '/all'
      }
      axios.get(url).then((res) => {
        that.content = res.data
      })
    }
  }, */
  watch: {
    '$route': function (to, from) {
      let path = to.path.replace('/headline/', '')
      // this.fetchData(path)
      this.contents = data.headline[path]
    }
  },
  created: function () {
    // this.fetchData()
    console.log(data)
    this.contents = data.headline.all
  }
}
</script>

<style>
.banner{
  font-weight: bold;
  height: 55px;
  padding: 0 0.5em;
  background-color: #009A61;
  color: white;
  font-size: 1.2em;
  line-height: 55px;
}
</style>
