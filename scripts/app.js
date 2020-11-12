function init() {
  console.log('Thanks for checking my Portfolio!')
  
  // get icns for git, github, node sass, bulma
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

  const projOneSkills = ['.html5', '.javascript', '.css3', '.react', '.npm', '.python', '.django', '.postgresql']
  const projTwoSkills = ['.html5', '.javascript', '.css3', '.react', '.express', '.nodejs', '.npm', '.mongodb']
  const projThreeSkills = ['.html5', '.javascript', '.css3', '.react']
  const projFourSkills = ['.html5', '.javascript', '.css3']

  const getSkillsDiv = document.querySelector('.get-skills')
  const responseContain = document.querySelector('.response-contain')
  const skillsDiv = document.querySelector('.skills-list')
  const respItems = document.querySelectorAll('.response')
  const scrollBtns = document.querySelectorAll('.project-scroll')
  const projOne = document.querySelector('.project-1')
  const projTwo = document.querySelector('.project-2')
  const projThree = document.querySelector('.project-3')
  const projFour = document.querySelector('.project-4')
  const projArray = [projOne, projTwo, projThree, projFour]

  icons.forEach(icon => {
    const iconElement = document.createElement('i')
    iconElement.classList.add(icon)
    iconElement.classList.add(icon.split('-')[1])
    skillsDiv.appendChild(iconElement)
  })

  const allIcons = document.querySelectorAll('i')

  const highlightSkill = (skillsList) => {
    skillsList.forEach(skill => {
      const element = document.querySelector(skill)
      element.classList.add('green-back')
    })
  }

  highlightSkill(projOneSkills)

  let currProjInd = 0

  const scrollProject = (e) => {
    projArray[currProjInd].style.display = 'none'
    allIcons.forEach(icon => {
      if (icon.classList.contains('green-back')) {
        icon.classList.remove('green-back')
      }
    })
    if (e.target.value === 'next') {
      currProjInd = currProjInd === 3 ? 0 : currProjInd + 1
    } else {
      currProjInd = currProjInd === 0 ? 3 : currProjInd - 1
    }
    projArray[currProjInd].style.display = 'flex'

    switch (currProjInd) {
      case 0:
        highlightSkill(projOneSkills)
        break
      case 1:
        highlightSkill(projTwoSkills)
        break
      case 2:
        highlightSkill(projThreeSkills)
        break
      case 3:
        highlightSkill(projFourSkills)
        break
      default:
        console.log('Houston we have a problem')
    }
  }

  scrollBtns.forEach(button => button.addEventListener('click', scrollProject))

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