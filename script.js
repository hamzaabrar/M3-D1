/* 1)
Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum. */

function calcSum(num1, num2){
    let sum
    if(num1 === num2){
        sum = 3 * (num1 + num2)
    }
    else{
       sum = num1 + num2;
    }
    return sum
}
console.log('Q1');
console.log(calcSum(2,2));
console.log("");

/* 2)
Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50. */

function checkNum(num1, num2){
    if(num1 === 50 || num2 === 50 || (num1 + num2) === 50){
        return true
    }
    else{
        return false
    }
}

console.log('Q2');
console.log(checkNum(49,2));
console.log("");

/* 3)
Create a function to remove a character at the specified position of a given string and return the new string. */

function removeChar(char){
    let slicedWord = char.slice(0,-2)
    return slicedWord
}

console.log('Q3');
console.log(removeChar("My name"));
console.log("");

/* 4)
 Create a function to find the largest of three given integers. */

 function largestInt(n1, n2, n3){
     if(n1 > (n2 && n3)){
         return `${n1} is greater than ${n2} and ${n3}`
     }
     else if(n2 > ( n1 && n3)){
         return `${n2} is greater than ${n1} and ${n3}`
     }
     else if(n3 > (n1 && n2)){
        return `${n3} is greater than ${n1} and ${n2}`
     }
     else{
         return `They are equal`
     }
 }

 console.log('Q4');
 console.log(largestInt(3,9,7));
 console.log("");

/* 5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. */

function range(num1, num2){
    if(num1 >= 40 && num1 <= 60){
        console.log(`Number1 = ${num1} is in range 40 - 60`); 
    }
    else if(num1 >= 70 && num1 <= 100){
        console.log(`Number1 = ${num1} is in range 70 - 100`); 
    } 
    else{
        console.log(`Number1 = ${num1} is not in range 40-60 and 70-100`); 
    }

    if(num2 >= 40 && num2 <= 60){
        console.log(`Number2 = ${num2} is in range 40 - 60`); 
    }
    else if(num2 >= 70 && num2 <= 100){
        console.log(`Number2 = ${num2} is in range 70 - 100`); 
    } 
    else{
        console.log(`Number2 = ${num2} is not in range 40-60 and 70-100`); 
    }
}

 console.log('Q5');
 console.log(range(30, 101));
 console.log("");

/* 6) 
Create a function that creates and returns the specified number of copies of a given string (positive number).
 */
function stringCopy(string, num){
    for(let i=0; i<num; i++){
        console.log(string);
    }
}

 console.log('Q6');
 console.log(stringCopy("Bark", 10));
 console.log("");
/* 7)
Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank. */

function cityName(string){

    if(string.substring(0,3) == "Los"){
        return 'Los Angeles'
        
    }
    else if(string.substring(0,3) == "New"){
        return "New York"
    }
    else{
        return "";
    }
}

console.log('Q7');
console.log(cityName("Newday"));
console.log("");

/* 8)
Create a function to calculate the sum of three elements of a given array of integers of length 3. */

function arraySum(arr){
    let sum =0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log('Q8');
console.log(arraySum([0, 9, 3]));
console.log("");

/* 9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. */ 

function arrayInt(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            console.log(`array contains 1`); 
        }
        else if(arr[i] === 3){
            console.log(`array contains 3`); 
        }
       
    } 
   
}

function arrayIntTrue(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1 || arr[i] === 3){
            return `${true}, contains 1 or 3`
        }
    } 
        return false
}

console.log('Q9');
console.log(arrayInt([5, 3]));
console.log(arrayIntTrue([6,3]));
console.log("");

/* 10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */
function arrayIntTest(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 1){
            return `array does not contain 1`
        }
        else if(arr[i] !== 3){
            return `array does not contain 3`
        }
    } 
    return `array contains either 1 or 3` 
}

function arrayIntFalse(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 1 && arr[i] !== 3){
            return `${true}, array does not contain 1 and 3`
        }
    } 
        return false
}

console.log('Q10');
console.log(arrayIntTest([1,3]));
console.log(arrayIntFalse([6,9]));
console.log("");

/* 11)
Create a function to find the longest string from a given array of strings. */

function stringLength(stringArr){
    let lastArray = stringArr[stringArr.length -1]
    for(let i=0; i<stringArr.length - 1; i++){
        if(lastArray.length < stringArr[i].length){
            lastArray = stringArr[i]
        }
    }
    return lastArray
}

console.log('Q11');
console.log(stringLength(["Apple", "Banana", "Strawberry", "cake"]));
console.log("");

/* 12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

function angles(angle){
    if(angle >=0 && angle <90){
        return ` ${angle} degrees is an Acute angle`
    }
    else if(angle === 90){
        return ` ${angle} degrees is a Right angle`
    }
    else if(angle > 90 && angle < 180){
        return ` ${angle} degrees is an Obtuse angle`
    }
    else if(angle === 180){
        return ` ${angle} degrees is a Straight angle`
    }
}

console.log('Q12');
console.log(angles(179));
console.log("");

/* 13)
Create a function to find the index of the greatest element of a given array of integers */

function arrayIndex(arr){
    let lastArray = arr[arr.length - 1]
    for(let i=0; i<arr.length-1; i++){
        if(lastArray < arr[i]){
            lastArray = arr[i]
        }
    }

    return arr.indexOf(lastArray)
}

console.log('Q13');
console.log(arrayIndex([1, 2, 10, 4, 5, 6]));
console.log("");

/* 14)
Create a function to get the largest even number from an array of integers. */

function evenNum(array){
    let lastArray = array[array.length -1]
    for(let i=0; i<array.length-1; i++){
        if((lastArray < array[i]) && (array[i] % 2) === 0){
            lastArray = array[i]
        }
    }
    return lastArray
}

console.log('Q14');
console.log(evenNum([1, 21, 10, 23, 22, 6]));
console.log("");
/* 15)
Create a function to check from two given integers, whether one is positive and another one is negative.
 */

function posNegInt(int1, int2){
    if(int1 >=0 && int2>=0){
        console.log(`${int1} and ${int2} are positive numbers`);
    }
    else if(int1<0 && int2<0){
        console.log(`${int1} and ${int2} are negative numbers`);
    }
    else if(int1<0 && int2>=0){
        console.log(`${int1} is negative and ${int2} is a positive number`);
    }
    else if(int1 >=0 && int2<0){
        console.log(`${int1} is posituve and ${int2} is a negative number`);
    }
    else{
        console.log(`Numbers are equal to 0`);
    }
}

console.log('Q15');
console.log(posNegInt(-5, 0));
console.log("");
/* 15)
/* 16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
 */

function uppLowCase(string){
    if(string.length<=3){
        return string.toUpperCase()
    }

    lowerCase = string.substring(0,3).toLowerCase()
    upperCase = string.substring(3, string.length).toUpperCase()
    return lowerCase + upperCase
}

console.log('Q16');
console.log(uppLowCase("Strive School"));
console.log(uppLowCase("Str"));
console.log("");
/* 17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */

function intSum(int1, int2){
    let sum = int1 + int2
    if(sum >50 && sum<80){
        return 65
    }
    else{
        return 80
    }
}

console.log('Q17');
console.log(intSum(5, 4));
console.log("");

/* 18)
Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

function factorString(num){

    let string =""

    if(num%3 === 0){
        string += "Diego"
    }
    if(num%5 === 0){
        string += "Riccardo"
    }
    if(num%7 === 0){
        string += "Stefano"
    }

    if((num%3 !==0)&&(num%5 !== 0)&&(num%7 !== 0)){
       string += num.toString()
    }

    return string
}

console.log('Q18');
console.log(factorString(30));
console.log("");

/* 19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */

function acronym(string){
    let arrayWord =[]
    let first = []
    arrayWord = string.split(" ")
    console.log(arrayWord);
    console.log(arrayWord[1].slice(0,1));
    for(let i=0; i<arrayWord.length; i++){
        first.push(arrayWord[i].slice(0,1))
    }
   return first.join('').toUpperCase()
}

console.log('Q19');
console.log(acronym("I love Strive School"));
console.log("");