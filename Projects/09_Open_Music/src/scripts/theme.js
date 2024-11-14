const btnTheme = document.getElementById('btn-theme');
export function btnThemeEvent() {
  const sunIcon = document.getElementById('sun_icon');
  const moonIcon = document.getElementById('moon_icon');

  const body = document.querySelector('body')
  const genreBtn = document.getElementById('genre-btn');

  const sunIconVisibility = window.getComputedStyle(sunIcon).visibility;
  const moonIconVisibility = window.getComputedStyle(moonIcon).visibility;

  if (sunIconVisibility === 'hidden') {
    sunIcon.style.visibility = 'visible';
    moonIcon.style.visibility = 'hidden';
    btnTheme.style.backgroundColor = '#2B2F33';
    body.style.backgroundColor = '#15171A';
    body.style.color = '#F8F9FA'
    genreBtn.style.backgroundColor = '#15171A';
    genreBtn.style.color = '#F8F9FA'
  } 
  
  if (moonIconVisibility === 'hidden'){
    sunIcon.style.visibility = 'hidden';
    moonIcon.style.visibility = 'visible';
    btnTheme.style.backgroundColor = '#FDFEFF';
    body.style.backgroundColor = '#FDFEFF'
    body.style.color = '#212529'
    genreBtn.style.backgroundColor = '#FDFEFF'
    genreBtn.style.color = '#212529'
  }

};
btnTheme.addEventListener('click', btnThemeEvent);