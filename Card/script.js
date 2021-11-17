const play = document.querySelector('#play');
const like = document.querySelector('#like');



play.addEventListener('click', ()=>{
    play.classList.toggle("fa-play-circle");
});

like.addEventListener('click', ()=>{
    like.classList.toggle("like");
});

console.log(like);
