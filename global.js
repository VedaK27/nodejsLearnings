//Global object

console.log(global) ;

setTimeout(() => {
    console.log("in the timeout") ;
    clearInterval(int)
}, 5000);

const int = setInterval(() => {
    console.log("In the interval") ;
} , 1000)

console.log(__dirname) ;
console.log(__filename) ;