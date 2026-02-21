// JAVASCRIPT PRACTICE SHEET 1
// TASK 1 : Identify which of the following variable names are legal and which are illegal:

// a: myVariable ---- legal
// b: 123variable ---- illegal
// c: _special ---- legal
// d: first name ---- illegal
// e: 7eleven ---- legal
// f: $price ---- legal
// g: $price ---- illegal

// TASK 2 : ASSIGNMENTS OPERATORS:

// total = 10
// total += 5
// total -= 3
// total *= 2
// console.log(total)

// TASK 3 : PROMPT AND VARIABLES (MATH):

// let num1 = +prompt("Enter any one number here..!");
// let num2 = +prompt("Enter number here..!");
// let sum = num1 + num2;
// console.log(sum);

// TASK 4 : STRING CONCATENATION:

// let writerName = "Nemrah Ahmed";
// let bookName = "Mala";
// let pubYear = "2017";
// let intro = " This Book '"+ bookName +"' was written by '"+ writerName +"' and it was published in '"+ pubYear +"' ";
// console.log(intro);

// TASK 5 : CHECKING EVEN OR ODD:

// let number = Number(prompt("Enter Number Here"));
// if( number % 2 === 0){
//  console.log("This Number is Even.")
// }else{
//   console.log("This Number is Odd.")
// }

// TASK 6 : GRADE CALCULATIONS:

// let grade = +prompt("Enter Your Number And Check Grade..!");
// if( grade >=90 ){
//     alert("Congratulations You've Got 'A Grade' ");
// }
// else if( grade >=80 ){
//     alert("Well Done You've Got 'B Grade'");
// }
// else if( grade >=70 ){
//     alert("Better You've Got 'C Grade'");
// }
// else if( grade >=60 ){
//     alert("Keep it up You've Got 'D Grade'");
// }
// else{
//     alert("You've Fail 'Better Luck Next Time..!'");
// }

// TASK 7 : MAXIMUM OF THREE NUMBERS:

// let num1 = +prompt("Enter First Number Here..!");
// let num2 = +prompt("Enter Second Number Here..!");
// let num3 = +prompt("Enter Third Number Here..!");

// if( num1 >= num2 && num1 >= num3){
//     max = num1;
// }else if( num2 >= num1 && num2 >= num3){
//     max = num2;
// }else{
//     max = num3;
// }
// console.log("Maximum number is:", max);

// TASK 8 : ODD OR EVEN SUM:

// let sum = 0;
// for( var i=1; i<=100; i++){
//     if( i % 2 === 0){
//         sum += i
//     }
// }
// console.log("Sum of even numbers from 1 to 100 is:", sum);

// TASK 9 : OUTPUT:

// 1; var a=5; b=3; c=7;
// result = a++ - ++c + b + ++c - b++ ;

// a++ → 5 → (a = 6)
// ++c → 8 → (c = 8)
// b → 3
// ++c → 9 → (c = 9)
// b++ → 3 → (b = 4)

// 5 - 8 + 3 + 9 - 3
// = -3 + 3 + 9 - 3
// = 0 + 9 - 3
// = 6
// console.log(result)

// 2; var a=1; b=2; c=0;
// result = ++a - --a + ++c + c - a++ + --b ;

// ++a → 2 → (a = 2)
// --a → 1 → (a = 1)
// ++c → 1 → (c = 1)
// c → 1 
// a++ → 1 → (a = 2) 
// --b → 1 → (b = 1)

// 2 - 1 + 1 + 1 - 1 + 1
// = 2 + 1
// = 3
// console.log(result)

// 3; var a=2; b=4; c=6; 
// result = a++ - --b + c-- + b++ - ++c;

// a++ → 2 → (a = 3)
// --b → 3 → (b = 3)
// c-- → 6 → (c = 5)
// b++ → 3 → (b = 4)
// ++c → 6 → (c = 6)

// 2 - 3 + 6 + 3 - 6
// = 2
// console.log(result)

// 4; var a=10; b=5; c=8; 
// result = ++a + --b - c++ - ++c + b--;

// ++a → 11 → (a = 11)
// --b → 4 → (b = 4)
// c++ → 8 → (c = 9)
// ++c → 10 → (c = 10)
// b-- → 4 → (b = 3)

// 11 + 4 - 8 - 10 + 4
// = 11 + 8 - 8 - 10
// = 11 - 10
// = 1
// console.log(result)

// 5; var a= 3; b=2; c=1;
// result = b-- - --a + ++c - a++ + ++b - a;

// b-- → 2 → (b = 1)
// --a → 2 → (a = 2)
// ++c → 2 → (c = 2)
// a++ → 2 → (a = 3)
// ++b → 2 → (b = 2)
// a → 3

// 2 - 2 + 2 - 2 + 2 - 3
// = 0 + 0 - 1
// = -1
// console.log(result)

// 6; var a=1; b=5; c=3; 
// result = ++c + a-- - b++ + c-- - --a;

// ++c → 4 → (c = 4)
// a-- → 1 → (a = 0)
// b++ → 5 → (b = 6)
// c-- → 4 → (c = 3)
// --a → -1 → (a = -1)

// 4 + 1 - 5 + 4 - 1
// = 5 - 5 + 5
// = 5
// console.log(result)

// 7; var a=7; b=0; c=1; 
// result = ++c - a-- + --b + b++ - --c + c;

// ++c → 2 → (c = 2)
// a-- → 7 → (a = 6)
// --b → -1 → (b = -1)
// b++ → -1 → (b = 0)
// --c → 1 → (c = 1)
// c → 1 

// 2 - 7 + (-1) + (-1) - 1 + 1
// = -5 - 2 
// = -7
// console.log(result)

// 8; var a=3; b=4; c=9;
// result = --a + ++b + c-- - b++ + ++c - --c - --b;

// --a → 2 → (a = 2)
// ++b → 5 → (b = 5)
// c-- → 9 → (c = 8)
// b++ → 5 → (b = 6)
// ++c → 9 → (c = 9)
// --c → 8 → (c = 8)
// --b → 5 → (a = 5)

// 2 + 5 + 9 - 5 + 9 - 8 - 5
// = 7 + 4 + 1 - 5 
// = 7
// console.log(result)

// 9; var a=6; b=1; c=3;
// result = c++ - b + a-- - --c + b ;

// c++ → 3 → (c = 4)
// b → 1 
// a-- → 6 → (a = 5)
// --c → 3 → (c = 3)
// b → 1 

// 3 - 1 + 6 - 3 + 1
// = 2 + 3 + 1
// = 6
// console.log(result)

// 10; var a=10; b=5; c=8; 
// result = a + --b - c - ++c + b-- + a++ ;

// a → 10 → (a = 10)
// --b → 4 → (b = 4)
// c → 8 → (c = 8)
// ++c → 9 → (c = 9)
// b-- → 4 → (b = 3)
// a++ → 10 → (a = 11)

// 10 + 4 - 8 - 9 + 4 + 10
// = 14 - 8 - 9 + 4 + 10
// = 6 - 9 + 14
// = -3 + 14
// = 11
// console.log(result)

// TASK 10; OUTPUT:

// 1; console.log(undefined && false); → undefined
// 2; console.log(true && false); → false
// 3; console.log(true && undefined); → undefined
// 4; console.log(undefined && undefined); → undefined
// 5; console.log('undefined' || 'true'); → undefined
// 6; console.log(null || 'true'); → true
// 7; console.log(null || undefined); → undefined
// 8; console.log(null && true || false); → false
// 9; console.log(null && true || false && true); → false
// 10; console.log(null && true || true && true); → true
// 11; console.log((null && true) || (true && 1)); → 1

// JAVASCRIPT PRACTICE SHEET 2

// TASK 11: FILTER EVEN NUMBERS

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = [];

// for(var i = 0; i < number.length; i++){
//   if( number[i] % 2 === 0){
//     evenNumber.push(number[i]);
//   }
// }
// console.log("Even Numbers;", evenNumber);

// TASK 12: SUM OF ODDS NUMBERS

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for(var i = 0; i < number.length; i++){
//   if(number[i] % 2 !== 0){
//     sum += number.length
//   }
// }

// console.log("Sum of odd numbers:", sum);

// TASK 13: FIZZBUZZ:

// for(var i = 0; i<=100; i++){
//     if( i % 15 === 0){
//       console.log("Fizzbuzz");
//     } 
//     else if( i % 3 === 0){
//       console.log("Fizz");
//     } 
//     else if( i % 5 === 0){
//       console.log("buzz");
//     } 
//     else {
//         console.log(i);
//     }
// }

// TASK 14: COUNT CHARACTER:

// let word = [ "apple", "mango", "banana", "orange", "pineapple",];
// let totalChars = 0
// for(var i = 0; i< word.length; i++){
//     totalChars += word[i].length
// }
// console.log("Total characters:",totalChars);

// TASK 15: FIND MAXIMUM LENGTH WORDS:

// let words = ["Apple", "Banana", "Orange", "Watermelon", "Pineapple", "Grapes"];
// let longestWord = words[0];

// for( var i = 1; i< words.length; i++){
//   if( words[i].length > longestWord.length){
//     longestWord = words[i]
//   }
// }
// console.log(longestWord);

// TASK 16: REMOVE SHORTS WORDS:
// let words = ["cat", "apple", "laptop", "go", "eat", "mobile", "lunch", "watch",];
// let longWords = [];
// for(var i = 0; i< words.length; i++){
//     if(words[i].length >= 3){
//         longWords.push(words[i])
//     }
// }
// console.log(longWords);

// TASK 17: MULTIPLICATION TABLES:
// let userNumber = +prompt("Enter Number"); 
// for(var i=1; i<=10; i++){
//    console.log(`${userNumber} x ${i} = ${userNumber * i} `)
// }

// TASK 18: SORTED ARRAY:
// let number = [5, 9, 10, 8, 3, 7, 2, 6, 1, 4]
// for( var i=0; i< number.length; i++){
//     for( var j=0; j < number.length - 1; j++){
//         if( number[j] > number[j + 1]){
//           let temp = number[j];
//           number[j] = number[j + 1];
//           number[j + 1] = temp;
//         }
//     }
// }
// console.log("Sorted array:", number);

// TASK 19: SEARCH AND REPLACE:
// let words = ["apple", "mango", "pineapple", "banana", "grapes", "potato", "tomato", "peas", "spanish", "carrot"];
// let currentWord = prompt("Enter current word");
// let changeWord = prompt("Enter change word");
// let found = false;

// for (var i=0; i < words.length; i++){
//     if( words[i] === currentWord){
//         words[i] = changeWord
//         found = true;
//         break;
//     }
// }
// if(found){
//  console.log("Words Found", words)     
// }else{
//   console.log("Words not Found")    
// }

// TASK 20: UNIQUE VALUES:
// let numbers = [1, 10, 76, 8, 3, 9, 54, 92, 5, 23, 44, 1, 2, 3, 19, 33, 76, 4, 5, 26, 44, 93, 100, 6, 5,  32, 87]
// let uniquesNumber = [];
// for(var i=0; i < numbers.length; i++){
//   let count = 0
//   for( var j=0; j < numbers.length; j++){
//     if( numbers[i] === numbers[j]){
//        count++;
//     }
//   }
//   if(count === 1){
//       uniquesNumber.push(numbers[i]);
//   }
// }
// console.log(uniquesNumber);

