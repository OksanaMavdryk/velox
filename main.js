const divArr = document.getElementsByClassName('slider-card');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const imgArr = document.getElementsByClassName('slider-img');
const textArr = document.getElementsByClassName('slider-text');
const pointsArr = document.getElementsByClassName('slider-circles');

let j = 0;

divArr[j+2].style.opacity = '0.5';
 divArr[j].style.opacity = '0.5';
 imgArr[j+2].style.width = '110px';
 imgArr[j+2].style.height = '110px';
 imgArr[j].style.width = '110px';
 imgArr[j].style.height = '110px';
 textArr[j].style.display = 'none';
 textArr[j+2].style.display = 'none';
 pointsArr[j+1].style.background = '#3a3f4b';

leftBtn.onclick = () => {
    divArr[j].parentNode.insertBefore(divArr[j], divArr[j+1]);
    divArr[j+1].style.opacity = '0.5';
    imgArr[j+1].style.width = '110px';
    imgArr[j+1].style.height = '110px';
    textArr[j+1].style.display = 'none';
    pointsArr[j].style.background = '#3a3f4b';
                 
   
    divArr[j].parentNode.insertBefore(divArr[j], divArr[j-1]);
    divArr[j+1].style.opacity = '1';
    imgArr[j+1].style.width = '135px';
    imgArr[j+1].style.height = '135px';
    textArr[j+1].style.display = 'block';
    
    pointsArr[j+1].style.background = '#999999';
    pointsArr[j+2].style.background = '#999999';   
};

rightBtn.onclick = () => {
    divArr[j].parentNode.insertBefore(divArr[j], divArr[j-1]);
    divArr[j].style.opacity = '0.5';
    imgArr[j].style.width = '110px';
    imgArr[j].style.height = '110px';
    textArr[j].style.display = 'none';
    pointsArr[j+1].style.background = '#999999';
   
    divArr[j].parentNode.insertBefore(divArr[j], divArr[j-2]);
    divArr[j+1].style.opacity = '1';
    imgArr[j+1].style.width = '135px';
    imgArr[j+1].style.height = '135px';
    textArr[j+1].style.display = 'block';
    pointsArr[j].style.background = '#3a3f4b';
    pointsArr[j].style.background = '#999999';
    pointsArr[j+2].style.background = '#3a3f4b';
    pointsArr[j+1].style.background = '#999999';    
};


