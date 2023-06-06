import oImgSrc from '../img/icon.png'
import '../css/img.css'
function packageImg() {
    // 创建一个容器元素
    const elem = document.createElement('div')
    // 创建img标签 设置src属性
    const oImg = document.createElement('img')
    oImg.width = 400
    // require返回的是图片对象，通过default获取路径
    // oImg.src = require('../img/icon.png').default
    // oImg.src = require('../img/icon.png')
    oImg.src = oImgSrc
    elem.appendChild(oImg)
    // 设置背景颜色
    const oBgImg = document.createElement('div')
    oBgImg.className = 'bgBox'
    elem.appendChild(oBgImg)
    return elem
}
document.body.appendChild(packageImg()) 