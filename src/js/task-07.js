const inputRage = document.querySelector("#font-size-control");
const spanRage = document.querySelector("#text");

function onInputRage() {
  spanRage.style.fontSize = `${inputRage.value}px`;
}

inputRage.addEventListener("input", onInputRage);
