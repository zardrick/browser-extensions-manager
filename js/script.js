const body = document.body;
const themeToggle = document.querySelector('.header__theme-toggle');
const toggleIcon = themeToggle.querySelector('img');

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    toggleIcon.src = './assets/images/icon-moon.svg';
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    toggleIcon.src = './assets/images/icon-sun.svg';
  }
});

const filterButtons = document.querySelectorAll('.filters__btn');
const extensionCards = document.querySelectorAll('.extension-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      filterButtons.forEach(btn => btn.classList.remove('filters__btn--active'));
      button.classList.add('filters__btn--active');
  
      const filterType = button.textContent.trim().toLowerCase();
  
      extensionCards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        const isChecked = checkbox.checked;
  
        if (
          filterType === 'all' ||
          (filterType === 'active' && isChecked) ||
          (filterType === 'inactive' && !isChecked)
        ) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
});

const removeButtons = document.querySelectorAll('.extension-card__remove');

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.extension-card');
    if (card) {
      card.classList.add('fade-out');

      setTimeout(() => {
        card.style.display = 'none';
      }, 500);
    }
  });
});