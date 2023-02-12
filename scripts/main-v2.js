function init() {
    console.log("main-v2 called");
    const tabs = ['about', 'skills', 'experience'];

    const navBtns  = document.querySelectorAll('.sub-nav-item');



    /* DISPLAY LISTNERS */
    navBtns.forEach(btn => {
        const displayTab = btn.dataset.display;
        btn.addEventListener('click', (e) => {
            const logoDiv = document.getElementById('logo');
            const homeDiv = document.getElementById('home-div');
            homeDiv.classList.add('hide');
            logoDiv.classList.remove('hide');
            tabs.forEach(tab => {
                const tabDesc = document.getElementById(tab + '-desc');
                const tabCont = document.getElementById(tab + '-div');
                if (tab == displayTab) {
                    tabDesc.classList.remove('hide');
                    tabCont.classList.remove('hide');
                } else {
                    tabDesc.classList.add('hide');
                    tabCont.classList.add('hide');
                }
            })
        })
    })
};

window.addEventListener('DOMContentLoaded', init);