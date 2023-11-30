let p = new Promise((resolve, reject)=>{
    let num1 = +prompt('enter number 1')
    let num2 = +prompt('enter number 2')
    if(num1 + num2 === 10)
        resolve(`${num1} + ${num2} is equal to 10`)
    reject(`${num1} + ${num2} is not equal to 10`)
})

p.then(
    (completed)=> {
        console.log(completed);
    },
    (rejected)=> {
        console.log(rejected);
    }).catch