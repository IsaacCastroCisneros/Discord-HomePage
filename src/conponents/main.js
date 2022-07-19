const block = document.querySelectorAll('.block');
let data = block[2].getBoundingClientRect();


window.addEventListener('scroll',()=>
{  
    let posActual = window.pageYOffset;
    let posAbsoluta =  671 - window.innerHeight;
    let posAbsoluta1 =  1388 - window.innerHeight;
    let posAbsoluta2 =  2053 - window.innerHeight;
    if(posActual > posAbsoluta)
    {
        block[0].style.opacity='1';   
        block[0].style.transform='translateY(0)';   
    }
    if(posActual > posAbsoluta1) 
    {
        block[1].style.opacity='1';  
        block[1].style.transform='translateY(0)';  
    }
    if(posActual > posAbsoluta2) 
    {
        block[2].style.opacity='1';  
        block[2].style.transform='translateY(0)';  
    }
});

const mobButton = document.querySelector('.nav-bar__menu');
const mobMenu = document.querySelector('.nav-bar__mob-menu');
const mobCancel = document.querySelector('.nav-bar__cancel-button');
const html = document.getElementsByTagName('body')[0];
console.log(html);
mobButton.addEventListener('click',()=>
{
   mobMenu.classList.toggle('active');
   html.style.overflow='hidden';
});
mobCancel.addEventListener('click',()=>
{
   mobMenu.classList.remove('active');
   html.style.overflowY='auto';
});

