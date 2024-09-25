// 2
const myLi = document.querySelector("li.start-here");
console.log(myLi);

// 3

myLi.textContent = "main title";

// 4

const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;

const newSubTitle = document.createElement("li");
const subTitleText = document.createTextNode("sub title 4");

newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

// 5

const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

// 6

const head = document.head;
const title = head.lastElementChild;
title.textContent = "DOM Master";
