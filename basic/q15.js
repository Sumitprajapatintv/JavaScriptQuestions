// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function difference(number) {
  if (number < 13) {
    return 13 - number;
  }
  else {
    return (number - 13) * 2;
  }
}

console.log(difference(25));