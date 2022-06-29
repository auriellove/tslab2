import { greeter } from '../src/greeter';
import { JavaScriptGreeter } from '../src/JavaScriptGreeter'

describe("new greeter class", () => {
    test("", () => {
        const greeting = "Hello";
        const name = "Auriel";
        const Greeter = new JavaScriptGreeter(greeting);
        const overRide = Greeter.greet(name);
        

        expect(overRide).toBe("console.log(Hello Auriel!)");
    })
})