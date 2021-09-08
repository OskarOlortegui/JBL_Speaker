const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');

const li = document.querySelectorAll('#nav-bar ul li');
const body = document.querySelector('body');

/*Products Section */
const checkbox = document.getElementById('checkbox');
const products = document.querySelector('.products-wrapper');

function clickMenu(){
    if(window.innerWidth < 768){
        burger.classList.toggle('active');
        navBar.classList.toggle('active');
        
        body.classList.toggle('stop-scrolling');
  
        li.forEach((i,index) =>{
            if(i.style.animation){
                i.style.animation = ``;
            }
            else{
              i.style.animation = `showLi 0.5s ease forwards ${index/7 + 0.6}s`;
            }
            //i.style.animation = `showLi 0.5s ease forwards ${index/7 + 0.6}s`;
        });
    }
}
burger.addEventListener('click',clickMenu);
li.forEach(i => i.addEventListener('click',clickMenu));

checkbox.addEventListener('click',()=>{
    products.classList.toggle('active');
})

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768){
        burger.classList.remove('active');
        navBar.classList.remove('active');
        
        body.classList.remove('stop-scrolling');
  
        li.forEach(i => i.style.animation = ``)
    }
});