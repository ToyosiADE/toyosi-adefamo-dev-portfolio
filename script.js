const toggle = document.getElementById('themeToggle');
const label = document.getElementById('themeLabel');
const saved = localStorage.getItem('toyosi-theme');
if (saved === 'dark') document.body.classList.add('dark');
function refreshTheme() {
  const dark = document.body.classList.contains('dark');
  label.textContent = dark ? 'Light mode' : 'Dark mode';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#151515' : '#F4F1EB';
}
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('toyosi-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  refreshTheme();
});
refreshTheme();
document.getElementById('year').textContent = new Date().getFullYear();
