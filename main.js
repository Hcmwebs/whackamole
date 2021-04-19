const score = document.getElementById('score');
const timeLeft = document.getElementById('timeLeft');
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

let results = 0;
let position ;
let currentTime = 60
 let setTimer = null;





const randomSquare = () => {
  squares.forEach(square => {
    square.classList.remove('mole');
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole');
  position = randomSquare.id;
}


const moveMole = () => {
  setTimer = setInterval(randomSquare, 1000)
}
moveMole();


const countDownTimer = ()=>{
  currentTime--;
  timeLeft.innerHTML = currentTime;
  if (currentTime === 0) {
    clearInterval(setCountDownTimer);
    clearInterval(setTimer);
    alert('GAME OVER!!Your final score is ' + results)
  }

}
const setCountDownTimer = setInterval(countDownTimer, 1000);

squares.forEach(square => {
  square.addEventListener('mousedown', () =>{
    if(square.id == position) {
      results++;
      score.innerHTML = results;
      position = null;

    }
  })
})


