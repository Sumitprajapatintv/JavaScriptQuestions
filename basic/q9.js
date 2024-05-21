//Write a JavaScript program to calculate the days left before Christmas.

const date = new Date();

const ChristmasDate = new Date(date.getFullYear(), 11, 25);

if (date.getDate() > 25 && date.getMonth() == 11) {
  ChristmasDate.setFullYear(cmas.getFullYear() + 1);
}
const oneDay = 1000 * 60 * 60 * 24;

const dayLeft = Math.ceil(((ChristmasDate.getTime() - date.getTime()) / oneDay))

console.log("Day Left", dayLeft);