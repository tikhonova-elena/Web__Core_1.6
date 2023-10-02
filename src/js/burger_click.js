const headerBurgerOpen = document.querySelector(".header__burger");
const asideBurgerClose = document.querySelector(".aside-menu__burger");
const asideLeft = document.querySelector(".aside-left");
const fogOfWar = document.querySelector(".fog-of-war-left");

//burger click

headerBurgerOpen.addEventListener('click', () => {
  asideLeft.classList.add('aside-left__visible');
  fogOfWar.classList.add('fog-of-war-left__visible');
})

asideBurgerClose.addEventListener('click', () => {
  asideLeft.classList.remove('aside-left__visible');
  fogOfWar.classList.remove('fog-of-war-left__visible');
})
