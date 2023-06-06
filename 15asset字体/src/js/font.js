import '../font/iconfont.css'
import '../css/index.css'
function createEle() {
    var ele = document.createElement('div')
    var span = document.createElement('span')
    span.className = 'iconfont icon-daka myclass'
    ele.appendChild(span)
    return ele
}
document.body.appendChild(createEle())