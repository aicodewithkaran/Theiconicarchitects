// Lucide icons initialization helper
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Project Database for Lightbox Modal
const PROJECTS_DATA = {
  p1: {
    title: "Obsidian Cliffside Villa",
    category: "Residential",
    location: "Amalfi Coast, Italy",
    year: "2025",
    area: "14,200 sq. ft.",
    rating: "LEED Platinum",
    image: "/assets/hero_1.png",
    narrative: "Perched dramatically over the Mediterranean coastal cliffs, the Obsidian Villa features a 22-meter cantilevered infinity pool, monolithic charred-timber cladding, and floor-to-ceiling structural glass walls that disappear into the bedrock."
  },
  p2: {
    title: "Aether Financial Tower",
    category: "Commercial",
    location: "Tokyo, Japan",
    year: "2024",
    area: "480,000 sq. ft.",
    rating: "CASBEE S-Rank",
    image: "/assets/hero_2.png",
    narrative: "A 54-story corporate skyscraper utilizing titanium-anodized geometric exoskeletons and triple-height biophilic indoor sky gardens. Designed to withstand seismic forces while providing natural ventilation."
  },
  p3: {
    title: "The Alpine Sanctuary",
    category: "Residential",
    location: "Swiss Alps, Switzerland",
    year: "2025",
    area: "9,800 sq. ft.",
    rating: "Net Zero Energy",
    image: "/assets/project_res_1.png",
    narrative: "A minimalist mountain refuge constructed with local alpine granite and sustainable dark cedar. Features subterranean wellness spas and geothermal radiant heating powered by rooftop solar glass."
  },
  p4: {
    title: "Tribeca Sky Penthouse",
    category: "Interior Design",
    location: "Manhattan, New York",
    year: "2024",
    area: "6,500 sq. ft.",
    rating: "WELL Building Standard",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    narrative: "A double-height luxury penthouse interior centered around a hand-sculpted floating brass staircase, monolithic Calacatta marble hearth, and custom Italian bronze cabinetry."
  },
  p5: {
    title: "Karisma Cultural Center",
    category: "Commercial",
    location: "Milan, Italy",
    year: "2025",
    area: "120,000 sq. ft.",
    rating: "LEED Gold",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    narrative: "A public cultural pavilion featuring sweeping white parametric timber arches, an indoor urban forest, and acoustic gallery halls engineered for symphony performances."
  },
  p6: {
    title: "Zen Meditation Pavilion",
    category: "Interior Design",
    location: "Kyoto, Japan",
    year: "2024",
    area: "4,200 sq. ft.",
    rating: "BREEAM Outstanding",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    narrative: "An intimate sanctuary inspired by traditional Japanese tea houses. Constructed with ancient Hinoki cypress, Shoji diffused lighting panels, and private gravel stone gardens."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initIcons();

  // 1. STICKY NAVBAR SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. MOBILE MENU TOGGLE
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navBottomRow = document.getElementById('navBottomRow');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuToggle && navBottomRow) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = navBottomRow.classList.toggle('mobile-open');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      }
      initIcons();
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navBottomRow.classList.remove('mobile-open');
        if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
        initIcons();
      });
    });
  }

  // 3. HERO SLIDER LOGIC
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function startSlideTimer() {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(slideInterval);
      const slideIndex = parseInt(e.target.getAttribute('data-slide'));
      goToSlide(slideIndex);
      startSlideTimer();
    });
  });

  startSlideTimer();

  // 4. STATS COUNTER ANIMATION
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const prefix = stat.getAttribute('data-prefix') || '';
          const suffix = stat.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;

          let current = 0;
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            let displayVal = isDecimal ? current.toFixed(1) : Math.round(current);
            if (target >= 1000) {
              displayVal = Math.round(current).toLocaleString('en-IN');
            }
            stat.textContent = prefix + displayVal + suffix + (isDecimal || prefix ? '' : '+');
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsBar = document.querySelector('.hero-stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

  // 5. PORTFOLIO FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 6. INTERACTIVE PROJECT LIGHTBOX MODAL (<dialog>)
  const modal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalImage = document.getElementById('modalProjectImage');
  const modalLocation = document.getElementById('modalLocation');
  const modalYear = document.getElementById('modalYear');
  const modalArea = document.getElementById('modalArea');
  const modalRating = document.getElementById('modalRating');
  const modalNarrative = document.getElementById('modalNarrative');

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalImage.src = data.image;
    modalLocation.textContent = data.location;
    modalYear.textContent = data.year;
    modalArea.textContent = data.area;
    modalRating.textContent = data.rating;
    modalNarrative.textContent = data.narrative;

    modal.showModal();
  }

  // Handle card click
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-id');
      openProjectModal(pid);
    });
  });

  // Close modal logic
  modalCloseBtn.addEventListener('click', () => {
    modal.close();
  });

  // Fallback for light dismiss (clicking outside dialog backdrop)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  // 7. ARCHITECTURAL COST ESTIMATOR (INR ₹ / Crore Calculations)
  const estProjectType = document.getElementById('estProjectType');
  const estSquareFeet = document.getElementById('estSquareFeet');
  const estFinishTier = document.getElementById('estFinishTier');
  const sfDisplay = document.getElementById('sfDisplay');
  const estimatePrice = document.getElementById('estimatePrice');
  const estTimeline = document.getElementById('estTimeline');
  const applyEstimateBtn = document.getElementById('applyEstimateBtn');

  // Rates in INR per sq. ft.
  const RATES_INR = {
    residential_villa: { base: 14000, timeline: '6 - 10 Months' },
    commercial_hq: { base: 11000, timeline: '12 - 18 Months' },
    luxury_interior: { base: 8500, timeline: '4 - 6 Months' },
    masterplan: { base: 6500, timeline: '18 - 24 Months' }
  };

  const FINISH_MULTIPLIER = {
    ultra_bespoke: 1.45,
    high_end: 1.2,
    editorial: 1.0
  };

  function calculateEstimateINR() {
    const sf = parseInt(estSquareFeet.value);
    sfDisplay.textContent = sf.toLocaleString('en-IN') + ' sq. ft.';

    const typeConfig = RATES_INR[estProjectType.value];
    const multiplier = FINISH_MULTIPLIER[estFinishTier.value];

    const baseCostINR = sf * typeConfig.base * multiplier;
    
    // 1 Crore = 10,000,000 INR
    const minCrores = (baseCostINR * 0.9) / 10000000;
    const maxCrores = (baseCostINR * 1.15) / 10000000;

    estimatePrice.textContent = `₹${minCrores.toFixed(1)} Cr - ₹${maxCrores.toFixed(1)} Cr`;
    estTimeline.textContent = typeConfig.timeline;
  }

  if (estSquareFeet) {
    estSquareFeet.addEventListener('input', calculateEstimateINR);
    estProjectType.addEventListener('change', calculateEstimateINR);
    estFinishTier.addEventListener('change', calculateEstimateINR);
    calculateEstimateINR(); // initial calculation
  }

  // Apply Estimate to Contact Form
  if (applyEstimateBtn) {
    applyEstimateBtn.addEventListener('click', () => {
      const budgetVal = estimatePrice.textContent;
      
      const formBudget = document.getElementById('formBudget');
      const formProject = document.getElementById('formProject');

      if (formBudget) formBudget.value = budgetVal;
      if (formProject) {
        if (estProjectType.value.includes('residential')) formProject.value = 'residential';
        else if (estProjectType.value.includes('commercial')) formProject.value = 'commercial';
        else formProject.value = 'interior';
      }

      showToast('INR estimate parameters applied to consultation form!');
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 8. SCROLL REVEAL ANIMATIONS
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  // 9. CONSULTATION FORM & TOAST NOTIFICATIONS
  const inquiryForm = document.getElementById('inquiryForm');

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle" style="color: var(--accent-bronze); width: 18px; height: 18px;"></i> <span>${message}</span>`;
    container.appendChild(toast);
    initIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      showToast(`Thank you, ${name}. Your commission inquiry has been sent!`);
      inquiryForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed to the Architectural Journal!');
      newsletterForm.reset();
    });
  }

  // 10. THEME TOGGLE
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  let isLight = false;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      isLight = !isLight;
      document.body.classList.toggle('light-mode', isLight);
      
      if (isLight) {
        themeIcon.setAttribute('data-lucide', 'sun');
      } else {
        themeIcon.setAttribute('data-lucide', 'moon');
      }
      initIcons();
    });
  }
});
