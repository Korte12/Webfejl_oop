class ArrayList {
    /**
     * @type {Number}
     */
    #length
    #obj

    get Count(){
        this.#length

        return this.#length
    }

    constructor() {
        this.#length = 0;
        this.#obj = {};
    }

    Add(item) {
        const index = this.#length; //Elkérjük és eltároljuk a hosszát a példánynak
        this.#obj[index] = item //Beállitjuk az index tulajdonságnak a bemeneti paramétert
        Object.defineProperties(this, index, {
        
            get: function() {
               return this.#obj[index]     
            },
            set: function(value) {
                this.#obj[index] = value

            }
            
        }) 
        this.#length++; //Hossz tulajdonság értékét inkrementáljuk
        

    }
    
    Clear(){ //Hosszt le 0-zuk objektumot üritjük
        this.#length = 0;
        this.#obj = {}
    }

}

const csirke = {}
csirke.a = "def"
csirke[0] = "yyap"
csirke["nev"] = "Fero"
console.log(csirke);


Object.defineProperty //1. objektum érték, 2. string, 3. descriptor

const alma = {}
Object.defineProperty(alma, "nev", {
   value: "Fero",
   writable: true   
})

alma.nev = "asd" 
console.log(alma)


   

