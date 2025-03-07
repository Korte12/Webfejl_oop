/**
 * Manageli és rendereli a formunkat a fieldjeink seg
 */
 
class FormController {
    /**
     * @type {Manager}
     */
    #manager;
    /**
     * @type {FormField[]}
     */
    #formFieldArray;
    /**
     *
     * @param {Manager} manager
     * @param {{label:string, type:string, id:string, optional?: boolean}} fieldConfig
     */
 
    constructor(manager,fieldConfig) {
        this.#formFieldArray = [];
        this.#manager = manager
 
        const form = document.createElement('form')
        document.body.appendChild(form);
 
        for(const field of fieldConfig) {
            const formfield = new FormField(field.id,field.label,field.type,field.optional)
            this.#formFieldArray.push(formfield);
            form.appendChild(formfield.getDivElement())
        }
        const sendButton = document.createElement('button')
        sendButton.textContent = "Elküld"
        form.appendChild(sendButton);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if(this.#validateFields()) {
                const value = this.#getValueObject();
                const card = new Card(value.cardtext, value.right)
                this.#manager.add(card)
                e.target.reset()

 
            //elkerjuk a fieldek értékeit
            //példányosítunk egy card
            //hozzáadjuk a managerhez
           
            }
        })
    }
    /**
     * validalja a fildeket es megjeleniti a hibauzenetet
     *
     * @returns {boolean} igazzal ter vissza ha minden field helyesen van
     * töltve
     */
    #validateFields(){
        let valid = true
 
        for(const formfield of this.#formFieldArray){
            let valid = true
            formfield.error = ""
            if(!formfield.optional) {
                if(formfield.value == ""){
                    formfield.error = "A mezo kitoltese kotelezo"
                    valid = false
                }
            }
        }
        return valid;
    }
    /**
     * Vegigmegy a formFielden es id-hoz rendeli az ertekeket
     * @returns {{cardtext string. right: boolean}}
     * formfield
     */
    #getValueObject() {
        const result = {};
        for(const formfield of this.#formFieldArray) {
            result[formfield.id] = formfield.value
        }
       
        console.log(result)
        return result;
    }
 
 
}
 
 
/**
 * ez fogja tartalmazni a labeleket
 * inputokat, errorspanokat
 *
 * pl : text input alatta error
 */
class FormField {  
    /**
     * @type {string}
     */
    #id
    /**
     * @type {string}
     */
    #type
    /**
     * @type {boolean}
     */
    #optional
    /**
     * @type {HTMLInputElement}
     */
    #inputfield
    /**
     * @type {HTMLLabelElement}
     */
    #labelElement
    /**
     * @type {HTMLSpanElement}
     */
    #errorField
 
    get id() {
        return this.#id
    }
 
    /**
     * ha az input tipusa checkbox akkor visszater
     * azzal hogy be van pipa amugy nem
     * @returns {boolean|string}
    */
 
    get value() {
        if(this.#type === "checkbox") {
            return this.#inputfield.checked;
        }
        return this.#inputfield.value
    }  
    /**
     *
     * Ha opcionalis akkori gaz
     */
    get optional() {
        return this.#optional;
    }
    /**
     * beiallitja az errordiv tartalat
     */
    set error(value) {
        this.#errorField.textContent = value;
    }
 
    /**
     *
     * @param {string} id
     * @param {string} labelContent
     * @param {string} type
     * @param {boolean?} optional
     */
    constructor(id,labelContent,type,optional = false) {
        this.#id = id;
        this.#type = type
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id,labelContent);
        this.#inputfield = Gomszab.makeInput(id,type);
        this.#errorField = Gomszab.makeErrorField(labelContent)
       
    }
 
    /**
     * Létrehoz egy div elemenet amiben bene van az iput a label és az
     * errorspant
     * @returns {HTMLDivElement}
     */
    getDivElement() {
 
        const div = Gomszab.makeDiv([this.#labelElement, this.#inputfield, this.#errorField])
        return div;
 
    }
}
 