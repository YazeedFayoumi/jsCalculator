let firstNum
let secondNum
let theOperation
let isDecimal = false;

let step=0
let answer=0

let display = document.getElementById('calculation')
let ans = document.getElementById('answer')

let arrayNum1=[]
let arrayNum2=[]
 
function displayNum(num){
    if(step===0 || step===1){
    arrayNum1.push(num)
    step=1
    firstNum= Number(arrayNum1.join(''))
    display.value= firstNum
    }else if(step ===2){
    arrayNum2.push(num)
    secondNum = Number(arrayNum2.join(''))
    display.value= secondNum
    }
}

function displayOp(operation){
    step=2
    theOperation= operation
}

function displayClear(){
    firstNum=null
    secondNum=null
    theOperation=null

    step = 0
    answer =0 
    display.value = '0'
    ans.textContent = 'Ans = 0';

    arrayNum1.length=0
    arrayNum2.length=0
}

//  const calculate = () =>{
//     if(theOperation==='+'){
//         answer = firstNum + secondNum
//         display.value = answer
//         ans.textContent = 'Ans = ' + display.value;
//     } else if(theOperation==='-'){
//         answer = firstNum - secondNum
//         display.value = answer
//         ans.textContent = 'Ans = ' + display.value;
//     } else if(theOperation === '×'){
//         answer = firstNum * secondNum
//         display.value = answer
//         ans.textContent = 'Ans = ' + display.value;
//     } else if(theOperation ==='÷' && secondNum !== 0){

//          answer = firstNum / secondNum
//          display.value = answer
//          ans.textContent = 'Ans = ' + display.value;
//         } 
function calculate() {
    switch (theOperation) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer = firstNum - secondNum;
            break;
        case '×':
            answer = firstNum * secondNum;
            break;
        case '÷':
            if (secondNum !== 0) {
                answer = firstNum / secondNum;
            } else {
                answer = 'Error: Division by zero';
            }
            break;
        default:
            answer = 'Error: Invalid operation';
            break;
    }
    if (theOperation === '%') {
        if (secondNum !== 0) {
            answer = firstNum % secondNum;
        } else {
            answer = 'Error: Division by zero';
        }
    }

    if (theOperation === '.') {
        answer = parseFloat(firstNum + '.' + secondNum);
    }

    if (theOperation === '(' || theOperation === ')') {
        answer = 'Error: Parenthesis operation not supported';
    }

    display.value = answer;
    ans.textContent = 'Ans = ' + display.value;

    display.value = answer;
    ans.textContent = 'Ans = ' + display.value;
}
        
        function displayPercent() {
            if (theOperation === '') {
                display.value = (parseFloat(firstNum) / 100).toString();
                firstNum = display.value;
            } else {
                const num2 = parseFloat(secondNum) / 100;
                display.value += num2;
                secondNum = display.value;
            }
        }
        
        function displayDecimal() {
            if (!isDecimal) {
                if (theOperation === '') {
                    firstNum += '.';
                    display.value += '.';
                    isDecimal = true;
                } else {
                    secondNum += '.';
                    display.value += '.';
                    isDecimal = true;
                }
            }
        }
        
        function displayParenthesis(parenthesis) {
            if (parenthesis === '(') {
                display.value += '(';
            } else {
                display.value += ')';
            }
        }
    
    
