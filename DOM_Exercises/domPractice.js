const container = document.querySelector("#container");

const p1 = document.createElement("p");
p1.classList.add("paragraph");
p1.style.color = "red";
p1.textContent = "Hey I'm red!";

container.appendChild(p1);

const h3 = document.createElement("h3");
h3.classList.add("header3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");
h1.classList.add("header1");
h1.textContent = "I'm in a div.";
p2.classList.add("paragraph2");
p2.textContent = "ME TOO!";
div.classList.add("div");
div.style.cssText= "background: pink; border: 5px solid black"

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);

/* One Method */
/*
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
*/

/* Another Method that lets you add multiple event listeners if the need arises */
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
})

const btn2 = document.querySelector("#btn2");
function alertFunction() {
    alert("Yay! You Did It!")
}
btn2.addEventListener("click", alertFunction);

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
    e.target.style.background = "blue";
})