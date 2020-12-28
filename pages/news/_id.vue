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
    validate ({params}){
      return /^\d+$/.test(params.id);
    },
    data() {
      return {
        title: this.$route.params.id
      }
    },
    // 自定义单页的meta
    head() {
      return{
        title: this.title,
        meta:[
          {hid:'description',name:'news1',content:'I am News'}
        ]
      }
      // 修改了顶部的title后 meta 也会变成如下
      // <meta data-n-head="ssr" data-hid="description" name="news1" content="I am News">
    }
  }
</script>