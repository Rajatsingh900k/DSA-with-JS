// An object is an unordered collection of key-value pairs.
// The key must either be a string or symbol data type where as the value can be of any data type.

// To retrieve a value, you can use the coresponding key.
// This can be achieved using the dot(.) notaion or bracket( [] ) notation.

// Unlike array, an object is not iterable, you cannot use it with a for of loop.

const obj={
    firstName:'Rajat',
    lastName:'Singh',
    age:22,
}

console.log(`Using dot notation:\nFirst Name: ${obj.firstName}\nLast Name: ${obj.lastName}\nage: ${obj.age}`);//using dot notation to access an element.
console.log(`Using Bracket notation:\nFirst Name: ${obj['firstName']}\nLast Name: ${obj['lastName']}\nage: ${obj['age']}`);//using bracket notation to access an element.

//adding ket-value pairs to the object
obj.skill="C++";
console.log(obj);

//deleting key-value pair
delete obj.skill;
console.log(obj);

//defining function with in the object...

const obj2={
    name:'Rajat Singh',
    age:22,
    sayMyName: function(){
        console.log(`My name is ${this.name}`);
    }
}

obj2.sayMyName();

//Time Complexities:-
//1. Insert-O(1)
//2. Remove-O(1)
//3. Access-O(1)
//4. Search-O(n)
//5. Object.keys()-O(n)
//6. Object.values()-O(n)
//7. Object.entries()-O(n)