 const http = require('http');  //內建套件直接用套件名稱，就抓的到了

 const server = http.createServer((req,res)=>{

    // 要輸出的檔頭
    res.writeHead(200,{
        'Content-Type': 'text/html; charset=utf-8'
        // 'Content-Type': 'text/html'
        // 'Content-Type': 'text/plain'  //要關掉cmd(ctrl+C)，再啟動，才完成變更
    });
    // 要輸出的內容
    res.end(`
        <meta charset"UTF-8">
        <h2>hello 12 您好</h2>
        <p>${req.url}</p>
    `);
});

//啟動
server.listen(3000);  