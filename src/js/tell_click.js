const tellButton = document.querySelectorAll(".tell");
const tellButtonClose = document.querySelector(".tell-close");
const asideTell = document.querySelector(".aside-tell");
const fogOfWar = document.querySelector(".fog-of-war-right");


tellButton.forEach((elem) => {

  elem.addEventListener('click', () => {
    const isOpened = elem.classList.contains("aside-tell__visible");
    if (isOpened) {
      // показать
      asideTell.classList.remove('aside-tell__visible');
      fogOfWar.classList.remove('fog-of-war-right__visible');
    } else {
      // скрыть
      asideTell.classList.add('aside-tell__visible');
      fogOfWar.classList.add('fog-of-war-right__visible');
    }
  })

})

tellButtonClose.addEventListener('click', () => {
  asideTell.classList.remove('aside-tell__visible');
  fogOfWar.classList.remove('fog-of-war-right__visible');
})
