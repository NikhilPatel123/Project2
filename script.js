const menu=document.querySelector("#menu");
const background =document.querySelector("#background");
const sidenav =document.querySelector("#sidenav");
const close =document.querySelector("#close");

menu.addEventListener('click',function(){
    background.style.transform='translateX(200px) scale(.4) rotateY(-6deg) skew(3deg)';
    background.style.filter='blur(1.5px)';
    sidenav.style.left='2%';
})

close.addEventListener('click',function(){
    background.style.transform='translateX(0px) scale(1)';
        background.style.filter='blur(0px)';
    sidenav.style.left='-10%';
})
