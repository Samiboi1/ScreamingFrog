const frogimage = document.getElementById('frogImg'); 
const originalFrogimg = './imgs/frog.png';
const newFrogimg = './imgs/frogscream.png';
const wednesdayimage = document.getElementById('wedImg');
const originalWednesdayimg = './imgs/wednesday.jpg';
const newWednesdayimg = './imgs/itswednesday.jpg';
const skeletonimage = document.getElementById('sklImg');
const originalSkeletonimg = './imgs/skeleton.jpg';
const newSkeletonimg = './imgs/skeletonbash.jpg';

async function frog() {
    const frogaudio = new Audio('./audios/screamingfrog-audio.mp3')
    frogaudio.play();
};

async function scream() {
    const wednesdayaudio = new Audio('./audios/it-is-wednesday-my-dudes-vine.mp3')
    wednesdayaudio.play();
};

async function rah() {
    const rahaudio = new Audio('./audios/skeleton-with-shield.mp3')
    rahaudio.play();
};

document.getElementById('frogImg').addEventListener("click", () => {
	frog();

    frogimage.src = newFrogimg;

    setTimeout(function() {
        frogimage.src = originalFrogimg;
    }, 5000);
});

document.getElementById('wedImg').addEventListener("click", () => {
	scream();

    wednesdayimage.src = newWednesdayimg;

    setTimeout(function() {
        wednesdayimage.src = originalWednesdayimg;
    }, 7000);
});

document.getElementById('sklImg').addEventListener("click", () => {
	rah();

    skeletonimage.src = newSkeletonimg;

    setTimeout(function() {
        skeletonimage.src = originalSkeletonimg;
    }, 6000);
});