import './title'
// 如果hot为true期望当前模块开启热更新
if (module.hot) {  
    // 当前那些模块开启热更新,第二个参数是热更新后的回调函数
    module.hot.accept(['./title.js'],() => {
        console.log('title模块更新了');
    })
}