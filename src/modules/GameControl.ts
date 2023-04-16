import Food from "./Food"
import ScorePanel from "./ScorePanel"
import Snake from "./Snake"

class GameControl {
    snake: Snake
    scorePanel: ScorePanel
    food: Food
    isLive = true
    direction: string = 'ArrowRight'
    constructor() {
        this.snake = new Snake()
        this.scorePanel = new ScorePanel()
        this.food = new Food()
        this.init()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()

    }
    //this指向有问题 解决方法：bind或箭头函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key)
        this.direction = event.key
    }
    run() {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                y = y - 10
                break;
            case 'ArrowDown':
                y = y + 10
                break;
            case 'ArrowLeft':
                x = x - 10
                break;
            case 'ArrowRight':
                x = x + 10
                break;

            default:
                break;
        }
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
        try {
            this.snake.X = x
            this.snake.Y = y
           
        } catch (e:any) {
            this.isLive = false
            alert(e.message)
        }
        //吃到食物后
        
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
}
export default GameControl