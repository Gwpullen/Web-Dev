const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log(altTitleRef);

titleRef.style.backgroundColor = "red";
titleRef.style.color = "#aaa111";
titleRef.style.fontSize = "3em";

document.querySelector("body > ul li").style.display = "none";

document.querySelector("body > ul li").style.display = "list-item";

document.querySelector("nav ul").style.display = "flex";

const firstARef = document.querySelector("a");

console.log("first a:", firstARef);

firstARef.href = "dom.html";
firstARef.setAttribute("target", "_blank");
