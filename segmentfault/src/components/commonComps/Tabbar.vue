<template>
  <div class="tabbar">
    <div class="tab" v-for="tab in tabs" @click="greenify"><router-link :to="tab.path">{{ tab.name }}</router-link></div>
  </div>
</template>

<script>
  export default{
    name: 'Tabbar',
    data () {
      return {
        tabs: [
          {
            path: '/',
            name: '头条'
          },
          {
            path: '/column',
            name: '专栏'
          },
          {
            path: '/question',
            name: '问答'
          },
          {
            path: '/discovery',
            name: '发现'
          },
          {
            path: '/user',
            name: '我的'
          }
        ]
      }
    },
    methods: {
      greenify: function (e) {
        let tabs = e.target.parentNode.parentNode.children
        for (let tab of tabs) {
          if (tab.children[0].innerHTML === e.target.innerHTML) {
            tab.children[0].style.color = '#009A61'
          } else {
            tab.children[0].style.color = '#989898'
          }
        }
        let doc = document.body
        doc.scrollTop = 0
      }
    }
  }
</script>

<style scoped>
  a{
    color: #989898;
  }
  .tabbar{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    padding: .5em 0;
    background-color: #fff;
  }
  .tab:first-child a{
    color: #009A61;
  }
</style>
