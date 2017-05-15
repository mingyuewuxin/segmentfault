<template>
  <div class="search">
    <div class="input"><img src="../../assets/search.png" class="icon searchIcon"/>搜索问答、文章和人</div>
    <img src="../../assets/write.png" class="icon write"/>
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .5em;
  background-color: #00996A;
  height: 55px;
  line-height: 55px;
  text-align: center;
}
.input{
  display: inline-block;
  background-color: #1AA471;
  height: 35px;
  line-height: 35px;
  padding-right: 7em;
}
.icon{
  height: 1.3em;
  margin: 0 1em 0 .5em;
  vertical-align: middle;
}
.searchIcon{
  background-color: #1AA471;
}
.input{
  color: #95D5BD;
}
</style>
