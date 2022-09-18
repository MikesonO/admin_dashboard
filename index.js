let logoBtn = document.querySelector(".nav-logo");
let sidebar = document.querySelector(".sidebar");
let starOff = document.querySelector(".star-off");
let starOn = document.querySelector(".star-on");
let navHighlight = document.querySelectorAll(".nav-link");



logoBtn.onclick = () => {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")){
    for (var i = 0; i < navHighlight.length; i++) {
      navHighlight[i].classList.remove("highlight");
    }
} else{
  for (var i = 0; i < navHighlight.length; i++) {
    navHighlight[i].classList.add("highlight");
  }
}
}

starOff.onclick = () => {
  starOff.classList.toggle("active");
  if (starOff.classList.contains("active")){
    starOn.classList.add("active");
  } else {
    starOn.classList.remove("active");
  }
}
