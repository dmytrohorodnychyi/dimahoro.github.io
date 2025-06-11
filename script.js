function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
}

function showAbout(sectionId, element) {
  const sections = document.querySelectorAll('.about-section');
  const menuItems = document.querySelectorAll('.about-menu li');

  sections.forEach(sec => sec.classList.remove('active'));
  menuItems.forEach(item => item.classList.remove('active'));

  document.getElementById(`about-${sectionId}`).classList.add('active');
  element.classList.add('active');
}

function switchLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}