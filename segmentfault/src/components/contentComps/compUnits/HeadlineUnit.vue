<template>
  <div class="headlineUnit">
    <div class="hdname">{{ content.title }}</div>
    <div>
      <div class="hdauthor grey small">{{ content.author }}</div>
      <div class="hdtime grey small">{{ content.time }}</div>
    </div>
    <div class="hdlikes small">likes {{ content.likes }}</div>
    <div class="hdcomments small">comments {{ content.comments }}</div>
    <div class="hdcategory grey">#{{ content.category }}</div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  name: 'HeadlineUnit'
}
</script>

<style>
.headlineUnit{
  padding: .7em;
  position: relative;
  border-bottom: 1px solid darkgrey;
}
.grey{
  color: #555;
}
.small{
  font-size: .7em;
}
  .hdauthor,.hdtime,.hdlikes,.hdcomments{
    display: inline-block;
  }
.hdauthor,.hdtime{
  padding-right: .3em ;
}
.hdlikes,.hdcomments{
  padding-right: 1em;
  color: #009A61;
}
  .hdcategory{
    position: absolute;
    right: .7em;
    bottom: .7em;
  }
</style>
