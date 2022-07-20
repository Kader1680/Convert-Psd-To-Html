let app = document.querySelectorAll('.app')
let el = document.querySelector('oo')
let active = document.querySelector('.active')

app.forEach(li => {
    li.addEventListener('click', ()=>{
        el.classList.add('active')
    })
});


// slider img
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    
    navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        nextEl: '.next',
        prevEl: '.prev',
    },

    
});



