const CloseButton = document.getElementById('icone_container');
const HumbergerButton = document.getElementById('mob_menu');
const MobileMenu = document.getElementById('mobile_menu');
const PortfolioButton = document.getElementById('portfolio_button');
const AboutButton = document.getElementById('about_button');
const ContactButton = document.getElementById('contact_buttton');

function close() {
  MobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function open() {
  MobileMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

CloseButton.addEventListener('click', close);
HumbergerButton.addEventListener('click', open);
PortfolioButton.addEventListener('click', close);
AboutButton.addEventListener('click', close);
ContactButton.addEventListener('click', close);

// Form validation
function Message(input, message, type) {
  //get the element that shows the error message
  const msgElement = input.parentNode.querySelector("span");
  //Update the message
  msgElement.innerText = message;
  //change the class name of the input tag
  //input.className = type ? "succes" : "error";
  if (type) {
    input.className = "succes";
  } else {
    input.className = "error";
  }

  return type;
}

