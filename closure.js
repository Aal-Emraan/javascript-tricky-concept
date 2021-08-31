function closure(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}


const clock1 = closure();
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = closure();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());