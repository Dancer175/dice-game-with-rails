const initLanguageBar = () => {

const languageChoice = document.querySelector('.language-choice');
const openLanguageBar = document.querySelector('#open-language-bar');

languageChoice.style.display = 'none';

openLanguageBar.addEventListener('click', function() {
  if (languageChoice.style.display === "none") {
    languageChoice.style.display = "flex";
  } else {
    languageChoice.style.display = "none";
  }
  });
}

export { initLanguageBar }
