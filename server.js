const http = require('http') ;
const fs = require('fs') ;
const _= require('lodash') ;

const server = http.createServer((req , res) =>{
    // console.log(req.url , req.method) ;

    //set header content type 
    res.setHeader('Content-Type' , 'text/html') ;
    // res.write(`<p>Hello P tag 1</p>`);
    // res.write("<p>Hello P tag 2 with </p>") ;

    //lodashh 
    const num = _.random(0,20) ;
    console.log(num) ;
    let path = './views' ;
    switch(req.url){
        case '/':
            path +='/index.html' ;
            res.statusCode = 200 ;
            break ;
        case '/about':
            path +='/about.html' ;
            res.statusCode=200;
            break ;
        case '/about-us':
            res.statusCode = 301 ;
            res.setHeader('Location' , './about')
            break ;
        default :
            path += '/404.html' ;
            res.statusCode = 404 ;
            break ;
    }
    fs.readFile(path , (err,data)=>{
        if(err)
        {
            console.log(err) ;
            res.end() ;
        }
        else{
            // res.write(data) ;
            // res.end() ;

            res.end(data) ;
        }
        
    })

    
});

server.listen(3000 , 'localhost' , ()=>{
    console.log("Listening for requests on port 3000")
});

