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

function carregarCont() {
  let div = document.getElementById("text_1");
  console.log(rules);

  while (div.firstChild) {
    div.removeChild(div.lastChild)
  }

  let spamText = document.createElement("spam");

  div.appendChild(spamText);
  spamText.innerHTML = rules.rule1;
}

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

