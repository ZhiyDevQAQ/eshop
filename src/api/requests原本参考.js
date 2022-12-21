import axios from "axios";

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
  return configs;
});

// 配置响应拦截器
requests.interceptors.response.use(
  (response) => {
    // 响应拦截器对成功取得响应的回调函数
    return response.data;
  },
  (err) => {
    //   出现异常的失败回调
    return Promise.reject(new Error(err.message));
  }
);

export default requests;
