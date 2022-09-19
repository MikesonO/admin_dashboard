const logoBtn = document.querySelector(".nav-logo");
const sidebar = document.querySelector(".sidebar");
const starOff = document.querySelectorAll(".star-off");
const starOn = document.querySelectorAll(".star-on");
const navHighlight = document.querySelectorAll(".nav-link");



logoBtn.onclick = () => {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    for (var i = 0; i < navHighlight.length; i++) {
      navHighlight[i].classList.remove("highlight");
    }
  } else {
    for (var i = 0; i < navHighlight.length; i++) {
      navHighlight[i].classList.add("highlight");
    }
  }
}


for (let i = 0; i < starOff.length; i++) {
  starOff[i].addEventListener("click", function () {
    starOff[i].classList.toggle("active");
    if (starOff[i].classList.contains("active")) {
      starOn[i].classList.add("active");
    } else {
      starOn[i].classList.remove("active");
    }
  })
};