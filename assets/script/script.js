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
