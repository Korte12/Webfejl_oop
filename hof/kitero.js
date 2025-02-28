const fv1 = (a,b) => {
    const osszeg = a + b
    return osszeg
}

const fv2 = (a,b,cb) => {
    const v1 = cb(a,2)
    const v2 = cb(b,4)
    const oszz = cb(v1,v2)
    return oszz
}

const fv3 = (operator) => {
    if (operator === '-') {
        return (a,b) => {
            return a-b;
        }
    }

    if (operator === "*2") {
        const multi = 2;
        return(a,b) => {
          return multi*(a+b)
        }
    }
}

const fv4 = fv3('-')

const res1 = fv2(5,7,(a,b) =>{
    const osszeg = a + b
    return osszeg
})

const res2 = fv2(5,7,fv1)
const res3 = fv2(5,7,fv3('-'));
const res4 = fv2(5,7,fv3('*2'));

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)

console.log(fv1(3,5))
console.log(fv4(5,7))

