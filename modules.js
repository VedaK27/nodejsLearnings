const xyz = require('./people') ; // this get the value of module.exports

console.log(xyz.people) ; // this will print hello since module.exports="hello" :)
console.log(xyz.age) ;

const {people , age} = require('./people') ;

console.log(people) ; // this will print hello since module.exports="hello" :)
console.log(age) ;

const os = require('os') ;

// console.log(os) ;
console.log(os.platform() , os.homedir()) ;



