const pass = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", ",", "|",
    "<", ">", ".", "?", "/"];
const buttonEl = document.querySelector("#button-el")
const displayOne = document.querySelector("#display1")
const displayTwo = document.querySelector("#display2")
let a = ""
let b = ""
let x
let y
buttonEl.addEventListener("click", function () {
    a = ''
    b = ''
    for (let i = 1; i <= 12; i++) {
        x = Math.floor(Math.random() * (pass.length));
        y = Math.floor(Math.random() * (pass.length));
        a += pass[x];
        b += pass[y];

    }
    displayOne.value = a;
    displayTwo.value = b;


})