function calculate(){
    
    let operator = prompt("Chose an operator (+ , - , * , /):");
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    
    let sum = x + y;
     
    let sub = x - y;
    let multi = x * y;
    let div = x / y;
    if(operator === '+'){
        document.getElementById("result").innerHTML = "Result :" + sum;
    } else if (operator === '-'){
        document.getElementById("result").innerHTML = "Result :" + sub;
    } else if(operator === '*'){
        document.getElementById("result").innerHTML = "Result :" + multi;
    } else if(operator === '/'){
        document.getElementById("result").innerHTML = "Result :" + div;

    }
    
    
    
    }