
const fogOfWar = document.querySelector(".fog-of-war");
const asideLeft = document.querySelector(".aside-left");
const readMore = document.querySelectorAll(".read-more");
const readMoreBrands = document.querySelector(".brands__read-more");
const companies = document.querySelector(".companies");
const readMoreEquipmentRepair = document.querySelector(".equipment-repair__read-more");
const technique = document.querySelector(".technique");
const readMoreDescription = document.querySelector(".description__read-more");
const descriptionOtherText = document.querySelector(".description__other-text");


//read-more click

readMore.forEach((btn) => {
  const span = btn.querySelector("span");
  // const readMoreOpen = elem.querySelector("span");

  btn.addEventListener('click', () => {
    const isOpened = btn.classList.contains("read-more__open");
    if (!isOpened) {
      // показать
      span.textContent = 'Скрыть';
      btn.classList.add('read-more__open');
    } else {
      // скрыть
      span.textContent = 'Читать далее';
      btn.classList.remove('read-more__open');
    }
  })
})

//read-more brands click

readMoreBrands.addEventListener('click', () => {
  const isOpenedCompanies = companies.classList.contains('companies__open');

  if (isOpenedCompanies) {
    companies.classList.remove('companies__open');
  } else {
    companies.classList.add('companies__open');
  }

})

//read-more technique click


readMoreEquipmentRepair.addEventListener('click', () => {
  const isOpenedTechnique = technique.classList.contains('technique__open');

  if (isOpenedTechnique) {
    technique.classList.remove('technique__open');
  } else {
    technique.classList.add('technique__open');
  }

})

//read-more technique click

readMoreDescription.addEventListener('click', () => {
  const isOpenedDescription = descriptionOtherText.classList.contains("description__open");

  if (isOpenedDescription) {
    descriptionOtherText.classList.remove('description__open');
  } else {
    descriptionOtherText.classList.add('description__open');
  }

})

