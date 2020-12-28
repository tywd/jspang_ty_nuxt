<template>
  <div>
    <h2>news-content</h2>
    <h3>动态路由配置</h3>
    <p>$route.params:{{$route.params}}</p>
    <!-- <p>$route.params.news_id:{{$route.params.news_id}}</p> -->
    <ul>
      <li><a href="/">home</a></li>
    </ul>
  </div>
</template>

<script >
  export default {
    validate({params}){
      return /^\d+$/.test(params.news_id);
    }
  }
</script>