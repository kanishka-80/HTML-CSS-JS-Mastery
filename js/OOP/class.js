class student{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }
    // adding methods
    study(){
        console.log(`${this.name} is studing js`)
    }
}
let s1=new student("kanishka",20);
let s2=new student("shivansh",21);
//  Using methods
s2.study();  
console.log(s1);
console.log(s2);

//  Inheritence

class Animal{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
    // method overiding
    makesound(){
        console.log("makes sound of animal");
    }
}

class Dog extends Animal{
    bark(){
        console.log("barking");
    }
    makesound(){
        console.log("dog can bark");
    }
}
const dog= new Dog();
dog.eat();
dog.sleep();
dog.bark();
dog.makesound();

// to inherit the property of parent class

class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class cat extends animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed=breed;
    }
}

const c=new cat("simba",2,"p");
console.log(c);

//  