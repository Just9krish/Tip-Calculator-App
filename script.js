const inputBill = document.querySelector('input[name="bill"]');
const inputPeople = document.querySelector('input[name="people"]');
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const totalOut = document.querySelector(".total p");
const amountOut = document.querySelector(".amount p");


let value;
let key;

span1.style.color = "red";
span2.style.color = "red";


// Bills and Peoples

function calc() {
  value = document.querySelector('input[name="bill"]').value;
  key = document.querySelector('input[name="people"]').value;

  const total = document.querySelector(".total p");
  const amount = document.querySelector(".amount p");

  const default5 = document.querySelector("input[value='option5']");
  const labelBill = document.querySelector(".label-bill");
  const labelPeople = document.querySelector(".label-people");

  if (value !== "") {
    value = Number(value);

    if (value < 0) {
      span1.innerHTML = "Can't be negative";
      labelBill.appendChild(span1);
      inputBill.style.color = "red";
      inputBill.classList.add("zero-negative");
    } else if (value == 0) {
      span1.innerHTML = "Can't be zero";
      labelBill.appendChild(span1);
      inputBill.style.color = "red";
      inputBill.classList.add("zero-negative");
    } else {
      span1.innerHTML = "";
      labelBill.appendChild(span1);
      inputBill.style.color = "inherit";
      inputBill.classList.remove("zero-negative");

      total.innerHTML = "0.00$";
      amount.innerHTML = "0.00$";
    }
  } else {
    span1.innerHTML = "";
    inputBill.style.color = "inherit";
    inputBill.classList.remove("zero-negative");

    total.innerHTML = `$0.00`;
    amount.innerHTML = `$0.00`;
  }
}

inputBill.addEventListener("keyup", calc);
inputPeople.addEventListener("keyup", calc);
