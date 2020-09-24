const {Person,f1: func }=require('./person');
const  my = require('./person');

const p1 = new Person('David',23);

    console.log(p1); 
    console.log(''+p1); 
    p1.name = 'Bill'
    console.log(p1.toJSON());
    console.log(func(6));  
    
    console.log(Person === my.Person);

