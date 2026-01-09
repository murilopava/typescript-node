
interface Person {
    name: string;
    age: number;
}
interface Dog {
    name: string;
    breed: string;
}
interface House {
    address: string;
    size: number; 
}

function generate(type: "person"): Person;
function generate(type: "house"): House;
function generate(type: "dog"): Dog;
function generate(type: "person" | "house" | "dog") {
    switch(type) {
        case "person": return {
            name: "Murilo", age: 18
        }
        case "house": return {
            address: "", size: 0
        }
        case "dog": return {
            name: "Fernando", breed: "border cooler"
        }
    }
}

const house = generate("house")



interface Component { id: number, label: string};

interface Button extends Component {
    style: string;
}
interface SelectMenu extends Component {
    options: string[];
}
enum InputType {
    string,
    number,
    Date,
    Email,
    Password
}
interface Input extends Component {
    type: InputType
}

function buildComponent(id: number, label: string, style: string): Button;
function buildComponent(id: number, label: string, options: string[]): SelectMenu;
function buildComponent(id: number, label: string, type: InputType): Input;
function buildComponent(id: number, label: string, arg: string | string[] | InputType) {
    if (typeof arg === "string") {
        return {id, label, style: arg};
    }
    if (Array.isArray(arg)) {
        return {id, label, options: arg};
    }
    return {id, label, type: arg};
}

const button = buildComponent(2, "carlos", InputType.Email);