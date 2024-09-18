const imgSlider = document.querySelector(".img-slider");
const items = document.querySelectorAll(".item");
const imgItems = document.querySelectorAll(".img-item");
const infoItems = document.querySelectorAll(".info");
const INFO = document.querySelectorAll(".info-box");
const nxt = document.querySelector(".nxt");
const prev = document.querySelector(".prev");
let colorsDiv;
const button = document.querySelectorAll(".btn")


let colors = ['#3674be','#d26181','#ceb13d','#c6414c','#171f2b','#50aa61']

let indexSlider = 0;
let index=0;

const slider = () => {
  imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

  items.forEach(item => {
    item.style.transform = `rotate(${indexSlider * -60}deg)`;
  });
  document.querySelector('.img-item.active').classList.remove('active');
  imgItems[index].classList.add('active');
  

  document.querySelector('.info.active').classList.remove('active');
  infoItems[index].classList.add('active');


  document.querySelector('.info-box.active').classList.remove('active');
  INFO[index].classList.add('active');
  colorsDiv = document.querySelector('.info.active .colors');

  if(colorsDiv){
    colorsDiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
          const spans = Array.from(colorsDiv.querySelectorAll('span'));
          const clickedIndex = spans.indexOf(event.target);
          indexSlider = clickedIndex;
          index = clickedIndex;
          if(index>imgItems.length-1){
            index=0;
          }
          if(index<0){
        index=imgItems.length-1;
      }
      slider();
      }
      });
      
  }

  

  document.body.style.background = colors[index];
};

slider();
nxt.addEventListener("click", () => {
  indexSlider++;

  index++;
  if(index>imgItems.length-1){
    index=0;
  }
  slider();
});
prev.addEventListener("click", () => {
  indexSlider--;
  index--;
  if(index<0){
    index=imgItems.length-1;
  }
  slider();
});