<template>
  <div class="user">
    <div class="banner">SegmentFault</div>
    <div class="userInfo">
      <div class="avatar"><img src="../assets/avatar.png" class="img"></div>
      <div class="name">WickedDogg</div>
    </div>
    <div class="message unit">我的消息</div>
    <div class="privateMessage unit">我的私信</div>
    <div class="like unit">我的关注</div>
    <div class="favorite unit">我的收藏</div>
    <div class="setting unit">设置</div>
  </div>
</template>

<script>
  export default {
    name: 'User'
  }
</script>

<style scoped>
  .message, .privateMessage, .like, .favorite, .setting{
    border-bottom: 1px solid darkgrey;
  }
  .message, .like, .setting{
    border-top: 1px solid darkgrey;
  }
  .userInfo, .message, .like, .setting{
    border-top: .5em solid #EEE;
  }
  .unit{
    padding: .8em 1em;
  }
  .userInfo{
    display: flex;
    align-items: center;
    padding: 1em;
  }
  .avatar, .name{
    display: inline-block;
    font-size: 1.2em;
    line-height: 3em;
    height: 3em;
  }
  .img{
    width: 3em;
    height: 3em;
    border-radius: 50%;
    vertical-align: text-bottom;
    margin-right: 1em;
  }
</style>
