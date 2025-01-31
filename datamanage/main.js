/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} people
 * @returns {void}
 */
class DataManager {
/**
* @type {Person[]} 
*/
    #array
/**
 * @type {UpdateCallback}
 */
    #updateCallback
/**
 * 
 * @param {Person[]} yap 
 */
    constructor(yap = []){
        this.#array = yap
        this.#updateCallback = () => {}
    }

    /**
     * @param {UpdateCallback} callback
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback
        this.#updateCallback(this.#array)
        
    }

    /**
    * @param {Person} ember 
    */
    add(ember){
        this.#array.push(ember)
        this.#updateCallback(this.#array)
    }

    /**
    * @param {String} name 
    */
    filterName(name){
        const result = [];
        for(const element of this.#array){
            if(element.nev === name){
                result.push(element)
            }
            
        }
        this.#updateCallback(result)
    }

    /**
    * 
    * @param {Number} age
    */
    filterAge(age){
        const result = [];
        for(const element of this.#array){
            if(element.eletkor === age){
                result.push(element)
            }
        } 
        this.#updateCallback(result)
    }
}


class DataTable {
    /**
     * 
     * @param {DataManager} domci 
     */
    constructor(domci){
        const table = document.createElement("body")
        document.body.appendChild(table)

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)

        domci.setUpdateCallback((persons) =>{
            tbody.innerHTML = ""
            for (const sigma of persons) {
                const tr = document.createElement("tr")
                tbody.appendChild(tr)

                const nevC = document.createElement("td")
                nevC.innerHTML = sigma.nev
                tr.appendChild(nevC)

                const eletkorC = document.createElement("td")
                eletkorC.innerHTML = sigma.eletkor
                tr.appendChild(eletkorC)


            }
    
        })     

    }
}
const dataManager = new DataManager([{nev: "Feri", eletkor: 17}, {nev: "Teri", eletkor: 18}, {nev: "Gábor", eletkor: 16}])

const dataTable = new DataTable(dataManager)