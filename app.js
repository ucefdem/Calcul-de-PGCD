const numInputs = document.querySelectorAll(".num-input"),
  modal = document.querySelector(".modal-container"),
  result = document.querySelector(".result"),
  returnBtn = document.querySelector(".returnBtn"),
  modalOverlay = document.querySelector(".overlay"),
  calculateBtn = document.querySelector(".content .btn");

let num1, num2;

numInputs.forEach((inp) =>
  inp.addEventListener("keyup", () => {
    if (
      Array.from(numInputs).filter((it) => Boolean(+it.value)).length <
      numInputs.length
    ) {
      calculateBtn.disabled = true;
    } else {
      calculateBtn.disabled = false;
    }
  })
);

function PGCD(a, b) {
  let suite = [a, b];
  let reste;
  do {
    reste = suite.at(-2) % suite.at(-1);
    suite.push(reste);
  } while (reste > 0);
  return suite.at(-2);
}

calculateBtn.addEventListener("click", () => {
  let nums = Array.from(numInputs).map((el) => Math.abs(parseInt(el.value)));

  num1 = Math.max(...nums);
  num2 = Math.min(...nums);

  modal.classList.add("showModal");

  result.innerHTML = `<h4>PGCD(${num1}, ${num2})</h4> <h3>= ${PGCD(
    num1,
    num2
  )}</h3>`;
});

let hideModal = () => {
  modal.classList.remove("showModal");
  numInputs.forEach((int) => (int.value = ""));
  calculateBtn.disabled = true;
};

returnBtn.addEventListener("click", hideModal);
modalOverlay.addEventListener("click", hideModal);
