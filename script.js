/* ============================================
   RONIT JITESH — PORTFOLIO SCRIPTS v2.0
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ====================================
     0. PAGE LOADER
     ==================================== */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 2000);
    });
    // Fallback if load event already fired
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2800);
  }

  /* ====================================
     1. THEME TOGGLE
     ==================================== */
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem('rj-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('rj-theme', next);
    });
  }

  /* ====================================
     2. NAVBAR SCROLL + ACTIVE LINKS
     ==================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scroll class
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }
    // Active link
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active-link',
        link.getAttribute('href') === '#' + current);
    });
  });

  /* ====================================
     3. MOBILE NAV TOGGLE
     ==================================== */
  const navToggle = document.getElementById('nav-toggle');
  const navLinksEl = document.getElementById('nav-links');

  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinksEl.classList.toggle('active');
    });
    navLinksEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksEl.classList.remove('active');
      });
    });
  }

  /* ====================================
     4. SCROLL-REVEAL ANIMATIONS
     ==================================== */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(el => revealObserver.observe(el));

  /* ====================================
     5. TYPING ANIMATION
     ==================================== */
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const titles = [
      'Business Analyst',
      'AI Builder',
      'Prompt Engineer',
      'Product Thinker',
      'Data Storyteller'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = titles[titleIndex];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === current.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    setTimeout(type, 2800);
  }

  /* ====================================
     6. PARTICLE / DOT GRID BACKGROUND
     ==================================== */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.8 + 0.6,
          o: Math.random() * 0.5 + 0.2
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(168, 133, 247, ${p.o})`
          : `rgba(100, 60, 200, ${p.o * 0.6})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(168, 133, 247, ${0.08 * (1 - dist / 140)})`
              : `rgba(100, 60, 200, ${0.05 * (1 - dist / 140)})`;
            ctx.stroke();
          }
        }

        // Mouse attraction
        const dxM = mouseX - p.x;
        const dyM = mouseY - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = isDark
            ? `rgba(34, 211, 238, ${0.12 * (1 - distM / 200)})`
            : `rgba(20, 150, 180, ${0.08 * (1 - distM / 200)})`;
          ctx.stroke();
        }
      });

      raf = requestAnimationFrame(drawParticles);
    }

    canvas.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    window.addEventListener('resize', resize);
    resize();
    drawParticles();
  }

  /* ====================================
     7. MATRIX RAIN
     ==================================== */
  const matrixCanvas = document.getElementById('matrix-canvas');
  if (matrixCanvas) {
    const mctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*〇一二三四五六七八九十';
    const fontSize = 14;
    const columns = Math.floor(matrixCanvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      mctx.fillStyle = isDark
        ? 'rgba(10, 10, 15, 0.05)'
        : 'rgba(248, 248, 252, 0.08)';
      mctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

      mctx.fillStyle = isDark
        ? 'rgba(168, 85, 247, 0.35)'
        : 'rgba(120, 60, 200, 0.25)';
      mctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        mctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    });
  }

  /* ====================================
     8. CURSOR GLOW
     ==================================== */
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.innerWidth > 768) {
    let cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', e => {
      tx = e.clientX;
      ty = e.clientY;
    });

    function animateCursor() {
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      cursorGlow.style.left = cx + 'px';
      cursorGlow.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }

  /* ====================================
     9. ANIMATED STAT COUNTERS
     ==================================== */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.getAttribute('data-count');
          const suffix = el.getAttribute('data-suffix') || '';
          const isNumber = !isNaN(parseFloat(target));

          if (isNumber) {
            const end = parseFloat(target);
            const duration = 2000;
            let startTime = null;

            function countUp(timestamp) {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease out
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * end);
              el.textContent = current + suffix;
              if (progress < 1) {
                requestAnimationFrame(countUp);
              } else {
                el.textContent = target + suffix;
              }
            }

            requestAnimationFrame(countUp);
          }

          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => counterObserver.observe(el));

  /* ====================================
     10. PROJECT FILTERS
     ==================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden-card');
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  /* ====================================
     11. CONTACT FORM (Formspree)
     ==================================== */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.textContent = '✓ Message sent successfully!';
          formStatus.className = 'form-status show';
          contactForm.reset();
        } else {
          throw new Error('Failed');
        }
      } catch (err) {
        formStatus.textContent = '✗ Something went wrong. Try emailing directly.';
        formStatus.className = 'form-status show error';
      }

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      setTimeout(() => {
        formStatus.classList.remove('show');
      }, 5000);
    });
  }

  /* ====================================
     12. SMOOTH SCROLL
     ==================================== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ====================================
     13. TILT EFFECT ON HOLO CARDS
     ==================================== */
  document.querySelectorAll('.holo-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  /* ====================================
     14. RESUME DOWNLOAD TRACKING
     ==================================== */
  const downloadBtn = document.getElementById('download-cv');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Track download (if analytics present)
      if (window.gtag) {
        window.gtag('event', 'download_cv');
      }
    });
  }

});
