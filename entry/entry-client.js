import { createApp } from '../src/main'

const app = createApp();

//同步服务端消息
if (window.__INITIAL_STATE__){
app.$store.replaceState(window.__INITIAL_STATE__)
}

window.onload = function(){
    app.$mount('#app');
}