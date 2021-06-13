import Food from './Food'
import Snake from './Snake'
import ScorePannel from './ScorePannel'

export default class GameController {
    food: Food
    snake: Snake
    scorePannel: ScorePannel

    // 蛇当前前进方向
    direction = "ArrowRight"
    // 蛇多久走一步呢？游戏级别越高，蛇儿走的越快
    interval: NodeJS.Timeout  // NodeJS.Timeout  // 这是什么古怪类型
    // 蛇不能反方向走
    reverseDirection = {"ArrowRight":"ArrowLeft", "ArrowLeft":"ArrowRight", "ArrowDown":"ArrowUp", "ArrowUp":"ArrowDown", }

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePannel = new ScorePannel()

        this.init()
    }

    init() {
        // 监听方向控制
        document.addEventListener("keydown", (event) => {
            if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(event.key) > -1) {
                // 不让你掉头
                if (this.reverseDirection[this.direction] === event.key) {
                    return
                }
                
                // 方向合法，你走一步&吃啊
                this.direction = event.key
                this.runAndEatFood()
            }
        })

        // 初始蛇的定时器
        this.interval = setInterval(this.runAndEatFood.bind(this), 330-this.scorePannel.level*30)
    }

     
    runAndEatFood() { 
        // 小蛇蛇往前迈一步 this.snake.setX改变位置，同时有撞墙检测 & 咬自己检测
        try {
            switch (this.direction) {
                case "ArrowRight":
                    this.snake.X += 10 
                    break;
                case "ArrowLeft":
                    this.snake.X -= 10
                    break;
                case "ArrowDown":
                    this.snake.Y += 10
                    break
                case "ArrowUp":
                    this.snake.Y -= 10
                    break
                default:
                    break;
            }
        } catch (e) {
            alert("Game Over: " + e.message)
            clearInterval(this.interval)
            return
        }

        //检测是否吃到了事物
        if (this.snake.X===this.food.X && this.snake.Y===this.food.Y) {
            this.food.changePosition()
            this.snake.addBody()

            // 是否升一级啦？
            let isNewLevel = this.scorePannel.addScore()
            // 升级后重新设置定时器，加快速度
            if (isNewLevel) {
                clearInterval(this.interval)
                this.interval = setInterval(this.runAndEatFood.bind(this), 330-this.scorePannel.level*30)
            }
        }
    }
}