// WildPath Explorers - JavaScript

/* 
  Data: Packages Array 
  Contains all details for the modal popup 
*/
const packages = [
    {
        id: 1,
        name: "Goa Beach Escape",
        duration: "5 Days / 4 Nights",
        price: "₹18,999",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Goa - Transfer to Hotel - Leisure",
            "Day 2: North Goa Tour (Calangute, Baga, Fort Aguada)",
            "Day 3: South Goa Tour (Colva, Basilicas, Cruise)",
            "Day 4: Day at Leisure / Water Sports",
            "Day 5: Airport Transfer - Departure"
        ],
        inclusions: ["3 Star Hotel Stay", "Daily Breakfast", "Airport Transfers", "Sightseeing by AC Car"],
        exclusions: ["Airfare", "Water Sports", "Personal Expenses"]
    },
    {
        id: 2,
        name: "Kerala Backwaters Tour",
        duration: "6 Days / 5 Nights",
        price: "₹26,499",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Kochi - Transfer to Munnar",
            "Day 2: Munnar Sightseeing (Tea Gardens, Mattupetty Dam)",
            "Day 3: Munnar to Thekkady (Spice Plantation)",
            "Day 4: Thekkady to Alleppey (Houseboat Stay)",
            "Day 5: Alleppey to Kochi - City Tour",
            "Day 6: Departure from Kochi"
        ],
        inclusions: ["Houseboat Stay with Meals", "Hotels in Munnar & Thekkady", "All Transfers", "Driver Allowance"],
        exclusions: ["Entry Fees", "Lunch & Dinner in Hotels", "Airfare"]
    },
    {
        id: 3,
        name: "Manali Snow Adventure",
        duration: "5 Days / 4 Nights",
        price: "₹21,999",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Manali - Local Sightseeing",
            "Day 2: Solang Valley & Snow Points",
            "Day 3: Kullu & Naggar Castle",
            "Day 4: Manikaran Sahib Visit",
            "Day 5: Transfer to Bus Stand - Departure"
        ],
        inclusions: ["Luxury Volvo Bus Tickets", "Hotel Stay", "Breakfast & Dinner", "Sightseeing Cab"],
        exclusions: ["Heater Charges", "Adventure Activities Cost", "Lunch"]
    },
    {
        id: 4,
        name: "Rajasthan Royal Heritage",
        duration: "7 Days / 6 Nights",
        price: "₹34,999",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Jaipur - Chokhi Dhani Visit",
            "Day 2: Jaipur Sightseeing (Amber Fort, Hawa Mahal)",
            "Day 3: Jaipur to Jodhpur - Blue City Tour",
            "Day 4: Jodhpur Sightseeing",
            "Day 5: Jodhpur to Udaipur",
            "Day 6: Udaipur City Palace & Lake Pichola",
            "Day 7: Departure"
        ],
        inclusions: ["Heritage Hotel Stays", "Breakfast", "Private Car for Tour", "Guide Services"],
        exclusions: ["Monument Entry Fees", "Personal Expenses", "Tips"]
    },
    {
        id: 5,
        name: "Kashmir Paradise Trip",
        duration: "6 Days / 5 Nights",
        price: "₹29,499",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Srinagar - Shikara Ride",
            "Day 2: Srinagar to Gulmarg day trip",
            "Day 3: Srinagar to Pahalgam",
            "Day 4: Pahalgam Sightseeing",
            "Day 5: Return to Srinagar - Local Market",
            "Day 6: Departure"
        ],
        inclusions: ["Houseboat Stay", "Hotel in Pahalgam", "Breakfast & Dinner", "Shikara Ride"],
        exclusions: ["Gondola Ride Tickets", "Lunch", "Garden Entry Fees"]
    },
    {
        id: 6,
        name: "Bali International Tour",
        duration: "7 Days / 6 Nights",
        price: "₹59,999",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Bali (Denpasar) - Transfer to Hotel",
            "Day 2: Ubud Tour - Monkey Forest & Swing",
            "Day 3: Kintamani Volcano View",
            "Day 4: Nusa Penida Island Tour",
            "Day 5: Water Sports at Tanjung Benoa",
            "Day 6: Sunset Dinner Cruise",
            "Day 7: Airport Transfer"
        ],
        inclusions: ["4 Star Hotel", "Daily Breakfast", "All Tours with Guide", "Entrance Fees"],
        exclusions: ["Visa on Arrival", "Flights", "Personal Shopping"]
    },
    {
        id: 7,
        name: "Dubai Luxury Getaway",
        duration: "5 Days / 4 Nights",
        price: "₹74,999",
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&auto=format&fit=crop&q=60",
        itinerary: [
            "Day 1: Arrival in Dubai - Dhow Cruise Dinner",
            "Day 2: Dubai City Tour & Burj Khalifa (124th Floor)",
            "Day 3: Desert Safari with BBQ Dinner",
            "Day 4: Abu Dhabi City Tour & Ferrari World",
            "Day 5: Shopping at Dubai Mall - Departure"
        ],
        inclusions: ["4 Star Hotel", "Daily Breakfast", "All Entry Tickets", "Visa Included"],
        exclusions: ["Dirham Fee at Hotel", "Personal Expenses", "Lunch"]
    }
];

// --- 1. Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        // Change icon based on state (optional)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});


// --- 2. Modal Logic ---
const modal = document.getElementById('package-modal');
const closeModalBtn = document.querySelector('.close-modal');
const btnsDetails = document.querySelectorAll('.btn-details');

// Modal Elements
const mImage = document.getElementById('m-image');
const mTitle = document.getElementById('m-title');
const mDuration = document.getElementById('m-duration');
const mPrice = document.getElementById('m-price');
const mItinerary = document.getElementById('m-itinerary');
const mInclusions = document.getElementById('m-inclusions');
const mExclusions = document.getElementById('m-exclusions');

// Open Modal
// --- 7. Search & Filter Logic ---
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const budgetSelect = document.getElementById('budgetSelect');
const durationSelect = document.getElementById('durationSelect');
const packagesGrid = document.querySelector('.packages-grid');

function renderPackages(data) {
    packagesGrid.innerHTML = '';

    if (data.length === 0) {
        packagesGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px;"><h3>No packages found matching your criteria.</h3></div>';
        return;
    }

    data.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div class="pkg-img">
                <img src="${pkg.image}" alt="${pkg.name}">
            </div>
            <div class="pkg-content">
                <h3>${pkg.name}</h3>
                <span class="duration"><i class="far fa-clock"></i> ${pkg.duration}</span>
                <p class="summary">${pkg.itinerary[1] || pkg.name}</p>
                <div class="price-row">
                    <span class="price">${pkg.price}</span>
                    <button class="btn-details" data-id="${pkg.id}">View Full Details</button>
                </div>
            </div>
        `;
        packagesGrid.appendChild(card);
    });

    // Re-attach event listeners for new buttons
    // Note: We are using Event Delegation for the Modal opening in Section 2, so no need to re-attach if we use delegation there too.
    // BUT Section 2 used direct listeners `btnsDetails.forEach`. I need to change Section 2 to delegation OR re-attach here.
    // Let's use delegation for Modal opening as well to be safe and clean.
}

function filterPackages() {
    const query = searchInput.value.toLowerCase();
    const budget = budgetSelect.value;
    const duration = durationSelect.value;

    const filtered = packages.filter(pkg => {
        // 1. Text Search
        const matchesName = pkg.name.toLowerCase().includes(query);
        const matchesLoc = pkg.itinerary.some(day => day.toLowerCase().includes(query));
        const textMatch = matchesName || matchesLoc;

        // 2. Budget Filter
        const price = parseInt(pkg.price.replace(/[^\d]/g, ''));
        let budgetMatch = true;
        if (budget === '10000') budgetMatch = price < 10000;
        else if (budget === '30000') budgetMatch = price >= 10000 && price <= 30000;
        else if (budget === '50000') budgetMatch = price > 30000 && price <= 50000;
        else if (budget === 'more') budgetMatch = price > 50000;

        // 3. Duration Filter
        const days = parseInt(pkg.duration.match(/\d+/)[0]);
        let durationMatch = true;
        if (duration === 'short') durationMatch = days >= 3 && days <= 5;
        else if (duration === 'medium') durationMatch = days > 5 && days <= 8;
        else if (duration === 'long') durationMatch = days >= 10;

        return textMatch && budgetMatch && durationMatch;
    });

    renderPackages(filtered);
}

// Event Listener
if (searchBtn) {
    searchBtn.addEventListener('click', filterPackages);
}

// Initial Render (to ensure dynamic rendering works)
// Note: We will Replace the hardcoded HTML with this dynamic render on load
document.addEventListener('DOMContentLoaded', () => {
    renderPackages(packages);
});

// Update Modal Open Logic to Delegation (replaces Section 2 logic partially)
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn-details')) {
        const btn = e.target;
        const pkgId = parseInt(btn.getAttribute('data-id'));
        const pkg = packages.find(p => p.id === pkgId);

        if (pkg) {
            // Populate Data
            const mImage = document.getElementById('m-image');
            const mTitle = document.getElementById('m-title');
            const mDuration = document.getElementById('m-duration');
            const mPrice = document.getElementById('m-price');
            const mItinerary = document.getElementById('m-itinerary');
            const mInclusions = document.getElementById('m-inclusions');
            const mExclusions = document.getElementById('m-exclusions');
            const modal = document.getElementById('package-modal');

            if (mImage) mImage.src = pkg.image;
            if (mTitle) mTitle.textContent = pkg.name;
            if (mDuration) mDuration.textContent = pkg.duration;
            if (mPrice) mPrice.textContent = pkg.price;

            // Itinerary
            if (mItinerary) mItinerary.innerHTML = pkg.itinerary.map(day =>
                `<div class="day-item"><strong>${day.split(':')[0]}</strong>${day.split(':').slice(1).join(':')}</div>`
            ).join('');

            // Inclusions
            if (mInclusions) mInclusions.innerHTML = pkg.inclusions.map(inc => `<li>${inc}</li>`).join('');

            // Exclusions
            if (mExclusions) mExclusions.innerHTML = pkg.exclusions.map(exc => `<li>${exc}</li>`).join('');

            // Show Modal
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    }
});

// Close Modal
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


// --- 3. Testimonial Slider ---
const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 4 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}


// --- 4. Back to Top & Sticky Nav Shadow ---
const backToTopBtn = document.getElementById('backToTop');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Sticky Nav Color Change
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to Top Button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Fallback for older browsers
            window.scrollTo(0, 0);
        }
    });
}


// --- 5. Contact Form Validation ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const successMsg = document.querySelector('.success-msg');
        let isValid = true;

        // Reset errors
        document.querySelectorAll('.error-msg').forEach(msg => msg.style.display = 'none');
        successMsg.style.display = 'none';

        // Validate Name
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Validate Message
        if (message.value.trim() === '') {
            showError(message, 'Message cannot be empty');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const btn = document.querySelector('.btn-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                if (successMsg) successMsg.style.display = 'block';
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;

                // Remove success message after 5 seconds
                setTimeout(() => {
                    if (successMsg) successMsg.style.display = 'none';
                }, 5000);
            }, 1500);
        }
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    let errorDisplay = formGroup.querySelector('.error-msg');

    if (!errorDisplay) {
        errorDisplay = document.createElement('small');
        errorDisplay.className = 'error-msg';
        errorDisplay.style.color = 'red';
        errorDisplay.style.display = 'none';
        formGroup.appendChild(errorDisplay);
    }

    errorDisplay.textContent = message;
    errorDisplay.style.display = 'block';
}


// --- 6. Booking & Payment Logic ---
const openBookingBtn = document.getElementById('openBookingBtn');
const bookingModal = document.getElementById('booking-modal');
const closeBookingBtn = document.getElementById('closeBooking');
const bookingForm = document.getElementById('bookingForm');
const bookingStep1 = document.getElementById('booking-step-1');
const bookingStep2 = document.getElementById('booking-step-2');

// Inputs
const bPackageName = document.getElementById('b-package-name');
const bTravelers = document.getElementById('b-travelers');
const bTotal = document.getElementById('b-total');
const pAmount = document.getElementById('p-amount');

let currentPackagePrice = 0;

// Open Booking Modal (Event Delegation)
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'openBookingBtn') {
        // Close package modal if open
        const pkgModal = document.getElementById('package-modal');
        if (pkgModal) pkgModal.style.display = 'none';

        // Reset Steps
        if (bookingStep1) bookingStep1.style.display = 'block';
        if (bookingStep2) bookingStep2.style.display = 'none';
        if (bookingForm) bookingForm.reset();

        // Get current package details
        const pkgTitleEl = document.getElementById('m-title');
        const pkgPriceEl = document.getElementById('m-price');

        if (pkgTitleEl && pkgPriceEl) {
            const pkgName = pkgTitleEl.textContent;
            const priceText = pkgPriceEl.textContent;
            currentPackagePrice = parseInt(priceText.replace(/[^\d]/g, '')) || 0;

            // Set Initial Values
            if (bPackageName) bPackageName.textContent = `Booking for: ${pkgName}`;
            if (bTravelers) bTravelers.value = 1;
            updateTotal();

            // Show Booking Modal
            if (bookingModal) {
                bookingModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    }
});

// Close Booking Modal
if (closeBookingBtn) {
    closeBookingBtn.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Update Total Price on Traveler Change
if (bTravelers) {
    bTravelers.addEventListener('input', updateTotal);
    bTravelers.addEventListener('change', updateTotal);
}

function updateTotal() {
    if (!bTravelers || !bTotal) return;
    const count = parseInt(bTravelers.value) || 1; // Default to 1 if invalid
    const total = count * currentPackagePrice;
    bTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
}

// Handle Form Submission (Show QR)
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple Validation
        if (bTravelers.value < 1) {
            alert("Please enter at least 1 traveler.");
            return;
        }

        // Switch to Step 2 (QR Code)
        if (bookingStep1) bookingStep1.style.display = 'none';
        if (bookingStep2) bookingStep2.style.display = 'block';

        // Set Payment Amount
        if (pAmount && bTotal) pAmount.textContent = bTotal.textContent;
    });
}

// Payment Done
const paymentDoneBtn = document.getElementById('paymentDoneBtn');
if (paymentDoneBtn) {
    paymentDoneBtn.addEventListener('click', () => {
        alert("Payment Successful! Your booking is confirmed. We will contact you shortly.");
        if (bookingModal) bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
}
