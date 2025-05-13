document.querySelector('.toggle-btn').addEventListener('click', () => {
  document.querySelector('.dropdown-menu').classList.toggle('open');
});

const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  btn.classList.toggle('show', window.scrollY > 300);
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
