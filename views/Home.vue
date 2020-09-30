<template>
  <div id="app" @click="closeSel">
    <div id="nav">
          <div class="header_nav">
            <div>
                  <div  class="logoimg">
                    <img src="../assets/image/logo.png" alt="" >
                </div>
                 <a href="#nav"> <button class="start"><i class="el-icon-arrow-up"></i></button></a>
                <div class="headers_nav">
                  <!-- 搜索框 -->
                    <!-- <el-input
                     size="small"
                     style="width: 140px"
                          placeholder="请输入内容"
                          v-model="input4">
                          <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input> -->
                  <!-- <i class="el-icon-search search"></i> -->
                  <!-- <div style="magin-left:50px; display: inline-block;"> <i class="el-icon-refresh search"></i></div> -->
               
                  <button @click="hide" v-show="!hides" class="button sellineName"> <i class="el-icon-search"></i></button>
                  <button @click="display" v-show="hides" class="button"> <i class="el-icon-search"></i> </button>
                  <div class="pcnav">
                    <router-link to="/">MyIPFSLife</router-link> 
                    <router-link to="/Upload">Upload</router-link>
                    <router-link to="/MinerSetting">MinerSetting</router-link>
                    <router-link to="/DealMessage">DealMessage</router-link>
                    <router-link to="/Storages">Storage</router-link>
                    <router-link to="/Mywallet">Mywallet</router-link>
                    <button class="button" id="Refresh"> <i class="el-icon-refresh" @click="Refresh"></i></button>
                  </div>    
                    <!-- 搜索框 -->
                    <div class="search_btn sellineName" v-show="hides">
                       <button class="btn"><img src="../assets/image/20200923175603.png" alt=""></button>
                       <!-- <button class="btn"> <i class="el-icon-search"></i> </button> -->
                       <input type="text" class="btn"
                       placeholder="what are you hashcode search" id="btn">
                       <button class="btn"><i class="el-icon-search"></i></button>
                    </div>
                </div>
             
             </div>
             <div class="sign_out">
                  <el-dropdown :hide-on-click="false" trigger="click" size="medium">
                      <span class="el-dropdown-link" style="height:60px;">
                       <img src="../assets/image/icon/M5.png" alt="" class="head_portrait"> 
                       <div class="name">User<i class="el-icon-arrow-down el-icon--right"></i></div> 
                      </span>
                      <el-dropdown-menu slot="dropdown"  style="width: 200px; text-align: center; position: fixed!important;top: 69px;!important">
                        <el-dropdown-item>Sign out</el-dropdown-item>
                        <el-dropdown-item>Register</el-dropdown-item>
                      </el-dropdown-menu>
                </el-dropdown>
             </div>
             <div class="operation" @click="operations" v-show="!operation"> <i class="el-icon-s-operation"></i> </div>
             <div class="operation" @click="operationa" v-show="operation"> <i class="el-icon-s-operation"></i> </div>
        </div>
           <!-- 移动端导航 -->
                <div class="move_nav" v-show="operation">
                  <div class="hide">
                  <router-link to="/">MyIPFSLife</router-link> 
                   <router-link to="/Upload">Upload</router-link>
                    <router-link to="/MinerSetting">MinerSetting</router-link>
                    <router-link to="/DealMessage">DealMessage</router-link>
                    <router-link to="/Storages">Storage</router-link>
                    <router-link to="/Mywallet">Mywallet</router-link>
                   </div> 
                </div>
    </div>
    <router-view v-show="!hides" class="router_view"/>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return{
      hides:false,
      operation:false,
    }
  },
  methods:{
      hide(){
        this.hides=true
      },
      display(){
        this.hides=false
      },
      Refresh(){
        // 刷新网页
       window.location.reload()
      },
       item(){
            this.hides=true
       },
      closeSel(event){
      var currentCli = document.getElementsByClassName("sellineName")[0];
      var currentClis = document.getElementsByClassName("sellineName")[1];
      if (currentCli&&currentClis) {
        if (!currentCli.contains(event.target)&&!currentClis.contains(event.target)) {
          this.hides = false;
        }
      }
    },
    operations(){
         this.operation=true
    },
    operationa(){
      this.operation=false
    }
  },
  
}
</script>

<style lang="scss" scoped>

#app{
    overflow-x: hidden;
    position: fixed;
    // overflow-y:scroll;
    width: 100%;
    height: 100%;
    background: url(../assets/image/20200923111758.jpg) no-repeat;
    background-size: 100% 100%;
}
.el-popper[x-placement^=bottom] {
    margin-right: -30px;
    margin-top: -20px;
}
#nav[data-v-fae5bece] {
      line-height: 75px;
}
.operation{
  display: none;
}
#nav{
   width: 1280px;
   margin: 10px;
   position: relative;
   margin: 0 auto;
}
.router_view{
  width: 1280px;
  margin: 0 auto;
    //  overflow-y: hidden;
}
.pcnav{
  display: inline-block;
}
// 回到顶部
.start{
  position: fixed;
  top: 350px;
  left: 320px;
  width: 50px;
  height: 50px;
  background-color: rgba(48, 47, 47, 0.7);
  color: #ffffff;
  font-size: 28px;
  outline: none;
  border: none;
  border-radius: 25px;
  display: none;
}

.headers_nav{
  display: inline-block;
  height: 80px;
  line-height: 80px;
  position: absolute;
}
.logoimg{
display: inline-block;  
width: 70px; 
height: 70px;
}
.button{
  width: 32px;
  height: 32px;
  font-size: 24px;
  color: #ffffff;
  outline: none;
  border: none;
 background-color:rgba(0,0,0,0);
 margin-right: 20px;
 margin-left: 28px;
}
#Refresh:active{
    transform: rotate(-720deg);
    transition: all 0.8s;
}
.search_btn{
  height: 100px;
  display: flex;
  // margin-left: 34px;
  // position: fixed;
  // top: 80px;
  margin: 180px auto;
  z-index: 9;
  margin-left: 135px;
}
#btn{
  width: 800px;
  font-size: 28px;

}
.btn{
  height: 60px;
  border: none;
  outline: none;
  font-size: 22px;
  /* background-color:rgba(0,0,0,0.1); */
}
.btn img{
   width: 40px;
   height: 40px;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
}
.btn:nth-child(1){
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.btn:nth-child(2){
background-color: #ffffff;
}
.btn:last-child{
  width: 45px;
  text-align: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 28px;
}
.search{
  font-size: 28px;
  font-weight: 700;
}
.button:nth-child(2){
  margin-right: 20px;
}
.button:nth-child(3){
  margin-right: 20px;
}
a{
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  margin-right: 40px;
}
.header_nav{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.move_nav{
  display: none;
}
img{
  display: inline-block;
  width: 70px;
  height: 70px;
}
.head_portrait{
  width: 30px;
  height: 30px;
}
.sign_out span{
  display: inline-block;
   width: 130px;
    height: 68px;
   font-size: 18px;
   position: relative;
   /* line-height: 68px; */
}
.sign_out{
  margin-top: 10px;
}
.name{
  display: inline-block;
  height: 50px;
  line-height: 50px;
  position: absolute;
  margin: 5px;
  color: #707070;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: blue;
}
@media screen and (max-width:600px){
  #app{
    overflow-y:scroll;
  }
 .router_view{
   overflow-y: hidden;
 }
 .start{
   display: block;
 }
.el-dropdown {
  height: 60px;
}
 .sign_out{
   width: 100px;
   height: 60px;
  //  display: none;
   margin-top: 0px;
 }

 .pcnav{
   display: none;
  
 }
 .operation{
   font-size: 22px;
   height: 60px;
   line-height: 60px;
   display: block;
   color: #ffffff;
}
 #nav{
   width: 100%;
 }
 .header_nav{
    width: 98%;
    height: 60px;
    margin: 0 auto;
 }
 .logoimg{
   width: 28px;
   height: 28px;
   margin: 0;

   img{
     margin: 0;
     width: 28px;
     height: 28px;
   }
 }
 .headers_nav{
       height: 70px;
    line-height: 70px;
 }
 .button{
   margin-left: 0;
 }
  .move_nav{
    display: block;
    width: 100%;
  }
  .search_btn{
    margin: 180px auto;
    width: 100%;
    display: flex;
      // margin-top: 180px;
  }
  #btn{
    width: 200px;
    font-size: 14px;
  }
  .btn:last-child{
    margin-right: 13px;
  }
  .btn{
    width: 35px;
    height: 35px;
  }
  .btn img{
      width: 35px;
      height: 35px;
  }

  .hide{
    display: flex;
    flex-direction: column;
    width: 100%;
    a{
      width: 100%;
      height: 25px;
     line-height: 25px;
       margin: 0 auto;
      font-size: 12px; 
      text-align: center;
      background-color: rgba(107, 106, 106, 0.4);
      border-bottom: solid 1px #707070;
    }
  }
}
</style>