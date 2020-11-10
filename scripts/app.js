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

  const getSkillsDiv = document.querySelector('.get-skills')
  const responseContain = document.querySelector('.response-contain')
  const skillsDiv = document.querySelector('.skills-list')
  const respItems = document.querySelectorAll('.response')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const projOne = document.querySelector('.project-1')
  const projTwo = document.querySelector('.project-2')
  const projThree = document.querySelector('.project-3')
  const projFour = document.querySelector('.project-4')
  const projArray = [projOne, projTwo, projThree, projFour]

  let currProjInd = 0

  icons.forEach(icon => {
    const iconElement = document.createElement('i')
    iconElement.classList.add(icon)
    skillsDiv.appendChild(iconElement)
  })

  const scrollProject = (e) => {
    projArray[currProjInd].style.display = 'none'
    if (e.target.innerHTML === 'Next') {
      currProjInd = currProjInd === 3 ? 0 : currProjInd + 1
    } else {
      currProjInd = currProjInd === 0 ? 3 : currProjInd - 1
    }
    projArray[currProjInd].style.display = 'flex'
  }

  prevBtn.addEventListener('click', scrollProject)
  nextBtn.addEventListener('click', scrollProject)

  const inViewPort = (element) => {
    const elementRect = getSkillsDiv.getBoundingClientRect(element)
    return (
      elementRect.top >= 0 &&
      elementRect.left >= 0 &&
      elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  const skillsRespAnimate = () => {
    responseContain.classList.add('skills-in')
    responseContain.classList.add('display-block')
  }

  const hideResponse = () => {
    respItems.forEach(item => {
      item.classList.add('display-none')
    })
  }

  const skillsAnimate = () => {
    setTimeout(() => getSkillsDiv.classList.add('display-none'), 1000)
    setTimeout(skillsRespAnimate, 1000)
    setTimeout(hideResponse, 4200)
  }

  const handleSkillsAnimate = (e) => {
    if (inViewPort(e.target)) {
      skillsAnimate()
    }
  }

  window.addEventListener('scroll', handleSkillsAnimate)
}

window.addEventListener('DOMContentLoaded', init)