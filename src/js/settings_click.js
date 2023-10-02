const settingsButton = document.querySelectorAll(".settings");
const settingsButtonClose = document.querySelector(".settings-close");
const asideSettings = document.querySelector(".aside-settings");
const fogOfWar = document.querySelector(".fog-of-war-right");


settingsButton.forEach((elem) => {

  elem.addEventListener('click', () => {
    const isOpened = elem.classList.contains("aside-settings__visible");
    if (isOpened) {
      // показать
      asideSettings.classList.remove('aside-settings__visible');
      fogOfWar.classList.remove('fog-of-war-right__visible');
    } else {
      // скрыть
      asideSettings.classList.add('aside-settings__visible');
      fogOfWar.classList.add('fog-of-war-right__visible');
    }
  })

})

settingsButtonClose.addEventListener('click', () => {
  asideSettings.classList.remove('aside-settings__visible');
  fogOfWar.classList.remove('fog-of-war-right__visible');
})
