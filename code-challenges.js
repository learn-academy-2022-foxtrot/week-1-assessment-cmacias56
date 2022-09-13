// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process: 
//Set a conditional to determine length of each variable by comparing the strings.
// using if and else if .length on both fruit1 & 2 to along with a rational operator to determine what one is greater
//console log to is used to display the sting with greater length
// Using same code format, Determined expected outcome is correct for set two

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// const fruit1 = "cherry"
// const fruit2 = "kiwi"

//  if(fruit1.length > fruit2.length){
//      console.log(fruit1)
//  } else if(fruit1.length < fruit2.length){
//      console.log(fruit2)
//  }
// Expected outcome: "banana"
// Expected outcome is correct, banana appeared.

// Set two:
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: 
//Started by uising condionditional operators if & else statements while utilizing rational operators in order to determine the temp being at boiling point or not.
// Set three different conditional statements along with console logs for each to to describ where the const stands on boiling point.

//const temp = 42

// if(temp > 212){
//     console.log("time to cook")
// } else if(temp < 212){
//     console.log("42 is below boiling point")
// } else if (temp = 212){
//     console.log("good to go")
// }
// Expected output: "42 is below boiling point"

//const temp = 350
// Expected output: "350 is above boiling point"

//if(temp > 212){
//     console.log("350 is above boiling point")
// } else if(temp < 212){
//     console.log("needs more time")
// } else if (temp = 212){
//     console.log("good to go")
// }

 //const temp = 212
// Expected output: "212 is at boiling point"
// if(temp > 212){
//    console.log("needs more time")
//  } else if(temp < 212){
//    console.log("its there")
//  } else if (temp === 212){
//    console.log("212 is at boiing point")
// }

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// set a variable 
// variable was set using both arrays combined using concat
// established variable using console.log along with using the informational command .length

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
//  var padresWorldSeriesRuns
// padresWorldSeriesRuns = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// console.log(padresWorldSeriesRuns.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// set a console log, utilized mutators in succession in order to revers the string.
// trial and error until resolved
// DO NOT FORGET () and ""

//const currentCohort = "Foxtrot 2022"
 //   console.log(currentCohort.split("").reverse().join(""))
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// utilize  console.log with the accessor .lastIndexof to remove the givenValue1  from the array

//const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
//const givenValue1 = 42
//console.log(myNumbers.lastIndexOf(givenValue1))

// Expected output: 7

//const givenValue2 = 10
//console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// utilized mutator .sort on variable to set array in order
// console.log mutated variable and added mutator .reverse

//const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
//sanDiegoSummerTemperatures.sort((a, b) => a - b)
//console.log(sanDiegoSummerTemperatures.reverse())
// Expected output: [82, 80, 79, 77, 76, 73, 72]

//const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

//sanDiegoWinterTemperatures.sort((a, b) => a - b)
//console.log(sanDiegoWinterTemperatures.reverse())

// Expected output: [68, 67, 66, 66, 62, 59, 59]
