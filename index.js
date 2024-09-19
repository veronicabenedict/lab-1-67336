// This file contains examples of JS code to aid you in actively learning how to write JS code. 
// To comment out the example code or any other code in the file to make for cleaner and less cluttered 
// console output, we recommend using Cmd + / keyboard shortcut to comment out lines of code as you go. This command works for the HTML file as well.
// Read all instructions and content.
// Display (to console using console.log) and test all results where appropriate in the code.
// Please remember to uncomment your code before submission.

// Challenge 1.0
// As seen in your hello world program, we can write to the console with console.log()
console.log("Hello, World!");

// Write JavaScript code below to display "Welcome to JavaScript!" in the console.

// Your code here
console.log("Welcome to JavaScript!");
// Challenge 1.1
// Now let's get into variables and data types of JS. 
// The following exanples are given to illustrate the syntax used to declare variables and data types:
let firstName = "Katelyn";
let age = 20;
let isStudent = true;
console.log(firstName, age, isStudent);

// The following examples are given to illustrate how to use string concatenation, simple arithmetic/manipulation of numerical variables, 
// and console logging with variables works in Javascript.
let greeting = "Hello, " + firstName + "!";
let nextYearAge = age + 1;
console.log(greeting, nextYearAge);

// Declare variables to store your favorite color, your height in centimeters, and a boolean indicating if you like JavaScript. 
// Then, perform some operations with these variables and display the results in the console.

// Your code here
let favColor = "blue";
let height = 165;
let likeJS = true;
console.log("My favorite color is " + favColor + ".");
if (likeJS) {
    console.log(" I like JavaScript.");
}
//Challenge 1.2
// Here is an example of a function in JS that calculates the sum of two given numbers a and b:
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));

// Write a function that takes two strings as arguments and returns their concatenation (hint: we used concatenation in Challenge 1.1). 
// Use "typeof" to check the arguments are both strings before returning, otherwise return "Invalid Arguments!"
// Call the function with different arguments and display the results in the console.

// Your code here
function concatStrings(s1, s2){
    if (typeof s1 === 'string' && typeof s2 === 'string'){
        return s1 + s2;
    }
    return "Invalid Arguments!";
}

console.log(concatStrings("Hello", "World"));
console.log(concatStrings("Hello", 5));

// Challenge 1.3
// Here is an example of if-else statements in JSON. It logs to console depending on whether certain conditions are fulfilled.
let number = 8;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Write a program that checks if a string is empty, has only one character, or has multiple characters, and displays the result.

// Your code here
let str = "Hello";
if (str.length === 0){
    console.log("The string is empty.");
} else if (str.length === 1){
    console.log("The string has only one character.");
} else {
    console.log("The string has multiple characters.");
}

// Challenge 1.4
// Here we have an example of a for loop that prints its incrementation to the console from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Write a program that prints only the even numbers from 1 to 20 using a for loop.

// Your code here
for(let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}
// Challenge 1.5
// Here we have an example of a while loop that prints its incrementation to the console from 1 to 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Write a program that prints the even numbers from 20 to 1 using a while loop.

//Your code here
let j = 20;
while(j>=1){
    console.log(j);
    j-=2;
}
// Challenge 2.1
// Here we have a function that takes in an array and adds the sum of all the numbers in the array as an output.
console.log("challenge 2.1");
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

function arraySum(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
}
console.log(arraySum(numbers));

// Create an array of your five favorite foods and write a program to print each food. 
// Then, write a function that takes an array of foods and returns a string listing all the foods separated by commas.
// Hint: use .join()

// Your code here
let foods = ["sushi", "burgers", "pizza", "tacos", "pasta"];
function printFoods(arr){
    return arr.join(", ");
}
console.log(printFoods(foods));
// Challenge 2.2
// Here we define a Person object with various properties like name, age, and job.
let person = {
    name: "Joe",
    age: 21,
    job: "Software Developer"
};
console.log(person);

function printPerson(p) {
    console.log(`Name: ${p.name}, Age: ${p.age}, Job: ${p.job}`);
}
printPerson(person);

// Create an object representing a car (make, model, year). 
// Then, write a function that takes a car object and prints its properties.

// Your code here
let car = {
    make: "Mazda",
    model: "3",
    year: 2019
}
function printCar(c){
    console.log(`Make: ${c.make}, Model: ${c.model}, Year: ${c.year}`);
}
printCar(car);
// Challenge 2.3
// Here we have a function that manipulates an array of numbers that we previously defined in Challenge 2.1.
function addItem(arr, item) {
    arr.push(item);
    return arr;
}
console.log(addItem([1, 2, 3], 4));

// We also have another function that updates a property of the Person object.
function updateJob(p, newJob) {
    p.job = newJob;
    return p;
}
console.log(updateJob({name: "Peter", age: 21, job: "Engineer"}, "Manager"));

// Write a function that removes the last item from an array. 
// Hint: use .pop() instead of .push()
function removeLastItem(arr){
    arr.pop();
    return arr;
}
// Then, write a function that updates the year of a car object.
function updateCar(c, cYear){
    c.year = cYear;
    return c;
}
// Your code here
console.log(removeLastItem([1, 2, 3, 4]));
console.log(updateCar(car, 2020));
// Incorporating HTML with JS

// For all following code, it will not be able to be run directly in the console. 
// Instead, you should open the index.html file we have provided in a browser and the JS will run with the HTML.
// To do this, right click the index.html file within the "Explorer" sidebar of your VSCode window and select "Open with Live Server".

// To access the console within your browser:
// If running in Safari, go to Safari Settings -> Advanced -> check the box for Show Developer Tools, then go to Develop -> Show Javascript Console to check console logging.
// If running in Chrome, right click on the page and select "Inspect" then click on the "Console" tab.

// Challenge 3.1
// In this Challenge section 3, we begin working with the Document Object Model (DOM).
// The DOM is a programming interface to create, change, and add elements from a web document.
// The HTML is viewed as a tree of nodes by the DOM, with each HTML element being a node.

// See Challenge 3.1 in the corresponding index.html file for the HTML component of this challenge (the example will be marked with "Challenge 3.1 | Example").
// Here are some examples of selecting elements in the index.html file. 
let myDiv = document.getElementById("myDiv");
let myP = document.querySelector(".myP");
console.log(myDiv, myP);

// Write JavaScript code to select the elements in the HTML snippet marked "Challenge 3.1 | Your Turn" and log them to the console.
// Make sure to use both getElementById() and querySelector() to get in practice with both!
// Your code here
let myDiv2 = document.getElementById("anotherDiv");
let myP2 = document.querySelector(".anotherP");
console.log(myDiv2, myP2);

// Challenge 3.2
// Here is an example of changing the content of an element we selected in Challenge 3.1:
myDiv.textContent = "Hello, World!";

// Write a program that changes the content of an element you selected in Challenge 3.1.
// Your code here
myDiv2.textContent = "Goodbye, World!";

// See the section marked "Challenge 3.2 | Example" in index.html for an example of how we can use JS manipulation of selected elements to make a button.
// Add a button to the HTML file and write a program that changes the content of a div when the button is clicked.

// Challenge 3.3

// Challenge 3.3.1 | Example
// Here is an example of creating a new element using JS and adding it to the DOM.
let newElement = document.createElement("p");
newElement.textContent = "This is the paragraph added to the DOM.";
document.body.appendChild(newElement);

// Write code that creates a new element and adds it to the DOM.

// Your code here
let newElem2 = document.createElement("b")
newElem2.textContent = "This is the bold text added to the DOM.";
document.body.appendChild(newElem2);

// See the section marked "Challenge 3.3.2 | Example" in index.html for a more advanced example of how we can use this ability to create and add elements to create a dynamic grocery list.

// Challenge 4.1
// Now we will begin to work with events. Events in JS are things that "happen" to HTML elements. Incorporating event handling within HTML allows us to "react" ro events.
// See the section marked "Challenge 4.1 | Example" in index.html for an example of how we can "react" to a button click (this is the event!) by displaying an alert.
// Observe carefully how we added Event Listeners using the method addEventListener(), which attaches an event handler to our selected element.
// Now under the section marked "Challenge 4.1 | Your Turn", write the event handling for a button that changes the background color of the colorDiv when clicked.
// See the section marked "Challenge 4.1.2 | Example" in index.html for a more advanced example of using event listeners to log the coordinates of a mouse click within a specified area.


// Challenge 5.1
// In Javascript, we simplify managing multiple asynchronous operations by using promises.
// Asynchronous operations allow multiple tasks to run simultaneously, running in the background so other code can be executed.
// This is particularly useful for operations that take a long time, like fetching API data.
// Promises are essentially objects that are placeholders for values available once asynchronous operations are done running.
// See the section marked Challenge 5.1 | Example in the index.html file for an example of how to write a Promise.

// In the index.html file, under the section marked Challenge 5.1 | Your Turn, do the following:
// Write a function that returns a promise that resolves if a random number is greater than 0.5 and rejects otherwise, use `.then()` and `.catch()` to handle it.
// Ensure that the result of the promise is displayed in the paragraph with the ID yourResult.
// The text color of the result should be set to green for success and red for failure. 

// Challenge 5.2
// We will now learn about using the Fetch API in JS. 
// The Fetch function returns a Promise that is fulfilled by a Response object (the server's response).
// The Promise will only be rejected based on network errors by the function, but does not fail on 404 or other error response codes.
// In those cases, it is handled by the .then() portion of the function, whereas network errors are handled by the .catch().
// API stands for Application Programming Interface, and allows two pieces of software to communicate data.
// The Fetch API provides us with a JavaScript interface for making HTTP requests and processing the responses.
// HTTP stands for Hypertext Transfer Protocol and works as a request-response protocol to communicate information between clients and servers.
// In our case, we are the client that needs data from a server, which is our external API(s).
// We will primarily be using the GET HTTP method, which is used to request data from a specified resource.

// Challenge 5.2.1 | Example
// Here is an example of using the Fetch API to get data from a specific API endpoint. This example does not process the JSON response.
// Helpful tip: To test API endpoints quickly in the terminal when programming, use "curl [API endpoint URL]".

// This function fetches data from the specified API endpoint.
function fetchRawData() {
    console.log('Button clicked, starting fetch...');
    // Fetches from the specified API endpoint.
    fetch('https://jsonplaceholder.typicode.com/users')
    // Logs the JSON response to the variable called response.
    .then(response => response.json())
    // Logs the data to console and calls our display function.
    .then(data => {console.log(data);
          displayRawData(data);})
    // Catches any errors that might occur and logs it to console.
    .catch(error => console.error('Error:', error));
}

// This function displays the raw JSON data for your reference.
function displayRawData(data) {
    const dataDisplay = document.getElementById('rawDataDisplay');
    dataDisplay.innerHTML = ''; // This line clears any previous output.
    // Converts the data to a readable JSON string.
    const rawData = JSON.stringify(data, null, 2);

    // Creates an element to display the raw data.
    const rawElement = document.createElement('raw');
    rawElement.textContent = rawData;

    // Adds the element with the raw data to the DOM in order to display it.
    dataDisplay.appendChild(rawElement);
}

// Challenge 5.2.2 | Example
// Now that we've seen what the JSON response from the API endpoint looks like, we can take the API data and 
// process/format it to be more readable and useful to us. See the example below for how we can do this.

function fetchData() {
    console.log('Button clicked, starting fetch...');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {console.log(data);
          displayData(data);})
    .catch(error => console.error('Error:', error));
}

// This function displays our data in cleaner way on the page for better understanding.
function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = '';

    // Parses through the raw JSON to extract the information we want to display.
    data.forEach(user => {
        // Dynamically creates each element.
        const userElement = document.createElement('div');
        // Optional but allows us to easily add styling in later on for any divs with all elements with the class "user".
        userElement.classList.add('user');
        // Dynamically generates the HTML we are using to display the data.
        userElement.innerHTML = `<p>Name: ${user.name} | Username: ${user.username} | Email: ${user.email} | Phone: ${user.phone}</p>`;
        // Adds each userElement to the DOM to display it.
        dataDisplay.appendChild(userElement);
    });
}

// Write a program that makes a GET request to the public API `https://api.github.com/users` using Fetch API 
// and logs the response in a nice format similar to Example. Display the login and the url of each user.
// Hint: use the helpful tip from the example in Challenge 5.2.1 to reference the JSON output quickly.

function fetchYourData() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {console.log(data);
          displayYourData(data);})
    .catch(error => console.error('Error:', error));
}

function displayYourData(data) {
    const dataDisplay = document.getElementById('yourDataDisplay');
    dataDisplay.innerHTML = ''; 
    // Your code here
    data.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `<p>Login: ${user.login} | URL: ${user.url}</p>`;
        dataDisplay.appendChild(userElement);
    });
  

}

// Challenge 6
// Deploy your project to GitHub Pages. Follow the instructions in instructions.ipynb.

// Congratulations! You have now completed learning the basics of Javascript. 
// There is so much more to learn than we can cover here, please check the linked resources for this lab for more learning!