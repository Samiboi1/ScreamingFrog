const audio = new Audio('screamingfrog-audio.mp3')

document.getElementById('mybutton').addEventListener("click", () => {
    audio.play();
});

document.getElementById('mybutton').addEventListener('click', function () {
    const image = document.getElementById('myimage'); 
    const originalimg = 'frog.png';
    const newimg = 'frogscream.png';

    image.src = newimg;

    setTimeout(function() {
        image.src = originalimg;
    }, 4000);
});