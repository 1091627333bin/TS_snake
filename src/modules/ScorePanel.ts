
class ScorePanel {
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    constructor(maxLevel: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if(this.score % 1 ===0){
            this.addLevel()
        }
    }
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }

    }
}
export default ScorePanel