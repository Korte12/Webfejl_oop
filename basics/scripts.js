// function Player(nickname,) {
//     this.nickname = nickname
//     this.playedMatch = 0
// }
// Player.prototype.play = function() {
//     this.playedMatch++;
//     console.log(this.nickname, this.playedMatch)
// }

// Player.prototype.getTierLevel = function() {
//     if(this.playedMatch <= 3){
//         return 'a'
//     }
//     else if(this.playedMatch < 3 && this.playedMatch <= 5) {
//         return 'b'
//     }
//     else{
//         return 'c'
//     }
// }
class Player{
    constructor(nickname) {
        this.nickname = nickname
        this.playedMatch = 0
    }

    play() {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch)
    }

    getTierLevel() {
        Player.prototype.getTierLevel = function() {
            if(this.playedMatch <= 3){
                return 'a'
            }
            else if(this.playedMatch < 3 && this.playedMatch <= 5) {
                return 'b'
            }
            else{
                return 'c'
            }
         }
    }
}

const gomszab = new Player("gomszab")

console.log(gomszab)
gomszab.play()
console.log(gomszab.getTierLevel());


