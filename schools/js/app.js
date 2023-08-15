const icon = document.querySelector(".icon")
    const barMenu = document.querySelector(".nav-menu")

    icon.addEventListener('click',()=>{
    barMenu.classList.toggle('mobile-menu')
    })