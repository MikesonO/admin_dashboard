let logoBtn = document.querySelector(".nav-logo");
let sidebar = document.querySelector(".sidebar");


logoBtn.onclick = () => {
  sidebar.classList.toggle("active");
}
