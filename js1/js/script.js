// // var getSubject = () => {
// //     let subject = document.getElementsByName('subject[]');
// //     let result = "";
// //     for (let i = 0; i < subject.length; i++) {
// //         if (subject[i].checked) {
// //             result += subject[i].value + " ";
// //         }
// //     }
// //     document.getElementById ('result').innerHTML = result;
// // }
// // document.addEventListener ('change', getSubject);

// var quiz = () => {
//     //checkbox
//     let score = 0;
//     let subject = document.getElementsByName('subject[]');
//     for (let i = 0; i < subject.length; i++) {
//         if (subject[i].checked) {
//             if (subject[i].value == "CSS") {
//                 score += 0;
//                 break;
//             } else {
//                 score = 25;
//             }
//         }
//     }
//     document.getElementById('result').innerHTML = score;

//     //select
//     let js = document.querySelector('#chooseJs');
//     if (js.value != "best") {
//         score += 0;
//     } else {
//         score += 25;
//     }
//     document.getElementById('result').innerHTML = score;

//     //radio 1
//     let html = document.getElementById('html');
//     let getHtml = document.getElementById('hello');
//     let ht = document.getElementById('hm');
//     if (html.checked ) {
//         score += 25;
//     } else if (getHtml.checked == "nothtml") {
//         score += 0;
//     } else {
//         score += 0;
//     }
//      document.getElementById('result').innerHTML = score;

//     // radio 2
//     let css = document.getElementById ('css');
//     let css1 = document.getElementById ('css1');
//     let css2 = document.getElementById ('css2');
//     if (css.checked) {
//         score += 25;
//     }else if (css1.checked) {
//         score += 0;
//     }else {
//         score +=0;
//     }
//     document.getElementById ('result').innerHTML = score;

// }
// var btn = document.getElementById('answer');
// btn.addEventListener('click', quiz);


var quiz = () => {
   let score = 0;

    //question 1

    let html = document.getElementById ('html');
    let html1 = document.getElementById ('hello');
    let html2 = document.getElementById ('hm');
    if (html.checked) {
        score += 25;
    }else if(html1.checked) {
        score += 0;
    }else if (html2.checked) {
        score +=0;
    }
    document.getElementById ('result').innerHTML = score;
    //question 2
    let css = document.getElementById ('css');
    let css1 = document.getElementById ('css1');
    let css2 = document.getElementById ('css2');
    if (css.checked) {
        score += 25;
    }else if(css1.checked) {
        score += 0;
    }else if (css2.checked) {
        score +=0;
    }
    document.getElementById ('result').innerHTML = score;

    //question3
    let subject = document.getElementsByName('subject[]');
    if (subject[i].checked) {
        if (subject[i].value == "HTML"){
            score = 25;
        }else if (subject[i].value == "CSS") {
            score = 25;
        }else {
            score += 0;
        }
    document.getElementById('result').innerHTML = score;
}   
var btn = document.getElementById('answer');
btn.addEventListener ('click', quiz);}