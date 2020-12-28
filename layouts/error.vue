<template>
  <div class="error-page">
      <h2 v-if="error.statusCode==404">404页面不存在</h2>
      <h2 v-else>500服务器错误</h2>
      <ul>
          <li><nuxt-link to="/">HOME</nuxt-link></li>
      </ul>
  </div>
</template>

<script>
  export default {
    // 需要注意的是这个错误是你需要在<script>里进行声明的，如果不声明程序是找不到error.statusCode的。
    props: ['error']
  };
</script>

<style scoped>
  .error-page{}
  .error-page *{
    color: red;
  }
</style>
