// var foodOrder = ["Pizza", "Hamburger", "Bread", "Cheese", "Meat", "Milk"];
// for (food in foodOrder) {
//     if (food == 4) {
//         switch (foodOrder[food]) {
//             case "Pizza":
//             console.log ("Order Pizza successfully");
//             break;
//             case "Hamburger":
//             console.log ("Order Hamburger successfully");
//             break;
//             case "Bread":
//             console.log ("Order Bread successfully");
//             break;
//             case "Cheese":
//             console.log ("Order Cheese successfully");
//             break;
//             case "Meat":
//             console.log ("Order Meat successfully");
//             break;
//             case "Milk":
//             console.log ("Order Milk successfully");
//             break;
//             default:
//             console.log ("Good Bye !");
//             break;
//         }
//     }
// }



// var foodOrder = ["Pizza", "Hamburger", "Bread", "Cheese", "Meat", "Milk"];
// for (food in foodOrder) {
//     if (food == 3) {
//         console.log (foodOrder[food]);
//     }
// }


// var foodOrder = ["Pizza", "Hamburger", "Bread", "Cheese", "Meat", "Milk"];
// for (food of foodOrder) {
//     if (food == foodOrder[2]) {
//         console.log (food);
//     }
// }



// var foodOrder = ["Pizza", "Hamburger", "Bread", "Cheese", "Meat", "Milk"];
// let foods = foodOrder.length;
// let i = 0;
// do {
//     console.log(foodOrder[i]);
//     i++;
// }while ( i =food);


// var classA = ["Bopha", "Chompa", "Chompey"];
// var classB = ["Soknat", "Sokna", "Soda"];
// let classes = classA.concat(classB);
// console.log (classes);

// var num1 = [1, 2, 3, 4, 5];
// var num2 = [6, 7, 8, 9, 10];
// var com = num1.concat (num2);
// console.log (com);


// var num1 = [1, 2, 3, 4, 5];
// var num2 = [6, 7, 8, 9, 10];
// console.log(num2.length);



// // var num2 = [6, 7, 8, 9, 10];
// // var num = num2.pop();
// // console.log(num2);



// // var num2 = [6, 7, 8, 9, 10];
// // num2.shift()
// // console.log(num2);


// // var classA = ["A1", "A2", "A3"];
// // console.table (classA);
// // classA.push ("A4");
// // console.table(classA);
// // classA.push ("A5");
// // console.table (classA);
// // classA.reverse();
// // console.table(classA);



// // var classA = [1, 2, 3, 4, 5];
// // classA.reverse();
// // console.table(classA)


// // var sum = (a, b) => {

// //     return a + b;
// // }
// // console.log(sum(100,90));


// // var findMax = (n1, n2) => {
// //     if (n1 > n2) {
// //         console.log (n1);
// //     }else 
// //         console.log (n2);
// // }
// // findMax (300, 200);




// var timer = () => {
//     let day = new Date();
//     let hours = day.getHours();
//     let minutes = day.getMinutes();
//     let seconds = day.getSeconds();
//     let result = document.getElementById("time");
//     if ( hours < 12) {
//         result.innerHTML = hours + ":" + minutes + ":" + seconds + "AM";
//     }else {
//         result.innerHTML = hours + ":" + minutes + ":" + seconds + "PM";
//     }
// }
// setInterval (timer, 1000);
// timer();


// var color = () => {
//     document.body.style.background = "red";
// }
// document.addEventListener ('click', color);
// var color1 = () => {
//     document.body.style.background = "green";
// }
// document.addEventListener ("dblclick", color1);



// var color = () => document.body.style.background = "red";
// var color1 = () => document.body.style.background = "green";
// document.addEventListener ('click', color);
// document.addEventListener ("dblclick", color1);


// var color = () =>  document.body.style.background
// =document.body.style.background == "red"?"green":"red";
// setInterval (color, 1000);

// var color = () => {
//     if (document.body.style.background == "teal"){
//         document.body.style.background = "purple";
//     }else {
//         document.body.style.background = "teal";
//     }
// }
// setInterval (color, 1000);

//get Number 

function getNumber(number) {
    let getValue = document.getElementById("enter");
    switch (number) {
        case 1:
            getValue.value += '1';
            break;
        case 2:
            getValue.value +='2';
            break;
        case 3:
            getValue.value +='3';
            break;
        case 4:
            getValue.value +='4';
            break;
        case 5:
            getValue.value +='5';
            break;
        case 6:
            getValue.value +='6';
            break;
        case 7:
            getValue.value +='7';
            break;
        case 8:
            getValue.value +='8';
            break;
        case 9:
            getValue.value +='9';
            break;
        case 0:
            getValue.value +='0';
            break;
    }
}
//Operator
function operator (sign) {
    let getOperator = document.getElementById("enter");
    switch (sign) {
        case "+":
            getOperator.value += '+';
            break;
        case "-":
            getOperator.value += '-';
            break;
        case "x":
            getOperator.value += 'x';
            break;
        case "/":
            getOperator.value += "/";
            break;
        case "%":
            getOperator.value += "%";
            break;
        case "=":
            getOperator.value += '=';
            break;
    }
}
//clear screen 
function clearScreen () {
    document.getElementById("enter").value = "";
    document.getElementById("answer").value = "";
}
//backspace
function backSpace() {
    let exp = document.getElementById("enter").innerHTML;
    document.getElementById("enter").innerHTML = exp.substring(0,exp.length-1);
}
//calculate
function calculate() {
    let getCalculate = document.getElementById("enter");
    let answers = Math.floor (+eval(getCalculate.value));
    document.getElementById("answer").value = "=" + answers;
}






