import axios from "axios";
// 引入进度条插件
import nprogress from "nprogress";
// 引入进度条插件样式，不然插件无法显示
// 修改颜色可以去样式里改“.bar”类
// 这里我用的是#a7535a，中国满江红
import "nprogress/nprogress.css";

// 创建axios实例
const requests = axios.create({
  // 配置基础路径
  baseURL: "/api",
  // 设置死亡时间
  timeout: 5000,
});

// 配置请求拦截器
requests.interceptors.request.use((configs) => {
  // 参数configs中包含一个重要的属性headers，即请求头信息

  // 表示捕获到请求进度条开始
  nprogress.start();
  return configs;
});

// 配置响应拦截器
requests.interceptors.response.use(
  (response) => {
    // 响应拦截器对成功取得响应的回调函数

    // 表示捕获到响应进度条结束
    nprogress.done();
    return response.data;
  },
  (err) => {
    //   出现异常的失败回调
    return Promise.reject(new Error(err.message));
  }
);

export default requests;
