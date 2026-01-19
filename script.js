const image = document.getElementById('myimage'); 
const originalimg = 'frog.png';
const newimg = 'frogscream.png';

async function scream() {
	const audio = new Audio('screamingfrog-audio.mp3')
    audio.play();
}

document.getElementById('mybutton').addEventListener("click", () => {
	scream();

    image.src = newimg;

    setTimeout(function() {
        image.src = originalimg;
    }, 4000);
});
