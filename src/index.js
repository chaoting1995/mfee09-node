const express = require('express');

const app = express();

// 註冊樣版引擎
app.set('view engine', 'ejs');
// 設定views路徑 (選擇性設定)
// app.set('views', __dirname + '/../views');

app.get('/abc/def', (req, res)=>{
    // res.send('<h2>Hola </h2>');
    res.render('home',{name: 'Shinder'});
});



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