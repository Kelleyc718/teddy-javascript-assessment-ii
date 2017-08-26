# JavaScript Assessment

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparisson operators
    - String and array manipulation
    - Creating arrays and objects
    - Accessing and setting properties on objects
    - Writing functions

## Instructions

0. *Carefully* read all the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory

1. Create a branch named `first-last` where `first` is your first name and `last` is your lastname.

1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit, and push to your branch

## Problems

1. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.

        isNegative(-1) // true
        isNegative(-5) // true
        isNegative(0) // false
        isNegative(6) // false

2. Write a function named `average` that accepts an array of numbers and returns
   the average of those numbers.

        average([1, 2, 3]) // 2
        average([4, 6, 8, 10, 12]) // 8
        average([1, 2]) // 1.5

3. Write a function named `countOdds` that accepts an array of numbers and
   returns the number of odd numbers in the array.

        countOdds([1, 2, 3]) // 2
        countOdds([4, 6, 8, 10]) // 0
        countOdds([1, 2, 1, 1]) // 3

4. Write a function named `convertNameToObject` that accepts a string that
   contains a first name and last name separated by a space character, and returns an
   object with properties `firstName` and `lastName`.

        convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
        convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

5. Write a function named `fiveTo` that accepts a number and returns an array of
   the integers from 5 up to and including the passed number.

        fiveTo(5)   // [5]
        fiveTo(10)  // [5, 6, 7, 8, 9, 10]
        fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2] 
        fiveTo(6)   // [5, 6]
   
6. Write a function named `upperCaseLastNames` that accepts an array of objects
   where each object has properties `firstName` and `lastName` and returns the
   same array of objects with each last name capitalized

        var names = [
            {firstName: 'Harry', lastName: 'Potter'},
            {firstName: 'Ron', lastName: 'weasley'},
            {firstName: 'Hermione', lastName: 'granger'}
        ];

        upperCaseLastNames(names);
        /*
        [
           {firstName: 'Harry', lastName: 'Potter'},
           {firstName: 'Ron', lastName: 'Weasley'},
           {firstName: 'Hermione', lastName: 'Granger'}
        ]
         */

## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the results of the automated tests. No credit will be given for partial or incorrect solutions. Accuracy and precision matter.

- For a solution to be considered correct, all of the tests under that function's Spec List must be green.

- There are 6 points available on this assessment. Each solution will be awarded 1 point if *all* the specs for that solution are green. 

- If you complete all 6 problems and the tests show 0 failures, you will earn a 100% grade.

- If you write 6 solutions and the Spec List shows that one function has failing tests, you will receive 5 out of 6 points.

- If half of your functions have all green tests, and the only failing tests are for problems you did not attempt, you will earn a 50% grade.

- If all the tests fail for all of your solutions, you will earn a 0% grade.

## Hints

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```
