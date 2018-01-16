(function() {
  const TOGGLE_CLASS = "toggleNav";
  function toggleNav(e) {
    console.log('toggleNav called');
    const headerDiv = document.querySelector('#nav');
    console.log('headerDiv', headerDiv);
    headerDiv.classList.toggle(TOGGLE_CLASS);
  }

  function hideNav(e) {
    console.log('hideNav called');
    const headerDiv = document.querySelector('#nav');
    if (headerDiv && headerDiv.classList.contains(TOGGLE_CLASS)) {
      headerDiv.classList.remove(TOGGLE_CLASS);
    }
  }

  function setupHandlers() {
    const openNav = document.querySelector('.header__nav-toggle');
    const closeNav = document.querySelector('.toggle__close');
    openNav.addEventListener('click', toggleNav);
    closeNav.addEventListener('click', hideNav);
  }

  setupHandlers();
})()