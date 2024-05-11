const linked1 = document.querySelector(".link1");
const linked2 = document.querySelector(".link2");
const linked3 = document.querySelector(".link3");
const linked4 = document.querySelector(".link4");

linked1.addEventListener('mouseenter', function(){
    linked1.classList.add("luana");
});

linked1.addEventListener('mouseleave', function(){
    linked1.classList.remove("luana");
});

linked2.addEventListener('mouseenter', function(){
    linked2.classList.add("luana");
});

linked2.addEventListener('mouseleave', function(){
    linked2.classList.remove("luana");
});

linked3.addEventListener('mouseenter', function(){
    linked3.classList.add("luana");
});

linked3.addEventListener('mouseleave', function(){
    linked3.classList.remove("luana");
});

linked4.addEventListener('mouseenter', function(){
    linked4.classList.add("luana");
});

linked4.addEventListener('mouseleave', function(){
    linked4.classList.remove("luana");
});

// ---------------------------------------

const BorderInst = document.querySelector("#inst");
const BorderLink = document.querySelector("#link");
const BorderSec = document.querySelector('.social__ints')
const FirstIcon = document.querySelector('.social div a i');
const Border = document.querySelector(".social__git");
const BorderTerc = document.querySelector(".social__link");

// --------------------------------------------------------------

Border.addEventListener('mouseenter', function(){
    Border.classList.add("daniel");
    FirstIcon.classList.add("leticia");
});

Border.addEventListener('mouseleave', function(){
    Border.classList.remove("daniel");
    FirstIcon.classList.remove("leticia");
});

// -----------------------------------------------------------

BorderSec.addEventListener('mouseenter', function(){
    BorderSec.classList.add("daniel");
    BorderInst.classList.add("leticia")
})


BorderSec.addEventListener('mouseleave', function(){
    BorderInst.classList.remove("leticia");
    BorderSec.classList.remove("daniel");
});

// -----------------------------------------------------------

BorderTerc.addEventListener('mouseenter', function(){
    BorderTerc.classList.add("daniel");
    BorderLink.classList.add("leticia")
})


BorderTerc.addEventListener('mouseleave', function(){
    BorderLink.classList.remove("leticia");
    BorderTerc.classList.remove("daniel");
});

// ----------------------------------------------------

const button = document.querySelector('#btn');


button.addEventListener('mouseenter', function(){
    button.classList.add("active");
})


button.addEventListener('mouseleave', function(){
    button.classList.remove("active");
});

// -----------------------------------------------------------

const buttondois = document.querySelector('#btn__dois');


buttondois.addEventListener('mouseenter', function(){
    buttondois.classList.add("active");
})


buttondois.addEventListener('mouseleave', function(){
    buttondois.classList.remove("active");
});

// ----------------------------------------------------------

const navbar = document.querySelector('.nav__content')

window.addEventListener('scroll', function () {
    if(this.window.pageYOffset > 0) return navbar.classList.add('activou');
    return navbar.classList.remove('activou');
});