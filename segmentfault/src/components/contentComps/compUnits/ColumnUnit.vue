<template>
  <div class="columnUnit">
    <div class="title">{{ content.title }}</div>
    <div class="brief grey small">{{ content.brief }}</div>
    <div class="bottom">
      <div class="likes small">likes {{ content.likes }}</div>
      <div class="comments small">comments {{ content.favorites }}</div>
      <div class="author grey small">{{ content.author }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['content'],
    name: 'ContentUnit'
  }
</script>

<style scoped="">
  .columnUnit{
    padding: .7em;
    position: relative;
    border-bottom: 1px solid darkgrey;
  }
  .title{
    padding-bottom: .5em;
  }
  .grey{
    color: #555;
  }
  .small{
    font-size: .7em;
  }
  .brief{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .author,.likes,.comments{
    display: inline-block;
  }
  .author{
    position: absolute;
    right: 1em;
    bottom: 1em;
  }
  .likes,.comments{
    padding-right: 1em;
    color: #009A61;
  }
</style>
