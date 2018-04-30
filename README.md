# Bamazon
### Node js command line application using mySQL database to build mock store front.
1. Download latest version of Node.Js here https://nodejs.org/en/ and mySQL here https://dev.mysql.com/downloads/
2. Open command line in the root directory of your recently downloaded repository
3. type "NPM init -y" to install json packages
4. type "NPM install mySQL inquirer"

6. Copy the schema into mySQL and click run to create the database and table
7. Once the data has been copied into mySQL you can run the program by typing "node bamazon.js"
8. Select option 1 to see the list of products and their attributes
9. Select option 2 to run the purchase command which will ask you which product you wish to purchase (case sensitive)
10. It will then ask you how much a certain quantity do you wish to purchase. If there is not enough in the inventory the program will return with a statement bringing you back to the start. 

If the amount is valid, the program will run returning the total price for the item and the number of items purchased. The program will also subtract the number given by the user.

Click the link below to see a youtube video of the program in action!

https://www.youtube.com/watch?v=IbeAF1hs2Lk&feature=youtu.be


