import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
// 导入全局样式表
import '../assets/css/global.css'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: Login
        },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
    ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to表示将要访问的路径
    //from表示从哪个路径跳转而来
    //next是一个函数，表示放行
    //next()放行  next('/login')强制跳转
    if (to.path === '/login') return next();
    if (!window.sessionStorage.getItem('token'))
        return next('/login');
    else
        return next()
})

export default router