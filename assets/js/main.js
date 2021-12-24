const navToggler = document.querySelector('.nav-toggler');


navToggler.addEventListener('click', () => {
   
   const headerMenu = document.querySelector('ul.header-menu');
  
  const navIcon = document.querySelectorAll('.navIcon');
   


    headerMenu.classList.toggle('show');

    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });

});

function navbarFixed(){
   const header_dom = document.querySelector('.header');

   const nav_offset_top = header_dom.clientHeight + 50;

   window.addEventListener("scroll", () => {

    let scroll = window.pageYOffset || document.documentElement.scrollTop;
   
    if(scroll >= nav_offset_top ) {

        header_dom.classList.add('navbar-fixed');
    }else{
        header_dom.classList.remove('navbar-fixed');
    }
    
    
   });
}

function setMenuActive(){
   const sections =  document.querySelectorAll("section");

    const navLink =   document.querySelectorAll(".header-menu-item>a");
    
    window.addEventListener("scroll" , () => {

        let current = "";

        sections.forEach((section) => {
        const sectionTop = section.offsetTop ;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3){
            current = section.getAttribute("id")

            
        }
    });

    navLink.forEach((li) => {

       li.classList.remove("active");

        if(current == li.getAttribute("href").split("#")[1]){
            li.classList.add("active")
        }
    });
});


    
}



navbarFixed();
setMenuActive();