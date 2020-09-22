// 規格、定義
class Person { //類別中可放：類別屬性、建構函式、方法
    
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
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
        // 寫法二：
    toString(){
        return this.toJSON() 
    }
}

    // 個體
    // const p1 = new Person('David',23);


    // console.log(p1); 
    // console.log(''+p1);  // 寫法二
    // console.log(p1.toJSON());  // 寫法一
    
    module.exports = Person; // node 匯出類別
    // exports = Person; // 也可以省略module
