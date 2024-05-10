function getMonthsBetweenDates(startDate, endDate) {
  let months = [];
  let currentDate = new Date(startDate);

  // Iterate through each month until the endDate
  while (currentDate <= endDate) {

    // Add the current month to the list
    months.push(new Date(currentDate));

    console.log(Math.ceil((currentDate.getMonth() + 1) / 3))

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
}

// Example usage:
const startDate = new Date('2024-01-15'); // Replace with your start date
const endDate = new Date('2024-12-15');   // Replace with your end date

const monthsBetween = getMonthsBetweenDates(startDate, endDate);
console.log(monthsBetween);
