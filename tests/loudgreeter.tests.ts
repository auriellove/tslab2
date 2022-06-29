import { LoudGreeter } from '../src/LoudGreeter';

describe("new greeter class", () => {
    test("without add volume", () => {
        const greeting = new LoudGreeter("Hello");
        const name = "Auriel";
        
        expect(greeting.greet(name)).toBe("Hello Auriel!!");
    })

    test("with add volume", () => {
        const greeting = new LoudGreeter("greetings");
        const name = "Auriel";
        greeting.addVolume();
        
        expect(greeting.greet(name)).toBe("greetings, Auriel!!!");
    })
})