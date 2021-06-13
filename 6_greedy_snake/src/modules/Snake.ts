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
        
        // 移动身体，再移动蛇头    
        this.moveBody(value, this.Y) 
        this.head.style.left = value + "px"
    }

    set Y(value: number){
        if (value < 0 || value >= 300)
            throw new Error("🐍撞墙了")  
        
        // 移动身体，再移动蛇头    
        this.moveBody(this.X, value)    
        this.head.style.top = value + "px"
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div><div></div><div></div>")
    }

    // 身体移动
    moveBody(headX: number, headY: number){
        for (let i = this.bodies.length-1; i > 0; i--) {
            let lastDiv = this.bodies[i-1] as HTMLElement;
            let lastDivX = lastDiv.style.left
            let lastDivY = lastDiv.style.top;

            //给当前div赋值为上一个div的位置
            (this.bodies[i] as HTMLElement).style.left = lastDivX;
            (this.bodies[i] as HTMLElement).style.top = lastDivY;
            
            // 如果当前div的位置被蛇头将要咬到
            if (headX+"px"===lastDivX && headY+"px"===lastDivY) {
                throw new Error("傻蛇，你咬到自己了`")
            }

        }
    }
}