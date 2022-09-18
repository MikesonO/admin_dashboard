let logoBtn = document.querySelector(".nav-logo");
let sidebar = document.querySelector(".sidebar");
let starOff = document.querySelector(".star-off");
let starOn = document.querySelector(".star-on");


logoBtn.onclick = () => {
  sidebar.classList.toggle("active");
}

starOff.onclick = () => {
  starOff.classList.toggle("active");
  if (starOff.classList.contains("active")){
    starOn.classList.add("active");
  } else {
    starOn.classList.remove("active");
  }
}
