const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 这个插件在webpack中默认自带，不需要重新引入
const {DefinePlugin} = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode:'development',
    // 打包后代码可读性更高
    entry:'./src/index.js',
    devtool:'inline-source-map',
    output:{
        // 获得项目路径，并指定打包后在项目的dist目录下
        path:path.resolve(__dirname,'dist'),
        // 指定打包之后将打包文件命名为build.js
        filename:'js/build.js',
        publicPath:'./'
        // 配置图片打包的路径,注意这个地方后缀名[ext]会把前面的.也一并匹配出来，因此需要注意一下
        // assetModuleFilename:"img/[name].[hash:4][ext]"
    },
    resolve:{
        // 用于配置文件在引入的时候默认匹配的方式，会根据具体文件夹下的文件后缀进行匹配
        extensions:['.js','.json','.ts','.jsx','.vue'],
        // 路径简化,用于配置路径
        alias:{
            // 此时@表示src文件夹
            '@':path.resolve(__dirname,'src')
        }
    },
    // 屏蔽.browserslistrc文件
    // target:'web',
    // 配置项目为热更新
    devServer:{
        hot:true,
        proxy:{
            '/api':{
                target:'https://api.github.com',
                pathRewrite:{
                    "^/api":''
                },
                // changeOrigin默认是false：请求头中host仍然是浏览器发送过来的host
                // 设置成true：发送请求头中host会设置成target·
                changeOrigin:true
            }
        }
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
            },
            {
                test:/\.js$/,
                // 项目中引入的一些插件node_module可能也做了一些JS语言的处理，会和当前我们引入的插件存在冲突
                // 这个地方通过声明只使用当前项目中自己引入的插件来规避这个问题
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.ts$/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // 配置打包后页面的标题
            title:'html-webpack-plugin',
            template:'./public/index.html'
        }),
        
        new DefinePlugin({
            // 这个地方使用'"./"'原因是因为要BASE_URL表示"./"字符串，不然的话会变成./,在页面拼接的时候无法显示
            BASE_URL:'"./"'
        }),
        new VueLoaderPlugin()
    ]
}