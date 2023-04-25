import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; //router ı dahil et
import "@/assets/style.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// import axios from "axios";
// import { useVuelidate } from '@vuelidate/core'
// import { required } from '@vuelidate/validators'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
/* add icons to the library */
// library.add(faUserSecret)

import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);


import appNavbar from "@/components/shared/appNavbar"
import appFooter from "@/components/shared/appFooter"
import store from './store';

const app=createApp(App);
// app.config.globalProperties.axios = axios;
app.component("appNavbar",appNavbar)
app.component("appFooter",appFooter)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.use(store)


app.mount('#app')
