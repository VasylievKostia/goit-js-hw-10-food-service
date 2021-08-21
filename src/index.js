import './sass/main.scss';
import menuTemplate from './menu.json'
import menuList from './tamplates/list.hbs'

// refs
const menuRef = document.querySelector('.js-menu')
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

// Theme 
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// addition markup
const markup = menuTemplate.map(menuList).join('')
menuRef.insertAdjacentHTML('beforeend', markup)

// theme picker

if (localStorage.theme === Theme.DARK) {
  checkboxRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
}

checkboxRef.addEventListener('change', onChangeAction);

// console.log(localStorage.getItem('userSettings', JSON.stringify(Theme)))

function onChangeAction() {
  if (checkboxRef.checked === true) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}