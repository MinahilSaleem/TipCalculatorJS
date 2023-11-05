"use strict";
let amount = document.querySelector("#amount");
let tip = document.querySelector("#tip");
let button = document.querySelector("button")
let total = document.querySelector("h3");

function calculateTip() {
    let bill = parseFloat(amount.value);
    let tipPercentage = parseFloat(tip.value);

    if (!isNaN(bill) && !isNaN(tipPercentage)) {
        let tipAmount = (tipPercentage / 100) * bill;
        let totalAmount = tipAmount + bill
        total.innerHTML ="$" + totalAmount.toFixed(2); // Display the tip amount with two decimal places
    } else {
        total.innerHTML = "Invalid input";
    }
}

button.addEventListener("click", calculateTip)