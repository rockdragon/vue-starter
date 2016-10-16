import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

import doubanComponent from './component/DoubanComponent.vue'
import bioComponent from './component/BioComponent.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/douban',
            component: doubanComponent,
        },
        {
            path: '/bio',
            component: bioComponent,
        },
    ],
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
