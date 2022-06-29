import { greeter } from '../src/greeter';

export class JavaScriptGreeter extends greeter {
    greet(name: string) {
        //super is pulling information from the parent class, import
        return  `console.log(` + super.greet('Auriel') + `)`

    }
}

