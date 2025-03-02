import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import PerfilView from "@/views/PerfilView.vue";
import ServiceView from "@/views/ServiceView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/home",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/cadastro",
        name: "cadastro",
        component: CadastroView,
    },
    {
        path: "/profile/:id",
        name: "perfil",
        component: PerfilView,
    },
    {
        path: "/service/:id",
        name: "ServiceView",
        component: ServiceView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
