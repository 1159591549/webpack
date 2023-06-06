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
                test:/\.css$/,
                // 注意这个地方有个引入的顺序，loader会从后往前加载，应当先加载首先需要引入的loader
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                // 注意这个地方有个引入的顺序，loader会从后往前加载，应当先加载首先需要引入的loader
                use:['style-loader','css-loader',"less-loader"]
            }
        ]
    }
}