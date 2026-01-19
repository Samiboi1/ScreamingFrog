const frogimage = document.getElementById('frogImg'); 
const originalFrogimg = './imgs/frog.png';
const newFrogimg = './imgs/frogscream.png';
const wednesdayimage = document.getElementById('wedImg')
const originalWednesdayimg = './imgs/wednesday.jpg';
const newWednesdayimg = './imgs/itswednesday.jpg';

async function frog() {
    const audio = new Audio('./audios/screamingfrog-audio.mp3')
    audio.play();
};

async function scream() {
    const audio = new Audio('./audios/it-is-wednesday-my-dudes-vine.mp3')
    audio.play();
};

document.getElementById('frogImg').addEventListener("click", () => {
	frog();

    frogimage.src = newFrogimg;

    setTimeout(function() {
        frogimage.src = originalFrogimg;
    }, 4000);
});

document.getElementById('wedImg').addEventListener("click", () => {
	scream();

    wednesdayimage.src = newWednesdayimg;

    setTimeout(function() {
        wednesdayimage.src = originalWednesdayimg;
    }, 4000);
});