const title = '前端'
const fun = () => {
    console.log(title);
}
const p1 = new Promise((resolve,reject) => {
    console.log(111);
})
console.log(p1);
fun()