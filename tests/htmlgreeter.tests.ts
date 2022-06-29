import { greeter } from '../src/greeter';
import { HtmlGreeter } from '../src/HtmlGreeter';

describe("new greeter class", () => {
    test("html greeter 1", () => {
        const greeting = new HtmlGreeter("hello");
        const name = "Auriel";
        
        

        expect(greeting.greet(name)).toBe("<h1>hello,Auriel!</h1>");
    })
    
    
    test("htmlgreeter 2", () => {
        const greeting = new HtmlGreeter("greetings");
        const name = "Auriel";
        const tagname = "div";
        

        expect(greeting.greet(name)).toBe("<div>greetings,Auriel!</div>");
    })
})