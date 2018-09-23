const exp = require('express');
const express = exp();
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require('./dist/bundle.server.js')['default'];

//设置静态文件目录
express.use('/', exp.static(__dirname + '/dist'));

const clientBundleFileUrl = '/bundle.client.js';

//处理getHomeInfo请求
express.get('/api/getHomeInfo', (req, res) => {
    res.send('SSR发送的请求');
})

express.get('*', (req, res) => {

    console.log(req.url);

    const context = {
        url: req.url
    };

    createApp(context).then(app => {

        let state = JSON.stringify(context.state);

        renderer.renderToString(app, (err, html) => {
            if (err) {
                console.log(err);
                return res.status(500).end('运行时错误')
            }
            res.send(`
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Vue2.0 SSR渲染页面</title>
                        <script>window.__INITIAL_STATE__=${state}</script>
                        <script src="${clientBundleFileUrl}"></script>
                    </head>
                    <body>
                        <div id="app">${html}</div>
                    </body>
                </html>
            `)
        })
    }, err => {
        if (err.code === 404) {
            res.status(404).end('请求的页面不存在！')
        }
    })
});


express.listen(8080, () => {
    console.log('服务器已启动');
})