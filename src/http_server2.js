 const http = require('http'); 

 const fs = require('fs');

 const server = http.createServer((req,res)=>{
// src/http_server2.js // 注意非同步問題


    fs.writeFile(
        __dirname+'/../data/headers01.txt', 
        JSON.stringify(req.headers), 
            error=>{
        if(error){
            res.end('Fail:'+ error);
        }else{
            res.end('OK');
        }
    })
});

//啟動
server.listen(3000);  //阜號重覆，會有問題