const track = document.querySelector('.track');
const icons = document.querySelectorAll('.track img');

const iconsPerPage = 3;
const iconWidth = 120;
let page = 0;

const totalPages = Math.ceil(icons.length / iconsPerPage);

setInterval(() => {
  page = (page + 1) % totalPages;
  track.style.transform =
    `translateX(-${page * iconWidth * iconsPerPage}px)`;
}, 5000);
