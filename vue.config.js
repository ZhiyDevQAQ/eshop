const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 此处对proxy进行配置处理跨域问题
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
  lintOnSave: false,
});
