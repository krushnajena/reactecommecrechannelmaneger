import React from "react"
import { Redirect } from "react-router-dom"

// User profile

//dashboard
import Dashboard from '../pages/Dashboard/index'

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"

import Register from "pages/Authentication/Register"
import Channels from "pages/Channel/ChannelList/Channels"
import SelectChannelToIntigrate from "pages/Channel/SelectChannelToIntigrate"
import WoocommerceIntigration from "pages/Channel/Woocommerce/WoocommerceIntigration"
import Products from "pages/Products/ProductList/Products"
import Orders from "pages/Orders/Orders"

const authProtectedRoutes = [
  
 
  //profile
  //{ path: "/profile", component: UserProfile },

  //Masters
  //{ path: "/category", component: Category },
  //{ path: "/brand", component: Brand },
  //{ path: "/filter", component: Filter },
  //{ path: "/filtervalue", component: FilterValue },
  //{ path: "/filtersettings", component: FilterSettings },



  { path: "/dashboard", component: Dashboard },
  { path: "/channels", component: Channels },
  { path: "/selectyourchanneltointigrate", component: SelectChannelToIntigrate },
  
  {path:"/addwoocommerceintigration",component: WoocommerceIntigration},
  
  {path:"/products", component: Products},
  {path:"/orders", component: Orders},
  // this route should be at the end of all other routes
  
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  
  
  { path: "/register", component: Register },
  //{ path: "/forgot-password", component: ForgetPwd },
  //{ path: "/", exact: true, component: () => <Redirect to="/login" /> },

  
]

export { authProtectedRoutes, publicRoutes }
