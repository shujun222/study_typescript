import Food from './Food'
import Snake from './Snake'
import ScorePannel from './ScorePannel'

export default class GameController {
    food: Food
    snake: Snake
    scorePannel: ScorePannel
    direction = "ArrowRight"
    interval: unknown  //: NodeJS.Timeout  // 这是什么古怪类型

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.scorePannel = new ScorePannel()

        this.init()
    }

    init() {
        document.addEventListener("keydown", (event) => {
            // ArrowRight ArrowLeft ArrowDown ArrowUp
            this.direction = event.key
            this.snakeRun()
        })

        this.interval = setInterval(this.snakeRun.bind(this), 500)
    }

     
    snakeRun() { 
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
        }
        
    }
}