
var ALFru = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
    'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

var FIRST_TIME;

var HANDru = ['Л', 'П', 'О'];
let ERROR;
var HAND;
var ALF;
let set = 1200;
let currentIndex = 0;
let alfIndex = 0;
let SETH = 0;
let NEWHAND;
var TimesColor;
var TimesExtColor;
var colorSimle = document.getElementById("color");
var colorExtra = document.getElementById("ColorExt");
var Extra = document.getElementById("On");
var SuperExtra = document.getElementById("super");
var Theme = document.getElementById("theme");
var SUPER = document.getElementById("super").value;

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
let SISE2;
let SISE3;

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
    document.getElementById("Finish").innerText = "Превосходно! Упражнение выполнено!"
    document.getElementById("min").textContent = " Размер -"
    document.getElementById("plu").textContent = " Размер +"
    document.getElementById("fullScr").value = " Весь экран "
    document.getElementById("minus").textContent = " Скорость -"
    document.getElementById("plus").textContent = " Скорость +"
    document.getElementById("sise").value = "    Сброс    "
    document.querySelector("#O>label").textContent =  "Супер"
    document.querySelector("#su>label").textContent = "С.Микс"
    document.querySelector("#co>label").textContent = "Цвет"
    document.querySelector("#CoEx>label").textContent = "Ц.Микс"
    document.getElementById("ru").textContent = "Рус"
    document.getElementById("en").textContent = "Анг"
    document.getElementById("he").textContent = "Ивр"
    document.querySelector("#the>label").textContent = "ЧерныйЭкран"
    document.getElementById("1").innerText = "1мин"
    document.getElementById("2").innerText = "5мин"
    document.getElementById("3").innerText = "10мин"
    document.getElementById("4").innerText = "15мин"
    document.getElementById("5").innerText = "20мин"
}
const changeLengEng = () =>{
     document.getElementById("Finish").innerText = "Perfect! The exercise is done!"
     document.getElementById("min").textContent = " Sise -"
    document.getElementById("plu").textContent = " Sise +"
    document.getElementById("fullScr").value = " Full screen "
     document.getElementById("minus").textContent = " Speed +"
    document.getElementById("plus").textContent = " Speed -"
    document.getElementById("sise").value = "   Reset   "
    document.querySelector("#O>label").textContent =  "Extra"
    document.querySelector("#su>label").textContent = "ExMix"
    document.querySelector("#co>label").textContent = "Color"
    document.querySelector("#CoEx>label").textContent = "CoMix"
    document.getElementById("ru").textContent = "Ru"
    document.getElementById("en").textContent = "En"
    document.getElementById("he").textContent = "He"
    document.querySelector("#the>label").textContent = "Dark screen"
    document.getElementById("1").innerText = "1min"
    document.getElementById("2").innerText = "5min"
    document.getElementById("3").innerText = "10min"
    document.getElementById("4").innerText = "15min"
    document.getElementById("5").innerText = "20min"
}
const changeLengHeb = () =>{
     document.getElementById("Finish").innerText = "!מוּשׁלָם!  התרגיל נעשה"
    document.getElementById("min").textContent = "- גוֹדֶל "
    document.getElementById("plu").textContent = "+ גוֹדֶל "
    document.getElementById("fullScr").value = " מסך מלא "
    document.getElementById("minus").textContent = "+  מְהִירוּת "
    document.getElementById("plus").textContent = "-  מְהִירוּת "
    document.getElementById("sise").value = "   אִתחוּל   "
    document.querySelector("#O>label").textContent =  "תוֹסֶפֶת"
    document.querySelector("#su>label").textContent = "מיקס"
    document.querySelector("#co>label").textContent = "צֶבַע"
    document.querySelector("#CoEx>label").textContent = "צֶבַע מיקס"
    document.getElementById("ru").textContent = "רוס"
    document.getElementById("en").textContent = "אנג"
    document.getElementById("he").textContent = "עִברִ"
    document.querySelector("#the>label").textContent = "רקע כהה"
    document.getElementById("1").innerText = "1 דק"
    document.getElementById("2").innerText = "5 דק"
    document.getElementById("3").innerText = "10 דק"
    document.getElementById("4").innerText = "15 דק"
    document.getElementById("5").innerText = "20 דק"
}

 addEventListener("DOMContentLoaded", function() {
    modal = modal1;
    ALF = ALFeng;
    HAND = HANDeng;
    he.addEventListener("click", function () {
        changeLengHeb();
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
        changeLengEng();
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
    if (TIME < 0) {
        clear();
        document.getElementById("block").style.display = "none"
        document.getElementById("block").style.transition = "2s."
        document.getElementById("Finish").style.display = "block"
        document.getElementById("window").style.height = "70vh"
        menuItem.addEventListener("click", function () {
            dropDownMenu.style.display = "grid";
             document.getElementById("window").style.height = "70vh";  
             if (document.exitFullscreen) {
                 document.exitFullscreen();
                 document.getElementById("window").style.height = "70vh";
             } else if (document.mozCancelFullScreen) {
                 document.mozCancelFullScreen();
                 document.getElementById("window").style.height = "70vh";
             } else if (document.webkitExitFullscreen) {
                 document.webkitExitFullscreen();
                 document.getElementById("window").style.height = "70vh";
             } else if (document.msExitFullscreen) {
                 document.msExitFullscreen();
                 document.getElementById("window").style.height = "70vh";
             }
     });
    }
    break
}  

}

function setTimer() {
    TIME = document.getElementById("start").value
    console.log(TIME)
}

// Интервалы 

var Times_Alf = setInterval(function () { newLetters() }, set4)

var Times_1 = setInterval(function () { newHands() }, set2)

var Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},HOLD);


ExMix = document.getElementById("super");
Ex = document.getElementById("On");
Speed = document.getElementById("speed");

colorSimle.addEventListener("click", function () {
    resetExtColor();
    clear();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (colorSimle.checked) {
        if (Extra.checked) {      
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(), randomLetters(), extra(), setColor()
            },interTime);
        } else if (SuperExtra.checked) {
                clear();
                TimesColor = setInterval(function () {
                    setFontEx(), randomHands(), superExtraLet(), superExtraHan(), 
                    setColor(), randomLetters()
                }, interTime);     
            } else{
                
            TimesColor = setInterval(function () {
                randomHands(), setFont(), setColor(),
                    randomLetters()
            }, interTime);
        } 
    } else {
        if (Extra.checked) {      
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(), randomLetters(), extra()
            },interTime);       
        } else if (SuperExtra.checked) {
            clear();
            TimesColor = setInterval(function () {
                setFontEx(), randomHands(), superExtraLet(),  
                superExtraHan(), randomLetters()
            }, interTime);
        }  else{
            clear()
        // document.getElementById("fill").value = 100;
        // setSise();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
        }
    }
})

colorExtra.addEventListener("click", function () {
    resetColor();
    clear();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (colorExtra.checked) {
        if (Extra.checked) {      
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(), randomLetters(), extra(), 
                setColorAlf(), setColorHand()
            },interTime);
            }else if (SuperExtra.checked) {
                clear();
                TimesColor = setInterval(function () {
                    setFontEx(), randomHands(), superExtraLet(), superExtraHan(), 
                    setColorAlf(), setColorHand(), randomLetters()
                }, interTime);      
             } else{
                 TimesExtColor = setInterval(function () {
                randomHands(), setFont(),
                randomLetters(), setColorAlf(), setColorHand()
                }, interTime);
            }      
    } else {
        if (Extra.checked) {      
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(), randomLetters(), extra() 
            },interTime);
        } else if (SuperExtra.checked) {
            clear();
            TimesColor = setInterval(function () {
                setFontEx(), randomHands(), superExtraLet(),  
                superExtraHan(), randomLetters()
            }, interTime);      
         } else{
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
        }    
        
    }
})

// Перемешивание

window.addEventListener("load", () => { newLetters(),setSise() });

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

let setfontFullScr =()=>{
    console.log("NEW")
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    if (SHRIFT <= 50) {
        console.log("20-50")
        LEFT = Math.floor(Math.random() * 100);
        TOP = Math.floor(Math.random() * 100);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 70){
        console.log("50-70")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 85 );
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 90){
        console.log("70-90")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 79);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 110){
        console.log("90-110")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 74);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 130){
        console.log("110-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 69);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 150){
        console.log("130-150")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 62);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }

}

let setFontEx =() =>{
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    console.log("30-40")
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 45);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%'; 
}

let setFont =() =>{
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    if (SHRIFT <= 40) {
        console.log("30-40")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 89);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 50){
        console.log("40-50")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 86);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 60){
        console.log("50-60")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 82);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 70){
        console.log("60-70")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 78);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 80){
        console.log("70-80")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 74);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 90){
        console.log("80-90")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 70);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 100){
        console.log("90-100")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 64);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }else if(SHRIFT <= 110){
        console.log("100-110")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 62);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 120){
        console.log("110-120")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 59);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 130){
        console.log("120-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 55);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 140){
        console.log("130-140")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 51);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    } else if(SHRIFT <= 150){
        console.log("Еу 140-150")
        LEFT = Math.floor(Math.random() * 90);      
        TOP = Math.floor(Math.random() * 45);
        document.getElementById("block").style.left = LEFT + '%';
        document.getElementById("block").style.top = TOP + '%';
    }

}

//  Размер Шрифта

$('#min').click(function(){
      $(this).siblings('input')[0].stepDown();
      setSise()
  })
  $('#plu').click(function(){  
      $(this).siblings('input')[0].stepUp(); 
      setSise()
    })
$('#minus').click(function(){
      $(this).siblings('input')[0].stepDown();
      setSise()
  })
  $('#plus').click(function(){  
      $(this).siblings('input')[0].stepUp(); 
      setSise()
    })

function setSise() {
    SHRIFT = document.getElementById("fill").value;
    console.log(SHRIFT)
    document.getElementById('alfavit').style.fontSize = SHRIFT + 'px';
    document.getElementById('hand').style.fontSize = SHRIFT + 'px';
}

function reset() {
    location.reload()
}

function clear() {
    clearInterval(TimesColor);
    clearInterval(TimesExtColor);
    clearInterval(Times_3);
}

let setTimeReal = ()=>{  
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

let setTime1 =()=>{
    // clear()
    HOLD = document.getElementById("speed").value
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    } 
    if (Extra.checked) {
        if (colorSimle.checked) {
            clear();
            TimesColor = setInterval(function () {
                    setFontEx(), randomHands(), extra(), setColor(),
                    randomLetters()
            }, interTime);  
            setTimeReal();
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                    setFontEx(), randomHands(), extra(),
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);
            setTimeReal();
        } else {
            clear()
        Times_3 = setInterval(function () {
            setFontEx(), randomHands(), randomLetters(), extra()
        },interTime);
        setTimeReal();
        }   
    } else if (SuperExtra.checked) {
            if (colorSimle.checked) {
                clear();
                TimesColor = setInterval(function () {
                    setFontEx(), randomHands(), superExtraLet(), superExtraHan(), 
                    setColor(), randomLetters()
                }, interTime);
                setTimeReal();  
            } else if (colorExtra.checked) {
                clear();
                TimesExtColor = setInterval(function () {
                        setFontEx(), randomHands(), superExtraLet(), superExtraHan(),
                        randomLetters(), setColorAlf(), setColorHand()
                }, interTime);
                setTimeReal();
            } else {
                clear()
                Times_3 = setInterval(function () {
                    setFontEx(), randomHands(), randomLetters(), superExtraLet(), superExtraHan()
            },interTime);
            setTimeReal();
            }   
        } else{
        if (colorSimle.checked) {
            clear();
            console.log("Simple in setTime1()")
            TimesColor = setInterval(function () {
                randomHands(), setFont(), setColor(),
                    randomLetters()
            }, interTime); 
            setTimeReal();
            console.log("Simple in setTime1()2")  
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                randomHands(), setFont(),
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);
            setTimeReal();     
        } else {
            clear()
            // document.getElementById("fill").value = 100;
            // setSise();
            console.log("else in setTime1()")
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
            setTimeReal();
        }      
    } 
}
     
startExtra = ()=>{
    document.getElementById("plu").style.display = "none"
    document.getElementById("min").style.display = "none"
    document.getElementById("MixPsevdo1").style.display = "none"
    document.getElementById("MixPsevdo2").style.display = "none"
    document.getElementById("fill").style.display = "block"
    document.getElementById("super").checked = false;
    HOLD = document.getElementById("speed").value
    setTimeReal();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (Extra.checked) {
        if (colorSimle.checked) {
            clear();
            TimesColor = setInterval(function () {
                    setFontEx(),  randomHands(),  extra(), setColor(),
                    randomLetters()
            }, interTime);  
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                    setFontEx(),  randomHands(),  extra(),
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);

        } else {
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(),  randomLetters(), extra()
        },interTime);
        }   
    }else{ 
        document.getElementById("plu").style.display = "block"
        document.getElementById("min").style.display = "block"  
        document.getElementById("fill").value = 100;
        setSise();
        if (colorSimle.checked) {
            clear();
            TimesColor = setInterval(function () {
                    setFont(), randomHands(), setColor(),
                    randomLetters()
            }, interTime);  
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                    setFont(), randomHands(), 
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);
        } else{
            document.getElementById("plu").style.display = "block"
            document.getElementById("min").style.display = "block"
            clear()
            Times_3 = setInterval(function () { setFont(), randomHands(),  randomLetters()},interTime);
        }
    }
}

let startSuperExtra = ()=>{
    document.getElementById("fill").style.display = "none"
    document.getElementById("plu").style.display = "none"
    document.getElementById("min").style.display = "none"
    document.getElementById("MixPsevdo1").style.display = "block"
    document.getElementById("MixPsevdo2").style.display = "block"
    // document.getElementById("Mix").innerText = `${SISE2} - ${SISE3}`
    document.getElementById("On").checked = false;
    HOLD = document.getElementById("speed").value
    setTimeReal();
    if(HOLD == set){
        interTime = set;
    } else{
        interTime = HOLD;
    }
    if (SuperExtra.checked) {
        if (colorSimle.checked) {
            clear();
            TimesColor = setInterval(function () {
                setFontEx(), randomHands(), superExtraLet(), superExtraHan(), 
                setColor(), randomLetters()
            }, interTime);  
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                    setFontEx(), randomHands(), superExtraLet(), superExtraHan(),
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);
        } else {
            clear()
            Times_3 = setInterval(function () {
                setFontEx(), randomHands(), randomLetters(), superExtraLet(), superExtraHan()
        },interTime);
        }   
    }else{  
        document.getElementById("fill").style.display = "block"
            document.getElementById("plu").style.display = "block"
            document.getElementById("min").style.display = "block"
            document.getElementById("MixPsevdo1").style.display = "none"
            document.getElementById("MixPsevdo2").style.display = "none" 
        document.getElementById("fill").value = 100;
        setSise();
        if (colorSimle.checked) {
            clear();
            TimesColor = setInterval(function () {
                    setFont(), randomHands(), setColor(),
                    randomLetters()
            }, interTime);  
        } else if (colorExtra.checked) {
            clear();
            TimesExtColor = setInterval(function () {
                    setFont(), randomHands(), 
                    randomLetters(), setColorAlf(), setColorHand()
            }, interTime);
        } else{
            document.getElementById("fill").style.display = "block"
            document.getElementById("plu").style.display = "block"
            document.getElementById("min").style.display = "block"
            document.getElementById("MixPsevdo1").style.display = "none"
            document.getElementById("MixPsevdo2").style.display = "none"
            clear()
            Times_3 = setInterval(function () { setFont(), randomHands(), randomLetters()},interTime);
        }
    }

}

function superExtraLet() {
    SISE3 = Math.floor((Math.random() * 100) + 30);
    document.getElementById("alfavit").style.fontSize = SISE3 + 'px';
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 60);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
    document.getElementById("MixPsevdo1").innerText = SISE3
  
  
}

function superExtraHan() {
    SISE2 = Math.floor((Math.random() * 100) + 30);
    asd = document.getElementById("hand").style.fontSize = SISE2 + 'px';
    console.log(asd)
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 60);
    document.getElementById("block").style.left = LEFT + '%';
    document.getElementById("block").style.top = TOP + '%';
    document.getElementById("MixPsevdo2").innerText = SISE2
}

function extra() {
    document.getElementById("fill").setAttribute('type', 'number');
    SISE = Math.floor((Math.random() * 100) + 30);
    document.getElementById("fill").value = SISE;
    document.getElementById("alfavit").style.fontSize = SISE + 'px';
    document.getElementById("hand").style.fontSize = SISE + 'px';
    // document.getElementsByClassName("sise").innerText = "Extra"

    console.log(SISE);
    // setFont()

}

blockTime = document.getElementById("dublicate")



var fullSreen = document.getElementById("fullScr");
var elem = document.documentElement;

fullSreen.addEventListener("click", function () {
    HOLD = document.getElementById("speed").value;
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

// if(document.getElementById("window").style.height = "100vh"){
//     addEventListener('mousemove', function mousemove() {
//         clearTimeout(mousemove.timeout);    
//         dropDownMenu.style.display = 'block'; 
//         document.getElementById("window").style.height = "83vh" 
//         mousemove.timeout = setTimeout(() => {
//         dropDownMenu.style.display = 'none';
//         document.getElementById("window").style.height = "100vh"
//         }, 3000); 
//       });
// } else {
//     clearTimeout(mousemove.timeout);
//     vwe.removeEventListener('mousemove', mousemove());
// }
   

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
    //    vwe.removeEventListener('mousemove', mousemove());
        
});

function resetColor() {
    document.getElementById("color").checked = false; 
    clear(); 
    console.log("resColor") 
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
    console.log("SetColor - Проверка")
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

