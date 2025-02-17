const timeContainer = document.getElementById('time-container')
const BIRTH_DAY = '1991-09-30'
const BIRTH_DAY_DATE = new Date(BIRTH_DAY)
const intlNumberFormatter = new Intl.NumberFormat('en-US')

setInterval(() => {
  const now = new Date()
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  )

  timeContainer.innerText = intlNumberFormatter.format(difference)
}, 1000)

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle')
  const navMenu = document.querySelector('.navigation-items')
  const menuLinks = document.querySelectorAll('.navigation-items a')
  const navHeight = document.querySelector('nav').offsetHeight // Obtiene la altura del nav

  // Toggle menú al hacer clic en el botón
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })

  // Cerrar el menú y ajustar el scroll al hacer clic en un enlace
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault() // Evita el comportamiento predeterminado

      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navHeight - 10 // Ajusta con margen

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }

      navMenu.classList.remove('active') // Cierra el menú en móviles
    })
  })
})
