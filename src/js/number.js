const number = document.getElementById("number");
const result = document.getElementById("result");

function increment() {
    let numberVal = number.value;
    number.innerText = ++numberVal;
    console.log(numberVal);
    result.innerText = (number.innerText + " has been incremented");
}

function decrement() {
    let numberVal = number.value;
    number.innerText = --numberVal;
    let result = document.getElementById("result");
    result.innerText = (number.innerText + " has been decremented");
}