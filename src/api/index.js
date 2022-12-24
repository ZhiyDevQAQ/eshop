// 本文件对API进行统一管理，注意在vue.config.js中对跨域问题进行处理

import requests from "./requests";
import requestsMock from "./requestsMock";

export const requestTypeNav = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });

export const requestBanner = () => requestsMock.get("/Banners");

export const requestFloors = () => requestsMock.get("/Floors");

