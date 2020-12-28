module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jspang_ty_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  /*
  * create all css
  * ~ 通配符，来匹配
  */
  css:['~assets/css/base.css'],
  /*
  * 配置访问域名与端口
  */
  server: {
    port: '8081', // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // loaders: [
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     loader: "url-loader",
    //     query: {
    //       limit: 10000,
    //       name: "img/[name].[hash].[ext]"
    //     }
    //   }
    // ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

