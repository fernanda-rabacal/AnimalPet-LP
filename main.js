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

//comentarios para eu entender o codigo depois
function activateMenuAtCurrentSection(section) {
  //verificar se a seção passou da linha
  // quais dados vou precisar?

  // existe uma linha imaginaria dividindo o meio da tela
  // esta função verifica se a sessão saiu o limite desta linha.
  // Para isso é necessario pegar o tamanho da seção e o numero do scroll onde o topo desta sessão começa.

  //esta variavel pega o numero da posição do scrollY (vertical), soma com a altura
  //atual do viewport e divide por dois para pegar a metade do valor. Assim chega no valor da linha alvo
  const targetLine = scrollY + innerHeight / 2
  

  // estas pegam em qual parte da pagina o topo da seção começa
  const sectionTop = section.offsetTop

  // esta é a altura da seção
  const sectionHeight = section.offsetHeight

  //esta calcula onde fica a base da sessão na pagina
  const sectioEndsAt = sectionTop + sectionHeight

  //Verifica se o topo da sessão passou ou chegou na linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // esta verifica se a base passou ou chegou 
  const sectioEndPassedTargetLine = sectioEndsAt <= targetLine

  //Esta verifica se a pagina esta dentro dos limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectioEndPassedTargetLine

  //aqui entramos nos sections e procuramos o atributo id, para pegar o valor do mesmo
  const sectionId = section.getAttribute('id')

  //Selecionamos os elementos de link do menu, e para chamar a seção certa como uma string, nós usamos interpolação
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
  
}




function showNavOnScroll(){
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