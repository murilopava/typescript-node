import test from "node:test";
import { hasUncaughtExceptionCaptureCallback } from "process";

function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2))
    }
}


class Dog {
    bark() {
        console.log("Woof");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
        return;
    } 
    animal.meow();
}



interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
        return;
    }
    animal.fly()
}


interface Chef {
    cook(): void;
    certificate: string; 
}

interface Teacher {
    teach(): void;
    diploma: string;
}

interface Driver {
    drive(): void;
    license: string;
}

type professionals = Chef | Teacher | Driver;

function isChef(professional: professionals): professional is Chef {
    return (professional as Chef).cook() !== undefined;
}
function isTeacher(professional: professionals): professional is Teacher {
    return (professional as Teacher).teach() !== undefined;
}
function isDriver(professional: professionals): professional is Driver {
    return (professional as Driver).drive() !== undefined;
}


class Profissionais {
    isChefe(): this is Chefe {
        return this instanceof Chefe;
    }
    isProfessor(): this is Professor {
        return this instanceof Professor
    }
    isMotorista(): this is Motorista {
        return this instanceof Motorista
    }
}

class Chefe extends Profissionais {
    public cozinhar(): void {}
    public certificado: string = "Bom"
}

class Professor extends Profissionais {
    public ensinar(): void {};
    public diploma: string = "Português";
}

class Motorista extends Profissionais {
    public dirigir(): void {};
    public licenca: string = "123123423"
}

function execute(profissional: Profissionais) {
    
    switch (true) {
        case profissional.isChefe(): {
            profissional.cozinhar();
            break;
        }

        case profissional.isProfessor(): {
            profissional.ensinar();
            break;
        }

        case profissional.isMotorista(): {
            profissional.dirigir();
            break;
        }
    }
}