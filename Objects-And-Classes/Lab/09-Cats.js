function callCats(input){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
            }

            makeSound(){
                console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const animal of input) {
        let [name, age] = animal.split(' ');
        
        let cat = new Cat(name, age);
        cat.makeSound();
    }
}

callCats(['Mellow 2', 'Tom 5'])