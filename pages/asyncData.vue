<template>
  <div>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data () {
    // 这里存放数据
    return {
      name: 'hello world'
    };
  },
  // 1.第一种方式
  // asyncData () {
  //   return axios.get('https://api.myjson.com/bins/8gdmr')
  //     .then((res) => {
  //       console.log(res)
  //       return { info: res.data }
  //     })
  // },
  // 1.第二种方式
  async asyncData(){
    let {data} = axios.get('https://api.myjson.com/bins/8gdmr')
    return {info: data}
  },
  // 计算属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  // 生命周期 - 创建之前
  beforeCreate () { },
  // 生命周期 - 挂载之前
  beforeMount () { },
  // 生命周期 - 更新之前
  beforeUpdate () { },
  // 生命周期 - 更新之后
  updated () { },
  // 生命周期 - 销毁之前
  beforeDestroy () { },
  // 生命周期 - 销毁完成
  destroyed () { },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () { },
  // keep-alive 组件被移除时调用
  deactivated () { },
}
</script>

<style scoped>
</style>