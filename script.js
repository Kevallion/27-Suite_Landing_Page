const heroMobile = document.getElementById("heroMobile");
const heroAvatar = document.getElementById("heroAvatar");
console.log(heroAvatar.id);

const mediaTablet = window.matchMedia("(max-width:700px)");
const mediaDesktop = window.matchMedia("(min-width:1024px)");

function changeMobile(mediaQuery) {
    if (mediaQuery.matches) {
      heroMobile.src = "./assets/img/image-hero-landscape.png";
    } else {
      heroMobile.src = "./assets/img/image-hero-portrait.png";
    }
}

function changeAvatar(mediaQuery){
    if (mediaQuery.matches){
        heroAvatar.src="./assets/img/image-jeremy-large.png";
    } else {
        heroAvatar.src="./assets/img/image-jeremy-small.png"
    }
}
changeAvatar(mediaDesktop);
mediaDesktop.addEventListener("change", changeAvatar);

changeMobile(mediaTablet);
mediaTablet.addEventListener("change", changeMobile);

