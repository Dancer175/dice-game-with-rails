const turnPages = () => {

  const frontPages = document.querySelectorAll('.book__page-front');
  const backPages = document.querySelectorAll('.book__page-back');
  const turnPages = document.querySelectorAll('.book__page-sheets');

  const frontPagesToArray = Array.apply(null, frontPages);
  const backPagesToArray = Array.apply(null, backPages);
  const turnPagesToArray = Array.apply(null, turnPages);


  // get index of chosen frontPage
  const indexOfFrontPage = (frontPage) => {
    return frontPagesToArray.indexOf(frontPage);
  };

  // get index of chosen backPage
  const indexOfBackPage = (backPage) => {
    return backPagesToArray.indexOf(backPage);
  };

  // get index of element after clicked backPage
  const indexOfTurnPagePlusOne = (turnPage) => {
    return indexOfBackPage(turnPage) + 1;
  };

  // get value of element after clicked backPage
  const valueOfTurnPagePlusOne = (turnPage) => {
    return turnPagesToArray[indexOfTurnPagePlusOne(turnPage)];
  };

  // get zIndex of turnPage
  const zIndexOfTurnPage = (turnPage) => {
    return turnPagesToArray.indexOf(turnPage);
  };

  //  get value of belonging backPage
  const valueOfBackPage = (frontPage) => {
    return backPagesToArray[indexOfFrontPage(frontPage)];
  };

  //  get value of frontPage that is belonging to turnPage
  const valueOfTurnPageFront = (frontPage) => {
    return turnPagesToArray[indexOfFrontPage(frontPage)];
  };

  // get value of backPage that is belonging to turnPage
  const valueOfTurnPageBack = (backPage) => {
    return turnPagesToArray[indexOfBackPage(backPage)];
  };

  // value of turnPage of clicked backPage
  const valueOfTurnPage = (turnPage) => {
    return backPagesToArray[indexOfBackPage(turnPage)];
  }

  // get value of zIndex of frontPage
  const zIndexOfPage = (turnPage) => {
    let num = turnPagesToArray.length - zIndexOfTurnPage(turnPage);
    return num.toString();
  };

  // adds to zIndex if active
  const zIndexActive = (turnPage) => {
    let num = turnPagesToArray.length + zIndexOfTurnPage(turnPage);
    return num.toString();
  };

  // adds to zIndex after active
  const zIndexAfter = (turnPage) => {
    let num = turnPagesToArray.length + zIndexOfTurnPage(turnPage);
    return num.toString();
  };

  // adds zIndex to frontPage in the beginning
  turnPagesToArray.forEach(turnPage => turnPage.style.zIndex = zIndexOfPage(turnPage));
  // logs zIndex of all Pages in the beginning
  turnPagesToArray.forEach(turnPage => console.log(zIndexOfPage(turnPage)));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // adds active to turnPage belonging to clicked frontPage
  frontPagesToArray.forEach((frontPage) => {
    frontPage.addEventListener('click', (event) => {
    // adds active category to clicked frontPage
    valueOfTurnPageFront(frontPage).classList.add("active");
    // changes zIndex of clicked frontPage
    valueOfTurnPageFront(frontPage).style.zIndex = zIndexActive(turnPagesToArray[indexOfFrontPage(frontPage)]);
    // logs zIndex of Page when adding active category
    console.log(zIndexActive(turnPagesToArray[indexOfFrontPage(frontPage)]))
    });
  });

  // removes active from turnPage belonging to clicked backPage
  backPagesToArray.forEach((backPage) => {
    backPage.addEventListener('click', (event) => {
    // removes active category of clicked backPage
    valueOfTurnPageBack(backPage).classList.remove("active");
    // changes zIndex of clicked backPage
    console.log(indexOfBackPage(backPage));

     if (indexOfBackPage(backPage) == 0) {
      valueOfTurnPageBack(backPage).style.zIndex = zIndexOfPage(turnPagesToArray[indexOfBackPage(backPage) - 1]);
      valueOfTurnPagePlusOne(backPage).style.zIndex = zIndexOfPage(turnPagesToArray[indexOfBackPage(backPage)]);
     }

    if (valueOfTurnPagePlusOne(backPage) != null) {
      valueOfTurnPagePlusOne(backPage).style.zIndex = zIndexOfPage(turnPagesToArray[indexOfBackPage(backPage) + 1]);
    }
    console.log(valueOfTurnPagePlusOne(backPage));
    // logs zIndex of Page when removing active category
    console.log(zIndexAfter(turnPagesToArray[indexOfBackPage(backPage)]))
    });
  });
}

export { turnPages };

