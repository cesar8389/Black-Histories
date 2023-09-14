const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const nextModalButton = document.querySelector("#next-modal");
const backModalButton = document.querySelector("#back-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

let button = document.getElementById("buttonNext");
button.value = 1;
function carregarCont() {
  let div = document.getElementById("text_1");

  while (div.firstChild) {
    div.removeChild(div.lastChild)
  }

  let spamText = document.createElement("spam");

  spamText.classList.add("p")

  div.appendChild(spamText);

  
  console.log("botao -->",button);

  switch (button.value) {
    case "1":
      spamText.innerHTML = rules.rule1;
      button.value = 2;
      console.log(1)
      break;
    case "2":
      spamText.innerHTML = rules.rule2;
      button.value = 3;
      console.log(2)
      break;
    case "3":
      spamText.innerHTML = rules.rule3;
      console.log(3)
      break;
  }
}

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

