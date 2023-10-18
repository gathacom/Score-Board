const p1Btn = document.querySelector('#p1-btn');
const p2Btn = document.querySelector('#p2-btn');
const p1Disp = document.querySelector('#p1-disp');
const p2Disp = document.querySelector('#p2-disp');
const resetBtn = document.querySelector('#reset');
const winPointOption = document.querySelector('#win-point');

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Disp.textContent = 0;  
    p2Disp.textContent = 0;
    p2Disp.classList.remove('text-danger');  
    p1Disp.classList.remove('text-danger');  
}

p1Btn.addEventListener('click', () => {

    if(!isGameOver){
        p1Score += 1;
        if (p1Score === winPoint){
            isGameOver = true;
            p1Disp.classList.add('text-danger');
        }
        p1Disp.textContent = p1Score;  
    }
});

p2Btn.addEventListener('click', () => {
    if(!isGameOver){
        p2Score += 1;
        if (p2Score === winPoint){
            isGameOver = true;
            p2Disp.classList.add('text-danger');
        }
        p2Disp.textContent = p2Score;
          
    }
});

// p1Disp.addEventListener('change', function() {
//     if(){

//     }
// });
resetBtn.addEventListener('click', reset);

winPointOption.addEventListener('change', function() {
    winPoint = parseInt(this.value);
    reset();
});