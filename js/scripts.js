// Toggle menu on small screens

function toggleMenu() {
    let menu = document.querySelector('.menu-container');
    menu.classList.toggle('visible');
}
  
let hamburger = document.querySelector('.hamburger');
  
hamburger.addEventListener('click', toggleMenu);
  
// Hide mobile menu after a menu item has been clicked
  
function hideMenu() {
    let menu = document.querySelector('.menu-container');
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
}
  
menuList = document.querySelector('.menu');
menuList.addEventListener('click', hideMenu);
  
// Toggle read more ChatUpp
  
function readMoreChatUpp() {
    let moreChatUpp = document.querySelector('.read-more-chatupp');
    let chatuppBtn = document.querySelector('.btn-toggle-chatupp');
    moreChatUpp.classList.toggle('visible');
  
    if (moreChatUpp.classList.contains('visible')) {
        chatuppBtn.innerHTML = 'Read less';
    } else {
        chatuppBtn.innerHTML = 'Read more';
    }
}
  
let chatuppBtn = document.querySelector('.btn-toggle-chatupp');
  
chatuppBtn.addEventListener('click', readMoreChatUpp);
  
// Toggle read more MyMovieApp
  
function readMoreMyMovieApp() {
    let moreMyMovieApp = document.querySelector('.read-more-MyMovieApp');
    let myMovieAppBtn = document.querySelector('.btn-toggle-MyMovieApp');
    moreMyMovieApp.classList.toggle('visible');
  
    if (moreMyMovieApp.classList.contains('visible')) {
        myMovieAppBtn.innerHTML = 'Read less';
    } else {
        myMovieAppBtn.innerHTML = 'Read more';
    }
}
  
let myMovieAppBtn = document.querySelector('.btn-toggle-MyMovieApp');
  
myMovieAppBtn.addEventListener('click', readMoreMyMovieApp);
  
// Add active class to currently clicked menu-item
let menuItems = document.querySelectorAll('.menu-item');
  
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});  
  