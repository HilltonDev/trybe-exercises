const dezDaysList = ['', '', '', 1,  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.getElementById('days');
const buttonsContainer = document.querySelector('.buttons-container');

const getHolidays = document.getElementsByClassName('holiday');
const getFridays = document.getElementsByClassName('friday');

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
function createCalendar() {
    // const date = new Date();
    // const dataMonth = date.getMonth();
    // console.log(`${dataMonth.toLocaleString()}`);
    for (let day = 0; day < dezDaysList.length; day += 1) {
      const li = document.createElement('li');
      li.setAttribute('class', 'day');
      li.innerHTML = dezDaysList[day];
      days.appendChild(li);
      switch (dezDaysList[day]) {
        case 4:
        case 11:
        case 18:
          li.setAttribute('class', 'day friday'); break;
        // case 15:
        //   li.setAttribute('class', 'day friday holiday'); break;
        case 24:
        case 31:
          li.setAttribute('class', 'day holiday'); break;
      }
    // console.log('EndCreateCalendar');
    }
    
}
createCalendar();

function createHolidayButton() {
  //<input type="button" id='btn-holiday' value='FERIADOS'>
  const btn = document.createElement('button');
  btn.setAttribute('id', 'btn-holiday');
  btn.type='button';
  btn.innerText= 'FERIADOS';
  buttonsContainer.appendChild(btn);
}

function createFridayButton () {
  //<input type="button" id='btn-friday' value='SEXTA-FEIRA'>
  const btn = document.createElement('button');
  btn.setAttribute('id', 'btn-friday');
  btn.type='button';
  btn.innerText= 'SEXTOU';
  buttonsContainer.appendChild(btn);
}

function changeHolidayBackground(evtElem) {
  // const elemId = evtElem.target.getAttribute('id');
  // console.log(getHolidays);
  for (let x = 0; x < getHolidays.length; x += 1) {
    if (getHolidays[x].hasAttribute('holiday')) {
      getHolidays[x].removeAttribute('holidayz');
    } else {
      getHolidays[x].setAttribute('class', 'holidayz');
    }
  }
}

function changeFridayBackground() {
  let attr ;
  let a = 0;
  const getDays = document.getElementById('days');
  // for (let x = 0; x < getFridays.length; x += 1) {
  //   if (getFridays[x].hasAttribute('fridayz')) {
  //     // attr = getFridays[x].className;
  //     getFridays[x].removeAttribute('fridayz');
  //   } else {
  //     getFridays[x].setAttribute('class', 'fridayz');
  //   }
  // }
  for (let x = 1; x < getDays.children.length; x += 1) {
  
  // let decemberDaysList = document.getElementById('days');
  // let eachDecemberDay = dezDaysList[x];
  // let listDecemberDays = decemberDaysList.children;
  // listDecemberDays.innerText = eachDecemberDay;
  // let fridays = [4, 11, 18, 25];
  // if (listDecemberDays[x].toggleAttribute('fridayz'))
  attr = getDays.children[x].className;
  if (getDays.children[x].className.includes('friday')) {
    //  console.log(`${attr}`);
    // attr = `${attr} fridayz` ;
    if ( getDays.children[x].className.includes('fridayz')) {
      getDays.children[x].className = getDays.children[x].className.replace('fridayz', '');
      
    }
    else {
      getDays.children[x].className = `${attr} fridayz`;
    }
    }
  }

  //else {
  //   console.log(`fridays does not includes`);
  //   listDecemberDays[x].innerText = eachDecemberDay;
  //   }
  // }
}



window.addEventListener('load', createHolidayButton);
window.addEventListener('load', createFridayButton);

window.onload = function init() {
  const sextou = document.getElementById('btn-friday');
  const btnHoliday = document.getElementById('btn-holiday');
  btnHoliday.addEventListener('click', changeHolidayBackground);
  sextou.addEventListener('click', changeFridayBackground);
  
};
