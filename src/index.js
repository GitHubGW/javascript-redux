const number = document.querySelector("#number");
const addBtn = document.querySelector("#addBtn");
const minusBtn = document.querySelector("#minusBtn");

let count = 0;

number.innerText = count;

const handleAddBtn = () => {
  count = count + 1;
  number.innerText = count;
};

const handleMinusBtn = () => {
  count = count - 1;
  number.innerText = count;
};

if (addBtn) {
  addBtn.addEventListener("click", handleAddBtn);
}

if (minusBtn) {
  minusBtn.addEventListener("click", handleMinusBtn);
}
