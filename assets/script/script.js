let close_button = document.getElementById("icone_container");
let humberger_button = document.getElementById("mob_menu");
let mobile_menu = document.getElementById("mobile_menu");

close_button.addEventListener("click", close);

humberger_button.addEventListener("click", open);

function close() {
  mobile_menu.style.display = "none";
}

function open() {
  mobile_menu.style.display = "block";
}
