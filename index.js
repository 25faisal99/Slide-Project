var clss = document.querySelectorAll('.slide-data');  
 
var count = 1;
 

setInterval(() => {
    count++;
    var current = document.querySelector('.current');
    current.classList.remove('current');
    if(count>clss.length)
    {
        clss[0].classList.add('current');
        count = 1;
    }else{
        current.nextElementSibling.classList.add('current');
    }
}, 2000);