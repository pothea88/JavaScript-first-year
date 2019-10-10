// get element by Id

let heading= document.getElementById("heading1");
heading.innerHTML= "Welcome to 2020 WEB A";
heading.style.color = "teal";

// get element by class

let para= document.getElementsByClassName("text");
para[0].style.color= "orange";
para[1].style.color = "red";

// get elemen by tags name

let tags = document.getElementsByTagName("li");

tags[0].style.color = "green";
tags[1].style.color = "blue";
tags[2].style.color = "purple";
tags[3].style.color = "teal";
tags[0].style.fontSize = "40px";
tags[0].style.fontFamily = "arail";

// get element by Query

let query= document.querySelector("h2");
query.innerHTML="Welcome me";
query.style.fontSize = "40px";
query.style.color = "orange";
