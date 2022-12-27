const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(e) {
  if (e.target.value.length === 0) {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = e.currentTarget.value;
  }
}
