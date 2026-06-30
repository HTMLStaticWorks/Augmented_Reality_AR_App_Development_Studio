 = @
 <!-- Mobile Offcanvas Menu -->
 <div class=offcanvas offcanvas-end d-xl-none tabindex=-1 id=mobileMenu aria-labelledby=mobileMenuLabel>
 <div class=offcanvas-header border-bottom border-secondary>
 <h5 class=offcanvas-title d-flex align-items-center gap-2 id=mobileMenuLabel>
 <img src=assets/images/logo.svg alt=Logo width=30 height=30>
 AR<span class=text-gradient>Studio</span>
 </h5>
 <button type=button class=btn-close data-bs-dismiss=offcanvas
 aria-label=Close style=filter: invert(1) grayscale(100%) brightness(0);></button>
 </div>
 <div class=offcanvas-body>
 <ul class=navbar-nav gap-3 mb-4 style=display: flex !important; flex-direction: column !important; visibility: visible !important; opacity: 1 !important; height: auto !important;>
 <li class=nav-item><a class=nav-link href=index.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Home</a></li>
 <li class=nav-item><a class=nav-link href=home-2.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Home 2</a></li>
 <li class=nav-item><a class=nav-link href=about.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>About</a></li>
 <li class=nav-item><a class=nav-link href=services.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Services</a></li>
 <li class=nav-item><a class=nav-link href=gallery.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Gallery</a></li>
 <li class=nav-item><a class=nav-link href=pricing.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Pricing</a></li>
 <li class=nav-item><a class=nav-link href=contact.html style=display: block !important; color: var(--text-primary) !important; visibility: visible !important; opacity: 1 !important;>Contact</a></li>
 </ul>
 <a href=booking.html class=btn btn-primary-gradient w-100>Start Project</a>
 </div>
 </div>
@
 = @('about.html', 'services.html', 'gallery.html', 'pricing.html', 'contact.html', 'index.html', 'home-2.html', 'blog.html', 'booking.html')
foreach ( in ) {
    if (Test-Path ) {
         = Get-Content -Path  -Raw
        # Remove existing mobileMenu
         =  -replace '(?s)<!-- Mobile Offcanvas Menu -->.*?</div>\s*</div>', ''
        # Insert new mobileMenu right after </nav>
         =  -replace '(</nav>)', $1

        Set-Content -Path  -Value 
    }
}
