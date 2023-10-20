//==================Exercise #1==========//
/*Write a function that takes in the string and the list of dog names, loops through the list and checks that the current name is in the string passed in. The output should be: "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(names, str){
    names.forEach(name => {
        if(str.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched dog_name: ${name}`)
        } else {
            console.log(`No Matches: ${name}`)
        }
    })
}

findWords(dog_names, dog_string)



//============Exercise #2============//
/*Write a function that takes in an array and removes every even index with a splice, and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    console.log(arr)
}

replaceEvens(arr)



//============Code Wars Problems============//
//============Problem #1============//: Find smallest integer in array
// Given an array of integers your solution should find the smallest integer.

function findSmallestInt(args) {
    let smallest = args[0];
    args.forEach(arg => {
        if(arg < smallest){
            smallest = arg;
        }
    })
    return smallest;
}

let lst = [34, -345, -1, 100, 34, 15, 88, 2]
console.log(findSmallestInt(lst))




//============Problem #2============//: Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if(num * -1 >= 0) {
        return num
    } else {
        return -num
    }
}

console.log(makeNegative(-42))
console.log(makeNegative(23))
console.log(makeNegative(-8))
console.log(makeNegative(96))



//============Problem #3============//: Sum of Positive
// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
    arr.forEach(i => {
        if(i > 0) {
        sum += i;
        }
    })
    return sum;
}

let x = [1,2,-3,4,5]
let y = [1,-2,3,-4,5]
console.log(positiveSum(x));
console.log(positiveSum(y));



//============Problem #4============//: Volume of a Cuboid

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum = 0;
    numbers.forEach(num => {
      sum += num ** 2
    })
    return sum;
}

let nums = [2, 4, 6, 8]
console.log(squareSum(nums))
