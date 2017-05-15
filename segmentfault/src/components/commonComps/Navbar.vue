<template>
  <div class="navbar">
  <div class="munit" v-for="cat in cats">
    <router-link :to="cat.path">{{ cat.name }}</router-link>
    <div class="borderBottom"></div>
  </div>
</div>
</template>

<script>
export default{
  name: 'Navbar',
  props: ['cats'],
  methods: {
  }
}
</script>

<style scoped>
.navbar{
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  background-color: #009A61;
}
.munit{
  padding: .8em;
  margin: 0 .4em;
  display: inline-block;
  position: relative;
  text-align: center;
  line-height: 1.2em;
}
::-webkit-scrollbar{
  display: none;
}
a{
  color: #fff;
}
.borderBottom{
  display: none;
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
}
.router-link-exact-active + .borderBottom{
  display: block;
}
</style>
