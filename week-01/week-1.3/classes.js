class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount;
        this.speaks = speaks;
    }

    speak(){
        console.log(this.speaks);
    }
     
}

let dog = new Animal("Dog", 4, "Bhow Bhow");        // create object
let cat = new Animal("Cat", 4, "Meow Meow");

cat.speak();         // call function on objects
