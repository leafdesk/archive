const prev = document.getElementById('prev');
const next = document.getElementById('next');
const list = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

const MAX_STEPS_NUM = 4;
const CLICK = 'click';

let _steps = 1;

const activateCircle = (index) => {
  list[index - 1].classList.add('active');
};

const deactivateCircle = (index) => {
  list[index].classList.remove('active');
};

const handleBtnLock = () => {
  if (_steps <= 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (_steps >= MAX_STEPS_NUM) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
};

const updateProgress = () => {
  progress.style.width = (98 / (MAX_STEPS_NUM - 1)) * (_steps - 1) + '%';
};

const handlePrevBtn = (event) => {
  _steps--;
  handleBtnLock();
  deactivateCircle(_steps);
  updateProgress();
};

const handleNextBtn = (event) => {
  _steps++;
  handleBtnLock();
  activateCircle(_steps);
  updateProgress();
};

const onCircleClick = (event) => {
  const circle = event.target;
  for (let i = 0; i < circle.parentNode.children.length; i++) {
    if (circle.parentNode.children[i] === circle) {
      const clickedCircleIndex = i + 1;

      if (_steps < clickedCircleIndex) {
        for (let j = _steps; j < clickedCircleIndex; j++) {
          handleNextBtn();
        }
      } else if (_steps > clickedCircleIndex) {
        for (let j = _steps; j > clickedCircleIndex; j--) {
          handlePrevBtn();
        }
      } else {
        // else if (_steps === clickedCircleIndex) { no action }
      }
    }
  }
};

prev.addEventListener(CLICK, handlePrevBtn);
next.addEventListener(CLICK, handleNextBtn);

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener(CLICK, onCircleClick);
}

handleBtnLock();
activateCircle(_steps);
