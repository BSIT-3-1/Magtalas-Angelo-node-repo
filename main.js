
console.log("HELLO SIR!!");
let x = 10;
console.log(x);


function isOddOrEven(amountToCheck) {
const isEven = amountToCheck % 2 == 0;
  
if (isEven) 
  return console.log(`The number ${amountToCheck} is Even`), w = amountToCheck;
else w= (amountToCheck + 1);
  console.log("The number is now even at: " + w)
}

isOddOrEven(x);
console.log(w);


for (let y = 1; y <= w; y++) {
  for (let s = (w - y); s <= w - y; s++){
    str = ' ';
    console.log(str.repeat(s),"* ".repeat(y))
  }
}

for (let y = 1, z = (w - y); y <= w - 1; y++, z--){
  str = ' ';
  console.log(str.repeat(y), "* ".repeat(z))
}