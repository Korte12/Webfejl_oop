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

}