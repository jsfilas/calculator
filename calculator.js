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
        result = model.add(num1, num2);
    } else if (op == "subtract") {
        result = model.subtract(num1, num2);
    } else if (op == "multiply") {
        result = model.multiply(num1, num2);
    } else if (op == "divide") {
        result = model.divide(num1, num2);
    } else {
        result = "error";
    }

    return result;
}

