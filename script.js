const picture = document.querySelector('.picture');
const name = document.querySelector('.name');
const profession = document.querySelector('.profession');
const review = document.querySelector('.review');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');


const arrayPicture = [
    `<img src="img/quote.svg" alt="Quote" class="quote">
    <img src="img/diqi.JPG" alt="M. Maftuh Ashiddiqi" class="pict-profile">`,
    `<img src="img/quote.svg" alt="Quote" class="quote">
    <img src="img/fajar.jpg" alt="Fajar Sadboy" class="pict-profile">`,
    `<img src="img/quote.svg" alt="Quote" class="quote">
    <img src="img/alif.jpg" alt="Alif Cepmek" class="pict-profile">`
];

const arrayName = ['M. Maftuh Ashiddiqi', 'Fajar Sadboy', 'Alif Cepmek'];

const arrayProfession = ['WEB DEVELOPER', 'STUDENT', 'HUMAN ON EARTH'];

const arrayReview = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem totam obcaecati similique perspiciatis aut blanditiis molestiae ipsa distinctio. Eum fugiat reiciendis, consequatur illo magnam veniam iure necessitatibus soluta in!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum quia laborum, exercitationem quam quos magni eligendi harum laboriosam dolore.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nemo atque fugit porro, ea fuga nostrum at reiciendis amet cupiditate eaque, quos iste repudiandae maxime!'];


window.addEventListener('DOMContentLoaded', (event) => {
    picture.innerHTML = arrayPicture[0];
    name.textContent = arrayName[0];
    profession.textContent = arrayProfession[0];
    review.textContent = arrayReview[0];
});


let count = arrayName.length;
let i = 0;

// Right Arrow
rightArrow.addEventListener('click', function () {
    i += 1;
    if (i === count) {
        i = 0;
    }

    picture.innerHTML = arrayPicture[i];
    name.textContent = arrayName[i];
    profession.textContent = arrayProfession[i];
    review.textContent = arrayReview[i];
});

// Left Arrow
leftArrow.addEventListener('click', function () {
    i -= 1;
    if (i === -1) {
        i = count - 1;
    }

    picture.innerHTML = arrayPicture[i];
    name.textContent = arrayName[i];
    profession.textContent = arrayProfession[i];
    review.textContent = arrayReview[i];
});