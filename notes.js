//if else
//code1

 
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}


//switch
//code2

//converting the previous if-else example with switch-case
  
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }
 
 //code3
 //assignment
 
 var age=10;
 if (age>=65) {
    console.log("You get your income from your pension")
 } else if(age<65 && age>=18){
    console.log("Each month you get a salary")
 } else if(age<18){
    console.log("You get an allowance")
 }else{
    console.log("The value of the age variable is not numerical")
 }
 

 //switch assignment
  
 var day="Sunday"
 switch(day){
    case'Monday':
    console.log("Play Cricket");
    break;
    case'Tueday':
    console.log("gaming");
    break;
    case'Wednesday':
    console.log("prayer");
    break;
    case'Thursday':
    console.log("gym");
    break;
    case'Friday':
    console.log("exercise");
    break;
    case'Satday':
    console.log("conversation");
    break;
    case'Sunday':
    console.log("chill");
    break;
    default:
        console.log("There is no such day")
 }

 //For loops
 // structure :     for(){};

 eg
 for(i=1;i<=10;i++) {
    console.log("Hello Mr.",i)
 } 

 //While loops
  syntax: while(condition){ code};
  //eg- 
  var counter=3;
  while(counter>0){
    console.log(counter);
    counter=counter-1;
    }  

 //objects
 //eg
 // syntax : var objectname = {}
 var house={window:13,door:5,rooms:4,kitchen:1}
 // alt syntax
 var house={}
 house.window=13 //or house["window"]=13
 house.door=5 //or house["door"]=5
 house.rooms=4 //or house["rooms"]=4
 house.kitchen=1 //sor house["kitchen"]=1
  
  //calling a property
 console.log(house.window) 

 // OBJECT METHODS: nothing but a function embedded in an obj
 // eg
 //example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

/* OUTPUT: 
{ mileage: 98765, color: 'red' }
{
  mileage: 98765,
  color: 'red',
  turnTheKey: [Function (anonymous)],
  lightsOn: [Function (anonymous)]
} */
/* OUTPUT: The engine is running
The lights are on */



 // try throw catch practice ""DOUBT"
 
 function addTwoNums(a,b){
    try{
         if (typeof(a)!='number'){
              throw new ReferenceError('first argument is not a number')
         }else if(typeof(b)!='number'){
              throw new ReferenceError('second argument is not a anumber')
         }else{
              console.log(a+b);
         }
    }
    catch(err){
         console.log("Error!",err);
    }
}
var p=addTwoNums(5,'5');
console.log('still works')

// OJBECT CREATE SYNTAX: var newobjectname = Object.create(classname);

// CLASSES AND INHERITANCE

//eg
class Love{
    constructor(care,respect,understanding){  //here constructor is also a function
               this.care=care;                // but function keyword isn't used
               this.respect=respect;
               this.understanding=understanding;
                
    }
    howlove(){
        console.log("beautiful pair");
       }
       
}

// to build new instance of a class

var AdiMiku=new Love('99%','100%','99%');
console.log(AdiMiku);
// to inherit a subclass from a class we use extend keyword
// syntax: class B extends A ; here B is subclass, A is superclass

// here I make a subclass baby from class Love

class baby extends Love{
  constructor(bonding,intimacy,care,respect,understanding){
    super(care,respect,understanding) //super is used to specify what property gets  
    this.bonding=bonding;             //inherited from the super-class in the sub-class.
    this.intimacy=intimacy;
  }
}
var Siku=new baby('100%','100%');
console.log(Siku);

// DESIGNING OO PROGRAM

class Animal{
    constructor(color='yellow',energy=100){
        this.color=color;
        this.energy=energy;
    }
    isActive(){
       if(this.energy>0){
        energy-=20;
        console.log('Energy is decreasing, currently at:', this.energy)
       }else if(this.energy==0){
        this.sleep();
       }
    }
    sleep(){
        this.energy+=20;
        console.log('energy is increasing, currently at', this.energy)
    }
    getColor(){
       console.log(this.color); 
    }

}
class Cat extends Animal{
    constructor(sound='purr',canJumpHigh=true,canClimbTrees=true,color,energy){
        super(color,energy);
        this.sound=sound;
        this.canClimbTrees=sound;
        this.canJumpHigh=sound;

    }
     makesoound(){
        console.log(this.sound);
     }
}

class Bird extends Animal{
    constructor(sound='chirp',canFly = true, color, energy){
        super(color,energy);
        this.sound=sound;
        this.canFly=canFly;
    }
    makesoound(){
        console.log(this.sound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!