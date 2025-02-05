
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

let modal1 = document.querySelector('#modalEn');
let modal3 = document.querySelector('#modalHe');
let btn = document.querySelector('#openModal');
let close = document.querySelector('.close');


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
var dropDownMenu2 = document.getElementById("scrDown");
fullSreen = document.getElementById("fullScr");

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
    modal.style.display = "none"
    modal = modal2
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
    modal.style.pointerEvents = "visible";
    document.getElementById("FinRes").textContent = " ВЫХОД <=> EЩЁ ХОЧУ !!!";
    document.getElementById("Finish").innerText = "Превосходно! Упражнение выполнено!"
    document.getElementById("Finish").style.left = "20vw"
    document.getElementById("Finish").style.width = "70vw"
    document.getElementById("min").textContent = " Размер -"
    document.getElementById("plu").textContent = " Размер +"
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
    modal.style.display = "none"
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
    modal.style.pointerEvents = "visible";
    document.getElementById("FinRes").textContent = " EXIT <=> I WANT MORE !!!";
     document.getElementById("Finish").innerText = "Perfect! The exercise is done!"
     document.getElementById("Finish").style.left = "26vw";
     document.getElementById("min").textContent = " Size -"
    document.getElementById("plu").textContent = " Size +"
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
    modal.style.display = "none"
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
    modal.style.pointerEvents = "visible";  
    document.getElementById("FinRes").textContent = " !!! יציאה <=> אני רוצה פעם ";
     document.getElementById("Finish").innerText = "!מוּשׁלָם!  התרגיל נעשה"
     document.getElementById("Finish").style.left = "34vw"
     document.getElementById("Finish").style.width = "50vw"
    document.getElementById("min").textContent = "- גוֹדֶל "
    document.getElementById("plu").textContent = "+ גוֹדֶל "
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

let btnCloseE=()=>{
    document.getElementById("backEn").style.display = "block"
    document.getElementById("closeEn").style.display = "none"
    closeWinE = document.getElementById("backEn")
    console.log("Back close")
    closeWinE.addEventListener("click", function(){
        modal.style.display = "none"
        document.getElementById("scrDownEn").style.display = "block"
        document.getElementById("top").style.opacity = "0";
        document.getElementById("backEn").style.display = "none"
        document.getElementById("closeEn").style.display = "block"
    })
}
let btnCloseR=()=>{
    document.getElementById("backRu").style.display = "block"
    document.getElementById("closeRu").style.display = "none"
    closeWinR = document.getElementById("backRu")
    closeWinR.addEventListener("click", function(){
        modal.style.display = "none"
        document.getElementById("top").style.opacity = "0";
        document.getElementById("scrDownRu").style.display = "block"
        document.getElementById("backRu").style.display = "none"
        document.getElementById("closeRu").style.display = "block"
    })
}
let btnCloseH=()=>{
    document.getElementById("backHe").style.display = "block"
    document.getElementById("closeHe").style.display = "none"
    closeWinR = document.getElementById("backHe")
    closeWinR.addEventListener("click", function(){
    modal.style.display = "none"
    document.getElementById("top").style.opacity = "0";
    document.getElementById("scrDownHe").style.display = "block"
    document.getElementById("backHe").style.display = "none"
    document.getElementById("closeHe").style.display = "block"
    })
}

let changeEng=()=>{
    document.getElementById("scrDownRu").style.display = "none"
    document.getElementById("scrDownHe").style.display = "none"
    document.getElementById("scrDownEn").style.display = "block"
}
let changeRus=()=>{
    document.getElementById("scrDownEn").style.display = "none"
    document.getElementById("scrDownHe").style.display = "none"
    document.getElementById("scrDownRu").style.display = "block"
}
let changeHeb=()=>{
    document.getElementById("scrDownRu").style.display = "none"
    document.getElementById("scrDownHe").style.display = "block"
    document.getElementById("scrDownEn").style.display = "none"
}

let openLeng=()=>{
    document.getElementById("langR1").style.display = "block"
    document.getElementById("langR2").style.display = "block"
    document.getElementById("langR3").style.display = "block"
    document.getElementById("langE1").style.display = "block"
    document.getElementById("langE2").style.display = "block"
    document.getElementById("langE3").style.display = "block"
    document.getElementById("langH1").style.display = "block"
    document.getElementById("langH2").style.display = "block"
    document.getElementById("langH3").style.display = "block"
}

 addEventListener("DOMContentLoaded", function() {
    clear();
     btnInst.addEventListener("click", function(){
        console.log("na meste")
     document.getElementById("scrDownEn").style.display = "none"       
        modalWin();     
        document.getElementById("top").style.opacity = "1";        
        modal.style.pointerEvents = "visible";
        btnCloseE();
    })
    btnStart.addEventListener("click",function (){
        document.querySelector("body").style.backgroundColor = "transparent"
        document.getElementById("top").style.pointerEvents = "visible";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("scrDownEn").style.display = "none"
        document.getElementById("window").style.display = "block"
        fullSreenStart();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},HOLD);
        
    })
     btnInst1.addEventListener("click", function(){
     document.getElementById("scrDownHe").style.display = "none"    
        modalWin();
        document.getElementById("top").style.opacity = "1";        
        modal.style.pointerEvents = "visible";
        btnCloseH();
        document.getElementById("scrDownHe").style.display = "none"
    })
    btnStart1.addEventListener("click",function (){
        document.querySelector("body").style.backgroundColor = "transparent"
        document.getElementById("top").style.pointerEvents = "visible";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("scrDownHe").style.display = "none"
        document.getElementById("window").style.display = "block"
        fullSreenStart();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},HOLD);
    })
     btnInst2.addEventListener("click", function(){
     document.getElementById("scrDownRu").style.display = "none"    
        modalWin();
        document.getElementById("top").style.opacity = "1";        
        modal.style.pointerEvents = "visible";
        btnCloseR();
        document.querySelector(".lang")
    })
    btnStart2.addEventListener("click",function (){
        document.querySelector("body").style.backgroundColor = "transparent"
        document.getElementById("top").style.pointerEvents = "visible";
        document.getElementById("top").style.opacity = "1";
        document.getElementById("scrDownRu").style.display = "none"
        document.getElementById("window").style.display = "block"
        fullSreenStart();
        Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},HOLD);
    })
    modal = modal1;
    ALF = ALFeng;
    HAND = HANDeng;
    he.addEventListener("click", function () {
        changeLengHeb();   
     })
    en.addEventListener("click", function () {      
        changeLengEng();
     })
    ru.addEventListener("click", function () {
        changeLengRus();
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
        document.getElementById("top").style.display = "block";
        document.getElementById("window").style.display = "none";  
        document.getElementById("clean").style.display = "none";  
        document.getElementById("top").style.pointerEvents = "none";
        document.getElementById("top").style.opacity = "0.15"; 
        document.getElementById("FinRes").style.display = "block";
        // document.getElementById("FinRes").value = "I WANT MORE";
        document.getElementById("FinRes").style.display = "block";
        document.getElementById("FinRes").style.position = "relative";
        document.getElementById("FinRes").style.top = "28vw";
        document.getElementById("FinRes").style.left = "37vw";
        document.getElementById("FinRes").style.zIndex = "1";
        document.getElementById("block").style.display = "none"
        document.getElementById("block").style.transition = "2s."
        document.getElementById("Finish").style.display = "block"
        menuItem.addEventListener("click", function () {
            dropDownMenu.style.display = "grid";  
             if (document.exitFullscreen) {
                 document.exitFullscreen();
             } else if (document.mozCancelFullScreen) {
                 document.mozCancelFullScreen();
             } else if (document.webkitExitFullscreen) {
                 document.webkitExitFullscreen();
             } else if (document.msExitFullscreen) {
                 document.msExitFullscreen();
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

var Times_3 // = setInterval(function () { randomHands(), setFont(), randomLetters()},HOLD);


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



let setFontEx1 =() =>{
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
        console.log("New - Ex")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 45);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';  
}
let setFontExFull1 =() =>{
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
    console.log("New + New-Ex")
    LEFT = Math.floor(Math.random() * 90);
    TOP = Math.floor(Math.random() * 60);
    document.getElementById("block").style.left = LEFT + 'vw';
    document.getElementById("block").style.top = TOP + 'vh';  
}
let setFontEx =() =>{
 
}

let setfontFullScr =()=>{
    console.log("New + New")
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
     if(SHRIFT <= 40){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 89);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 50){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 86);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 60){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 84);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 70){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 81);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 80){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 78);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 90){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 76);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if (SHRIFT <= 100) {
        console.log("20-50")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 73);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 110){
        console.log("50-70")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 70);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 120){
        console.log("70-90")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 68);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 130){
        console.log("120-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 65);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 140){
        console.log("130-140")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 62);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 150){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 60);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }

}
let setFont1 =() =>{
    console.log("New")
    SHRIFT = document.getElementById("fill").value;
    let TOP;
    let LEFT;
     if(SHRIFT <= 40){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 74);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 50){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 71);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 60){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 69);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 70){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 66);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 80){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 63);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 90){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 61);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if (SHRIFT <= 100) {
        console.log("20-50")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 58);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }else if(SHRIFT <= 110){
        console.log("50-70")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 55 );
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 120){
        console.log("70-90")
        LEFT = Math.floor(Math.random() * 95);
        TOP = Math.floor(Math.random() * 53);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 130){
        console.log("120-130")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 50);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 140){
        console.log("130-140")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 47);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    } else if(SHRIFT <= 150){
        console.log("140-150")
        LEFT = Math.floor(Math.random() * 90);
        TOP = Math.floor(Math.random() * 45);
        document.getElementById("block").style.left = LEFT + 'vw';
        document.getElementById("block").style.top = TOP + 'vh';
    }
    

}
let setFont =() =>{
   
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
            console.log("else in setTime1()")
            Times_3 = setInterval(function () { randomHands(), setFont(), randomLetters()},interTime);
            setTimeReal();
        }      
    } 
}
     
startExtra = ()=>{
    clear()
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
    clear();
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

var elem = document.documentElement;
     let fullSreenStart = () => {                       
        HOLD = document.getElementById("speed").value;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            document.getElementById("window").style.display = "block"
            document.getElementById("window").style.height = "85vh"
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen(); 
            document.getElementById("window").style.display = "block"
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();  
            document.getElementById("window").style.display = "block"      
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
            document.getElementById("window").style.display = "block"
        } 

      menuItem.addEventListener("mousemove", function (){
            clearTimeout(timeout);
            dropDownMenu.style.display = "grid";
            setFont = setFont1
            setFontEx = setFontEx1
            timeout = setTimeout(() => {
                console.log("inFull1")
                dropDownMenu.style.display = 'none';
                setFont = setfontFullScr
                setFontEx = setFontExFull1
                }, 5000);
                
        })
        dropDownMenu.addEventListener("mouseleave", function(){
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log("inFull2")
                dropDownMenu.style.display = 'none';
                }, 5000);
                setFont = setfontFullScr
                setFontEx = setFontExFull1
                if(modal.style.display == 'block')
                    clean.style.cursor = "default";
                    setFont = setFont1 
                    setFontEx = setFontEx1
                if(dropDownMenu.style.display = "grid")
                    clean.style.cursor = "default";
                    setFont = setFont1
                    setFontEx = setFontEx1   
        })  
}

let to = 5000, ts = 0; 

let timeout;

addEventListener('mousemove', () => {
  ts = Date.now();
  clean.style.cursor = "default";
  dropDownMenu.style.display = "grid";
});

setInterval(() => {
  if (Date.now() - ts > to)
    clean.style.cursor = "none";
}, 99)

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

let modalWin = () =>{
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(211, 210, 210, 0.94)';
    modal.style.top = '8%';
    modal.style.left = '6%';
}


btn.addEventListener("click",function () {
   modalWin();
   openLeng();
   clearTimeout(timeout);
   document.getElementById("top").style.pointerEvents = "none";
   modal.style.pointerEvents = "visible";
})

stopModal=() => {
    console.log("just close")
  modal.style.display = 'none';
  document.getElementById("top").style.pointerEvents = "visible";
};

// window.onclick = function () {
//     modal.style.display = 'none';
   
// };

