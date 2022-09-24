
//concentrated string// 

let day = "Good morning,";
let night = "Good evening,";
let question = "how are you?";

let greetingDay = day + question;
let greetingNight = night + question; 

console.log(day + " have you had breakfast?");
console.log(night + " was it a good day?")

//if statement//
let minAge = 17; 

if(minAge >= 18){
    console.log('Welcome!')
} else {(minAge < 18)
    console.log('Whoa there, buddy! You are NOT old enough')}

//switch statement//
const color = "Blue";

switch(color){
    case "Green": 
        console.log("Like the trees?")
        break;
    case "Yellow":
        console.log("Like the sun?")
        break;
    case "Blue": 
        console.log("Like the ocean?")
        break;
    case "Red": 
        console.log("Like roses?")
        break;
    default:
        console.log("What is your favorite color?")
        }




//string method//
let str = "Javascript | String Method"

let slice = str.slice(0,10);
        console.log(slice);


let substring = str.substring(13, 26);
        console.log(substring);

let replace = str.replace("Method","Method Example");
        console.log(replace);

let upperCase = str.toUpperCase();
let lowerCase = str.toLowerCase();
        console.log (upperCase + " or " + lowerCase + "?");

let str1 = ": Does it work?"

let concat = str.concat(str1);
console.log(concat);

let charAt = str.charAt(0); 
console.log("My name is " + charAt); 

//number method//
//using the number method and .toFixed to console.log PI to the second decimal
const PI = 3.141596254;

let num = PI.toFixed(2);
        console.log (num);

//using the number method .valueOf//
let x = {value: 983484}; 
let y = {value: 328742};

let answer = (x.value + y.value).valueOf();
        console.log (answer);