const numInputs = document.querySelectorAll(".num-input"),
  modal = document.querySelector(".modal-container"),
  result = document.querySelector(".result"),
  returnBtn = document.querySelector(".returnBtn"),
  calculateBtn = document.querySelector(".content .btn");

let num1, num2;

numInputs.forEach((inp) =>
  inp.addEventListener("keyup", () => {
    if (
      Array.from(numInputs).filter((it) => it.value != "").length <
      numInputs.length
    ) {
      calculateBtn.disabled = true;
    } else {
      calculateBtn.disabled = false;
    }
  })
);

function PGCD(a, b) {
  if (b === 0 && a === 0) {
    return "n'est pas défini !";
  } else if (b === 0) {
    return `= ${0}`;
  } else {
    let a_diviser = [a, b];
    let resultat;
    do {
      resultat = a_diviser.at(-2) % a_diviser.at(-1);
      a_diviser.push(resultat);
    } while (resultat > 0);
    return `= ${a_diviser.at(-2)}`;
  }
}

calculateBtn.addEventListener("click", () => {
  let nums = Array.from(numInputs).map((el) => Math.abs(parseInt(el.value)));

  num1 = Math.max(...nums);
  num2 = Math.min(...nums);

  modal.classList.add("showModal");

  result.innerHTML = `PGCD(${num1}, ${num2}) ${PGCD(num1, num2)}`;
});

returnBtn.addEventListener("click", () => {
  modal.classList.remove("showModal");
  numInputs.forEach((int) => (int.value = ""));
  calculateBtn.disabled = true;
});
