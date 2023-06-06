import '../css/login.css'
import '../css/login.less'
function createDom() {
    var elem = document.createElement('h2')
    elem.innerHTML = '马鞍山百助'
    elem.className = 'title'
    document.body.appendChild(elem)
    return elem
}
createDom()