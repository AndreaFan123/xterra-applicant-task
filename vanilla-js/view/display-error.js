export function displayErrorMessage() {
  const errorMessageContainer = document.querySelector("#error-msg");
  const errorMessage = document.createElement("span");
  errorMessage.textContent = "Something went wrong! We will fix immediately";
  errorMessageContainer.appendChild(errorMessage);
  table.style.display = "none";
}
