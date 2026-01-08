class Person {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }
    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private name: string;
    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }
    public introduce(): void {
        console.log(`Eu sou ${this.name} e eu tenho ${this.getAge()} anos de idade.`)
    }
}