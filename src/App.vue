<template>
  <div id="app">
    <Navbar></Navbar>
    <br>
    <router-view></router-view>
    
  </div>
</template>

<script>


import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  background-color: #EEEEEE;

  top:0;
  left:0;

  width: 100vw;
  min-height: 100vh;
}

body {
  padding:0;
  margin:0;
}
html {
  background-color: #3498db;
}
</style>
