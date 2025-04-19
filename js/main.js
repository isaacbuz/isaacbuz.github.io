// Dark-mode toggle
const toggle = document.getElementById('dark-toggle');
const root = document.body;
const theme = localStorage.getItem('theme') || 'light';
root.classList.add(theme);
toggle.textContent = theme === 'light' ? '🌙' : '☀️';
toggle.addEventListener('click', () => {
  const next = root.classList.contains('light') ? 'dark' : 'light';
  root.classList.replace(root.classList.contains('light') ? 'light' : 'dark', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', next);
});

// Fade-in and speech
document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.fade-item'));
  items.forEach((el, i) => setTimeout(() => el.classList.add('visible'), 500 + i * 600));
  setTimeout(() => {
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(
        "Welcome! I'm Isaac Buziba, Senior Technical Consultant and AI M L Developer."
      );
      const voices = speechSynthesis.getVoices();
      if (voices.length) utter.voice = voices.find(v => /en[-_]?us/i.test(v.lang)) || voices[0];
      utter.rate = 1;
      speechSynthesis.speak(utter);
    }
  }, 500 + items.length * 600 + 400);
});
