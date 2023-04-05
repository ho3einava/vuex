import { createRouter , createWebHistory } from 'vue-router';
import Home from './pages/homePage.vue';
import Task from './pages/TaskPage.vue';
import Product from './pages/productPage.vue';
import Cart from './pages/CartPage.vue';


const routes = [

{ name:'home',  path: '/' , component: Home},
{ name:'tasks',  path: '/tasks' , component: Task},
{ name:'product',  path: '/products' , component: Product},
{ name:'Cart',  path: '/cart' , component: Cart}
];
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router; 


