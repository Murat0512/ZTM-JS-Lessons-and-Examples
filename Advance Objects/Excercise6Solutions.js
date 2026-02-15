//  Reference Type 

// obj1 = { value: 10}; 

// obj2 = obj1;

// obj3 = {value: 10}; 

// console.log(obj1===obj2);
// console.log(obj3 === obj1);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

//  Context 

// This definition is used for the environment of your element you are working with,  We know function is a window element 

// if we say  

// function a(){
//     console.log(this);
// }

// a();
// // In Node.js, the global object is the equivalent of the window object in a web browser. 
// // So it will show you the parent environment the element is in. 
// // This means 
//  window.a(); 
// //   Because a() is in window environment

//  Instantiation 

//  means we will make a use of the classes we create for other copies of the same class later on , so keep that in mind 

// Say we want to create players in different characters, wizard1 and wizard2 

// What we do is 

class Player {
    constructor (name,type) {
      this.name = name;
      this.type = type; 
    }
    introduce(){
        console.log(`Hello I am ${this.name} and I am a ${this.type}`
    )};
}

class Wizard extends Player{
    constructor(name,type)  {
        super(name,type)
    }
    play() {
        console.log(`Weee I am a ${this.type}`);

}
}

const wizard1 = new Wizard("Shelly","Sorcerer" );
const wizard2 = new Wizard("Demon", "Doomer");

console.log(wizard1.play());
console.log(wizard1.introduce());
console.log(wizard2.play());
console.log(wizard2.introduce());


