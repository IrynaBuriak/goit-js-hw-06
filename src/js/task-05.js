const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(e) {
  if (e) {
    refs.span.textContent = e.currentTarget.value;
  } else {
    refs.span.textContent = "Anonymous";
  }
}
