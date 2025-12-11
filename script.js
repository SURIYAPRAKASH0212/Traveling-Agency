document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------
    // 1. Sticky Navigation & Back to Top Button
    // --------------------------------------------------------------------
    const header = document.querySelector('header');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            backToTopBtn.style.display = 'flex';
        } else {
            header.classList.remove('sticky');
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --------------------------------------------------------------------
    // 2. Mobile Hamburger Menu
    // --------------------------------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        // Toggle icon between bars and times
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --------------------------------------------------------------------
    // 3. Search Box Animation
    // --------------------------------------------------------------------
    const searchBox = document.querySelector('.search-box');

    // Add a small delay to ensure the animation plays after other hero elements
    setTimeout(() => {
        searchBox.classList.add('show');
    }, 1000);

    // --------------------------------------------------------------------
    // 4. Modal Popup for Packages
    // --------------------------------------------------------------------
    const modal = document.getElementById('packageModal');
    const closeModal = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.view-details-btn');
    const packageImages = document.querySelectorAll('.package-image');

    // Modal Content Elements
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');

    // Dummy Data for Packages
    const packageData = {
        1: {
            title: "Maldives Getaway",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Escape to paradise with our 5-day Maldives Getaway. Enjoy luxury overwater bungalows, private beach access, and world-class snorkeling. Includes all meals, airport transfers, and a sunset cruise.",
            price: "$799"
        },
        2: {
            title: "Swiss Alps Adventure",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Experience the majesty of the Swiss Alps. This 7-day guided tour takes you through scenic hiking trails, charming villages, and offers skiing opportunities. Includes accommodation, breakfast, and train passes.",
            price: "$1200"
        },
        3: {
            title: "Dubai Desert Safari",
            image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6686?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Discover the magic of Dubai. Visit the Burj Khalifa, shop at the Dubai Mall, and embark on a thrilling desert safari with dune bashing and a BBQ dinner under the stars. 4 days of excitement.",
            price: "$650"
        }
    };

    // Function to open modal
    const openModal = (id) => {
        const data = packageData[id];

        if (data) {
            modalTitle.textContent = data.title;
            modalImage.src = data.image;
            modalDesc.textContent = data.desc;
            modalPrice.textContent = data.price;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    };

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });

    // Add click event to package images
    packageImages.forEach((imgContainer) => {
        imgContainer.addEventListener('click', () => {
            // Find the sibling button to get the data-id
            const cardContent = imgContainer.nextElementSibling;
            const btn = cardContent.querySelector('.view-details-btn');
            if (btn) {
                const id = btn.getAttribute('data-id');
                openModal(id);
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // --------------------------------------------------------------------
    // 5. Testimonials Auto-Slider
    // --------------------------------------------------------------------
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        if (testimonials.length > 0) {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }
    }

    setInterval(showNextTestimonial, 4000);

    // --------------------------------------------------------------------
    // 6. Contact Form Validation
    // --------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Simple validation function
            const validateField = (field, msg) => {
                const formGroup = field.parentElement;
                const errorDisplay = formGroup.querySelector('.error-msg');

                if (field.value.trim() === '') {
                    formGroup.classList.add('error');
                    errorDisplay.textContent = msg;
                    isValid = false;
                } else {
                    formGroup.classList.remove('error');
                    errorDisplay.textContent = '';
                }
            };

            validateField(name, 'Name is required');
            validateField(email, 'Email is required');
            validateField(message, 'Message is required');

            // Email format validation
            if (email.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    const formGroup = email.parentElement;
                    const errorDisplay = formGroup.querySelector('.error-msg');
                    formGroup.classList.add('error');
                    errorDisplay.textContent = 'Please enter a valid email';
                    isValid = false;
                }
            }

            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // --------------------------------------------------------------------
    // 7. Smooth Scroll for Navigation Links (Polyfill-like behavior)
    // --------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update active link
                navLinksItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
