console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let x = 1; x <= 100; x++) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let y = 1; y <= 100; y++) {
    if (y % 3 === 0 && y % 5 === 0){
        console.log('FIZZBUZZ');
    } else if (y % 3 === 0){
        console.log('FIZZ');
    } else if (y % 5 === 0){
        console.log('BUZZ');
    } else {
        console.log(y);
    }
}

// Exercise 3 Section

// Exercise 1 loops

let z = 1;
while (z  <= 100) {
    if (z % 2 !== 0){
        console.log(z);
    }
    z++;
}


let a = 1;
do {
    if (a % 2 !== 0){
        console.log(a);
    }
    a++;
} while (a <= 100);

// Exercise 2 loops

let b = 1;
while (b <= 100){
    if (b % 3 === 0 && b % 5 === 0){
        console.log('FIZZBUZZ');
      } else if (b % 3 === 0){
        console.log('FIZZ');
      } else if (b % 5 === 0){
        console.log('BUZZ');
      } else {
        console.log(b);  
    }
    b++;
}


let c = 1;
do {
    if (c % 3 === 0 && c % 5 === 0){
        console.log('FIZZBUZZ');
      } else if (c % 3 === 0){
        console.log('FIZZ');
      } else if (c % 5 === 0){
        console.log('BUZZ');
      } else {
        console.log(c);  
    }
    c++;
} while (c <= 100);

// Exercise 4 Section

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <=  n; i++){
    if (i === value){
        console.log("Found value!");
        found = true;
        break;
    }
}

if (!found){
    console.log("Did not find value.");
}