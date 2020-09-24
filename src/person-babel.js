class Person {
    // 建構函式
    constructor(name='noname', age=20) {
        this.name = name;
        this.age = age;
    }

    toJSON(){
        console.log('--- toJSON()');
        return JSON.stringify({
            name: this.name,
            age: this.age,
        })
    }
    toString(){
        console.log('--- toString()');
        return this.toJSON();
    }
}

export default Person;
// 只匯出一個東西時，用export default
