import { requestTypeNav } from "@/api";

const TypeNavOptions = {
  namespaced: true,
  // 数据仓库
    state: {
      data: [],
  },
  // 业务逻辑与异步代码的书写区域
  actions: {
    async getTypeNav(context) {
      let result = await requestTypeNav();
      if (result.code === 200) {
        context.commit("UPDATETYPENAV", result.data);
      }
    },
  },
  // 操作state的唯一手段
  mutations: {
      UPDATETYPENAV(state, data) {
          state.data = data;
    }
  },
  // state的派生数据存储区域
  getters: {},
};

export default TypeNavOptions;
