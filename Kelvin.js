
// KELVIN is now a constat variable
// it will always be set to 293
const KELVIN = 293;


// CELSIUS is now a constat variable
// it will always be set to 273 degrees less than KELVIN
const CELSIUS =  KELVIN - 273;


//This is the formula for fahrenheight
let Fahrenheight = CELSIUS * (9/5) + 32;


//Now the fahrenheight will be rounded to the nearest whole number
Fahrenheight = Math.floor(Fahrenheight);

console.log("The temperature is ");