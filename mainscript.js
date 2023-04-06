//hoisting is call a fuction before it called it assigned value 
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];
// I need to create a function that take in a string and a lsi 
function pet_Names_in_str(a_string, a_list) { 
  // I need to create a 4 loop through loop to my list 
  for (let i = 0; i < a_list.length; i++) {
    // I need a if statement that tkes in my string and uses the includes method see if my liste items are include in string 
    if (a_string.toLowerCase().includes(a_list[i].toLowerCase())) {
      console.log(`Matched ${a_list[i]}`); // I just log it here to the console 
    } else { // we have no much we will log no match 
      console.log("No Match"); 
    }
  }
}

pet_Names_in_str(dog_string, dog_names);




//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(given_arr) {
  for (let i = 0; i < given_arr.length; i++) { //this 4 loop goes though my array 
    if (i % 2 === 0) { // using the mudolo operator to check if index of i has a reminder
      given_arr.splice(i, 1, "even index"); // here I use the splice to go though it 
    }
  }

  console.log(given_arr);
}

replaceEvens(given_arr); // here i call my fuction

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// code war problem
//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
   return x.replace(/\s/g, ""); //.replace to remove the space 
   }


   //Write a program that will calculate the number of trailing zeros in a factorial of a given number.

  // N! = 1 * 2 * 3 *  ... * N
   
  // Be careful 1000! has 2568 digits...
   
  // For more info, see: http://mathworld.wolfram.com/Factorial.html
   
  // Examples
   //zeros(6) = 1
  // # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
   
   //zeros(12) = 2
   //# 12! = 479001600 --> 2 trailing zeros
 //  Hint: You're not meant to calculate the factorial. Find another way to find the 


 let factorial = (number) => {
  // initialize fac variable to 1
  let counter=0;
  let fac = 1;

  // calculate factorial using a while loop
  while (number > 0) {
    fac *= number;
    number--;
  }

  // turn it into a string
  fac = fac.toString();
  // for loop though though my string 
  for (let i = fac.length - 1; i >= 0; i--) {
    if (fac[i] === "0") {
      counter += 1;
    } else {
      break;
    }
  }

  // return the count of trailing zeros
  return counter;

}

