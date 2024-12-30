
var ALF = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var LEFT = 'Л';
var BOTH = 'О';
var RIGHT = 'П';

var FIRST_TIME;

HAND = ['Л', 'П', 'О'];

let set = 1600;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;
var TimesColor;
var TimesExtColor;
var colorSimle = document.getElementById("color");
var colorExtra = document.getElementById("ColorExt");

let set2 = (set * 3) + 100;
let set3 = set * 27;

let TIME = document.getElementById("start").value;
let INTERVAL1;


var RED = document.getElementById("alfavit").style.color = "red";
var ORANGE = document.getElementById("alfavit").style.color = "orange";
var YELLOW = document.getElementById("alfavit").style.color = "yellow";
var GREEN = document.getElementById("alfavit").style.color = "green";
var BLUE = document.getElementById("alfavit").style.color = "blue";
var INDIGO = document.getElementById("alfavit").style.color = "indigo";
var VIOLET = document.getElementById("alfavit").style.color = "violet";
var GRAY = document.getElementById("alfavit").style.color = "gray";
var BLACK = document.getElementById("alfavit").style.color = "black";

var colorNow = document.getElementById("color").value;

var menuItem = document.querySelector("#clean");
var dropDownMenu = document.querySelector("#top");
var menuItem2 = document.querySelector("#clean");
var dropDownMenu2 = document.querySelector("#top");

INTERVAL1 = setInterval(function () { newCountDown() }, 1000)

function newCountDown() {
    while (TIME != -1) {
        let countDownEl = document.getElementById("countdown")
        let minutes = Math.floor(TIME / 60);
        let seconds = TIME % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let DUBLE = countDownEl.innerHTML = `${minutes} : ${seconds}`;
        document.getElementById("dublicate").value = DUBLE;
        TIME--;
        if (TIME == 10) {
            var Audio = document.getElementById("final")
            Audio.play()
        } if (TIME == 0) {
            stopAudio()
            Audio = document.getElementById("final2")
            if (mus.value != "0") {
                setTimeout(function () { Audio.play() }, 1500)
            } else {
                Audio.stop()
            }
            clearInterval(INTERVAL1)
            INTERVAL1 = setInterval(function () { newCountDown() }, 1000)
        }
        break
    }
}

var mus = document.getElementById("music");

mus.addEventListener("change", function () {
    Audio = document.getElementById("final2")
    if (mus.value != "0") {
        Audio.play()
    } else {
        Audio.stop()
    }
})


HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.0;
}

function stopAudio() {
    Audio = document.getElementById("final2")
    Audio.stop()
}

function setTimer() {
    TIME = document.getElementById("start").value
    console.log(TIME)
}

// Интервалы 

var Times_Alf = setInterval(function () { newLetters() }, set3)

var Times_1 = setInterval(function () { newHands() }, set2)

var Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);

colorSimle.addEventListener("click", function () {
    resetExtColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if (this.checked) {
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(),
            randomLetters()
        }, set);
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    }
})

colorExtra.addEventListener("click", function () {
    resetColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if (this.checked) {
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),
            randomLetters(), setColorAlf(), setColorHand()
        }, set);
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    }
})

// Перемешивание

window.addEventListener("load", () => { newLetters() });

function newLetters() {
    NEWLETT = ALF.sort(function () { return 0.5 - Math.random() })
    console.log(`NEWAlfavit : ${ALF}`)
}


function newHands() {
    for (let i = HAND.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [HAND[i], HAND[j]] = [HAND[j], HAND[i]];
        console.log(`NEWHAND = ${HAND}`)

    }
}


function randomLetters() {
    document.getElementById("alfavit").innerText = ALF[alfIndex];
    alfIndex = (alfIndex + 1) % ALF.length;
    console.log(alfIndex)

}

const randomHands = () => {
    document.getElementById("hand").innerText = HAND[currentIndex];
    currentIndex = (currentIndex + 1) % HAND.length;
    console.log(currentIndex)
    console.log(`HAND = ${HAND} + ${HAND}`)
}

colorExtra.addEventListener("click", function () {

    if (this.checked) {

    } else {

    }
})


// Расположение Букв


function setFont() {
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

}

//  Размер Шрифта

function setSise() {
    const SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';

}

function clear(){
    clearInterval(TimesColor);
    clearInterval(TimesExtColor);
    clearInterval(Times_3);
}

// Экстро

// var  JUST = document.getElementById("just").value;

function startApp() {
    clear();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                    extra(), setColorAlf(), setColorHand()
                }, set);
            } else {
                clear();
                Times_3 = setInterval(function () {
                    randomHands(), setFont(), randomLetters(),
                    extra(), setColorAlf(), setColorHand()
                }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };

        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            };
        }

    })
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    };
}

var SUPER = document.getElementById("super").value;


function resetSuperExtr() {
    document.getElementById("super").checked = false;
}

function superExtra() {
    clear();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), 
                    superExtraHan(),setColorAlf(), setColorHand() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), 
                    superExtraHan(), setColorAlf(), setColorHand() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)

            }
        } else {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }  
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)

            }
        } else {

            if (HOLD == Times_3) {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
        }
    })
    if (HOLD == Times_3) {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    }
}


function superExtraLet() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';

}

function superExtraHan() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("hand").style.fontSize = SISE + 'px';
}

function extra() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    console.log(SISE)
}

function setTime() {
    clear();
    setSise();
    const HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorExtra.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
    
        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
    
        }
    })
    TimesColor = colorSimle.addEventListener("click", function () {
        if (this.checked) {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }

        } else {
            if (HOLD == Times_3) {
                clear();
                setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
            } else {
                clear();
                Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
                clearInterval(Times_1)
                NewHOLD = HOLD * 3;
                Times_1 = setInterval(function () { newHands() }, NewHOLD);
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }
        }
    })
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
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

var back = document.getElementById("fullScr");

back.addEventListener("dblclick", function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

})



menuItem.addEventListener("click", function () {
    dropDownMenu.style.display = "none";
});


menuItem2.addEventListener("dblclick", function () {
    dropDownMenu2.style.display = "grid";
});


function resetColor() {
    document.getElementById("color").checked = false;
    document.getElementById("alfavit").style.color = "black";
    document.getElementById("hand").style.color = "black";
}


function setColor() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'BLACK', 'GRAY'];
    var color = Math.floor(Math.random() * 9);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
    newColor2 = document.getElementById("hand").style.color = COLORS[color];

}

function setColorAlf() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'BLACK', 'GRAY'];
    var color = Math.floor(Math.random() * 9);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
}

function setColorHand() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'BLACK', 'GRAY'];
    var color = Math.floor(Math.random() * 9);
    newColor2 = document.getElementById("hand").style.color = COLORS[color];
}

function resetExtColor() {
    document.getElementById("ColorExt").checked = false;
      
    document.getElementById("alfavit").style.color = "black";
    document.getElementById("hand").style.color = "black";
}



// function setExtColor() {

// }







