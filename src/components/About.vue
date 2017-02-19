<template>
  <mu-appbar v-bind:title="msg">
  <mu-icon-button icon='' slot="left"/>
  <mu-icon-menu icon="more_vert" slot="right">
    <div id="content">
    <ul>
      <li><router-link to="/" exact>首页</router-link></li>
      <li><router-link to="/about">我们</router-link></li>
      <li><router-link to="/city">城市</router-link></li>
    </ul> 
    </div>         
  </mu-icon-menu>
</mu-appbar>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '我们'
    }
  }
}
</script>

<style>
  #content ul li{
    margin: 25px;
  }
  #content ul li a{
    color: black;
  }
  #content ul li .router-link-active{
    color: red;
  }
</style>
