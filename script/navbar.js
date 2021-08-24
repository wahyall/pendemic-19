(function () {
  const navbarTogler = document.querySelector('.navbar .navbar-toggler');
  const navbarNav = document.querySelector('.navbar .navbar-nav');

  navbarTogler.addEventListener('click', function () {
    navbarNav.classList.toggle('open');
  });
  document.body.addEventListener('click', function (ev) {
    if (!ev.target.classList.contains('navbar-toggler')) {
      navbarNav.classList.remove('open');
    }
  });
})();