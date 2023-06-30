let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector("header");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick= () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


window.onscroll = () => {
  let top = window.scrollY;

  // Add 'sticky' class to the header when scrolling
  header.classList.toggle('sticky', top > 100);

  // Change the active header link based on the current section
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');

    }
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
