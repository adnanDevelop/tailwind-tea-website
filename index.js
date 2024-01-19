const menuButton = document.querySelector('.menu_btn');
const offCanvas = document.querySelector('.offcanvas');
const closeBtn = document.querySelector('.closeMenu');
const navLink = document.querySelectorAll('.navLink')



menuButton.addEventListener('click' , () => {
    offCanvas.classList.toggle('show');
    
})

closeBtn.addEventListener('click' , () => {
    offCanvas.classList.remove('show');
})

navLink.forEach(element => {
    element.addEventListener('click' , () => {
        offCanvas.classList.remove('show')
    })
})


// npx tailwindcss -i ./css/index.css -o ./css/output.css --watch
