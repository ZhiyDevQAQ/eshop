import { requestBanner, requestFloors } from "@/api/index";

const HomeOptions = {
  namespaced: true,
  // 数据仓库
  state: {
    BannersData: [],
    FloorsData: [],
  },
  // 业务逻辑与异步代码的书写区域
  actions: {
    async getBanners(context) {
      let result = await requestBanner();
      if (result.code === 200) {
        context.commit("UPDATEBANNERS", result.data);
      }
    },
    async getFloors(context) {
      let result = await requestFloors();
      if (result.code === 200) {
        context.commit("UPDATEFLOORS", result.data);
      }
    },
  },
  // 操作state的唯一手段
  mutations: {
      UPDATEBANNERS(state, data) {
          state.BannersData = data;
    },
      UPDATEFLOORS(state, data) {
        state.FloorsData = data;
    }
  },
  // state的派生数据存储区域
  getters: {},
};

export default HomeOptions;