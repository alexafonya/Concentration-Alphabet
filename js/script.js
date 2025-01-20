
var ALFru = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var LEFT = 'Л';
var BOTH = 'О';
var RIGHT = 'П';

var FIRST_TIME;

var HANDru = ['Л', 'П', 'О'];
let ERROR;
var HAND;
var ALF;
let set = 1600;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;
var TimesColor;
var TimesExtColor;
var colorSimle = document.getElementById("color");
var colorExtra = document.getElementById("ColorExt");
var Theme = document.getElementById("theme");

let set2 = (set * 3) + 100;
let set3 = set * 27;
let set4 = set * 26;
let set5 = set * 22;

let TIME = document.getElementById("start").value;
let INTERVAL1;
let interTime;
let HOLD = document.getElementById("speed").value;
let SHRIFT;
let SISE;
let SISE_1;

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

var menuItem = document.querySelector("#window>input");
var dropDownMenu = document.querySelector("#top");
// var menuItem2 = document.querySelector("#clean");
// var dropDownMenu2 = document.querySelector("#top");

// Иврит

var ALFheb = [
   'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 
   'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
]

HANDheb = ['ים', 'שם', 'יח'];

// inglish

var ALFeng = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
 ];
 
 var LEFTeng = 'L';
 var BOTHeng = 'B';
 var RIGHTeng = 'R';
 
 HANDeng = ['L', 'R', 'B'];

 let modal;
 let modal2 = document.querySelector('#modal');
 
const changeLengRus = () =>{
    document.getElementById("fullScr").value = "Весь экран "
    document.getElementById("time").value = " Скор./Масш. "
    document.getElementById("sise").value = "    Сброс    "
    document.getElementById("On").value =  "Супер"
    document.getElementById("super").value = "С.Микс"
    document.querySelector("#co>label").textContent = "Цвет"
    document.querySelector("#CoEx>label").textContent = "Ц.Микс"
    document.getElementById("ru").textContent = "Рус"
    document.getElementById("en").textContent = "Анг"
    document.getElementById("he").textContent = "Ивр"
    document.getElementById("theme1").textContent = "ЧерныйЭкран"


}

 addEventListener("DOMContentLoaded", function() {
    modal = modal1;
    ALF = ALFeng;
    HAND = HANDeng;
    
    he.addEventListener("click", function () {
        close.onclick() 
        modal = modal3;
        if (alfIndex > 21){
            alfIndex -= 5;
        } 
        ALF = ALFheb;
        HAND = HANDheb;       
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("he").style.fontSize = "20px"
        document.getElementById("he").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "14px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "14px"
        document.getElementById("ru").style.transition = "0.7s";
    
     })

    en.addEventListener("click", function () {  
        // setTime();      
        error = document.getElementById('time');
        error.addEventListener("click", function(){
            if (document.getElementById("speed").value < 500){
                document.querySelector("#Error").innerHTML =  `Too fast!  The interval should not be less than "500"!`;
                document.querySelector("#Error").style.left = "20%";
                document.querySelector("#Error").style.top = "15%";
            } if (document.getElementById("speed").value > 5000){
                document.querySelector("#Error").innerHTML =  `Too slow!  The interval should not be greater than "5000"!`;
                document.querySelector("#Error").style.left = "16%";
                document.querySelector("#Error").style.top = "15%";
            }
            if ( document.getElementById("fill").value > 150){
                document.querySelector("#Error2").innerHTML =  `The  size  of  letters  should  not  exceed   '150' !`;
            } if(document.getElementById("fill").value < 20){
                document.querySelector("#Error2").innerHTML =  `The size of the letters should not be less than "20"!`;
                document.querySelector("#Error2").style.left = "20%";
        document.querySelector("#Error2").style.top = "25%";
            } 
        
        })
        close.onclick() 
        modal = modal1;   
        if (alfIndex > 25){
            alfIndex -= 1;
        } 
        ALF = ALFeng;
        HAND = HANDeng;     
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("en").style.fontSize = "20px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("ru").style.fontSize = "14px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "14px"
        document.getElementById("he").style.transition = "0.7s";
    
     })
    ru.addEventListener("click", function () {
        error = document.getElementById('time');
        error.addEventListener("click", function(){
            if (document.getElementById("speed").value < 500){
                document.querySelector("#Error").innerHTML =  `Слишком быстро!  Интервал не должен быть меньше "500" !`;
                document.querySelector("#Error").style.left ="13%"
            } if (document.getElementById("speed").value > 5000){
                document.querySelector("#Error").innerHTML =  `Слишком медленно!  Интервал не должен быть больше "5000" !`;
                 document.querySelector("#Error").style.left ="10%"
            }
            if ( document.getElementById("fill").value > 150){
                document.querySelector("#Error2").innerHTML =  `Размер букв не должен превышать "150" !`;
               
            } if(document.getElementById("fill").value < 20){
                document.querySelector("#Error2").innerHTML =  `Размер букв не должен быть меньше "20" !`;
                 document.querySelector("#Error2").style.left = "25% "
            } 
        
        })
        changeLengRus();
        close.onclick() 
        modal = modal2;            
        ALF = ALFru;
        HAND = HANDru;            
        newLetters();
        newHands();
        randomLetters();
        randomHands();
        document.getElementById("ru").style.fontSize = "20px"
        document.getElementById("ru").style.transition = "0.7s";
        document.getElementById("en").style.fontSize = "14px"
        document.getElementById("en").style.transition = "0.7s";
        document.getElementById("he").style.fontSize = "14px"
        document.getElementById("he").style.transition = "0.7s";

     })


 })


 var Play = document.getElementById("playTime");
 var Stop = document.getElementById("stopTime");
 var resTim = document.getElementById("start");

  resTim.addEventListener("click", function () {
    Play.addEventListener("mousemove",function(){
        Play.style.backgroundColor = " rgb(100, 121, 255)"  
         Play.style.transition = "0.5s"
    })
    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = "rgb(230, 230, 230)"
         Play.style.transition = "0.5s"
    })
    
    Stop.addEventListener("mousemove",function(){
        Stop.style.backgroundColor = "rgb(255, 121, 121)"
        Stop.style.transition = "0.5s"
    })
    
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = "rgb(230, 230, 230)"
        Stop.style.transition = "0.5s"
    })  
    
    Stop.style.backgroundColor = "rgb(230, 230, 230)"
    Stop.style.width = "30px";
    Stop.style.height = "30px";
    Play.style.backgroundColor = "rgb(230, 230, 230)"
    Play.style.width = "30px";
    Play.style.height = "30px";

 })


Play.addEventListener("click", function() {  
    Stop.removeEventListener("click",function(){});
    Stop.addEventListener("mousemove",function(){
        Stop.style.backgroundColor = "rgb(255, 121, 121)"
    })
    
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = " rgb(158, 158, 158)"
    })

    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = "rgb(0, 4, 213)"
    })
    
    Play.style.backgroundColor = " rgb(0, 4, 213)"
    Play.style.transition = "0.5s"
    Play.style.width = "40px";
    Play.style.height = "40px";
    Stop.style.backgroundColor = "rgb(158, 158, 158)"
    Stop.style.transition = "0.5s"
    Stop.style.width = "30px";
    Stop.style.height = "30px";    
    clearInterval(INTERVAL1); 
    INTERVAL1 = setInterval(function () { newCountDown() }, 1000) 
    // this.removeEventListener("mouseleave",function(){})
 })

 Play.addEventListener("mousemove",function(){
    Play.style.backgroundColor = "rgb(100, 121, 255)"  
     Play.style.transition = "0.5s"
})
Play.addEventListener("mouseleave",function(){
    Play.style.backgroundColor = "rgb(230, 230, 230)"
     Play.style.transition = "0.5s"
})

Stop.addEventListener("mousemove",function(){
    Stop.style.backgroundColor = "rgb(255, 121, 121)"
    Stop.style.transition = "0.5s"
})

Stop.addEventListener("mouseleave",function(){
    Stop.style.backgroundColor = "rgb(230, 230, 230)"
    Stop.style.transition = "0.5s"
})
 

Stop.addEventListener("click", function(){
    Play.removeEventListener("click",function(){});
    Play.addEventListener("mousemove",function(){
        Play.style.backgroundColor = " rgb(100, 121, 255)"  
    })
    Play.addEventListener("mouseleave",function(){
        Play.style.backgroundColor = " rgb(158, 158, 158)"
    })
  
    Stop.addEventListener("mouseleave",function(){
        Stop.style.backgroundColor = "rgb(227, 0, 0)"
    })
    Stop.style.backgroundColor = "rgb(227, 0, 0)"
    Stop.style.width = "40px";
    Stop.style.height = "40px";
    Stop.style.transition = "0.5s"
    Play.style.backgroundColor = "rgb(158, 158, 158)"
    Play.style.transition = "0.5s"
    Play.style.width = "30px";
    Play.style.height = "30px";
    clearInterval(INTERVAL1);
    // this.removeEventListener;
})

let setTimes = document.getElementById("start");

setTimes.addEventListener("click", function() {
    clearInterval(INTERVAL1);
    setTimer();
    newCountDown();
})


 const newCountDown = () => {   
     while (TIME != -1) {
    let countDownEl = document.getElementById("countdown")
    let minutes = Math.floor(TIME / 60);
    let seconds = TIME % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let DUBLE = countDownEl.innerHTML = `${minutes} : ${seconds}`;
    document.getElementById("dublicate").value = DUBLE;
    TIME--;
    if (TIME == 10) {
        var Audio = document.getElementById("final")
        Audio.play()
    } if (TIME == 0) {
        stopAudio()
        
        clearInterval(INTERVAL1)
    }
    break
}  

}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimer();
//     document.getElementById("countdown").value = TIME.value;
//   });



function setTimer() {
    TIME = document.getElementById("start").value
    console.log(TIME)
}

// Интервалы 


var Times_Alf = setInterval(function () { newLetters() }, set4)

var Times_1 = setInterval(function () { newHands() }, set2)

var Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);

// Ex = document.getElementById("super");
// ExMix = document.getElementById("On");

colorSimle.addEventListener("click", function () {
    resetExtColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (this.checked) {
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(),
                randomLetters()
        }, interTime);
        
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, interTime);
    }
})

colorExtra.addEventListener("click", function () {
    resetColor();
    clearInterval(TimesExtColor);
    clearInterval(TimesColor);
    clearInterval(Times_3);
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (this.checked) {
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),
                randomLetters(), setColorAlf(), setColorHand()
        }, interTime);
    } else {
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
    }
})

// Перемешивание

window.addEventListener("load", () => { newLetters() });


// function newLetters() {
//     NEWLETT = ALF.sort(function () { return 0.5 - Math.random() })
//     console.log(`NEWAlfavit : ${ALF}`);
// }

function newLetters() {
    for (let i = ALF.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ALF[i], ALF[j]] = [ALF[j], ALF[i]];
        console.log(`NEWALF = ${ALF}`)

    }
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
    SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    ERROR = document.querySelector("#Error2").style.display =  "none";
    if ( SHRIFT > 150){
        ERROR = document.querySelector("#Error2").style.display =  "block";
        document.querySelector("#Error2").innerHTML =  `The  size  of  letters  should  not  exceed   '150' !`;
        document.querySelector("#Error2").style.position = "reletive";
        document.querySelector("#Error2").style.left = "25%";
        document.querySelector("#Error2").style.top = "45%";
        document.querySelector("#Error2").style.fontSize = "45px";   
        document.querySelector("#Error2").style.color = "red";
        document.querySelector("#block").style.display = "none";
        
    } if(SHRIFT < 20){
        ERROR = document.querySelector("#Error2").style.display =  "block";
        document.querySelector("#Error2").innerHTML =  `The size of the letters should not be less than "20"!`;
        document.querySelector("#Error2").style.position = "reletive";
        document.querySelector("#Error2").style.left = "20%";
        document.querySelector("#Error2").style.top = "45%";
        document.querySelector("#Error2").style.fontSize = "45px";   
        document.querySelector("#Error2").style.color = "red";
        document.querySelector("#block").style.display = "none";
    } else{
        
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';
    }
   
  

}
function reset() {
    const SHRIFT = document.getElementById("fill").value = "60";
    const Speed = document.getElementById("speed").value = "1600";
    console.log(SHRIFT)
    ERROR = document.querySelector("#Error").style.display =  "none";
    ERROR = document.querySelector("#Error2").style.display =  "none";
    document.querySelector("#block").style.display = "block";
    setTimer();
    resetSuperExtr();
    resetExtra();
    resetExtColor();
    resetColor();
    setTheme();
    closeTheme();
    clear();
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';
    document.getElementById('alfavit').style.fontSize = Speed;
    document.getElementById('hand').style.fontSize = Speed;
    document.getElementById("dublicate").value = "01 : 00";
    document.getElementById("start").value = "60";
    clearInterval(INTERVAL1);
    Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    Play.style.backgroundColor = "rgb(230, 230, 230)"
    Stop.style.backgroundColor = "rgb(230, 230, 230)"
    Play.style.width = "30px";
    Play.style.height = "30px";
    Stop.style.width = "30px";
    Stop.style.height = "30px";
}

function clear() {
    clearInterval(TimesColor);
    clearInterval(TimesExtColor);
    clearInterval(Times_3);
}
resetColor();
resetExtColor();

function setTime() {
    clear();
    HOLD = document.getElementById("speed").value;
    document.querySelector("#Error").style.display =  "none";
    document.querySelector("#block").style.display = "block";
    if (HOLD < 500){
        document.querySelector("#Error").style.display =  "block";
        document.querySelector("#Error").innerHTML =  `Too fast!  The interval should not be less than "500"!`;
        document.querySelector("#Error").style.position = "reletive";
        console.log("lskdjfhv")
        document.querySelector("#Error").style.left = "20%";
        document.querySelector("#Error").style.top = "15%";
        document.querySelector("#Error").style.fontSize = "45px";
        document.querySelector("#Error").style.color = "red";
        document.querySelector("#block").style.display = "none";
    } if (HOLD > 5000){
        document.querySelector("#Error").style.display =  "block";
        document.querySelector("#Error").innerHTML =  `Too slow!  The interval should not be greater than "5000"!`;
        document.querySelector("#Error").style.position = "reletive";
        console.log("lskdjfhv")
        document.querySelector("#Error").style.left = "16%";
        document.querySelector("#Error").style.top = "15%";
        document.querySelector("#Error").style.fontSize = "45px";
        document.querySelector("#Error").style.color = "red";
        document.querySelector("#block").style.display = "none";
    }else{
        document.querySelector("#time").innerText = HOLD;
         if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    } 
    colorSimle.addEventListener("click", function(){ 
    if (colorSimle.checked) {
        clear();
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(),
                randomLetters()
        }, interTime);
    } else if (colorExtra.checked) {
        clear();
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),
                randomLetters(), setColorAlf(), setColorHand()
        }, interTime);
    } else {
        if (HOLD == Times_3) {
            clear();
            setInterval(function () { randomHands(), setFont(), randomLetters()}, set);
            } else {
            clear();
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()}, HOLD);
            clearInterval(Times_1)
            NewHOLD = HOLD * 3;
            Times_1 = setInterval(function () { newHands() }, NewHOLD);
            if(ALF == ALFheb) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 22;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } if (ALF == ALFeng) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 26;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } else {
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }return Times_Alf     
        }
    }
})
    if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters()}, set);
        } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()}, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        }return Times_Alf     
        }
    }


function startApp() {
    // clear();
    HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorSimle.addEventListener("click", function(){      
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (colorSimle.checked) {
        clear();
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(), extra(),
                randomLetters()
        }, interTime);
    }  else {
        if (HOLD == Times_3) {
            clear();
            setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
        } else {
            clear();
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
            clearInterval(Times_1)
            NewHOLD = HOLD * 3;
            Times_1 = setInterval(function () { newHands() }, NewHOLD);
            if(ALF == ALFheb) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 22;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } if (ALF == ALFeng) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 26;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } else {
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }return Times_Alf 
        };
    }    
});
    colorExtra.addEventListener("click", function(){
        if (colorExtra.checked) {
        clear();
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(), extra(),
                randomLetters(), setColorAlf(), setColorHand()
        }, interTime);
        } else{
        if (HOLD == Times_3) {
        clear();
        setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    } else {
        clear();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
        clearInterval(Times_1)
        NewHOLD = HOLD * 3;
        Times_1 = setInterval(function () { newHands() }, NewHOLD);
        if(ALF == ALFheb) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 22;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } if (ALF == ALFeng) {
            clearInterval(Times_Alf);
            NewAlfHOLD = HOLD * 26;
            Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
        } else {
            clearInterval(Times_Alf)
            NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    }return Times_Alf 
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
    if(ALF == ALFheb) {
        clearInterval(Times_Alf);
        NewAlfHOLD = HOLD * 22;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    } if (ALF == ALFeng) {
        clearInterval(Times_Alf);
        NewAlfHOLD = HOLD * 26;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    } else {
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
    Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
}return Times_Alf 
};
}


function superExtra() {
    // clear();
    HOLD = document.getElementById("speed").value;
    document.querySelector("#time").innerText = HOLD;
    colorSimle.addEventListener("click", function(){  
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (colorSimle.checked) {
        clear();
        TimesColor = setInterval(function () {
            randomHands(), setFont(), setColor(), superExtraLet(), superExtraHan(),
                randomLetters()
        }, interTime);
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
            if(ALF == ALFheb) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 22;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } if (ALF == ALFeng) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 26;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } else{
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }return Times_Alf        
        }
    }
})
colorExtra.addEventListener("click", function(){
    if (colorExtra.checked) {
        clear();
        TimesExtColor = setInterval(function () {
            randomHands(), setFont(),superExtraLet(), superExtraHan(),
                randomLetters(), setColorAlf(), setColorHand()
        }, interTime);
    } else{
        if (HOLD == Times_3) {
            clear();
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
        } else {
            clear();
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
            clearInterval(Times_1)
            NewHOLD = HOLD * 3;
            Times_1 = setInterval(function () { newHands() }, NewHOLD);
            if(ALF == ALFheb) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 22;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } if (ALF == ALFeng) {
                clearInterval(Times_Alf);
                NewAlfHOLD = HOLD * 26;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            } else{
                clearInterval(Times_Alf)
                NewAlfHOLD = HOLD * 27;
                Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
            }return Times_Alf        
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
    if(ALF == ALFheb) {
        clearInterval(Times_Alf);
        NewAlfHOLD = HOLD * 22;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    } if (ALF == ALFeng) {
        clearInterval(Times_Alf);
        NewAlfHOLD = HOLD * 26;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    } else{
        clearInterval(Times_Alf)
        NewAlfHOLD = HOLD * 27;
        Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    }return Times_Alf        
}
}

  // colorExtra.addEventListener("click", function () {
    //     if (this.checked) {
    //         if (HOLD == Times_3) {
    //             clear();     
    //             setInterval(function () {
    //                 randomHands(), setFont(), randomLetters(),
    //                     extra(), setColorAlf(), setColorHand()
    //             }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () {
    //                 randomHands(), setFont(), randomLetters(),
    //                     extra(), setColorAlf(), setColorHand()
    //             }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
                
    //         };
    //     } else {
    //         if (HOLD == Times_3) {
    //             clear();
    //             setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
                
    //         };
    //     }
    // })
    // TimesColor = colorSimle.addEventListener("click", function () {
    //     if (this.checked) {
    //         if (HOLD == Times_3) {
    //             clear();
    //             setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), extra() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
                
    //         };

    //     } else {
    //         if (HOLD == Times_3) {
    //             clear();
    //             setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), extra() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
                
    //         };
    //     }

    // })

var SUPER = document.getElementById("super").value;

// function resetSuperExtr() {
//     document.getElementById("super").checked = false;
// }



 // colorExtra.addEventListener("click", function () {
    //     if (this.checked) {
    //         if (HOLD == Times_3) {
    //             clear();
    //             Times_3 = setInterval(function () {
    //                 randomHands(), setFont(), randomLetters(), superExtraLet(),
    //                 superExtraHan(), setColorAlf(), setColorHand()
    //             }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () {
    //                 randomHands(), setFont(), randomLetters(), superExtraLet(),
    //                 superExtraHan(), setColorAlf(), setColorHand()
    //             }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
    //         }
    //     } else {
    //         if (HOLD == Times_3) {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }  return Times_Alf
    //         }
    //     }
    // })
    // TimesColor = colorSimle.addEventListener("click", function () {
    //     if (this.checked) {
    //         if (HOLD == Times_3) {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), 
    //                 superExtraLet(), superExtraHan() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColor(), 
    //                 superExtraLet(), superExtraHan() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }           return Times_Alf    
    //         }
    //     } else {
    //         if (HOLD == Times_3) {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), superExtraLet(), superExtraHan() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }         return Times_Alf     
    //         }
    //     }
    // })

function superExtraLet() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';

}

function superExtraHan() {
    const SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("hand").style.fontSize = SISE + 'px';
}

function extra() {
    SISE = Math.floor((Math.random() * 70) + 36);
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    console.log(SISE);
}

function resetExtra() {
    document.getElementById("On").checked = false;
}


    // colorExtra.addEventListener("click", function () {
    //     if (this.checked) {         
    //         if (HOLD == Times_3) {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, set);
    //         } else {
    //             clear();
    //             Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters(), setColorAlf(), setColorHand() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                   clearInterval(Times_Alf)
    //             NewAlfHOLD = HOLD * 27;
    //             Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
    //         }

    //     } else {
    //         resetExtColor();
    //         clear();
    //         resetColor();
    //     if (HOLD == Times_3) {
    //     clear();
    //     setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    // } else {
    //     clear();
    //     Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
    //     clearInterval(Times_1)
    //     NewHOLD = HOLD * 3;
    //     Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //     if(ALF == ALFheb) {
    //         clearInterval(Times_Alf);
    //         NewAlfHOLD = HOLD * 22;
    //         Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     } if (ALF == ALFeng) {
    //         clearInterval(Times_Alf);
    //         NewAlfHOLD = HOLD * 26;
    //         Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     } else {
    //          clearInterval(Times_Alf)
    //          NewAlfHOLD = HOLD * 27;
    //          Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     }return Times_Alf
       
    // }
    //     }
    // })
    // TimesColor = colorSimle.addEventListener("click", function () {
    //     if (this.checked) {          
    //         if (HOLD == Times_3) {
    //             clear();
    //             setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, set);
    //         } else {
    //             clear(); 
    //             Times_3 = setInterval(function () { randomHands(), setFont(), setColor(), randomLetters() }, HOLD);
    //             clearInterval(Times_1)
    //             NewHOLD = HOLD * 3;
    //             Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //             if(ALF == ALFheb) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 22;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } if (ALF == ALFeng) {
    //                 clearInterval(Times_Alf);
    //                 NewAlfHOLD = HOLD * 26;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             } else {
    //                 clearInterval(Times_Alf)
    //                 NewAlfHOLD = HOLD * 27;
    //                 Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //             }return Times_Alf
               
    //         }

    //     } else {
    //         clear();
    //         resetColor();
    //     if (HOLD == Times_3) {
    //     clear();
    //     setInterval(function () { randomHands(), setFont(), randomLetters() }, set);
    // } else {
    //     clear();
    //     Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters() }, HOLD);
    //     clearInterval(Times_1)
    //     NewHOLD = HOLD * 3;
    //     Times_1 = setInterval(function () { newHands() }, NewHOLD);
    //     if(ALF == ALFheb) {
    //         clearInterval(Times_Alf);
    //         NewAlfHOLD = HOLD * 22;
    //         Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     } if (ALF == ALFeng) {
    //         clearInterval(Times_Alf);
    //         NewAlfHOLD = HOLD * 26;
    //         Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     } else {
    //          clearInterval(Times_Alf)
    //          NewAlfHOLD = HOLD * 27;
    //          Times_Alf = setInterval(function () { newLetters() }, NewAlfHOLD)
    //     }return Times_Alf
       
    // }
    //     }


// Полный экран


var fullSreen = document.getElementById("fullScr");
var elem = document.documentElement;

fullSreen.addEventListener("click", function () {
        dropDownMenu.style.display = "none";       
        document.getElementById("window").style.height = "100vh"; 
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.getElementById("window").style.height = "100vh";
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();  
            document.getElementById("window").style.height = "100vh";
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();        
            document.getElementById("window").style.height = "100vh";
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
            document.getElementById("window").style.height = "100vh";
        }    
    this.removeEventListener("click",function(){})
})


 menuItem.addEventListener("click", function () {
       dropDownMenu.style.display = "grid";
        document.getElementById("window").style.height = "83vh";  
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            document.getElementById("window").style.height = "83vh";
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            document.getElementById("window").style.height = "83vh";
        }
        this.removeEventListener("click",function(){})
});


function resetColor() {
    document.getElementById("color").checked = false;   
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }   
}

function setColor() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
    newColor2 = document.getElementById("hand").style.color = COLORS[color];

}

function setColorAlf() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
}

function setColorHand() {
    const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'GRAY'];
    var color = Math.floor(Math.random() * 8);
    newColor2 = document.getElementById("hand").style.color = COLORS[color];
}

function resetExtColor() {
    document.getElementById("ColorExt").checked = false;
    let black = document.querySelector("body").style.backgroundColor
    if (black == "black" ){
            document.getElementById("alfavit").style.color = "white";
            document.getElementById("hand").style.color = "white";
    } else {
        document.getElementById("alfavit").style.color = "black";
        document.getElementById("hand").style.color = "black";
    }  
}

function closeTheme() {
    Theme.checked = false;
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("alfavit").style.color = "black"
    document.getElementById("hand").style.color = "black"
}

function setTheme() {
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("alfavit").style.color = "white"
    document.getElementById("hand").style.color = "white"
}

Theme.addEventListener("click", function () {
    if (this.checked) {
        setTheme()
    } else {
        closeTheme();
    }

})

// Инструкция

let modal1 = document.querySelector('#modalEn');
let modal3 = document.querySelector('#modalHe');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');


// const close1 = document.querySelector('.close1');
// const modal1 = document.querySelector("#modalEn");
// const leng1 = document.querySelector("#ru");
// const leng2 = document.querySelector("#en");
// const leng3 = document.querySelector("#he");



btn.onclick = function () {
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(211, 210, 210, 0.94)';
    modal.style.top = '17%';
    modal.style.left = '10%';
   
};

close.onclick = function () {
  modal.style.display = 'none';
};



window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  } 
};
// window.onclick = function (event) {
//     if (event.target == modal1){
//         modal1.style.display = 'none';
//       }
// };


// function setThemeColor() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
//     newColor2 = document.getElementById("hand").style.color = COLORS[color];
    
// }

// function setThemeColorHand() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor2 = document.getElementById("hand").style.color = COLORS[color];
// }

// function setThemeColorAlf() {
//     const COLORS = ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'INDIGO', 'VIOLET', 'WHITE', 'GRAY'];
//     var color = Math.floor(Math.random() * 9);
//     newColor1 = document.getElementById("alfavit").style.color = COLORS[color];
// }
