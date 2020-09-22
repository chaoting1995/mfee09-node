const Person =require('./person');
const Person2 =require('./person');

const p1 = new Person('David',23);

    console.log(p1); 
    console.log(''+p1); 
    p1.name = 'bill'
    console.log(p1.toJSON());  
    console.log(Person===Person2);  

