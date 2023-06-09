const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const app = express()

// 获取配置文件
const config = require('./lg.webpack.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler))
// 开启端口上的服务
app.listen(3000, () => {
    console.log('服务正字啊运行3000端口');
})