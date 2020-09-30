let currentDisplay = document.getElementById("count").innerHTML;
let firstNumDisplay;
let secondNumDisplay;
let operatorClicked;
let dotPresent = false;


let model = {
    add: function(a, b) {
        return a + b;
    }, 

    subtract: function(a, b) {
        return a - b;
    }, 

    multiply: function(a, b) {
       return a * b;
    },

    divide: function(a, b) {
        return a/b;
    },

};

let operate = function(num1, op, num2) {
    let result = ""
    if (op == "add") {
        result = model.add(parseFloat(num1), parseFloat(num2));
    } else if (op == "subtract") {
        result = model.subtract(parseFloat(num1), parseFloat(num2));
    } else if (op == "multiply") {
        result = model.multiply(parseFloat(num1), parseFloat(num2));
    } else if (op == "divide") {
        result = model.divide(parseFloat(num1), parseFloat(num2));
    } else {
        result = "error";
    }

    return result;
}

let numbers = {
    one: function() {
        currentDisplay = document.getElementById("count").innerHTML += 1;
    },
    two: function() {
        currentDisplay = document.getElementById("count").innerHTML += 2;
    },
    three: function() {
        currentDisplay = document.getElementById("count").innerHTML += 3;
    },
    four: function() {
        currentDisplay = document.getElementById("count").innerHTML += 4;
    },
    five: function() {
        currentDisplay = document.getElementById("count").innerHTML += 5;
    },
    six: function() {
        currentDisplay = document.getElementById("count").innerHTML += 6;
    },
    seven: function() {
        currentDisplay = document.getElementById("count").innerHTML += 7;
    },
    eight: function() {
        currentDisplay = document.getElementById("count").innerHTML += 8;
    },
    nine: function() {
        currentDisplay = document.getElementById("count").innerHTML += 9;
    },
    zero: function() {
        currentDisplay = document.getElementById("count").innerHTML += 0;
    },

    clear: function() {
        currentDisplay = document.getElementById("count").innerHTML = '';
        firstNumDisplay = undefined;
        secondNumDisplay = undefined;
        dotPresent = false;
    },

    dot: function() {
        if(dotPresent == false) {
            currentDisplay = document.getElementById("count").innerHTML += '.';
            dotPresent = true;
        }
       
    },
    
};

let work = {

    add: function() { 

        if (firstNumDisplay == undefined) {
        firstNumDisplay = currentDisplay;
        currentDisplay = document.getElementById("count").innerHTML = '';
        operatorClicked ="add";
        dotPresent = false;
        } else {
            secondNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = operate(firstNumDisplay, operatorClicked, secondNumDisplay);
            operatorClicked = "add";
            firstNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = '';
        }
       
    },

    subtract: function() {
        if (firstNumDisplay == undefined) {
        firstNumDisplay = currentDisplay;
        currentDisplay = document.getElementById("count").innerHTML = '';
        operatorClicked ="subtract";
        dotPresent = false;
        } else {
            secondNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = operate(firstNumDisplay, operatorClicked, secondNumDisplay);
            operatorClicked = "subtract";
            firstNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = '';
        }
        
    },

    multiply: function() {
        if (firstNumDisplay == undefined) {
        firstNumDisplay = currentDisplay;
        currentDisplay = document.getElementById("count").innerHTML = '';
        operatorClicked = "multiply";
        dotPresent = false;
        } else {
            secondNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = operate(firstNumDisplay, operatorClicked, secondNumDisplay);
            operatorClicked = "multiply";
            firstNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = '';
        }

    },

    divide: function() {
         if (firstNumDisplay == undefined) {
            firstNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = '';
            operatorClicked = "divide";
            dotPresent = false;
        }
        else {
            secondNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = operate(firstNumDisplay, operatorClicked, secondNumDisplay);
            operatorClicked = "divide";
            firstNumDisplay = currentDisplay;
            currentDisplay = document.getElementById("count").innerHTML = '';
        }
    },

};

let equals = function() {
    secondNumDisplay = currentDisplay;
    currentDisplay = document.getElementById("count").innerHTML = operate(firstNumDisplay, operatorClicked, secondNumDisplay);
    firstNumDisplay = undefined;
    secondNumDisplay = undefined;
    
} 

document.getElementById("one").addEventListener("click", numbers.one);
document.getElementById("two").addEventListener("click", numbers.two);
document.getElementById("three").addEventListener("click", numbers.three);
document.getElementById("four").addEventListener("click", numbers.four);
document.getElementById("five").addEventListener("click", numbers.five);
document.getElementById("six").addEventListener("click", numbers.six);
document.getElementById("seven").addEventListener("click", numbers.seven);
document.getElementById("eight").addEventListener("click", numbers.eight);
document.getElementById("nine").addEventListener("click", numbers.nine);
document.getElementById("zero").addEventListener("click", numbers.zero);

document.getElementById("clearButton").addEventListener("click", numbers.clear);
document.getElementById("period").addEventListener("click", numbers.dot);

document.getElementById("add").addEventListener("click", work.add);
document.getElementById("subtract").addEventListener("click", work.subtract);
document.getElementById("multiply").addEventListener("click", work.multiply);
document.getElementById("divide").addEventListener("click", work.divide);

document.getElementById("equals").addEventListener("click", equals);



