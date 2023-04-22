const inputRage = document.querySelector("#font-size-control");
const spanRage = document.querySelector("#text");

inputRage.addEventListener("input", onInputRage);
spanRage.style.fontSize = `${inputRage.value}px`;

function onInputRage() {
  spanRage.style.fontSize = `${this.value}px`;
}
