// let str = "hello world";
// let reverse = ""

// for(let i=str.length -1; i>=0; i--) {
//  reverse += str[i];
// }
// console.log(reverse);

// let fact = 1;
// for (i=1; i<=5; i++) {
//  fact *= i;
// }
// console.log(fact);

// let num = 123;
// let rev = 0;

// while(num!=0) {
// rev = (rev*10) + (num%10);
// num= parseInt(num/10);
// }
// console.log(rev);

// finding power of a number

// let a = 2;
// let temp = 1;

// for (let i=1; i<=6; i++) {
//  temp = temp * a;
// }

// console.log("the power of given number is", + temp);  

// // FIND GREATEST/MAXIMUM OF THE ELEMENTS IN ARRAY

//  console.log("find greatest element of array");
// function arraymax(arr) {
//   let max = arr[0];

//   for (i = 1; i < arr.length; i++) {
//      if (arr[i] > max) max = arr[i];
//    }

// console.log("greatest element of array is;" + max);
// return max;
//  }
// arraymax([10, 3, 70, 4, 30, 1]);

// to check if given number is prime or not
// console.log("check if numb is prime or not, my method");

// function checkprime(num) {
//   let isprime = true;
//   if (num === 0 || num === 1) {
//     isprime = false;
//   } else if (num > 1) {
//     // cant we put conditions under else statement?
//     for (i = 2; i < num; i++) {  // ask this doubt
//       if (num % i === 0)
//         isprime = false;
//         break;

//       // why on applying break, the result for 9 comes as its a prime number?
//     }
//   } else {
//     console.log("not a prime100"); // since else if condition is passed for a number not being prime number, the else statement also gets skipped
//   } // else statement gets skipped if for loop in else if statement passes or fails
//   // when if statement passes, it comes out of if-else if- else loop
//   if (isprime) {
//     console.log("its a prime,final");
//   } else {
//     console.log("not a prime,final");
//   }
// }
// // checkprime(1);
// // checkprime(0);
// // checkprime(79);
// checkprime(9); // y 9 is shown as its a prime,final for above code structure?
// console.log("/n");

// // pdf method
// console.log("find if number is prime, pdf method");
// function checkprime(num) {
//     let isprime = true;

//     if(num === 1)
//     isprime = false;

//     else if(num>1) {
//         for(let i=2; i<num; i++){
//             if(num%i === 0)
//             isprime = false;
//             break;
//         }
//     }

//     else {
//         isprime = false;
//     }

//     if(isprime) {
//         console.log("prime numb");
//     }
//     else{
//         console.log("not a prime");

//         }
//     }

//     checkprime(2);   

// // odd or even
// /* console.log("find if numb is +ve or -ve");

// function posneg(numbr) {

//     if(numbr === 0)
//     console.log("neither odd nor even");

//     else if(numbr%2=== 0)
//     console.log("numb is even")

//     else {
//         console.log("numb is odd");
//     }
// }

// posneg(0);
//     posneg(3);
//     posneg(1674); */

// /*console.log(Math.floor(1234 / 10));

// // checking vowels in a string, try using array

// let str = "hello world";
// let count = 0;
// for (i = 0; i < str.length; i++) {
//   let char = str[i];
//   console.log(char);

// if (char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u") count++;
// } 
// console.log(count);

//print first 10 prime numbers
// console.log("find first 10 prime numbers, my method 1");
// const numprime = 10;
// let count = 0;
// let currentNum = 2;

// while (count < numprime) {
//   let isprime = true;

//   for (let i = 2; i < currentNum; i++) {
//     if (currentNum % i === 0) {
//       isprime = false;
//       break;   // what if break is used here
//     }
//   }
//   if (isprime) {
//     console.log(currentNum);
//     count++; //does count++ depend on above statement to be true?
//   }
//   currentNum++;
// }

// // check if a character is vowel or constant
// /*console.log("find if character is vowel");

//  function char(ch) {
//     if (ch==="a")
//     console.log("${ch} is a vowel");

//     else if(ch==="e")
//     console.log("${ch} is a vowel");

//     else if(ch==="i")
//     console.log("${ch} is a vowel");

//     else if(ch==="o")
//     console.log("${ch} is a vowel");

//     else if(ch==="e")
//     console.log("${ch} is a vowel");

//     else{
//         console.log("${ch} is not a vowel");
//     }

// }

// char("p"); */

// ARRAY FUNCTIONS- ARRAY REVERSAL
// console.log("reverse array");
// function reversearray(arr) {

//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // ,length doesnt reflect in suggestions
//     reversed.push(arr[i]);
//   }
//   console.log(arr); // the original array doesnt become empty after pusing elements to new array
//   console.log(reversed);
//   return reversed;
// }

// reversearray([2, 3, 6, 8, 9]);

// // how to filter multiple no's?

// // ARRAY FUNCTIONS- ARRAY SUM
// console.log("pdf method, array sum");
// /*function arraysum(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
//   //console.log("this is use of retuen" + arraysum());  // getting 20 multiple times
//   //return sum;    // use of return sum?
// }
// arraysum([2, 3, 4, 5, 6]); */

// ARRAY FUNCTIONS- ARRAY ASCENDING SORTING
// console.log("pdf method, ascending order");
// function arrascen(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//          console.log("is this empty array?" +arr);  // y this array not empty after storing in temp?
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// arrascen([4, 3, 2, 1, 5]);

// // ARRAY FUNCTIONS- FIND ELEMENT IN AN ARRAY
// console.log("my method, find element in array");
// /*function arraysearch(arr, element) {
//   for(let i=0; i<=arr.length; i++)
//   if(a[i] === element)
//   console.log("element found in array");
// } */

// console.log("pdf method, find element in array");

// function findArrayElementIndex(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// }

// ARRAY FUNCTIONS- ARRAY SLICING
console.log("pdf method, array slicing");
function slicearr(arr, start, end) {
  let sliced = [];
  for (i = start; i <= end; i++) {
    sliced.push(arr[i]);
  }
  arr = sliced; // why sliced array doesnt get emptied when value is transferred to arr array
  console.log(arr);
  console.log(sliced);
  return sliced;
}
slicearr([0, 1, 2, 3, 4, 5], 1, 4);

// // PRINT FIRST 10 PRIME NUMBERS-- MY METHOD
//PLEASE EXPLAIN THE FLOW OF CONTROL IN FOR LOOP INSIDE WHILE LOOP, checking
// console.log("first ten prime numbers, my method");

// function firsttenprime(limit) {
//   let initnum = 2;
//   let isprime = true;
//   let count = 0;

//   while (count < limit + 1) {
//     // can we put while( term<= value) or only < works?
//     for (i = 2; i < initnum; i++) {
//       if (initnum % i === 0) {
//         isprime = false;
//       }

//       // after one for loop does control go to while loop or does it finish all for loops and then go to while loop?
//     } if (isprime) {
//         count++; // where to give count++, soon after validating the prime number?
//         console.log(initnum);
//       }

//     initnum++;
//   }
// }

//  firsttenprime(10);

// ARRAY SORTING- ASCENDING
// console.log("array sorting in ascending order");
// function sortarrayascen(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// sortarrayascen([1, 5, 2, 9, 3, 0, 11, 4]);

// // ARRAY DUPLICATE
// //console.log("remove duplicate element from array");

// //check using one for loop for current array and another for loop for the empty array created to check if there is already an array present inside empty array, if yes dont push the same again
// //(2,5,7,2,9,6,5,2)

// function remdupelemarr(arr) {
//   let noduplarr = [];
//   //console.log(noduplarr)
//   for (i = 0; i < arr.length; i++) {
//     //[2, 5, 7, 2, 9, 6, 5, 2]
//     let includes = true;

//     if (noduplarr.length === 0) {
//       noduplarr.push(arr[i]);
//     }
//     else {
//       for (j = 0; j < noduplarr.length; j++) {
//         if (arr[i] === noduplarr[j]) {
//           includes = false;
//         }
//       }
//       if (includes) noduplarr.push(arr[i]);
//     }
//   }
//   console.log("the array after removing duplicate is: " + noduplarr);
// }
// remdupelemarr([2, 5, 7, 2, 9, 6, 5, 2]);

// // CURRENCY CONVERSION

// function currenconv(currency,amount){

//  let convcurrenUSD, convcurrenEURO, convcurrenBritPound;
// if(currency === 'USD'){
//   convcurrenUSD = amount*0.012
//   console.log("the converted amount in USD is: "+convcurrenUSD+ "USD");
// }

// if(currency === 'EURO'){
//   convcurrenEURO = amount*0.011
//   console.log("the converted amount in EURO is: "+convcurrenEURO+ "EURO");

// }

// if(currency === 'BritishPound'){
//   convcurrenBritPound = amount*0.0095
//   console.log("the converted amount in BritishPound is: "+convcurrenBritPound+ "BritishPound");
// }

// }
// currenconv("BritishPound",1000);

// REVERSE A SENTENCE eg: (hello world to world hello)
// splitting a string with using dot method, use only for loop

// let sentence = "hello world welcome home!"
// let splitsent = [];
// let reversarray = [];
// splitsent = sentence.split(" ");
// console.log("the split sentence is: " +splitsent);

// for(let i=splitsent.length-1; i>=0; i--) {
//   reversarray.push(splitsent[i]);
// }
// console.log(reversarray);
// let revsent = "";
// for(i=0; i<reversarray.length; i++){
//  revsent = revsent + " "+reversarray[i];
// }
// console.log("the reversed sentence is:" +revsent)

// // reversing a string, use only loops
// console.log("reversing a string, use only loops");
// let string = "hello world, how are you";
// let temp = "";
// let convatrtoarray = [];
// for (i = 0; i < string.length; i++) {
//   if (string[i] === " ") {
//     convatrtoarray.push(temp); // y cant we do finalrevarr = push, temp =a[i] works
//     temp = "";// we get characters here when we split sentence using for loop
//   } else {
//     temp = temp + string[i];

//   }
// }
// convatrtoarray.push(temp);
// let reversestring = [];
// console.log(convatrtoarray);
// for (i = convatrtoarray.length - 1; i >= 0; i--) {
//   // cant we directly add the arrays into string?
//   reversestring.push(convatrtoarray[i]);
// }
// console.log(reversestring);

// let revstring = "";
// for (i = 0; i < reversestring.length; i++) {
//   revstring = revstring + " " + reversestring[i];
// }
// console.log(revstring);

// // Write a JavaScript program that calculates the average grade and assigns a letter grade based on the average.

// function calculateAverage(grdarr) {
//   let sum = 0;
//   let avg = 0;
//   for (i = 0; i < grdarr.length; i++) {
//     sum += grdarr[i];
//   }
//   avg = sum / grdarr.length;
//   avg = avg.toFixed(2);
//   console.log("the avg of marks is: " + avg);
// }
// calculateAverage([66.87, 87.4897, 97.458, 88, 76.3458, 89]);

// function assignLetterGrade(avg) {
//   let Grade = "";

//   if (avg >= 90) {
//     Grade = "A";
//     console.log("You have scored Grade:" + Grade);
//   }

//   if (avg >= 80 && avg <= 89) {
//     Grade = "B";
//     console.log("You have scored Grade:" + Grade);
//   }

//   if (avg >= 70 && avg <= 79) {
//     Grade = "C";
//     console.log("You have scored Grade:" + Grade);
//   }

//   if (avg >= 60 && avg <= 69) {
//     Grade = "D";
//     console.log("You have scored Grade:" + Grade);
//   }

//   if (avg < 60) {
//     Grade = "F";
//     console.log("You have scored Grade:" + Grade);
//   }
// }
// assignLetterGrade(84.19);

// function displayGrade(avgGrade, letterGrade) {
//   console.log(
//     "The average grade is: " +
//       avgGrade +
//       " and the corresponding letter grade is: " +
//       letterGrade
//   );
// }
// displayGrade(84.19, "B");


// // implement the binary search algorithm to search for the target value in the given sorted array.
// [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 92, 95, 100, 101, 108, 107, 110, 111, 113, 115, 116, 120, 121]
//   console.log("binary search method")

//  function binarysearch(arr, target) {
// let start=0; end= arr.length-1; mid= parseInt((start+end)/2);
//   console.log(arr[mid]);

// while(arr[mid]!== target){

//       if(target>arr[mid]){
//         //start = mid
//         start = mid+1
//         mid = parseInt((start+end)/2);
//       }

//       else if(target<arr[mid]){
//         //end = mid
//         end = mid-1;
//         mid = parseInt((start+end)/2)
//       }

//   }
// console.log("the target value is " +target+ " and the mid value is also " +arr[mid]);
// }
// binarysearch([2,4,6,7,10,13,15,21,27,33], 33);

// // RECURSIVE FUNCTION PROGRAMS
// // 1. PRINT NUMBERS

// // if fact recognized inside function when declared outside it? variables declared inside function are not recognized outside

// function printNum(x){

//   if(x>10) {
//   return;
//   }
//   else{
//     console.log(x);
//     x++;
//   }
//   printNum(x);

// }
// printNum(1);

// // 2. FIND FACTORIAL
// console.log("factorial of a given number");
// let fact= 1;
// function Factorial(num){

//   if(num!==0){
//     fact = fact*num;
//     num--;
//     Factorial(num);
//   }

// }

// Factorial(5);
// console.log(fact);

// FUNCTION TO DO BINARY SEARCH

// function binarySearch(arr) {

// let start=0; end= arr.length-1; mid= parseInt((start+end)/2);
//   console.log(arr[mid]);

// while(arr[mid]!== target){

//       if(target>arr[mid]){
//         //start = mid
//         start = mid+1
//         mid = parseInt((start+end)/2);
//       }

//       else if(target<arr[mid]){
//         //end = mid
//         end = mid-1;
//         mid = parseInt((start+end)/2)
//       }

//   }
// }
// binarysearch([2,4,6,7,10,13,15,21,27,33], 33);

// MATRIX MULTIPLICATION
// console.log("matrix multiplication");

// function matrixMultiplication(mat1,mat2) {
// let i,j;

//  let res =[]

// for(i=0; i<mat1.length; i++){ // mat1[i].length
//   let temp = 0;
//   res.push([])
//   for(j=0; j<mat2[0].length; j++) {
//     temp=0
//     for(let k=0;k<mat1[i].length;k++){
//        temp = temp+(mat1[i][k] * mat2[k][j]);
//     }

//     res[i][j] = temp
//   }

// }
//  console.log(res)
// }
// matrixMultiplication(
//   [
//   [1, 2, 3],
//   [4, 5, 6]
// ],

//   [
//   [7, 8],
//   [9, 10],
//   [11, 12]
// ]);

// ADDITION OF MATRICES
// console.log("addition of matrices");
// function addMatrices(matrix1, matrix2) {
//   const sumMatrix = [];
//   for (let i = 0; i < matrix1.length; i++) {
//   sumMatrix.push([]);
//   for (let j = 0; j < matrix1[i].length; j++) {
//   sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
//   }
//   }
//   return sumMatrix;
//   }
//   const matrix1 = [[1, 2], [3, 4]];
//   const matrix2 = [[5, 6], [7, 8]];
//   const sumMatrix = addMatrices(matrix1, matrix2);
//   console.log("sum of matrix" +sumMatrix);

// MULTIPLICATION OF MATRIX BY A SCALAR

// console.log("matrix multiplication");
//   function multiplyMatrixByScalar(matrix, scalar) {
//     const productMatrix = [];
//     for (let i = 0; i < matrix.length; i++) {
//     productMatrix.push([]);
//     for (let j = 0; j < matrix[i].length; j++) {
//     productMatrix[i][j] = matrix[i][j] * scalar;
//     }
//     }
//     return productMatrix;
//     }
//     const matrix = [[1, 2], [3, 4]];
//     const scalar = 2;const productMatrix = multiplyMatrixByScalar(matrix, scalar);
//     console.log(productMatrix);

// MINIMUM ELEMENT IN EACH ROW OF MATRIX
// console.log("minimum in each row");
//     function findMinInEachRow(matrix) {
//       const minValues = [];
//       for (let i = 0; i < matrix.length; i++) {
//       let min = matrix[i][0];
//       for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] < min) {
//       min = matrix[i][j];
//       }
//       }
//       minValues.push(min);
//       }
//       return minValues;
//       }
//       const matrix = [[3, 2, 5], [1, 7, 4], [6, 8, 2]];
//       const minValues = findMinInEachRow(matrix);
//       console.log(minValues);

// MAXIMUM ELEMENT IN EACH ROW OF MATRIX

// console.log("maximum in each row");
//       function findMaxElement(matrix) {
//         let max = matrix[0][0];
//         for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//           console.log("matrix.length is: " +matrix.length);
//           console.log("matrix[i].length" +matrix[i].length);
//           console.log(matrix[i][j]);
//         if (matrix[i][j] > max) {
//         max = matrix[i][j];
//         }
//         }
//         }
//         return max;
//       }
//         const matrix = [[1, 2, 3,4,5], [4, 5, 6,7,8], [7, 8, 9,8,10]];
//         const max = findMaxElement(matrix);
//         console.log(max);
// as per this rogram, the column length in number is 5 and the row in number is 3
// so matrix.length gives row length and matrix[i].length gives column length

// MAXIMUM MULTIPLICATION OF 2 MATRICES
//   console.log("matrix multiplication");
// function multiplyMatrices(matrix1, matrix2) {
//   const productMatrix = [];
//   for (let i = 0; i < matrix1.length; i++) {
//   productMatrix.push([]);
//   for (let j = 0; j < matrix2[0].length; j++) {
//   let sum = 0;
//   for (let k = 0; k < matrix1[i].length; k++) {
//   sum += matrix1[i][k] * matrix2[k][j];
//   }
//   productMatrix[i][j] = sum;
//   }
//   }
//   return productMatrix;
//   }
//   const matrix1 = [[1, 2], [3, 4]];
//   const matrix2 = [[5, 6], [7, 8]];
//   const productMatrix = multiplyMatrices(matrix1, matrix2);
//   console.log(productMatrix);

//FINDING AVERAGE OF A MATRIX ROW
// console.log("FINDING SUM OF ALL ELEMENTS IN A MATRIX ROW, SELF TRIED")
//           function averageMatrixrow(matrix) {

//             let sumOfElements = 0;

//             for(i=0; i<matrix.length; i++){
//             for(j=0; j<matrix[0].length; j++){
//                // console.log("elements in a matrix are" +matrix[i][j]);
//                 sumOfElements = sumOfElements + matrix[i][j];
//                 }
//               }

//             console.log(sumOfElements);
//           }
//           averageMatrixrow([[1,2,3],[2,4,5],[3,5,6]]);

//FINDING AVERAGE OF EACH OF MATRIX ROW
// console.log("FINDING AVERAGE OF EACH OF MATRIX ROW");

// function averageMatrixrow(matrix) {

//   let firstRowAvg = 0;
//   let secondRowAvg = 0;
//   let thirdRowAvg = 0;

//   for(i=0; i<matrix.length; i++){
//   for(j=0; j<matrix[0].length; j++){

//       if(i===0){
//         //console.log("first row elements" +matrix[i][j])
//         firstRowAvg = firstRowAvg + matrix[i][j]

//       }

//       else if(i===1){
//         //console.log("second row elements" +matrix[i][j])
//         secondRowAvg = secondRowAvg + matrix[i][j]

//       }

//       else if(i===2){
//        // console.log("third row elements" +matrix[i][j])
//         thirdRowAvg = thirdRowAvg + matrix[i][j]

//       }
//       }
//     }
//     firstRowAvg = firstRowAvg/matrix.length;

//     secondRowAvg = secondRowAvg/matrix.length

//     thirdRowAvg = thirdRowAvg/matrix.length

//   console.log("the avg of first row is " +firstRowAvg);
//   console.log("the avg of second row is " +secondRowAvg);
//   console.log("the avg of second row is " +thirdRowAvg);

// }
// averageMatrixrow([[1,2,3],[2,4,5],[3,5,6]] );

// PATTERN PRINTING

// PRINT PATTERN LEFT TO RIGHT INCREMENT STEPWISE, ASTERIK PRINT
// console.log("PRINT PATTERN LEFT TO RIGHT INCREMENT STEPWISE");
// for(let i=1; i<=5; i++){
//   let row ='';
//   for(let j=1; j<=i; j++){
// row += '*';
//   }
//   console.log(row);
// }

// PRINT PATTERN LEFT TO RIGHT INCREMENT STEPWISE, NUMBER PRINT

// console.log("PRINT PATTERN LEFT TO RIGHT INCREMENT STEPWISE,- NUMBER PRINT");

// for(let i=1; i<=5; i++){
//   let row ="";
//   for(let j=1; j<=i; j++){
// row += j
//   }
//   console.log(row);
// }

//PRINT PATTERN OF SAME NUMBER REPEAT IN EVERY ROW
// console.log("PRINT SAME NUMBER PATTERN ROW WISE");

// for (let i = 1; i <= 4; i++) {
//   row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + i + " ";
//   }
//   console.log(row);
// }

// //PRINT PATTERN OF DIFFERENT NUMBER REPEAT IN EVERY ROW
// console.log("PRINT PATTERN OF DIFFERENT NUMBER REPEAT IN EVERY ROW");
// count = 1;
// for (let i = 1; i <= 4; i++) {
//   row = "";
//   for (let j = 1; j <= i; j++) {
//     row += count + " ";
//     count++;
//   }
//   console.log(row);
// }

// // PRINT PYRAMID
// console.log("PRINT PYRAMID");
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// // ZIG ZAG PATTERN
// console.log("ZIG ZAG PATTERN")
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i - 1; j++) {
//     row += " ";
//   }
//   row += "*";
//   if (i === 1 || i === 5) {
//     for (let j = 1; j <= 5 - i; j++) {
//       row += " ";
//     }
//     row += "*";
//   } else {
//     for (let j = 1; j <= 2 * i - 3; j++) {
//       row += " ";
//     }
//     row += "*";
//   }
//   console.log(row);
// }
// for (let i = 4; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i - 1; j++) {
//     row += " ";
//   }
//   row += "*";
//   if (i === 1 || i === 5) {
//     for (let j = 1; j <= 5 - i; j++) {
//       row += " ";
//     }
//     row += "*";
//   } else {
//     for (let j = 1; j <= 2 * i - 3; j++) {
//       row += " ";
//     }
//     row += "*";
//   }
//   console.log(row);
// }

// STRING OPERATIONS

// let arr = [];
// arr = ["hello", "how", "are", "you"];
//  console.log(arr.toString());

// SORTING AN ARRAY BY SELECTION SORT METHOD
// console.log("SORTING AN ARRAY BY SELECTION SORT METHOD");

// function selectionSort(arr){  // [22,12,37,10,31]
// console.log("original array is" +arr);
//     for(let i=0; i<arr.length; i++){
// for(let j=i+1; j<arr.length; j++){
//     if(arr[j] < arr[i]){
//         let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//     }
// }
// console.log(arr);
// }
// console.log("after selection sorting, the result is: " +arr);
//     }
//     selectionSort([22,12,37,10,31]);

//     // PATERN PRINTING, PRINTING OF ZIG ZAG PATTERN

// for(i=1; i<=5; i++){
//     for(j=1; j<=5; j++){

//     }
// }

// // REVERSING AN ARRAY
// console.log("REVERSING AN ARRAY");

// str = "Hello there, how are you?"
// let temp = "";
// let strToArray = [];
// for(i=0; i<str.length; i++){
//     if(str[i]!= " "){
//     temp = temp +str[i];}

//     else {
//         strToArray.push(temp);
//         temp = ""
//     }
// }
// console.log(strToArray);
// strToArray.push(temp);
// console.log(strToArray);
// // reversing the original given string
// let RevString = "";

// for(i=strToArray.length-1; i>=0; i--){
//     RevString = RevString + strToArray[i]+" ";
// }
// console.log(RevString);

// // to convert the reversed string into array
// let revArr = [];
// for(i=0; i<strToArray.length; i++){
//     revArr.push(strToArray[i]);
// }
// console.log("the reversed array is:" +revArr);

// BALANCED STRING CHECKER

console.log("BALANCED STRING CHECKER");

function balancedStringCheck(str) {

  // how to declare boolean // str = {([])}
  console.log(str.length);
  let result = true;
let newArray = [];

  for(i=0; i<str.length; i++){
    newArray.push(str[i]);
  }
  console.log(newArray);

  for (i = 0; i <= newArray.length / 2; i++) {
    console.log(newArray[i], newArray[newArray.length - i - 1])
    if (newArray[i] !== newArray[newArray.length - i - 1]) {
      result = false;
    }
    }

  if (result) {
    console.log("the given string is a balanced string");
  } else {
    console.log("the given string is not a balanced string");
  }
}
balancedStringCheck("{([])}");

// // Largest Subarray with Equal Number of Zeros and Ones
// console.log("Largest Subarray with Equal Number of Zeros and Ones");

// function findLargestSubarray(arr){
//   console.log("original array is: " +arr);
//   let count1=0, count0= 0;
//   for(i=0; i<arr.length; i++){
//     if(arr[i] === 1){
//       count1++;
//     }
//     else {
//       count0++;
//     }
//   }

// console.log("the count of count1 is: ")

// if(count1===count0){
//     return true;
//   }

// let newArray = [];
// let newCount1 = 0, newCount0 = 0;

//   for(i=0;i<arr.length; i++){

//     if(count1>count0){e

//       if(arr[i]===1){
//         if(newCount1!==count0){
//       newArray.push(arr[i])
//       newCount1++;
//         }
//      }

//     if(arr[i]===0){
//       if(newCount0!==count0){
//         newArray.push(arr[i])
//         newCount0++;
//       }
//       }
//     }

//     if(count0>count1){

//       if(arr[i]===1){
//         if(newCount1!==count1){
//       newArray.push(arr[i])
//       newCount1++;
//         }
//      }

//     if(arr[i]===0){
//       if(newCount0!==count1) {
//         newArray.push(arr[i])
//         newCount0++;
//       }
//     }

//       }

//     }
//     console.log("the array with equal number of 0's and 1's are " +newArray);
//   }
//     findLargestSubarray([1, 1, 1, 0, 0, 0,]);

// REMOVING ELEMENT FROM AN ARRAY

// let arr = [1, 0, 1, 1, 0, 0, 1, 1];
// let newarr = [];

// for(i=0; i<arr.length; i++) {
//   if(arr[i] === 0){
//     arr[i] = "";
    
//   }
// }
// console.log("newarr is " +newarr);
// console.log("arr is " +arr);

// console.log("convet string into array");

// let text = "a,b,c,d,e,f";
// //const myArray = text.split(",");
// console.log("the selected arrays is " +text[3])
// console.log(text);
// console.log(typeof(text));

// console.log("adding new element into array using unshift method")
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// let newfruits = [];
// newfruits = fruits.unshift("lemon")
// console.log(fruits);
// console.log(newfruits);  // y its not showing contents and showing only length?

// convert number to a string

// console.log("converting numbers into string");
// let num = 572845;  
// let str = [];

// while(num!==0){

// let tempNum
// tempNum =num%10;
// console.log("the tempnum is obtained");
// str.push(tempNum);
// tempNum = ""
// num = num/10
// num = parseInt(num);
// console.log("after parsing the num, the new num is: "+num);
// }

// console.log("the digits of the number is reverse order stored as array is: " +str);
// let Orderstring = [];
// for(i=str.length-1; i>=0; i--){
//   Orderstring.push(str[i]);
// }
// console.log("the digits of number printed in staright order in array is: "+Orderstring);

// console.log("printing the number in reverse");
// let revNum = "";
// for (i=0; i<str.length; i++){
//   revNum += str[i]
// }
// console.log("the reversed number is: "+revNum);


// // Insertion sort

// function inertionSort(arr) {
//   for(i=1; i<arr.length;i++){
//     for(j=i; j>=0; j--){
//       if(arr[j]<arr[j-1]){
//         let temp = arr[j]
//         arr[j] = arr[j-1]
//         arr[j-1] = temp
//         console.log(arr[j],arr[j-1]);
//         // [arr[j],arr[j-1]] = [arr[j-1],arr[j]] 
//       }
     
//     }
//   }
//   console.log(arr)
//   return arr;
// }
// inertionSort([5,3,7,1,5,8,2,10,4])

// let num = 5.9274850;
// console.log(num.toPrecision(5));

// MERGE SORT

function merge(leftArray,rightArray) {
  const output = [];
  let leftIndex = 0, rightIndex = 0;

  while(leftIndex<leftArray.length && rightIndex<rightArray.length) {
    const leftEl = leftArray[leftIndex];
    const rightEl = rightArray[rightIndex];

    if(leftEl<rightEl){
      output.push(leftEl);
      leftIndex++
    }
    else{
      output.push(rightEl);
      rightIndex++
    }
  }
  return [...output,...leftArray.slice(leftIndex), rightArray.slice(rightIndex)];
}

// recursive

function mergeSort(array){
  if(array.length<=1){
    return array;
  }

  const middleIndex = Math.floor(array.length/2);
  const leftArray = array.slice(0,middleIndex);
  const rightArray = array.slice(middleIndex);

  return merge{
    mergeSort(leftArray);
    mergeSort(rightArray);

  }

}
console.log(mergeSort([6,4,8,2,1,345,123,43,68]))



