window.addEventListener('DOMContentLoaded', () => {
  // Fade-in animations
  document.querySelectorAll('.fade-item').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 500 + i * 400);
  });

  // AdSense handling
  const adBlock = document.querySelector('.adsense-container');
  if (window.adsbygoogle && adBlock) {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      adBlock.style.display = 'none';
    }
  }

  // Dynamically set footer year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Navigation bar visibility on scroll
  const nav = document.getElementById('main-nav');
  // Dynamically select the first section (either #hero or #blog-teaser)
  const firstSection = document.getElementById('hero') || document.getElementById('blog-teaser');

  if (nav && firstSection) {
    window.addEventListener('scroll', () => {
      const sectionHeight = firstSection.offsetHeight;
      if (window.scrollY > sectionHeight) {
        nav.classList.add('visible');
      } else {
        nav.classList.remove('visible');
      }
    });
  }
});