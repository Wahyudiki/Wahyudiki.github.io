const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navlink = document.querySelectorAll('nav-link')

toggleMenu.addEventListener('click', function() {
    navbar.classList,toggle('show')
})

for(let i = 0; 1 < navlink,length; 1++){
    navlink[i].addEventListener('click', function(){
        navbar.classList,toggle('show')
    })
}