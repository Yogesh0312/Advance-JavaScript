export default function () {
    console.log("Hello");
}

export let message = "ES6 Modules";

export function user(name) {
    console.log(`Hello ${name}`);
}

export class test {
    constructor() {
        console.log("Constructor method")
    }
}


// export { message, user, test };