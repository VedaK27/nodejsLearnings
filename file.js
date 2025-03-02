const fs = require('fs')  ;

//reading a file --> it is an asynchronus function
// fs.readFile('./docs/blog1.txt' , (err,data)=>{
//     if(err){
//         console.log(err) ;
//     }
//     console.log(data.toString()) ;
// }) ;

// console.log("Last Line") ;


//Writing a file --> also asynchronus

// fs.writeFile('./docs/blog2.txt', "I like dolphins" , ()=>{
//     console.log("File was written") ; // cretes blog2.txt if it does not exists ohterwise overwrites the contents
// }) ;

//directories
// if (!fs.existsSync('./assest')){
//     fs.mkdir('./assest' , (err)=>{
//         if(err)
//         {
//             console.log(err) ;
//         }
//         else{
//             console.log("Folder named assets was created !") ;
//         }
        
//     })
// }
// else{
//     fs.rmdir('./assest' , (err)=>{
//        if(err){
//         console.log(err) ;
//        } 
//        console.log("File was deleted !") ;
//     })
// }

// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt' , (err)=>{
//        if(err)
//         {
//             console.log(err) ;
//         } 
//         console.log("File was deleted!") ;
//     })
// } 