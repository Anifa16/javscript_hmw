//hoisting is call a fuction before it called it assigned value 
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
  dog_names.forEach(function (item, index) {//this first 4 loop goes to do names
    let regex = new RegExp(item); //this then I use the regular expression to check if we have any word that matches 
    let matches = dog_string.match(regex);

    if (matches) {
      matches.forEach(function (match) { // if the we have a match I want it to print it out
        let index = dog_string.indexOf(match);
        console.log(`Matched ${match}`);
      });
    } else {
      console.log(`No Match for ${item}`);
    }
  });
}

findWords(); // here I'm caaling the fuction

// Matched Max
//No match for HAS 
//no match for PURple because it capitals but of I do 'gi' inftont of line 12 I will all matches 
//no match for a Dog because it starts with captial D
      

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
