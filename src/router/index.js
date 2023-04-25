import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  //pages
  {
    name: "homePage",
    path: "/",
    component: () => import("@/views/homePage"),
  },
  {
    name: "aboutPage",
    path: "/about",
    component: () => import("@/views/aboutPage"),
  },
  {
    name: "servicesPage",
    path: "/services",
    component: () => import("@/views/servicesPage"),
    children:[
      {
        path:"/anadolu",
        component:()=>import("@/components/insurance/anadoluS")
      },
      {
        path:"/groupama",
        component:()=>import("@/components/insurance/groupamaS")
      },
      {
        path:"/allianz",
        component:()=>import("@/components/insurance/allianzS")
      },
    ]
  },
  {
    name: "policyPage",
    path: "/policy",
    component: () => import("@/views/policyPage"),
  },
  {
    name: "mobilePage",
    path: "/mobile",
    component: () => import("@/views/mobileApp"),
  },
  {
    name: "offerPage",
    path: "/offer",
    component: () => import("@/views/offerPage"),
    children:[
      {
        path:"/kasko",
        component:()=>import("@/components/insurance/kaskoP")
      },
      {
        path:"/trafik",
        component:()=>import("@/components/insurance/trafikP")
      },
      {
        path:"/konut",
        component:()=>import("@/components/insurance/konutP")
      },
      {
        path:"/isyeri",
        component:()=>import("@/components/insurance/isyeriP")
      },
      {
        path:"/seyahat",
        component:()=>import("@/components/insurance/seyahatP")
      },
      {
        path:"/saglik",
        component:()=>import("@/components/insurance/saglikP")
      },
      {
        path:"/tamamlayici",
        component:()=>import("@/components/insurance/tamamlayiciP")
      },
      {
        path:"/dask",
        component:()=>import("@/components/insurance/daskP")
      },
      {
        path:"/bireysel",
        component:()=>import("@/components/insurance/bireyselP")
      },

    ]

  },
  {
    name: "contactPage",
    path: "/contact",
    component: () => import("@/views/contactPage"),
  },
  
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
