//定义食物类
class Food {
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }
    //获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft
    }
    //获取食物y轴坐标的方法
    get Y() {
        return this.element.offsetTop
    }
    change() {
        let x = Math.round(Math.random() * 29) * 10
        let y = Math.round(Math.random() * 29) * 10
        this.element.style.left = x + 'px'
        this.element.style.top = y + 'px'
    }
}
export default Food