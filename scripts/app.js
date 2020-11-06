function init() {
  console.log('Thanks for checking my Portfolio!')
  const icons = [
    'devicon-html5-plain',
    'devicon-css3-plain',
    'devicon-javascript-plain',
    'devicon-react-original',
    'devicon-express-original',
    'devicon-nodejs-plain',
    'devicon-npm-original-wordmark',
    'devicon-mongodb-plain',
    'devicon-python-plain',
    'devicon-django-plain',
    'devicon-postgresql-plain'
  ]

  const skillsDiv = document.querySelector('.skills-list')
  icons.forEach(icon => {
    const iconElement = document.createElement('i')
    iconElement.classList.add(icon)
    skillsDiv.appendChild(iconElement)
  })

  // for header, use JS to add text after animation completes



}

window.addEventListener('DOMContentLoaded', init)