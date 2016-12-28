<template>
  <div id="app">
    <Navbar :routes="routes"></Navbar>
    <br><br>
    <router-view></router-view>
    
  </div>
</template>

<script>


import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data: () => {
    return {
      routes: {
        names: ['Menu','My Sets','My Activities', 'My Study Plan'],
        icon: "./assets/logo.png",
        title: 'Kiwi'
      }
    }
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
}
</style>
