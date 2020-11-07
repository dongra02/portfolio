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
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const projOne = document.querySelector('.project-1')
  const projTwo = document.querySelector('.project-2')
  const projThree = document.querySelector('.project-3')
  const projArray = [projOne, projTwo, projThree]

  let currProjInd = 0

  icons.forEach(icon => {
    const iconElement = document.createElement('i')
    iconElement.classList.add(icon)
    skillsDiv.appendChild(iconElement)
  })

  const scrollProject = (e) => {
    projArray[currProjInd].style.display = 'none'
    if (e.target.innerHTML === 'Next') {
      currProjInd = currProjInd === 2 ? 0 : currProjInd + 1
    } else {
      currProjInd = currProjInd === 0 ? 2 : currProjInd - 1
    }
    projArray[currProjInd].style.display = 'flex'
  }

  prevBtn.addEventListener('click', scrollProject)
  nextBtn.addEventListener('click', scrollProject)
  
  // for header, use JS to add text after animation completes



}

window.addEventListener('DOMContentLoaded', init)