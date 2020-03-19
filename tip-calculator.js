/* John and his faimly went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200. 

Implement a tip calcuator using objects and loops: 
1. Create an object with an array of the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45. 
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 25% if the bill is more than $300(different than John).
*/

let john = {
  fullName: 'John Smith',
  bills: [ 124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {

      // Determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if(bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }  
  }
}

john.calcTips();
console.log(john);

