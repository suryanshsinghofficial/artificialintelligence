function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-active');
  }
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  