// Header and Footer Include Script
// This script dynamically loads header and footer content

// Header Content
const headerContent = `
    <!-- Header Start -->
    <header class="main-header">
        <div class="header-sticky">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <!-- Logo Start -->
                    <a class="navbar-brand" href="#">
                        <img src="images/YOGMINDRA-LOGO.svg" alt="Logo">
                    </a>
                    <!-- Logo End -->

                    <!-- Main Menu Start -->
                    <div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
                                <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
                                <li class="nav-item"><a class="nav-link" href="#contact-us-form">Contact</a></li>
                                <li class="nav-item highlighted-menu"><a class="nav-link" href="#appointment">Book Appointment</a></li>             
                            </ul>
                        </div>
                        
                        <!-- Header Contact Btn Start -->
                        <div class="header-contact-btn">
                            <a href="tel:918318919787" class="header-contact-now"><i class="fa-solid fa-phone-volume"></i>+91 8318919787</a>
                            <a href="#" class="btn-default">Get Started</a>
                        </div>
                        <!-- Header Contact Btn End -->
                    </div>
                    <!-- Main Menu End -->
                    <div class="navbar-toggle"></div>
                </div>
            </nav>
            <div class="responsive-menu"></div>
        </div>
    </header>
    <!-- Header End -->
`;

// Footer Content
const footerContent = `
    <!-- Footer Main Start -->
    <footer class="footer-main" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Footer Header Start -->
                    <div class="footer-header">
                        <!-- Footer About Start -->
                        <div class="footer-about">
                            <div class="footer-logo">
                                <img src="images/YOGMINDRA-LOGO.svg" alt="">
                            </div>
                            <div class="about-footer-content">
                                <p>Holistic practices for inner peace, focus, and overall well-being.</p>
                            </div>
                        </div>
                        <!-- Footer About End -->
                        
                        <!-- Footer Social Links Start -->
                        <div class="footer-social-links">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <!-- Footer Social Links End -->
                    </div>
                    <!-- Footer Header End -->
                </div>

                <div class="col-lg-2 col-md-3">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>Quick link</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-2 col-md-4">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>services</h3>
                        <ul>
                            <li><a href="#">Beginner yoga classes</a></li>
                            <li><a href="#">Stress relief sessions</a></li>
                            <li><a href="#">Mindful meditation</a></li>
                            <li><a href="#"> Restorative Yoga</a></li>
                        </ul>
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-5">
                    <!-- Footer Contact Links Start -->
                    <div class="footer-links footer-contact-links">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="tel:918318919787">+91 8318919787</a></li>
                            <li><a href="yogmindra@gmail.com">yogmindra@gmail.com</a></li>
                            <li> HSR Layout, Bengaluru, Karnataka 560102</li>
                        </ul>
                    </div>
                    <!-- Footer Contact Links End -->
                </div>
                
                <div class="col-lg-5">
                    <!-- Footer Newsletter Box Start -->
                    <div class="footer-newsletter-box">
                        <!-- Footer Newsletter Title Start -->
                        <div class="section-title">
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Subscribe for Yoga Tips and Inspiration</h2>
                        </div>
                        <!-- Footer Newsletter Title End -->

                        <!-- Newsletter Form start -->
                        <div class="newsletter-form">
                            <form id="newsletterForm" action="#" method="POST">
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" id="mail" placeholder="Enter Your Email" required>
                                    <button type="submit" class="newsletter-btn"><i class="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                        <!-- Newsletter Form end -->
                    </div>
                    <!-- Footer Newsletter Box End -->
                </div>
                
                <div class="col-lg-12">
                    <!-- Footer Copyright Section Start -->
                    <div class="footer-copyright">
                        <!-- Footer Copyright Text Start -->
                        <div class="footer-copyright-text">
                            <p>Copyright © 2025 Yogmindra. All Rights Reserved.</p>
                        </div>
                        <!-- Footer Copyright Text End -->
                            
                        <!-- Footer Privacy Policy Start -->
                        <div class="footer-privacy-policy">
                            <ul>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Term's & condition</a></li>
                                <li><a href="#">help</a></li>
                            </ul>
                        </div>
                        <!-- Footer Privacy Policy End -->
                    </div>
                    <!-- Footer Copyright Section End -->
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Main End -->
`;

// Function to load header and footer
function loadHeaderFooter() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerContent;
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerContent;
    }
    
    // Reinitialize any scripts that need to run after content loads
    if (typeof initializeScripts === 'function') {
        initializeScripts();
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeaderFooter); 