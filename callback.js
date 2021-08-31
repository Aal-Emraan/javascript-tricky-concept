function greet(name,greetHandler){
    // console.log(name());
    greetHandler(name)
}

const names = ['tim', 'tom', 'tornado', 'taifun'];
const info = {name: 'aal emraan', age: 23, occupation: 'student'};

function goodmorning(name){
    console.log('good morning!', name);
}
function goodnoon(name){
    console.log('good afternoon!', name);
}
function goodevening(name){
    console.log('good evening!', name);
}
greet("aal emraan",goodmorning);
greet("aal emraan",goodnoon);
greet("aal emraan",goodevening);


// Check length of a function. means how much parameter it has.

function nums(num1,num2,num3,num4){
    return num1+num2+num3+num4
}


console.log(nums(1,2,3,4))
console.log(nums.length)
console.log(typeof null)