const  px2rem = require('postcss-px2rem');
const  path =require('path')
module.exports ={

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
          })
        ]
      }
    }
  },

  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }

    }
  },
  
  configureWebpack: { // 内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },
}

