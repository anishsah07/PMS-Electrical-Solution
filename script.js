document.addEventListener('DOMContentLoaded', () => {
  // --- CONTENT INJECTION ---

  // Navbar Links
  const desktopNav = document.getElementById('desktop-nav');
  const mobileNavLinks = document.getElementById('mobile-nav-links');
  
  data.navLinks.forEach(link => {
    // Desktop
    const dLink = document.createElement('a');
    dLink.href = link.href;
    dLink.className = 'nav-link text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#00BFA5] text-white';
    dLink.textContent = link.label;
    desktopNav.insertBefore(dLink, desktopNav.lastElementChild);

    // Mobile
    const mLink = document.createElement('a');
    mLink.href = link.href;
    mLink.className = 'text-[#0A2463] font-semibold py-2 border-b border-gray-100 text-sm hover:text-[#00BFA5] transition-colors';
    mLink.textContent = link.label;
    mLink.addEventListener('click', () => toggleMenu(false));
    mobileNavLinks.insertBefore(mLink, mobileNavLinks.lastElementChild);
  });

  // Services
  const servicesGrid = document.getElementById('services-grid');
  data.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'reveal reveal-up bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100';
    card.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span class="text-white text-sm font-medium">Learn More →</span>
        </div>
      </div>
      <div class="p-6">
        <div class="w-12 h-12 bg-[#00BFA5]/10 rounded-xl flex items-center justify-center text-[#00BFA5] mb-4 group-hover:bg-[#00BFA5] group-hover:text-white transition-colors duration-300">
          <i data-lucide="${service.icon}" size="24"></i>
        </div>
        <h3 class="text-xl font-bold text-[#0A2463] mb-3">${service.title}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${service.description}</p>
      </div>
    `;
    servicesGrid.appendChild(card);
  });

  // Why Choose Us
  const whyGrid = document.getElementById('why-grid');
  data.whyChooseUs.forEach(item => {
    const div = document.createElement('div');
    div.className = 'reveal reveal-up flex gap-4 p-6 rounded-2xl bg-white border border-gray-50 shadow-sm hover:shadow-md transition-shadow';
    div.innerHTML = `
      <div class="flex-shrink-0 w-12 h-12 bg-[#00BFA5]/10 rounded-full flex items-center justify-center text-[#00BFA5]">
        <i data-lucide="${item.icon}" size="24"></i>
      </div>
      <div>
        <h3 class="text-lg font-bold text-[#0A2463] mb-2">${item.title}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
      </div>
    `;
    whyGrid.appendChild(div);
  });

  // Products
  const productsGrid = document.getElementById('products-grid');
  data.products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'reveal reveal-up bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00BFA5]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group';
    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div class="p-3 bg-white rounded-xl shadow-sm text-[#00BFA5] group-hover:bg-[#00BFA5] group-hover:text-white transition-colors duration-300">
          <i data-lucide="${product.icon}" size="24"></i>
        </div>
        <span class="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded">${product.category}</span>
      </div>
      <h3 class="text-lg font-bold text-[#0A2463] mb-2">${product.name}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description}</p>
      <a href="#contact" class="text-[#00BFA5] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
        Order Now <i data-lucide="arrow-right" size="14"></i>
      </a>
    `;
    productsGrid.appendChild(card);
  });

  // Testimonials
  const testimonialsGrid = document.getElementById('testimonials-grid');
  data.testimonials.forEach(t => {
    const card = document.createElement('div');
    card.className = 'reveal reveal-up bg-white p-8 rounded-2xl shadow-sm border border-gray-100';
    card.innerHTML = `
      <div class="flex gap-1 text-yellow-400 mb-4">
        ${Array(t.rating).fill('<i data-lucide="star" size="16" fill="currentColor"></i>').join('')}
      </div>
      <p class="text-gray-700 italic mb-6">"${t.message}"</p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-[#0A2463] rounded-full flex items-center justify-center text-white font-bold text-lg">
          ${t.name.charAt(0)}
        </div>
        <div>
          <h4 class="font-bold text-[#0A2463]">${t.name}</h4>
          <p class="text-sm text-gray-500">${t.role}</p>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(card);
  });

  // Footer & Contact Info
  document.getElementById('footer-address').textContent = data.companyInfo.address;
  document.getElementById('footer-phone').textContent = data.companyInfo.phone;
  document.getElementById('footer-email').textContent = data.companyInfo.email;
  document.getElementById('footer-hours').textContent = data.companyInfo.workingHours;
  
  // WhatsApp QR & Link
  const waNumber = data.companyInfo.whatsapp;
  const waLink = `https://wa.me/${waNumber}`;
  const qrImg = document.getElementById('whatsapp-qr');
  const qrLink = document.getElementById('whatsapp-link');
  
  if (qrImg) qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(waLink)}`;
  if (qrLink) qrLink.href = waLink;
  
  // Google Business Links
  const googleBase = data.companyInfo.googleBusiness;
  const mapsLink = document.getElementById('google-maps-link');
  const reviewLink = document.getElementById('google-review-link');
  
  if (mapsLink) mapsLink.href = googleBase;
  if (reviewLink) {
    // Only append /review if it's a standard Google Maps/GMB URL, not a shortened share link
    reviewLink.href = (googleBase.includes('share.google') || googleBase.includes('goo.gl')) 
      ? googleBase 
      : `${googleBase}/review`;
  }
  
  const footerSocials = document.getElementById('footer-socials');
  const contactSocials = document.getElementById('contact-socials');
  
  data.socialLinks.forEach(s => {
    // Footer Socials
    const fLink = document.createElement('a');
    fLink.href = s.url;
    fLink.target = '_blank';
    fLink.className = 'w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00BFA5] transition-colors';
    fLink.innerHTML = `<i class="${s.icon}" style="font-size: 18px;"></i>`;
    footerSocials.appendChild(fLink);

    // Contact Box Socials
    if (contactSocials) {
      const cLink = document.createElement('a');
      cLink.href = s.url;
      cLink.target = '_blank';
      cLink.className = 'w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white transition-all duration-300';
      cLink.innerHTML = `<i class="${s.icon}" style="font-size: 22px;"></i>`;
      contactSocials.appendChild(cLink);
    }
  });

  // Initialize Lucide Icons after content injection
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- INTERACTIVITY ---

  // Navbar Scroll Effect
  const header = document.querySelector('header');
  const navLinksElements = document.querySelectorAll('.nav-link');
  const logoFallback = document.querySelector('.logo-fallback');
  const mobileToggle = document.getElementById('mobile-toggle');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('bg-white', 'shadow-md', 'py-3');
      header.classList.remove('bg-transparent', 'py-5');
      navLinksElements.forEach(l => l.classList.replace('text-white', 'text-[#0A2463]'));
      logoFallback.classList.replace('text-white', 'text-[#0A2463]');
      mobileToggle.classList.replace('text-white', 'text-[#0A2463]');
    } else {
      header.classList.remove('bg-white', 'shadow-md', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
      navLinksElements.forEach(l => l.classList.replace('text-[#0A2463]', 'text-white'));
      logoFallback.classList.replace('text-[#0A2463]', 'text-white');
      mobileToggle.classList.replace('text-[#0A2463]', 'text-white');
    }
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  let isMenuOpen = false;

  function toggleMenu(force) {
    isMenuOpen = force !== undefined ? force : !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('max-h-0', 'opacity-0');
      mobileMenu.classList.add('max-h-96', 'opacity-100');
      menuIconOpen.classList.add('hidden');
      menuIconClose.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('max-h-0', 'opacity-0');
      mobileMenu.classList.remove('max-h-96', 'opacity-100');
      menuIconOpen.classList.remove('hidden');
      menuIconClose.classList.add('hidden');
    }
  }

  mobileToggle.addEventListener('click', () => toggleMenu());

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // If it has a specific animation class, trigger it
        if (entry.target.classList.contains('reveal-up')) {
          entry.target.classList.add('animate-fade-up');
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
