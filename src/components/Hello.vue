<template>
  <el-button @click.native="startHacking">Let's do it</el-button>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>
