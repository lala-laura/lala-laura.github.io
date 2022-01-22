//states that kelvin will stay 293
const kelvin = 300;
//degrees in celsius
const celsius = kelvin - 273;
//degrees in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//rounding
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(kelvin);
console.log(celsius);
console.log(fahrenheit);
console.log(newton);
