/* ============================================
   Main JavaScript Functionality
   ============================================ */

// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .scroll-down, .back-to-top');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    
    function setActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Back to Top Button Visibility
    const backToTop = document.getElementById('back-to-top');
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    }
    
    // Initialize back to top button as hidden
    if (backToTop) {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
        backToTop.style.transition = 'opacity 0.3s ease';
        
        window.addEventListener('scroll', toggleBackToTop);
    }
    
    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Get theme from localStorage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    
    // Add click event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Update navbar shadow for dark mode
    function updateNavbarShadow() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
            navbar.style.boxShadow = isDark 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.4)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = isDark 
                ? '0 1px 2px 0 rgba(0, 0, 0, 0.3)' 
                : '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
    
    // Update shadow when theme changes
    const observer = new MutationObserver(updateNavbarShadow);
    observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
});

