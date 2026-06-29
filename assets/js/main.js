document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtns = document.querySelectorAll('.theme-toggle:not(.rtl-toggle):not(#rtl-toggle)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if(icon) icon.className = 'bi bi-sun';
        });
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if(icon) icon.className = 'bi bi-moon';
        });
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let targetTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            
            themeToggleBtns.forEach(b => {
                const icon = b.querySelector('i');
                if (icon) {
                    icon.className = targetTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
                }
            });
        });
    });

    // RTL Toggle Logic
    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle, #rtl-toggle');
    const htmlElement = document.documentElement;
    
    // Check saved RTL preference
    const savedRTL = localStorage.getItem('rtl');
    const bsCss = document.getElementById('bootstrap-css');
    
    if (savedRTL === 'true') {
        htmlElement.setAttribute('dir', 'rtl');
        if (bsCss) {
            bsCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css';
        }
    }

    rtlToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentDir = htmlElement.getAttribute('dir');
            if (currentDir === 'rtl') {
                htmlElement.removeAttribute('dir');
                localStorage.setItem('rtl', 'false');
                if (bsCss) bsCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
            } else {
                htmlElement.setAttribute('dir', 'rtl');
                localStorage.setItem('rtl', 'true');
                if (bsCss) bsCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css';
            }
        });
    });

    // Sticky Header
    const header = document.querySelector('.navbar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Active Navigation State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

    // Back to top button
    let backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        document.addEventListener('scroll', toggleBacktotop);
        backtotop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
