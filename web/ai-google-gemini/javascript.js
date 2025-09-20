document.addEventListener('DOMContentLoaded', () => {
  const mainNavLinks = document.querySelectorAll('.main-nav > ul > li > a');

  mainNavLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the link from navigating

      const menuId = event.target.dataset.menuId;
      const subMenu = document.getElementById(menuId);

      // Close all other sub-menus
      document.querySelectorAll('.sub-menu.active').forEach(openMenu => {
        if (openMenu.id !== menuId) {
          openMenu.classList.remove('active');
        }
      });

      // Toggle the 'active' class on the clicked sub-menu
      if (subMenu) {
        subMenu.classList.toggle('active');
      }
    });
  });
});