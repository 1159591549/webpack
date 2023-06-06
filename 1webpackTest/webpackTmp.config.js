const path = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool:false,
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:[
            //         {
            //             loader:"css-loader"
            //         }
            //     ]
            // },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            esModule:false
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg)$/,
                type:'asset',
                generator:{
                    filename:'[name].[hash:6][ext]'
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:200 * 1024
                    }
                }
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'HtmlWebpackPlugin'
        })
    ]
}