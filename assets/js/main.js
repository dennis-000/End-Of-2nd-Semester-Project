/*=============== SHOW AND HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    // Logic to validate to Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// Logic when Menu when Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // when I clicked on each nav__link, it removes the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



//===============Logic for follower Count
const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
    followersCounter.innerHTML = "0";

    const updateFollowersCounter = () => {
        const target = +followersCounter.getAttribute("data-target");
        const c = +followersCounter.innerText;

        const increment = target / 500;

        if (c < target) {
            followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
            setTimeout(updateFollowersCounter, 1);
        } else {
            followersCounter.innerText = target;
        }
    };

    updateFollowersCounter();
});