import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Homepage";
import Privacy from  "@/views/contents/Privacy";
import DataForgery from  "@/views/contents/DataForgery";
import CyberEspionage from  "@/views/contents/CyberEspionage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/infringement-of-privacy',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/data-forgery',
        name: 'forgery',
        component: DataForgery
    },
    {
        path: '/cyber-espionage',
        name: 'espionage',
        component: CyberEspionage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;