// grabbing diffrent dom elements 
const operations = document.querySelectorAll('.operation');
const numbers = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const typed = document.querySelector('.calc-typed');
const equation = document.querySelector('.calc-operation');

// adding entered numbers to screen
numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if (typed.innerText === '0' && e.target.innerText === '0'){
    return;
    }
    else if (typed.innerText === '0') {
      typed.innerText = e.target.innerText;
    }
    else {
      typed.innerText += e.target.innerText;
    }
  }
  )
}
);

// adding operation to equation screeen
operations.forEach(operation => {
  operation.addEventListener("click", (e) => {
    if (typed.innerText === '0'){
    return;
    }
    else if (e.target.innerText === 'x'){
      equation.innerText += ` ${typed.innerText} *`; 
      typed.innerText = '0';
      }
    else {
      equation.innerText += ` ${typed.innerText} ${e.target.innerText}`; 
      typed.innerText = '0';
    }
  }
  )
}
);

// evaluating the result
equal.addEventListener('click', () => {
  if (equation.innerText === '0' || equation.innerText === '') {
    return;
  }
  if (typed.innerText === '0') {
    typed.innerText = 'error';
  }
  else {
    const finalEquation = `${equation.innerText} ${typed.innerText}`;
    typed.innerText = eval(finalEquation);
  }
}
)

// back button
back.addEventListener('click', () => {
  if (typed.innerText !== '0' && typed.innerText.length > 1) {
  typed.innerText = typed.innerText.slice(0, -1);
  }
  else if (typed.innerText.length === 1) {
    typed.innerText = '0';
  }
  else return;
}
)

// clear button
clear.addEventListener('click', () => {
  typed.innerText = '0';
  equation.innerText = ''
  }
)