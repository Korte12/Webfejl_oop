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

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function() {
//     return this.name;
// };

// function Student(name, school) {
//     Person.call(this, name);
//     this.school = school;
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype);

// const student = new Student("Géza", "Bolyai");
// console.log("Név: " + student.getName() + " , Iskola: " + student.school);

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.hang = function() {
//     console.log("A", this.name + " hangot ad ki");
// };

// function Mammal(name) {
//     Animal.call(this, name); 
// }

// Object.setPrototypeOf(Mammal.prototype, Animal.prototype);

// Mammal.prototype.jar = function() {
//     console.log("A", this.name + " jár");
// };

// function Bird(name) {
//     Animal.call(this, name);  
// }

// Object.setPrototypeOf(Bird.prototype, Animal.prototype);

// Bird.prototype.repul = function() {
//     console.log("A", this.name + " repül");
// };

// const mammal = new Mammal("Kutya");
// mammal.hang(); 
// mammal.jar(); 

// const bird = new Bird("Veréb");
// bird.hang();   
// bird.repul();
