const welcome = document.getElementById('welcome');
	welcome.addEventListener("click",()=>{
    welcome.innerHTML = 'Have a Good Time!';
});

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('mainNavList');
const menuIcon = document.getElementById('menu-icon');

// menuBtn.addEventListener('click',() => {
//     if (navList.style.display='none') {
//     	navList.style.display='block';

//     } else {
//     	navList.style.display='none';
//     }
//     console.log('btn')
// });

menuBtn.addEventListener('click',() => {

    if (navList.style.display =='block') {
    	navList.style.display='none';

    } else {
    	navList.style.display='block';
    } 
});




const callAction = document.getElementById('callAction');
const more = document.getElementById('more');
callAction.addEventListener('click',()=>{
    if (more.style.display == 'none') {
        more.style.display='flex';
    } else {
        more.style.display='none';
    }
    
}) ;