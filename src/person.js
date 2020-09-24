// 規格、定義
class Person { //類別中可放：屬性、建構函式、方法
    
    // 不可在此宣告let
    // 建構函式
    // 透過類別建立物件
    constructor(name='noname', age=20) {  // 預設值
    this.name = name;
    this.age = age;
    // 把區域變數的值設定給屬性
    }

    // 寫法一：
    toJSON(){
        // console.log('--- toJSON()'); //除錯
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
        // 寫法二：
    toString(){  //預設功能
        // console.log('--- toString()');  //除錯
                return this.toJSON() 
    }
}


// console.log('---1');

    // 個體
    // const p1 = new Person('David',23);


    // console.log(p1); 
    // console.log(''+p1);  // 寫法二(這個是三小?不是很懂)
    // console.log(p1.toJSON());  // 寫法一
   
    // node 匯出類別
    module.exports =  {
        Person,
        f1: a=>a*a,
    };
    // exports = Person; // 也可以省略module