
// KELVIN is now a constant variable
// it will always be set to 0
const KELVIN = 0;


// CELSIUS is now a constant variable
// it will always be set to 273 degrees less than KELVIN
const CELSIUS =  KELVIN - 273;






// This is the formula for fahrenheight
let Fahrenheight = CELSIUS * (9/5) + 32;


// Defining newton
let Newton = CELSIUS * (33/100);






// Now the fahrenheight & Newton will be rounded to the nearest whole number
Fahrenheight = Math.floor(Fahrenheight);
Newton = Math.floor(Newton);








// Output in Fahrenheight & Newton
console.log(`The temperature is ${Fahrenheight} degrees fahrenheight`);

console.log(`The temperature is ${Fahrenheight} degrees fahrenheight`);