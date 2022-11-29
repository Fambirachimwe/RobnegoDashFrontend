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
import Orders from "views/examples/Orders.js";
import Reservations from "views/examples/Reservations.js";
import Suggestions from "views/examples/Suggestions.js";
import Feedback from "views/examples/Feedback.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-planet text-blue",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/reservations",
    name: "Reservations",
    icon: "ni ni-pin-3 text-orange",
    component: Reservations,
    layout: "/admin"
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  {
    path: "/food-suggestions",
    name: "Food Suggestions",
    icon: "ni ni-bullet-list-67 text-red",
    component: Suggestions,
    layout: "/admin"
  },
  {
    path: "/feedback",
    name: "Feedback",
    icon: "ni ni-key-25 text-info",
    component: Feedback,
    layout: "/admin"
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
