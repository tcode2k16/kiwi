<template>
  <el-menu default-active="1" mode="horizontal" :router="true" @select="handleSelect">
    <el-menu-item index="/">
      <!--TODO add icon-->
      <i class="el-icon-close"></i>
      {{routes.title}}
    </el-menu-item>
    <el-menu-item v-for="name in routes.names" :index="name.split(' ').join('_')">{{name}} </el-menu-item>
  </el-menu>
</template>



<script>
  export default {
    props: ['routes'],
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
