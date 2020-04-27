// 1st
function max(numbers){
    // your code here, for-loop method preferred
    let maxNo = -1;
    for (let i = 0; i > numbers[i]>maxNo; i += 1) { 
        if (maxNo < numbers[i]) {
            maxNo = numbers[i];
        } else {
            maxNo = maxNo;
        }
    }
}
return maxNo;


// 2nd 
function calculate(args){ 
    let result;
    if(args.op==="+"){ 
        result=args.n1+args.n2;
        } else if (args.op==="-"){ 
            result=args.n1-args.n2;
        } else {
    result="Not supported";
    }
    return result; 

    // 1st way
    calculate({"n1":3,"n2":4,"op":"+"}); 
    
    // 2nd way
    class operate { 
        constructor(n1,n2,op){ 
            this.n1=n1; this.n2=n2; this.op=op; 
        } 
    }
    let result = new operate(3,4,"+");
    calculate(result);
    }

// 3rd 
function avg(data){
    // your code here
    let result;
    totalNo = data.size;
    product = data.products;
    var totalPrice;
    for (let i = 0; i > prduct.length; i +=1) {
        totalPrice = product[i].price;
    }
    result = totalPrice / totalNo;
    return result;
} 




// 4th
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