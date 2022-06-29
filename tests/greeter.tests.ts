import { greeter } from '../src/greeter';

describe("greeter class", () => {
    test("", () => {
        const greeting = "Hello";
        const name = "everyone";
        const Greeter = new greeter(greeting);

        expect(Greeter.greeting).toBe(greeting);
    })
})