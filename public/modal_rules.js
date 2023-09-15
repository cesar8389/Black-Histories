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
let buttonBack = document.getElementById("ButtonBack");

buttonNext.value = 1;

let flag_buttonNext = false;

carregarCont();
buttonNext.addEventListener('click', function listenButtonNext(){
  flag_buttonNext = true;
  carregarCont();
});
buttonBack.addEventListener('click', function listenButtonBack(){
  carregarCont();
});

function resetFlagButton(){
  flag_buttonNext = false;
}

function carregarCont() {
  let div = document.getElementById("text_1");

  while (div.firstChild) {
    div.removeChild(div.lastChild)
  }

  let spamText = document.createElement("spam");
  spamText.classList.add("p")
  div.appendChild(spamText);

  if(flag_buttonNext){
    switch (buttonNext.value) {
      case "1":
        spamText.innerHTML = rules.rule1;
        buttonNext.value = 2;
        resetFlagButton();
        break;
      case "2":
        spamText.innerHTML = rules.rule2;
        buttonNext.value = 3;
        buttonBack.value = 1;
        resetFlagButton();
        break;
      case "3":
        spamText.innerHTML = rules.rule3;
        buttonNext.value = 4;
        buttonBack.value = 2;
        resetFlagButton();
        break;
      case "4":
        spamText.innerHTML = rules.rule4;
        buttonBack.value = 3;
        resetFlagButton();
        break;
    }
  }else{
    switch (buttonBack.value) {
      case "1":
        spamText.innerHTML = rules.rule1;
        buttonNext.value = 2;
        break;
      case "2":
        spamText.innerHTML = rules.rule2;
        buttonBack.value = 1;
        buttonNext.value = 3;
        break;
      case "3":
        spamText.innerHTML = rules.rule3;
        buttonBack.value = 2;
        buttonNext.value = 4;
        break;
      case "4":
        spamText.innerHTML = rules.rule4;
        buttonBack.value = 3;
        buttonNext.value = 5;
        break;
      }
  }  
}




[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

