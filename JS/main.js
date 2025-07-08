    
    
    
    /*  header scroll  */
 
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const aboutSection = document.querySelector("#about");
    const sectionTop = aboutSection.offsetTop;

    if (window.scrollY >= sectionTop - 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /*===================================================  */
    
    document.addEventListener('DOMContentLoaded', function() {
            // Contact Button Functionality
            const contactBtn = document.getElementById('contactBtn');
            const contactSocialIcons = document.getElementById('contactSocialIcons');
            let contactActive = false;
            
            contactBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                contactActive = !contactActive;
                
                if (contactActive) {
                    contactSocialIcons.classList.add('active');
                } else {
                    contactSocialIcons.classList.remove('active');
                }
            });
            
            // Booking Button Functionality
            const bookingBtn = document.getElementById('bookingBtn');
            const socialIcons = document.getElementById('socialIcons');
            let bookingActive = false;
            
            bookingBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                bookingActive = !bookingActive;
                
                if (bookingActive) {
                    this.classList.add('active');
                    this.textContent = '';
                    socialIcons.classList.add('active');
                } else {
                    this.classList.remove('active');
                    this.textContent = 'احجز الآن';
                    socialIcons.classList.remove('active');
                }
            });
            
            // Close when clicking outside
            document.addEventListener('click', function(e) {
                // Close contact social icons
                if (!e.target.closest('.list > li:last-child') && contactActive) {
                    contactSocialIcons.classList.remove('active');
                    contactActive = false;
                }
                
                // Close booking social icons
                if (!e.target.closest('.booking-container') && bookingActive) {
                    bookingBtn.classList.remove('active');
                    bookingBtn.textContent = 'احجز الآن';
                    socialIcons.classList.remove('active');
                    bookingActive = false;
                }
            });

            // Counter Animation for Stats
            const statNumbers = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            function animateNumbers() {
                statNumbers.forEach(stat => {
                    const target = +stat.innerText.replace('+', '');
                    const count = +stat.innerText.replace('+', '') / speed;
                    let current = 0;
                    
                    const updateCount = () => {
                        current += count;
                        if (current < target) {
                            stat.innerText = Math.floor(current) + '+';
                            setTimeout(updateCount, 1);
                        } else {
                            stat.innerText = target + '+';
                        }
                    };
                    
                    updateCount();
                });
            }
            
            // Trigger animation when stats section is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateNumbers();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            const statsSection = document.querySelector('.about-section');
            if (statsSection) {
                observer.observe(statsSection);
            }

            // Trip Filters Functionality
            const filterBtns = document.querySelectorAll('.filter-btn');
            const tripCards = document.querySelectorAll('.trip-card');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    const filter = btn.dataset.filter;
                    
                    tripCards.forEach(card => {
                        if (filter === 'all' || card.dataset.category === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Trip Timeline Functionality
            const timelineDays = document.querySelectorAll('.timeline-day');
            
            timelineDays.forEach(day => {
                day.addEventListener('click', () => {
                    timelineDays.forEach(d => d.classList.remove('active'));
                    day.classList.add('active');
                });
            });
            
            // Countdown Timer
            function updateCountdown() {
                const now = new Date();
                const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                endOfMonth.setHours(23, 59, 59, 999);
                
                const diff = endOfMonth - now;
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            }
            
            updateCountdown();
            setInterval(updateCountdown, 1000);
        });





    // ============================الاسئله الشائعه========================
            document.querySelectorAll('.faq-btn').forEach(button => {
            button.addEventListener('click', () => {
                const faqContent = button.nextElementSibling;
                const icon = button.querySelector('svg');
                
                faqContent.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
        // =====================================الرحلات بالعاصمه====================================== const carousel = document.getElementById('carousel');
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');

function slideRight() {
  const cardWidth = cards[0].offsetWidth + 24; // card + margin
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  const currentScroll = carousel.scrollLeft;

  if (currentScroll + cardWidth <= maxScroll) {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}

function slideLeft() {
  const cardWidth = cards[0].offsetWidth + 24;
  if (carousel.scrollLeft > 0) {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
}

// ====================================================\\
