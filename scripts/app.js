function init() {
  console.log('Thanks for checking my Portfolio!')
  
  const icons = [
    'devicon-html5-plain-wordmark',
    'devicon-css3-plain-wordmark',
    'devicon-javascript-plain',
    'devicon-react-original-wordmark',
    'devicon-express-original',
    'devicon-nodejs-plain',
    'devicon-npm-original-wordmark',
    'devicon-mongodb-plain-wordmark',
    'devicon-python-plain-wordmark',
    'devicon-django-plain',
    'devicon-postgresql-plain-wordmark',
    // 'devicon-github-plain-wordmark',
    'devicon-sass-original',
    'devicon-git-plain-wordmark'
  ]

  const projOneSkills = ['.html5', '.javascript', '.css3', '.react', '.npm', '.python', '.django', '.postgresql', '.git', '.github']
  const projTwoSkills = ['.html5', '.javascript', '.css3', '.react', '.express', '.nodejs', '.npm', '.mongodb', '.git', '.github']
  const projThreeSkills = ['.html5', '.javascript', '.css3', '.react', '.git', '.sass']
  const projFourSkills = ['.html5', '.javascript', '.css3', '.git']

  const getSkillsDiv = document.querySelector('.get-skills')
  const responseContain = document.querySelector('.response-contain')
  const skillsDiv = document.querySelector('.skills-list')
  const respItems = document.querySelectorAll('.response')
  console.log(respItems)
  const scrollChevs = document.querySelectorAll('.project-scroll')
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
    responseContain.style.display = 'flex'
  }

  const highlightSkill = (skillsList) => {
    skillsList.forEach(skill => {
      const element = document.querySelector(skill)
      element.classList.add('skills-hi')
      if (element.classList.contains('skills-off')) {
        element.classList.remove('skills-off')
      }
    })
  }

  const hideResponse = () => {
    respItems.forEach(item => {
      console.log(item)
      item.style.display = 'none'
    })
    if (currProjInd === 0) {
      highlightSkill(projOneSkills)
    }
  }

  const skillsAnimate = () => {
    getSkillsDiv.classList.add('skills-out')
    setTimeout(() => getSkillsDiv.style.display = 'none', 2000)
    setTimeout(skillsRespAnimate, 2000)
    setTimeout(hideResponse, 5500)
  }

  const handleSkillsAnimate = (e) => {
    if (inViewPort(e.target) && window.innerWidth >= 769) {
      skillsAnimate()
    } else if (inViewPort(e.target) && window.innerWidth < 769 && currProjInd === 0) {
      highlightSkill(projOneSkills)
    }
  }

  const allIcons = document.querySelectorAll('i')

  let currProjInd = 0

  const scrollProject = (e) => {
    projArray[currProjInd].style.display = 'none'
    allIcons.forEach(icon => {
      if (icon.classList.contains('skills-hi')) {
        icon.classList.add('skills-off')
        icon.classList.remove('skills-hi')
      }
    })
    if (e.target.id === 'next') {
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
        console.log('Bummer')
    }
  }

  // UNCOMMENT CODE BELOW IF ENABLING EMAIL FORM vs LINK, ADJUST index.html

  // const mainContain = document.querySelector('.main-container')
  // const formContain = document.querySelector('.form-container')

  // const handleClickEmail = () => {
  //   formContain.style.display = 'block'
  //   mainContain.style.opacity = '.2'
  // }

  // const handleCancelEmail = (e) => {
  //   e.preventDefault()
  //   formContain.style.display = 'none'
  //   mainContain.style.opacity = '1'
  // }
  
  // const emailBtn = document.querySelector('.email')
  // const sendBtn = document.querySelector('.send')
  // const cancelBtn = document.querySelector('.cancel')

  // emailBtn.addEventListener('click', handleClickEmail)
  // cancelBtn.addEventListener('click', handleCancelEmail)

  scrollChevs.forEach(chev => chev.addEventListener('click', scrollProject))
  window.addEventListener('scroll', handleSkillsAnimate)
}

window.addEventListener('DOMContentLoaded', init)