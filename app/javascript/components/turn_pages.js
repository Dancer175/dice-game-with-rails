const turnPages = () => {

  const frontPage = document.querySelector('#page-2');
  const backPage = document.querySelector('#page-3');
  const turnPage = document.querySelector('#test-page');

  const secondFrontPage = document.querySelector('#page-4');
  const secondBackPage = document.querySelector('#page-5');
  const secondTurnPage = document.querySelector('#second-test-page');


  frontPage.addEventListener('click', function() {
    turnPage.style.zIndex = "30";
    turnPage.classList.add("active");
    backPage.addEventListener('click', function() {
      secondTurnPage.style.zIndex = "10";
      turnPage.classList.remove("active");
    });
  });

    secondFrontPage.addEventListener('click', function() {
    secondTurnPage.style.zIndex = "40";
    secondTurnPage.classList.add("active");
    secondBackPage.addEventListener('click', function() {
      secondTurnPage.style.zIndex = "30";
      secondTurnPage.classList.remove("active");
    });
  });

}

export { turnPages };


