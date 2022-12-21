import vue from "vue";
import vueRouter from "vue-router";

import Home from "@/views/Home/Home";
import Login from "@/views/Login/Login";
import Register from "@/views/Register/Register";
import Search from "@/views/Search/Search";

vue.use(vueRouter);

let originPush = vueRouter.prototype.push;
let originReplace = vueRouter.prototype.replace;

vueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve & reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

vueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve & reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new vueRouter({
  routes: [
    {
      name: "home",
      path: "/Home",
      component: Home,
      meta: {
        footerShow: true,
      },
    },
    {
      name: "login",
      path: "/Login",
      component: Login,
      meta: {
        footerShow: false,
      },
    },
    {
      name: "register",
      path: "/Register",
      component: Register,
      meta: {
        footerShow: false,
      },
    },
    {
      name: "search",
      path: "/Search/:keyword?",
      component: Search,
      meta: {
        footerShow: true,
      },
      props: true,
    },
    {
      path: "*",
      redirect: "/Home",
    },
  ],
});
