// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize active state
    updateActiveNavLink();
    
    // Add loading animation for app icon
    const appIcon = document.querySelector('.app-icon-img');
    if (appIcon) {
        appIcon.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
    
    // Add click tracking for download button
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Download button clicked - redirecting to Google Play Store');
        });
    }
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.app-card, .about-content, .youtube-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Mobile menu toggle (if needed for future expansion)
    function initMobileMenu() {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav');
        
        // Add mobile menu button if screen is small
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            const mobileBtn = document.createElement('button');
            mobileBtn.className = 'mobile-menu-btn';
            mobileBtn.innerHTML = '☰';
            mobileBtn.style.cssText = `
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                display: none;
            `;
            
            header.querySelector('.container').appendChild(mobileBtn);
            
            mobileBtn.addEventListener('click', function() {
                nav.classList.toggle('mobile-open');
            });
        }
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Reinitialize on window resize
    window.addEventListener('resize', initMobileMenu);
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        opacity: 1 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    @media (max-width: 768px) {
        .nav.mobile-open {
            display: flex !important;
        }
        
        .mobile-menu-btn {
            display: block !important;
        }
    }
`;
document.head.appendChild(style);
