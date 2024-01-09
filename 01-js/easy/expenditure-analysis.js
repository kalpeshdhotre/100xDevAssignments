/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
   {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: "Food",
      itemName: "Pizza",
   },
   {
      id: 2,
      timestamp: 1656259600000,
      price: 20,
      category: "Food",
      itemName: "Burger",
   },
   {
      id: 3,
      timestamp: 1656019200000,
      price: 15,
      category: "Clothing",
      itemName: "T-Shirt",
   },
   {
      id: 4,
      timestamp: 1656364800000,
      price: 30,
      category: "Electronics",
      itemName: "Headphones",
   },
   {
      id: 5,
      timestamp: 1656105600000,
      price: 25,
      category: "Clothing",
      itemName: "Jeans",
   },
];

function calculateTotalSpentByCategory(transactions) {
   // Check Object length for empty object.
   const finalExpense = [];
   //  const objExpense = {
   //     category: null,
   //     price: null,
   //  };

   if (transactions.length == 0) {
      console.log(`NO DATA`);
      return;
   }
   finalExpense.push({ category: transactions[0].category, price: transactions[0].price });

   for (let i = 1; i < transactions.length; i++) {
      // console.log(Object.keys(transactions[i]));
      // adding first element in array
      // if (finalExpense.length = 0) {
         //  objExpense.category = transactions[i].category;
         //  objExpense.price = transactions[i].price;
         //  finalExpense.push(objExpense);
        //  finalExpense.push({ category: transactions.category, price: transactions.price });
      // } else {
         finalExpense.forEach((element) => {
            // console.log(transactions[i].itemName);

            if (element.category == transactions[i].category) {
               element.price += transactions[i].price;
            } else {
               finalExpense.push({ category: transactions[i].category, price: transactions[i].price });
            }
         });
      // }
   }
   console.log(finalExpense);
}

// return [];

calculateTotalSpentByCategory(transactions);
// module.exports = calculateTotalSpentByCategory;
