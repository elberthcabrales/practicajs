const firstOrderFunc = () =>{
    console.log("Hello, I am a First order function");
};

const higherOrder = (ReturnFirstOrderFunc) => {
    console.log("inside higher order function");
    return ReturnFirstOrderFunc();
};
higherOrder(firstOrderFunc);


// example of currying function
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6
