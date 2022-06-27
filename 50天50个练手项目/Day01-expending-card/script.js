// const panels = document.querySelectorAll(".panel")

// panels.forEach(panel => {
//   panel.addEventListener('click',() => {
//     removeActiveClasses();
//     panel.classList.add("active")
//   })
// })

// function removeActiveClasses(){
//   panels.forEach(panel => {
//     panel.classList.remove("active")
//   })
// }

const panels = document.querySelectorAll(".panel");

// 循环所有的panel元素，并为其添加监听click事件
panels.forEach(item => {
  item.addEventListener("click", () => {
    // 为当前元素添加active样式之前，先删除所有panel元素绑定的active样式
    removeActiveClass();
    item.classList.add("active")
  }) 
})

function removeActiveClass() {
  panels.forEach(item => {
    item.classList.remove("active")
  })
}