import { greeter } from '../src/greeter';

export class LoudGreeter extends greeter {
   private extra: string = "!";

   addVolume(): void {
    this.extra += "!"

   }

   greet(name:string) {
    return super.greet(name) + this.extra;
   }
}