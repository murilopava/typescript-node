abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    makeSound(): void {
        console.log(`${this.name} esta fazendo um som`);
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    makeSound(): void {
        console.log(`${this.name} esta latindo`);
    }
}

const dog = new Dog("Bob", 3, "Golden");
dog.makeSound()