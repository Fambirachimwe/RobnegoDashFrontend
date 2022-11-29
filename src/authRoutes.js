/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Login from "views/examples/Login.js";


var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin"
    },

    // {
    //   path: "/user-profile",
    //   name: "User Profile",
    //   icon: "ni ni-single-02 text-yellow",
    //   component: Profile,
    //   layout: "/admin"
    // },

    //   {
    //     path: "/register",
    //     name: "Register",
    //     icon: "ni ni-circle-08 text-pink",
    //     component: Register,
    //     layout: "/auth"
    //   },

    {
        path: "/login",
        name: "Login",
        icon: "ni ni-circle-08 text-pink",
        component: Login,
        layout: "/login"
    }
];
export default routes;
