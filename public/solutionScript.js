document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      menuToggle.style.color='white';
      document.body.style.overflow = 'hidden';
      menuToggle.style.display = 'none';
    });
    
    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuToggle.style.color='';
      document.body.style.overflow = ''; 
      menuToggle.style.display = 'block';
    });

  });
  document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  });