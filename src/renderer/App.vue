<template>
  <div id="app" style="-webkit-app-region: drag">
    <div id="electron-titlebar"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'pharma-migration-tool'
  }
</script>

<style>
body {
  -webkit-app-region: drag;
}
.el-input__inner,.el-radio-group,.el-button,.el-aside {
  -webkit-app-region: no-drag;  
}
</style>
