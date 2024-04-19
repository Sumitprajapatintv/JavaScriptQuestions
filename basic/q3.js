/* Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */


const date = new Date();

const day = date.getDate();

const month = date.getMonth();

const year = date.getFullYear()

console.log(`${day}-${month}-${year}`);