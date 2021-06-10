export default class Snake {
    head: HTMLElement // 蛇头
    bodies: HTMLCollection //蛇身
    element: HTMLElement //蛇本身

    constructor() {
        this.head = document.querySelector("#snake > div")
        this.bodies = document.getElementById("snake").getElementsByTagName("div")
        this.element = document.getElementById("snake")
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number){
        if (value < 0 || value >= 300)
            throw new Error("🐍撞墙了") 
        this.head.style.left = value + "px"
    }

    set Y(value: number){
        if (value < 0 || value >= 300)
            throw new Error("🐍撞墙了")  
        this.head.style.top = value + "px"
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}