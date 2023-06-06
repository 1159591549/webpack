const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        // 获得项目路径，并指定打包后在项目的dist目录下
        path:path.resolve(__dirname,'dist'),
        // 指定打包之后将打包文件命名为build.js
        filename:'build.js'
    }
}