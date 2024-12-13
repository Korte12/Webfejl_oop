const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor(obj) {
        this.firstname1 = obj.firstname1
        this.firstname2 = obj.firstname2
        this.lastname = obj.lastname
    }
    render(parentElement) {
        const row = document.createElement('tr')
        parentElement.appendChild(row)

        const firstn1 = document.createElement('td')
        firstn1.innerHTML = this.firstname1

        const firstn2 = document.createElement('td')
        firstn2.innerHTML = this.firstname2

        const lastn = document.createElement('td')
        lastn.innerHTML = this.lastname
        row.appendChild(lastn)
        row.appendChild(firstn1)

        if(this.firstname2 == undefined) {
            this.colSpan = 2
        }
        else {
            const firstn2 = document.createElement('td')
            firstn2.innerHTML = this.firstname2
            row.appendChild(firstn2)
            
        }
        parentElement.appendChild(row)
        


    }

}

function init() {
    const tbody = document.getElementById('tbodyId')
    for (const i of array) {
        const ember = new Person(i);
        ember.render(tbody);


    }
}

init();
