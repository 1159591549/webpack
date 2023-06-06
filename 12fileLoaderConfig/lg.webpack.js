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
                    {
                        loader:'css-loader',
                        options:{
                            // 当css样式走到这里之后，发现引入css文件后，会让页面重新返回上一层进行处理
                            importLoaders:1,
                            esModule:false
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                // 注意这个地方有个引入的顺序，loader会从后往前加载，应当先加载首先需要引入的loader
                use:['style-loader','css-loader',"less-loader"]
            },
            {
                test:/\.(png|svg|gif|jpe?g)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        // 配置打包图片的文件路径、文件名、防止文件重复的文件hash值并取6位、后缀名
                        name:'img/[name].[hash:6].[ext]',
                        // 配置图片导出后在dist文件夹中文件路径,这个地方可以是省略写在name里面
                        // outputPath:'img'
                    }
                }
            }
        ]
    }
}