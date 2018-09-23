import Vue from "vue";
import createRouter from './route.js';
import createStore from './store/store';
import App from './App.vue';

export function createApp() {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return app;
}