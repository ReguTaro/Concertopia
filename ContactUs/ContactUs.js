function toggleMenu() {
    const navbarRight = document.querySelector('.navbar-right'); // Target dropdown
    const hamburger = document.querySelector('.hamburger'); // Target hamburger icon
 
    // Toggle active state
    if (navbarRight.classList.contains('active')) {
        // Closing: Fold up
        navbarRight.classList.remove('active');
    } else {
        // Opening: Fold down
        navbarRight.classList.add('active');
    }
 
    // Toggle hamburger "X" animation
    hamburger.classList.toggle('active');
}