const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('section')];

function highlightSection() {
  const scrollY = window.scrollY + window.innerHeight / 2;
  let activeId = null;

  for (const section of sections) {
    const { top, height } = section.getBoundingClientRect();
    const offsetTop = top + window.scrollY;

    if (scrollY >= offsetTop && scrollY < offsetTop + height) {
      activeId = section.id;
      break;
    }
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('is-active', isActive);
  });
}

highlightSection();
window.addEventListener('scroll', highlightSection);
window.addEventListener('resize', highlightSection);

const bookButtons = document.querySelectorAll('.cta');
bookButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const label = event.currentTarget.textContent.trim();
    console.log(`CTA clicked: ${label}`);
  });
});

