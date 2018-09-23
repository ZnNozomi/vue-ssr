import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function createRouter(){
    let router = new VueRouter({
        mode:'history',
        routes:[
            {
                alias:'/',
                path:'/home',
                component:require('./routes/home.vue'),
            },
            {
                path:'/animal',
                component:require('./routes/animal.vue'),
            },
            {
                path:'/people',
                component:require('./routes/people.vue'),
            }
        ]
    });

    return router; 
}