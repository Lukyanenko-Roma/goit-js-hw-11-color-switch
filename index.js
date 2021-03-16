
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const setRandomColor = () => {
    const backgraundColors = colors[randomIntegerFromInterval(0, colors.length - 1)]
    bodyRef.style.backgroundColor = backgraundColors;
}

function clickStart() {
    startBtn.disabled = true;
    intervalId = setInterval(setRandomColor, 1000);
}
function clickStop() {
    startBtn.disabled = false;
    clearInterval(intervalId);
}


startBtn.addEventListener('click', clickStart);
stopBtn.addEventListener('click', clickStop);