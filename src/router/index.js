import Vue from "vue";
import Router from "vue-router";
import AuthRequired from './authRequired'
Vue.use(Router);

import Error from "pages/Error";
import User from "pages/user";
import UserLogin from "pages/user/Login";
import UserRegister from "pages/user/Register";
import UserForgotPassword from "pages/user/ForgotPassword";


import LandingPages from 'pages/landingPages'
import LandingPagesSinglepageHome from 'pages/landingPages/SinglepageHome'


import App from "pages/app";

import Dashboards from "pages/app/dashboards";
import DashboardsDefault from "pages/app/dashboards/Default";




import Users from "pages/app/users/list"











const routes = [{
    path: "/",
    component: LandingPages,
    redirect: "/app",
  },
  {
    path: "/singlepage-home",
    component: LandingPagesSinglepageHome
  },
  {
    path: "/error",
    component: Error
  },
  {
    path: "/user",
    component: User,
    redirect: "/user/login",
    children: [{
        path: "login",
        component: UserLogin
      },
      {
        path: "register",
        component: UserRegister
      },
      {
        path: "forgot-password",
        component: UserForgotPassword
      }
    ]
  },
  {
    path: "/app",
    component: App,
    redirect: "/app/dashboards",
    beforeEnter: AuthRequired,
    children: [{
        path: "dashboards",
        component: Dashboards,
        redirect: "/app/dashboards/default",
        children: [{
            path: "default",
            component: DashboardsDefault
          },

        ]
      },
      
      {
        path: "users",
        component: Users,
      },
      {
        path: "users/:type",
        component: Users,
      },
     

    ]
  },
  {
    path: "*",
    component: Error
  },
];



const router = new Router({
  linkActiveClass: "active",
  routes,
  mode: "history"
});

export default router