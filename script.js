function showSection(sectionId) {
  const sections = document.querySelectorAll('.content section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
    activeSection.style.display = 'block';
  }

  const sidebarLinks = document.querySelectorAll('.sidebar li');
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
      link.classList.add('active');
    }
  });

  if (sectionId === 'about') {
    showAbout('uni', document.querySelector('.about-menu li'));
  }
}

function showAbout(aboutId, clickedElement) {
  const aboutSections = document.querySelectorAll('.about-section');
  aboutSections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('active');
  });

  const activeAboutSection = document.getElementById(`about-${aboutId}`);
  if (activeAboutSection) {
    activeAboutSection.style.display = 'block';
    activeAboutSection.classList.add('active');
  }

  const aboutTabs = document.querySelectorAll('.about-menu li');
  aboutTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  if (clickedElement) {
    clickedElement.classList.add('active');
  }
}

function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-en], [data-ru], [data-ua]');
  elements.forEach(el => {
    if (el.dataset[lang]) {
      if (el.children.length > 0 && el.tagName.toLowerCase() === 'li') {
         const span = el.querySelector('span');
         if(span && span.dataset[lang]) {
             span.innerHTML = span.dataset[lang];
         }
      } else {
         el.innerHTML = el.dataset[lang];
      }
    }
  });
}