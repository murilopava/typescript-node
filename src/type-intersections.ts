interface Robot {
    material: string;
    fuel: number;
}

interface Human {
    name: string;
    age: number;
}

type Cyborg = Robot & Human;

const cyborg: Cyborg = {
    material: "ferro",
    age: 12,
    name: "miguel",
    fuel: 2
}

interface MyFetchOptions {
    printInput?: boolean;
    printTime?: boolean;
}

type RequestOptions = MyFetchOptions & RequestInit;

export function myFetch(input: string, options?: RequestOptions) {
    if (options?.printInput) {
        console.log("Input ", input);
    } 

    if (options?.printTime) {
        console.log("Time ", new Date().toDateString);
    }

    return fetch(input, options);
}

myFetch("http://localhost:3000/task", {
    
})