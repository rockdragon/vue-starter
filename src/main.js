import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

import firstComponent from './component/FirstComponent.vue'
const secondComponent = { template: '<div>呵呵，老二</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: firstComponent,
        },
        {
            path: '/second',
            component: secondComponent,
        },
    ],
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
