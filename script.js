const frogimage = document.getElementById('frogImg'); 
const originalFrogimg = './imgs/frog.png';
const newFrogimg = './imgs/frogscream.png';
const wednesdayimage = document.getElementById('wedImg')
const originalWednesdayimg = './imgs/wednesday.jpg';
const newWednesdayimg = './imgs/itswednesday.jpg';

async function frog() {
    const frogaudio = new Audio('./audios/screamingfrog-audio.mp3')
    frogaudio.play();
};

async function scream() {
    const wednesdayaudio = new Audio('./audios/it-is-wednesday-my-dudes-vine.mp3')
    wednesdayaudio.play();
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
    }, 6000);
});