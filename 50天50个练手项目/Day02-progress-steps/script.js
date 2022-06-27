const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

console.log(circles)
 
let currentActive = 1;

prev.addEventListener('click', () => {
  currentActive--
  console.log(currentActive,"prev")
  if(currentActive < 1){
    currentActive = 1;
  }
  update();
});
next.addEventListener('click', () => {
  currentActive++;
  console.log(currentActive,"next");
  if(currentActive > circles.length){
    currentActive = circles.length;
  }
  update()
})

function update() {
  circles.forEach((item,idx) => {
    if(idx < currentActive){
      item.classList.add('active')
    }else{
      item.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll(".active");

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
   
  if(currentActive == 1){
    prev.disabled = true
  }else if(currentActive == circles.length){
    next.disabled = true
  }else{
    prev.disabled = false;
    next.disabled = false;
  }
}