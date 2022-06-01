window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectioEndsAt = sectionTop + sectionHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 
  const sectioEndPassedTargetLine = sectioEndsAt <= targetLine
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectioEndPassedTargetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
  
}

function showNavOnScroll(){
    const navigation = document.getElementById('navigation'); 

    if (scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #testimonials,
  #about,
  #about header,
  #about content,
  #contact,
  #contact header,
  #contact content,
  #footer,
  `);