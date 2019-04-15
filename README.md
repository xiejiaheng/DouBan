# DouBan  
这是一个使用webpack快速构建的vue项目  

# 运行项目  
下载代码  
安装依赖  
npm i  
运行  
npm run dev  


豆瓣API
该应用使用了下面4个api  

/v2/movie/search?q={text} 电影搜索api；  
/v2/movie/in_theaters 正在上映的电影；  
/v2/movie/coming_soon 即将上映的电影；  
/v2/movie/subject/:id 单个电影条目信息。  
/v2/movie/searcht/:id 搜索电影信息。  
更多关于豆瓣的api可以前往豆瓣api官网查看。  

需要注意的是，由于豆瓣api的跨域问题，并不能直接通过ajax请求访问。不过vue-cli提供了代理的配置。 我们需要在/config/index.js中配置代理：  

dev: {
  env: require('./dev.env'),  
  port: 8880,  
  assetsSubDirectory: 'static',  
  assetsPublicPath: '/',  
  proxyTable: {  
    '/api': {  
      target: 'http://api.douban.com/v2',  
      changeOrigin: true,  
      pathRewrite: {  
        '^/api': ''  
      }  
    }  
  },  
  cssSourceMap: false  
}  
