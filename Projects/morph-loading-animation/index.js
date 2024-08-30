document.querySelector("#checkbox").addEventListener("change", () => {
  if (document.querySelector("#checkbox").checked) {
    document.body.style.backgroundColor = "rgb(29, 29, 29)";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
