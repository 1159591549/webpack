const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        // 获得项目路径，并指定打包后在项目的dist目录下
        path:path.resolve(__dirname,'dist'),
        // 指定打包之后将打包文件命名为build.js
        filename:'build.js'
    },
    module:{
        rules:[
            {
                // 当前属性的值一般就是正则表达式，用于我们需要处理的文件类型
                test:/\.css$/,
                // 告诉用什么loader
                use:[
                    {
                        // 使用的loader
                        loader:"css-loader"
                    }
                ]
            },
            // 下图是简写
            {
                test:/\.css$/,
                loader:'css-loader'
            },
            // css样式配置简写
            {
                test:/\.css$/,
                use:['css-loader']
            }
        ]
    }
}