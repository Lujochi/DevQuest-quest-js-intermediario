const btn = document.querySelector("button");
const inputs = document.querySelectorAll(".box-inp");
const errorP = document.querySelectorAll(".required-camp");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((item) => {
    errorP.forEach((itemP) => {
      if (item.value == "") {
        item.classList.add("invalid");
        itemP.classList.remove("show");
      } else {
        item.classList.add("valid");
        itemP.classList.add("show");
      }
    });
  });
});
