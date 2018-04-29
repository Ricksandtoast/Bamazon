var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //createProduct();
  //readProducts();
  // updateProduct();
  start();
});

function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [read] products or [update] products?",
      choices: ["READ", "purchase"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "READ") {
        readProducts();
      } else {
        updateProduct();
      }
    });
}
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id);
      console.log(res[i].product_name);
      console.log(res[i].price);
      console.log(res[i].stock_quantity);
      console.log("===========");
    }
    //connection.end();
    start();
  });
}
function updateProduct() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "product_name",
          type: "input",
          message: "What is the item you would like to purchase"
        },
        {
          name: "stock_quantity",
          type: "input",
          message: "How much would you like to purchase?"
        }
      ])
      .then(function(answer) {
        var chosenItem;
        var numPurchased = answer.stock_quantity;

        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.product_name) {
            chosenItem = results[i];
          }
        }
        // when finished prompting, insert a new item into the db with that info
        if (chosenItem.stock_quantity >= numPurchased) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity:
                  chosenItem.stock_quantity - answer.stock_quantity
              },
              {
                product_name: answer.product_name
              }
            ],
            function(err) {
              if (err) throw err;
              console.log("Your product was created successfully!");
              // re-prompt the user for if they want to bid or post
              //readProducts();
              var totalPrice = chosenItem.price * answer.stock_quantity;
              console.log("Your total price is equal to: " + totalPrice);
              start();
            }
          );
        } else {
          console.log("We do not have that much in stock currently");
          start();
        }
      });
  });
}

// logs the actual query being run
// function addProduct()
// {
//   inquirer
//   .prompt([
//     {
//       name: "product",
//       type: "input",
//       message: "What product would you like to add?"
//     },
//   ])
// }
