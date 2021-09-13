const navbar = () => {
  const navbar = document.querySelector('.navbar');
  const navbarTogler = document.querySelector('.navbar .navbar-toggler');
  const navbarNav = document.querySelector('.navbar .navbar-nav');

  // Toggle navbar on mobile
  navbarTogler.addEventListener('click', function () {
    navbarNav.classList.toggle('open');
  });
  document.body.addEventListener('click', function (ev) {
    const path = ev.composedPath();
    if (!path.includes(navbarTogler)) {
      navbarNav.classList.remove('open');
    }
  });

  // Change navbar style on scroll
  window.onscroll = () => {
    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
      navbar.style.boxShadow = '0 0.75rem 0.75rem rgba(0, 11, 36, 0.1)';
    } else {
      navbar.style.boxShadow = 'unset';
    }
  }
}

export default navbar;