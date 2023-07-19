function gerar() {
  let numero = window.document.querySelector("input#txtnumero").valueAsNumber;
  let res = window.document.querySelector("div#res ul");
  let h1 = window.document.querySelector("div#res h1");
  res.innerHTML = "";

  if (h1) {
    h1.remove();
  }

  if (!numero && numero !== 0) {
    h1 = document.createElement("h1");
    h1.classList.add("res-h1");
    h1.textContent = "Digite um número acima e veja sua tabuada!";
    res.parentNode.insertBefore(h1, res);
    window.alert("[ERRO] Número Inválido!!!");
  } else {
    for (let index = 1; index <= 10; index++) {
      let item = document.createElement("li");
      item.textContent = `${numero} x ${index} = ${numero * index}`;
      res.appendChild(item);
    }
  }
}
