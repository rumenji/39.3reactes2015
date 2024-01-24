import fruits from "./food";
import { choice, remove } from "./helpers";

const randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
const leftFruits = remove(fruits, randomFruit);
console.log(`I'm sorry, we're all out. We have ${leftFruits.length} left.`)

