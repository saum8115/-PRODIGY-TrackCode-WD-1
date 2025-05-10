// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.zIndex = 1000;
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode ? '#1e1e1e' : '#f5f5f5';
  document.body.style.color = darkMode ? '#f5f5f5' : '#000';
  document.querySelectorAll('section, .project').forEach(el => {
    el.style.background = darkMode ? '#2c2c2c' : '#fff';
  });
});