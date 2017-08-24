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
    - Accessing and setting properties on objects
    - Writing functions that accept inputs and return the correct answer

## Instructions

0. *Carefully* read all the instructions and problems.

1. Clone this repository to your local projects directory

1. Create a branch named `first-last` where `first` is your first name and `last` is your lastname.

1. Write your solutions to the problems presented below inside `solutions.js`.

1. Manually test your functions by passing them the example inputs.

1. Follow the "Testing" instructions provided below to run automated tests on your solution.

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

## How solutions will be graded

- Your grade is entirely dependent on the results of the automated tests. No credit will be given for partial or incorrect solutions. Accuracy and precision matter.

- If you complete all 6 problems and the tests show 0 failures, you will earn a 100% grade.

- If you complete 5 of the 6 problems and the only failing tests are for problems you did not attempt, you will earn an 83% grade.

- If you complete 3 of the 6 problems and the only failing tests are for problems you did not attempt, you will earn a 50% grade.

- If all the tests fail for all of your solutions, you will earn a 0% grade.

## Testing your work

Open `assessment.html` in your browser. It will run the automated tests on the code inside of `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Does the code solve the described problem?

    The sample inputs shown will be used to determine this, as well as other
    similiar inputs.

    Each problem will be awarded 2 points if the function accepts the correct
    inputs and produces the correct outputs, no points will be awarded if it
    does not.

- Did you follow the instructions *precisely*?

    - Did you create an appropriately named branch?
    - Did you push your solutions to GitHub?
    - Did you name your functions exactly as specified?
    - Did you `return` the final output from each function?
