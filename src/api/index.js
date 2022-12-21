// 本文件对API进行统一管理，注意在vue.config.js中对跨域问题进行处理

import requests from "./requests";

export const requestTypeNav = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
