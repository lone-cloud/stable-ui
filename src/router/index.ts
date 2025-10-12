import { createRouter, createWebHistory } from "vue-router";
import GenerateView from "../views/GenerateView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "generate",
            component: GenerateView,
        },
        {
            path: "/images",
            name: "images",
            // route level code-splitting
            // this generates a separate chunk for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/ImagesView.vue"),
        },
        {
            path: "/options",
            name: "options",
            // route level code-splitting
            // this generates a separate chunk for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/OptionsView.vue"),
        },
        {
            path: "/return",
            name: "return",
            redirect: _ => {
                window.location.href = window.location.pathname.endsWith("/") ? ".." : ".";
                return "/";
            },
        }
    ],
});


export default router;
