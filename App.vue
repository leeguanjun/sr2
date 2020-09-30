<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<style>
/* #app{
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(./assets/image/20200923111758.jpg) no-repeat;
    background-size: 100% 100%;
}
#nav{
   width: 100%;
   height: 100px;
   background-color: antiquewhite;
   line-height: 100px;
}
a{
  text-decoration: none;
  color: #ffffff;
  font-size: 24px;
  margin-right: 40px;
}
.header_nav{
  width: 90%;
  height: 100%;
  background-color: aquamarine;
  margin: 0 auto;
} */
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

/* #nav a.router-link-exact-active {
  color: blue;
} */
</style>
<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components:{
       Home
  }
}
</script>
