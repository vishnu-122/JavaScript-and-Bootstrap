/**
 *Author:Vishnu M Marwadi
Date:23 october 2023
 *this function checks if an input value is within the range [0, 13-17] and updates the HTML to indicate whether the value is in range or out of range.
 */
 function checkRange() {
    let inputValue = document.getElementById("group1_question1_input").value;
    let outputElement = document.getElementById("group1_question1_output");
    outputElement.innerHTML = "";
    if (!isNaN(inputValue) && (inputValue == 0 || (inputValue >= 13 && inputValue <= 17))) {
      outputElement.innerHTML = "In range";
    } else {
      outputElement.innerHTML = "Out of range";
    }
  }
  
 /**
 * This function calculates the perimeter and area of a square based on its side length. It also updates the HTML to display the calculated values.
 */
  function calculateSquareProperties() {
    let sideLength = document.getElementById("group1_question3_input").value;
    let outputElement = document.getElementById("group1_question3_output");
    outputElement.innerHTML = "";
    if (!isNaN(sideLength) && sideLength >= 0) {
      outputElement.innerHTML = "Perimeter: " + (sideLength * 4) + " Area: " + (sideLength * sideLength);
    } else {
      outputElement.innerHTML = "Can't calculate";
    }
  }
  /**
 * This function checks if a given character is a vowel (a, e, i, o, u), 'y' (sometimes a vowel), or a consonant. It updates the HTML to display the result.
 */
  function checkVowel() {
    let character = document.getElementById("group2_question1_input").value;
    character = character.toLowerCase();
    let outputElement = document.getElementById("group2_question1_output");
    outputElement.innerHTML = "";
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
      outputElement.innerHTML = "A Vowel";
    } else if (character === "y") {
      outputElement.innerHTML = "Sometimes a Vowel";
    } else {
      outputElement.innerHTML = "Not a vowel";
    }
  }
  /**
 * This function calculates the factorial of a positive integer entered as input and updates the HTML with the calculated factorial.
 */
  function calculateFactorial() {
    let number = document.getElementById("group2_question3_input").value;
    let outputElement = document.getElementById("group2_question3_output");
    outputElement.innerHTML = "";
    if (!isNaN(number) && number > 0) {
      let factorial = 1;
      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }
      outputElement.innerHTML = factorial;
    } else {
      outputElement.innerHTML = "Cannot compute factorial value";
    }
  }
  /**
 * This function evaluates a simple arithmetic formula of the form "operand1 operator operand2." It detects the operator and performs the corresponding calculation, updating the HTML with the result.
 */
  function evaluateFormula() {
    let inputFormula = document.getElementById("group3_question2_input").value;
    let outputElement = document.getElementById("group3_question2_output");
    outputElement.innerHTML = "";
  
    if (!isNaN(parseInt(inputFormula[0])) && (inputFormula[1] === "+" || inputFormula[1] === "-" || inputFormula[1] === "*" || inputFormula[1] === "/" || inputFormula[1] === "%")) {
      inputFormula = removeSpaces(inputFormula);
  
      if (!isNaN(parseInt(inputFormula[2]))) {
        let operand1 = parseInt(inputFormula[0]);
        let operand2 = parseInt(inputFormula[2]);
        let result;
  
        if (inputFormula[1] === "+") {
          result = operand1 + operand2;
        } else if (inputFormula[1] === "-") {
          result = operand1 - operand2;
        } else if (inputFormula[1] === "*") {
          result = operand1 * operand2;
        } else if (inputFormula[1] === "/") {
          result = operand1 / operand2;
        } else if (inputFormula[1] === "%") {
          result = operand1 % operand2;
        }
  
        outputElement.innerHTML = result;
      } else {
        outputElement.innerHTML = "Invalid formula";
      }
    } else {
      outputElement.innerHTML = "Invalid formula";
    }
  }
  
  //This is a utility function that removes spaces from a given string, which is used to process the input formula in the evaluateFormula function.
  /**
 * Removes spaces from a given string.
 * @param {string} userInput - The input string with spaces.
 * @returns {string} - The input string with spaces removed.
 */
  function removeSpaces(userInput) {
    let result = '';
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== ' ') {
        result += userInput[i];
      }
    }
    return result;
  }
  