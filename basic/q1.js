/* 1. Write a JavaScript program to display the current day and time in the following format.  
 Sample Output : Today is : Tuesday.
 Current time is : 10 PM : 30 : 38  */


const date = new Date();
const weekArr = ['Sunday', 'Monday', 'TuesDay', 'WednesDay', 'ThursDay', 'Friday', 'SaturDay']
const day = date.getDay();

const hour = date.getHours();

const min = date.getMinutes();

const sec = date.getSeconds();

console.log("Today is :", weekArr[day - 1]);

if (hour < 12) {
  console.log("Current Time is :", `${hour} AM:${min}:${sec}`);
} else if (hour >= 12 && hour < 24) {
  console.log("Current Time is :", `${hour - 12} PM:${min}:${sec}`);
}
