const chatButton = document.querySelectorAll(".chat");
const chatButtonClose = document.querySelector(".chat-close");
const asideChat = document.querySelector(".aside-chat");
const fogOfWar = document.querySelector(".fog-of-war-right");


chatButton.forEach((elem) => {

  elem.addEventListener('click', () => {
    const isOpened = elem.classList.contains("aside-chat__visible");
    if (isOpened) {
      // показать
      asideChat.classList.remove('aside-chat__visible');
      fogOfWar.classList.remove('fog-of-war-right__visible');
    } else {
      // скрыть
      asideChat.classList.add('aside-chat__visible');
      fogOfWar.classList.add('fog-of-war-right__visible');
    }
  })

})

chatButtonClose.addEventListener('click', () => {
  asideChat.classList.remove('aside-chat__visible');
  fogOfWar.classList.remove('fog-of-war-right__visible');
})
