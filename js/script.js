
// Буквы

function setPosition() {
  SISE_1 = document.getElementById("alfavit").style.fontSize;
  if (SISE_1 <= 60) {
    const LEFT = Math.floor(Math.random() * 90);
    const TOP = Math.floor(Math.random() * 80);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
  } else {
    const LEFT = Math.floor(Math.random() * 84);
    const TOP = Math.floor(Math.random() * 67);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
  }
  console.log("set");
  const ALF =
    ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К',
      'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
      'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
  const SETA = Math.floor(Math.random() * 30) + 1;
  document.getElementById("alfavit").innerText = ALF[SETA];

  const HAND = ['Л', 'П', 'О'];
  const SETH = Math.floor(Math.random() * 3) + 1;
  document.getElementById("hand").innerText = HAND[SETH];


}

//  Шрифт

function setSise() {
  const SHRIFT = document.getElementById("fill").value;
  console.log(SHRIFT)
  document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
  document.getElementById('hand').style.fontSize = SHRIFT + 'px';



}

// Экстро

function startApp() {
  clearInterval(FIRST_TIME);
  const HOLD = document.getElementById("speed").value;
  document.querySelector("#time").innerText = HOLD;
  if (HOLD == FIRST_TIME) {
    setInterval(function () { setPosition(), extra() }, 1600);
  } else {
    clearInterval(FIRST_TIME);
    FIRST_TIME = setInterval(function () { setPosition(), extra() }, HOLD);
  }

}

function extra() {
  const FONT = document.getElementById("fill").value;
  const SISE = Math.floor((Math.random() * 100) + 32);
  document.getElementById("alfavit").style.fontSize = SISE + 'px';
  document.getElementById("hand").style.fontSize = SISE + 'px';
  console.log(SISE)

}

// Время задержки

FIRST_TIME = setInterval(function () { setPosition() }, 1600);

function setTime() {
  const HOLD = document.getElementById("speed").value;
  document.querySelector("#time").innerText = HOLD;
  if (HOLD == FIRST_TIME) {
    setInterval(function () { setPosition() }, 1600);
  } else {
    clearInterval(FIRST_TIME);
    FIRST_TIME = setInterval(function () { setPosition() }, HOLD);
  }


}

// Полный экран

var elem = document.documentElement;
function openFullscreen() { 
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }

}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}



function cleanPan() { 
    var menuItem = document.querySelector("#clean");
    var dropDownMenu = document.querySelector("#top");
    menuItem.addEventListener("click", function ()  {    
      dropDownMenu.style.display = "none";
    });

  }


function showPan() {
  var menuItem = document.querySelector("#show");
     menuItem.addEventListener("click", function () {
      var dropDownMenu = document.querySelector("#top");
      dropDownMenu.style.display = "grid";
    });

}



















