export default class ScorePannel {
    score = 0;
    level = 1;

    scoreEle = document.getElementById("score");
    levelEle = document.getElementById("level");

    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score.toString()
        if (this.score % 10 === 0){
            this.raiseLevel();
        }
    }

    raiseLevel(){
        if (this.level < 10) {
            this.level++
            this.levelEle.innerHTML = this.level.toString();
        }
    }

}