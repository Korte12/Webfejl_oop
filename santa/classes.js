class Factory{
    constructor() {
        this.manolist = [] // Létrehozzuk a manólista tulajdonságot
    }

addMano(companion) { //A manólist az osztályon belül elérhető ezért kell a companion
    this.manolist.push(companion)
    createRow(companion)
}

 // TODO 1, 2, 3, 4, 9, 10
}

class Companion{
    constructor(id, kernev, veznev, reszleg) {
        this.id = id
        this.kernev = kernev
        this.veznev = veznev
        this.reszleg = reszleg

        this.productlist = [] // Nem kötelező megadni ezért nem kell a propertybe irni
    }

        getName() {
        return this.veznev + " " + this.kernev // Azért igy mert a class tulajdonságaira hivetkozunk

        }

        productAdd(product) {
            this.productlist.push(product)
        }  
}

// TODO 5


