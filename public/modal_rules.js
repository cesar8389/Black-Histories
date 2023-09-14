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
let buttonNext = document.getElementById("ButtonNext");
buttonNext.value = 1;

let buttonBack = document.getElementById("ButtonBack");


function carregarCont() {
  let div = document.getElementById("text_1");

  while (div.firstChild) {
    div.removeChild(div.lastChild)
  }

  let spamText = document.createElement("spam");

  spamText.classList.add("p")

  div.appendChild(spamText);


  switch (buttonNext.value) {
    case "1":
      buttonBack.value = 1;
      spamText.innerHTML = rules.rule1;
      buttonNext.value = 2;
      console.log(1)
      break;
    case "2":
      spamText.innerHTML = rules.rule2;
      buttonNext.value = 3;
      console.log(2)
      break;
    case "3":
      spamText.innerHTML = rules.rule3;
      buttonNext.value = 4;
      console.log(3)
      break;
    case "4":
      spamText.innerHTML = rules.rule4;
      console.log(4)
      break;
  }
  switch (buttonBack.value) {
    case "1":
      spamText.innerHTML = rules.rule1;
      buttonBack.value = 2;
      console.log(1)
      break;
    case "2":
      spamText.innerHTML = rules.rule2;
      buttonBack.value = 3;
      console.log(2)
      break;
    case "3":
      spamText.innerHTML = rules.rule3;
      buttonBack.value = 4;
      console.log(3)
      break;
    case "4":
      spamText.innerHTML = rules.rule4;
      console.log(4)
      break;
  }
}

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

