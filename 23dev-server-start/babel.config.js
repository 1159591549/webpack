module.exports = {
    presets:[
        [
            '@babel/preset-env',
            {
                // useBuilIns有三个值
                // false:默认值，不对当前的JS处理做polyfill填充
                // usage:依据用户源代码当中所使用到的新语法进行填充
                // entry:会根据browserslistrc进行填充，把匹配出来的浏览器可能需要的js语法都进行转换
                useBuiltIns:'usage',
                // 默认情况下corejs使用的是版本2，需要设置成3才能正常修改
                corejs:3
            }
        ]
    ]
}