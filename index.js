const input = require ('readline-sync');

//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desert= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
const foodgroup = [protein , grain ,vegetable, beverage,desert];
/*for (let i=0; i< 6; i++) {

  let mymealprepared = `meal#t${i+1}`;
  for (let j=0;j < foodgroup.length;j++){
    mymealprepared +=`${foodgroup[j][i]}`;
  }
 console.log (mymealprepared);

  //const mymeal = 'meal #${i}:${protein[i]} ${grain[i]} ${vegetable[i]} ${beverage[i]}${desert[i]};
  //console.log(mymeal);
}
*/

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

const mealNumstring = input.question ("yo how many meals you wanna make?: ");
const mealNum = Number(mealNumstring);

if (mealNum <1 || mealNum >6){
  console.log(" THATS AN ERROR , ONLY 1-6 PLEASE");
}else{
  //we can actually build the meal
let mealsCreated = 0;
while(mealsCreated < mealNum-1) {
 const myme = 'Meals #${mealsCreated+1}: ${protein[mealsCreated]}';
 
 const myMeal = `Meal #${mealsCreated+1}: ${protein[mealsCreated]} ${beverage[mealsCreated]} ${desert[mealsCreated]}`;
 //{beverage[mealscreated]} ${desert[mealscreated]}';
  console.log(myMeal);
  mealsCreated = mealsCreated + 1;
}
}


console.log ('---------------');

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

let myMealPrepared = ('sandwich');
  console.log("Don't worry, you can have double chocolate tomorrow.");