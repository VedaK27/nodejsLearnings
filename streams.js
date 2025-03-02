const fs=require('fs') ;

const readStream = fs.createReadStream('./docs/blog3.txt') ;
const writeStream = fs.createWriteStream('./docs/blog4.txt')


// readStream.on('data', (chunk) =>{
//     console.log("-----New Chunk-----------") ;
//     console.log(chunk.toString()) ;

//     writeStream.write(`\n-----New Chunk----------`) ;
    
//     writeStream.write(chunk) ;

// }) ;


readStream.pipe(writeStream) ;

