import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  
  routes: [
    {
      path:"/",
      redirect:"/Shouye"
    },
    {
      path: "/Shouye",
      name: "shouye",
      component: () => import('./views/shouye.vue'),
      children:[
        {
          path:"/Shouye",
          redirect:"/shouyeneir"
        },
        {
          path: "/shengyin",
          name: "shengyin",
          component: () => import('./components/shengyin/shengyin.vue')
        },
        {
          path: "/zhuanzhu",
          name: "zhuanzhu",
          component: () => import('./components/zhuanzhu/zhuanzhu.vue')
        },
        {
          path: "/shengyinyemian",
          name: "shengyinyemian",
          component: () => import('./components/shengyin/shengyinyemian.vue')
        },
        {
          path: "/shouyeneir",
          name: "shouyeneir",
          component: () => import('./components/shouye/shouyeneir.vue')
        }
      ]
    },
    
  ]
});