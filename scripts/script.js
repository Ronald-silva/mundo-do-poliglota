const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

let lastScroll = 0;
const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
  lastScroll = currentScroll;
});
btn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
