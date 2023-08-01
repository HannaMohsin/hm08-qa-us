# Sprint 8 Project
## Project Summary
This project includes automated testing for the Urban Routes web app, which allows a user to order a taxi online. In the automation testing, I scripted my test to move through each element of the form required in order to successfully place an order.
## Technologies and Techniques used
Git and Github\
WebdriverIO\
Javascript\
async/await\
Mocha\
Test automation
## Testing Summary
This test covers the basic functionality of the Urban Routes application, specifically for automating the process of ordering a taxi and waiting for a driver. Within this test suite, there were multiple test cases including ensuring that the user can set the addresses, select the supportive plan, fill in the phone number, add a credit card payment, write a message to the driver, order various items and icecream, and lastly wait for the driver. Some of the technologies used were the Mocha framework, headless mode to view the actions of the browser, as well as devTools and css selectors to capture elements directly on the page. To run the tests, create a directory to store your copy of the project and clone using git clone ```git@github.com:username/hm08-qa-us.git```. Run the npm install command to add the needed dependencies and replace the base URL with a newly generated server address. It is also a good idea to check your version of Chromedriver to ensure that it is compatible with the version in the package.json file.
## Directions
- Clone or download repo
- Install npm if not already initialized with ```npm install```
- Run tests with ```npx wdio```