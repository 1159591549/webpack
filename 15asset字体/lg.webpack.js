const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        // 获得项目路径，并指定打包后在项目的dist目录下
        path:path.resolve(__dirname,'dist'),
        // 指定打包之后将打包文件命名为build.js
        filename:'build.js',
        // 配置图片打包的路径,注意这个地方后缀名[ext]会把前面的.也一并匹配出来，因此需要注意一下
        // assetModuleFilename:"img/[name].[hash:4][ext]"
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
                type:'asset',
                // 配置需要复制图片的路径
                generator:{
                    filename:'img/[name].[hash:4][ext]'
                },
                parser:{
                    // 配置需要复制的大小
                    dataUrlCondition:{
                        maxSize:50 * 1024
                    }
                }
            },
            {
                test:/\.(ttf|woff2?)$/,
                // 使用asset/resource将字体打包时完全复制到dist的font目录下面
                type:'asset/resource',
                generator:{
                    filename:'font/[name].[hash:4][ext]'
                }
            }
        ]
    }
}