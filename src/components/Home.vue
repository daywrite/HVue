<template>
  <div>
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
  <div id="maincontent">
  <mu-tabs :value="activeTab" @change="handleTabChange" id="local-mu-tabs">
    <mu-tab value="tab1" title="全国指数"/>
    <mu-tab value="tab2" title="指数介绍"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <h2>Tab One</h2>
    <p>
      这是第一个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab2'">
    <br>
        <div class="home_bianhua">指数简介</div>
        <div class="line"></div>
        <br/>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国城市二手房指数是由北京信达泰和数据技术有限公司（原北京公信达数据技术有限公司），中国房地产估价师与房地产经纪人学会、清华大学恒隆房地产研究中心技术支持，基于对全国500余家房地产中介网站的实时监测，采集覆盖337个地级以上城市的二手房出售、出租挂牌数据，并经数据去重、清洗等技术处理后，引入精细化数学模型和方法编制而成的。
          <br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中，先期推出的二手住房同质性挂牌价格指数（即排除住房之间特征差异影响，单纯考察价格变化；以下简称“挂牌价指数”）
          和二手住房挂牌量指数（以下简称“挂牌量指数”）两项指标，可以从供给端预先反映二手住房市场变化情况。
        </p>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '首页',
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
  
<style>
  @import '../assets/css/style.css';

  #content ul li{
    margin: 25px;
  }
  #content ul li a{
    color: black;
  }
  #content ul li .router-link-active{
    color: red;
  }
  #maincontent{
    margin-left: 10px;
    margin-right: 10px;
  }
  /* tabs */
  #local-mu-tabs{
    background-color: white;
    color:black;
  }
  #local-mu-tabs .mu-tab-link{
    color:darkgray;
  }
   #local-mu-tabs .mu-tab-active{
    color: black;
  }
</style>
