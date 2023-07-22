function generate() {
  let number = window.document.querySelector("input#txtnumber").valueAsNumber;
  let result = window.document.querySelector("div#res ul");
  let h1 = window.document.querySelector("div#res h1");
  result.innerHTML = "";

  if (h1) {
    h1.remove();
  }

  if (!number && number !== 0) {
    h1 = document.createElement("h1");
    h1.classList.add("res-h1");
    h1.textContent = "Enter a number above to see its multiplication table!";
    result.parentNode.insertBefore(h1, result);
    window.alert("[ERROR] Invalid Number!");
  } else {
    for (let index = 1; index <= 10; index++) {
      let item = document.createElement("li");
      item.textContent = `${number} x ${index} = ${number * index}`;
      result.appendChild(item);
    }
  }
}
