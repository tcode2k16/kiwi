<template>
  <el-menu class="nav" default-active="1" mode="horizontal" :router="true" @select="handleSelect">
    <el-menu-item index="/">
      <img src="/static/logo.svg" class="logo">
    </el-menu-item>
    <el-menu-item v-for="name in $store.state.routes.names" :index="'/'+name.split(' ').join('_')">{{name}} </el-menu-item>
  </el-menu>
</template>



<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        document.activeElement.blur()
        console.log(key, keyPath)
      }
    }
  }
</script>


<style scoped>

.logo {
  display: inline-block;
  height: 75%;
  vertical-align: middle;
}

</style>
