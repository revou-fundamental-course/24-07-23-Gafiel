const selectElement = document.getElementById("selectOption");
selectElement.addEventListener("change", () => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  console.log("Pilihan:", selectedOption.value, selectedOption.text);
});
