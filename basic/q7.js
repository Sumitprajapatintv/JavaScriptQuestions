//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

function getData(startYear, EndYear) {
  for (let i = startYear; i < EndYear; i++) {
    const date = new Date(i, 0, 1);
    if (date.getDay() == 0) {
      console.log("The year which has 1st janury and sunday is", i);
    }
  }

}
getData(2014, 2050);
