const express = require('express');

const app = express();

// 註冊樣版引擎
app.set('view engine', 'ejs');
// 設定views路徑 (選擇性設定)
// app.set('views', __dirname + '/../views');

// '/abc/deg' ，給兩層路由如何除錯？
app.get('/', (req, res)=>{
    // res.send('<h2>Hola </h2>');
    res.render('home',{name: 'Shinder'});
});

app.get('/json-sales', (req, res)=>{
    const sales = require(__dirname + '/../data/sales');
    // res.send(sales.constructor.name)// 進到這裏面，自動變array
    // res.json(sales);// 告訴用戶端瀏覽器，這是json
    res.render('json-sales', {sales})
});

app.get('/json-sales2', (req, res)=>{
    const sales = require(__direname + '/../data/sales');
    // 進到這裏面，自動變array
    //res.send(sales.constructor.name)
    res.render('abc/def/json-sales2',{sales});
    // 告訴用戶端瀏覽器，這是json
});

// 測試路由
app.get('/try-qs', (req, res)=>{
    res.json(req.query);
});

const parser = express.urlencoded

app.post('/try-post',(req, res)=>{
    res.json(req.body);
});

app.post('/try-post',(req, res)=>{
    res.json(req.body);
});

// res.end(); //content-type是text
// res.send();  //content-type是html
// res.render();  // 樣板字串
// res.json();  // 告訴用戶端瀏覽器，這是json
// 都會去寫檔頭，只能有一個執行，否則會出錯
// node程式啟動，會抓檔案進來?????
// 第一次抓的檔案已經在記憶體裡頭，抓到的內容是當下的內容

app.use(express.static(__dirname + '/../public'))
//使用靜態內容的資料夾

// app.use(express.static('public'));
// 檔案在專案資料夾內，才有辦法啟動
// 如果進入到src資料夾啟動，就會找不到檔案

app.use((req, res)=>{
    res
        .type('text/plain')
        .status(404)
        .send('找不到網頁');
});

app.listen(3000, ()=>{
    console.log('伺服器已啟動...');
})