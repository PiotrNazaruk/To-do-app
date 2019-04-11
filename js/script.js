
    /*
    $(document).ready(function(){
        $('.nav__icon').click(function(){
            $('.nav__icon').toggleClass('active')
        })
        $('.nav__icon').click(function(){
            $('.navigation').toggleClass('open-close')
        }
        
    
        )
        $('.navigation__list').click(function(){
            $('.navigation').toggleClass('open-close')
        }
        
        )
        $('.navigation__list').click(function(){
            $('.nav__icon').toggleClass('active')
        })
        $('.navigation__logo').click(function(){
            $('.navigation').toggleClass('open-close')
        }
        
        )
        $('.navigation__logo').click(function(){
            $('.nav__icon').toggleClass('active')
        })
        
        
        
    } 
    )
    */
    $(document).ready(function(){
        $('#menu-icon').click(function(){
        $('#navigation').fadeIn(200);
        $('#navigation').css('display','flex');    
        $('#menu-icon').animate({right:'-100%'},);
        $('#close-menu').animate({left:'90.5%', transition:'all .3 ease'},);
        $('.navigation__menu--box').animate({left:'-10%'},400);
        });
        $('#close-menu').click(function(){
            $('#navigation').fadeOut(200);
            $('#menu-icon').animate({right:'0%'},);
            $('#close-menu').animate({left:'100%'},);
            $('.navigation__menu--box').animate({left:'-80%'},400);


            });
    });
   $(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
     
        if((positiontop > 1000 )){
            $('#animated-card1').addClass('animated pulse');
            
        }
        if((positiontop > 1300 )){
            $('#animated-card2').addClass('animated pulse');
            
        }
        if((positiontop > 1800 )){
            $('#animated-card3').addClass('animated pulse');
            
        
        } 
        if((positiontop > 0 )){
            $('.navigation').addClass('box-shadow');
            
        }
        else {
            $('.navigation').removeClass('box-shadow');
    
        } 
    }
    
);
        
   });
   $(window).on('scroll', function(){
    if($(window).scrollTop() > 600){
        $('.nav__icon-item').addClass('black');
    }
    else {
        $('.nav__icon-item').removeClass('black');

    }
});


/*    $(document).ready(function(){
        $('#menu-icon').click(function(){
        $('#navigation').fadeIn(200);
        $('#navigation').css('display','flex');    
        $('#menu-icon').animate({left:'-100%'},);
        $('#close-menu').animate({left:'90.5%', transition:'all .5 ease'},);
        $('.navigation__menu--box').animate({left:'-10%'},400);
        });
        $('#close-menu').click(function(){
            $('#navigation').fadeOut(200);
            $('#menu-icon').animate({left:'0%'},);
            $('#close-menu').animate({left:'100%'},);
            $('.navigation__menu--box').animate({left:'-80%'},400);


            });
    }); */
/*
let size = 50 ;
const btn = document.createElement('button');
let counter = 1;
const trainingDiv = document.querySelector('.training');
trainingDiv.style.display = 'flex';
let newBtn = trainingDiv.appendChild(btn);
newBtn.style.height =  size + 'px';
newBtn.style.width = size + 'px';
newBtn.textContent = 'klikaj klikaj';
btn.addEventListener('click', function(){
    let newItem = document.createElement('div');
    trainingDiv.appendChild(newItem);
    newItem.style.width = size + 'px';
    newItem.style.height = size + 'px';
    newItem.style.background = "green";
    newItem.textContent = counter;
    if(counter % 5 ==0){
        newItem.style.borderRadius = '50%';
    }
    counter += 1;


})
*/
/*
const btn = document.createElement('btn');
btn.style.height = 100+ 'px';
btn.style.width = 100+ 'px';
btn.style.background = 'green';
btn.textContent= 'klikaja dziadzie';
const myTrainingDiv = document.querySelector('.training');
myTrainingDiv.appendChild(btn);
let number = 1;
let ul = document.createElement('ul');
myTrainingDiv.appendChild(ul);
btn.addEventListener('click', function(){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = number;
    if(number % 3 == 0){
        li.style.fontSize = 50 + 'px';
    }
    number = number +2
})
*/
/*
let flag = true;
let height = 10;
const div = document.createElement('div');
const trainingDiv = document.querySelector('.training');
trainingDiv.appendChild(div);
div.style.width = '100%';
div.style.height = height + 'px';
window.addEventListener('scroll',function(){
    if(flag){
        div.style.background = 'red';
        height= height + 5;
        div.style.height = height + 'px';
    }
    else{
        height= height - 10;
        div.style.height = height + 'px';
        div.style.background = 'green';
    }
    if(height >= 300){
        flag = !flag;
    }
    else if(height == 0){
        flag = true;
    }
})
*/
/*
let flag = true;
let size = 150;
let fontSize = 10;
const btn = document.createElement('btn');
const ul = document.createElement('ul');
let i = 0;
let elementCounter = 0;
const trainingDiv= document.querySelector('.training');
trainingDiv.appendChild(btn);
trainingDiv.appendChild(ul);
btn.style.height = size + 'px';
btn.style.width = size + 'px';
btn.style.background = "green";
btn.textContent = 'klikaj';
btn.classList.add('kijowa');
const createdBtn = document.querySelector('.kijowa');

const listCreator =() => {
    if(flag){
        for(let i = 0 ; i < 10; i++){
            const li = document.createElement('li');
            trainingDiv.appendChild(li);
            li.textContent = `element nr ${elementCounter}`;
            elementCounter++;
            li.classList.add('listowa');
            li.style.fontSize = fontSize + 'px';
            flag = false;
        }
    }
    else if(flag == false){
        let downLi = document.querySelectorAll('.listowa');
        fontSize++;
        downLi.forEach(function(item){
          
           
           item.style.fontSize = fontSize + 'px';
        })
    }
}
createdBtn.addEventListener('click', listCreator)
*/
/*
let size = 10;
const trainingDiv = document.querySelector('.training');
const btn = document.createElement('button');
btn.style.background = 'green';
btn.style.height = 50 + 'px';
btn.style.width = 50 + 'px';
const ul = document.createElement('ul');
let counter = 0;
trainingDiv.appendChild(btn);
trainingDiv.appendChild(ul);
btn.addEventListener('click', ()=>{
for(i =0 ; i < 10; i++){
    const list = document.createElement('li');
    trainingDiv.appendChild(list);
    list.textContent = `element nr ${counter}`;
    counter++
    list.style.fontSize = size + 'px';
    size++

}

})
*/
/*
const trainingDiv = document.querySelector('.training');
const h1 = document.createElement('h1');
trainingDiv.appendChild(h1);

window.addEventListener('mousemove', function(event){
   let eventHeight = event.clientX;
    let eventWidth = event.clientY;
    h1.textContent = `${eventHeight}, ${eventWidth}`;
    trainingDiv.style.background = `rgb(${eventHeight},${eventWidth},${eventHeight})`;
})
*/
/*
const trainingDiv = document.querySelector('.training');

const changeColor = (e)=>{
let heihgt = e.clientY;
let width = e.clientX;
console.log(heihgt , width);

if(heihgt % 2 == 0 && width % 2 === 0){
    trainingDiv.style.background = 'red';
}
else if(heihgt % 2 != 0 && width % 2 != 0){
    trainingDiv.style.background = 'blue';
}
else{
    trainingDiv.style.background = 'green';
}

}


trainingDiv.addEventListener('click', changeColor);
*/
/*




DO PRZEJRZENIA


const trainingDiv = document.querySelector('.training');
const newDiv = document.createElement('div');
trainingDiv.appendChild(newDiv);
newDiv.classList.add('random');
let divX = 150;
let divY = 50;
newDiv.style.top = divX + 'px';
    newDiv.style.left = divY+ 'px';
let flag = false;

newDiv.addEventListener('mousedown', function(){
    if(flag == false){
        newDiv.style.background = 'grey';
        flag = true;
    }
 
    
});
newDiv.addEventListener('mousemove' , function(e){
    if(flag){
    let divX = e.clientX;
    let divY = e.clientY;
    newDiv.style.top = `${divX-50}px`
    newDiv.style.left = `${divY-50}px`
    console.log(height, width);
    }
});
newDiv.addEventListener('mouseup' , function(){
    newDiv.style.background = 'black';
});
*/
/*
let color = 100;

const trainingDiv = document.querySelector('.training');
document.addEventListener('keydown', function(key){
   // if(key.keyCode == 37){
   // trainingDiv.style.background= `rgb(${color++},${color++},${color++})`;
   // }
   // else if(key.keyCode == 39){
   //     trainingDiv.style.background= `rgb(${color--},${color--},${color--})`;
  //  }


  switch(key.keyCode){
    case 37:
    trainingDiv.style.background= `rgb(${color < 255 ?color++ : color},${color < 255 ?color++ : color},${color < 255 ?color++ : color})`
    console.log(color);
    break;
    case 39:
    trainingDiv.style.background= `rgb(${color--},${color--},${color--})`
    console.log(color);
    break;
  }
})
*/
/*
let messages = ['siema mistrzu','co ty tutaj robisz', 'chce jeść'];
const passwords = ['dupa','kij','lama'];
const contentDiv = document.querySelector('.message')
const input = document.getElementById('pass');
input.addEventListener('input',(e)=>{
  let text = e.target.value;
  contentDiv.textContent = '';
  passwords.forEach((password , cycki)=>{
   
    if(password === text){
        contentDiv.textContent = messages[cycki];
    }
  })
})
input.addEventListener('focus',function(e){
    e.target.classList.toggle('active');
})
input.addEventListener('blur',function(e){
    e.target.classList.toggle('active');
})
*/
/*
const input  = document.getElementById('pass');
const passwords = ['jedEn','Dwa'];
const messages = ['super', 'działa'];
const contentDiv = document.querySelector('.message');

const showMessage = (e) =>{
    let txt = e.target.value;
    let smallTxt = txt.toLowerCase();
    contentDiv.textContent = '';
    passwords.forEach(function(password , index){
        if(password.toLowerCase() === smallTxt){
            contentDiv.textContent = messages[index];
        }
        
    })
   
};
input.addEventListener('input', showMessage);
input.addEventListener('focus',function(e){
   this.classList.add('active');
})
input.addEventListener('blur',function(e){
    this.classList.remove('active');
 })
 */
/*
const btn = document.createElement('button');
const section = document.querySelector('.training');
section.appendChild(btn);
const contentDiv = document.querySelector('.message');
btn.style.width = "5rem";
btn.style.height = "3rem";
btn.style.marginTop = '10%';
btn.textContent = "klikaj chamie";

const string = 'abcdefgijlmno1245678';
const createElements = () =>{
for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.textContent = "";

    section.appendChild(div);
    let text = ''
    for(let i =0; i<5;i++){
        let index = Math.floor(Math.random()* string.length);
        text += string[index];
        div.textContent = text;
        
    }
   
}
}

btn.addEventListener('click', createElements);

*/
/*
const sectionDiv = document.querySelector('.training');
const btn = document.createElement('button');
const form = document.querySelector('.form');
const input = document.getElementById('pass');
const msgDiv = document.querySelector('.message');
let table = [];
form.appendChild(btn);
btn.style.width = '6rem';
btn.style.height = '4rem';
form.style.height= '30%';
btn.textContent = 'zatwierdź';
let word = '';

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let txt  = input.value;
    if(input.value.length){
        for(name of table){
            if(name === txt){
                alert('wybierz inne ')
                return;
            }
            
        }
        table.push(txt);
        msgDiv.textContent += txt + " ,";
        input.value = '';


      
    }
   
})



input.addEventListener('focus',(e) =>{
   e.target.classList.add('active');
})    

input.addEventListener('blur', function(e){
    this.classList.remove('active')
})    

*/
/*
const input = document.getElementById('pass');
const addButton = document.querySelector('.add');
const remButton = document.querySelector('.remove');
const showAdv = document.querySelector('.showAdv');
const showOp = document.querySelector('.showOp');
const h2 = document.querySelector('.h2');
///////blur i focus on input ///////
input.addEventListener('focus',(e)=>{
    e.target.classList.add('active');
})
input.addEventListener('blur',(e)=>{
    e.target.classList.remove('active');
})
/////////////////////////////////////////
let adviseTable = [];


const addItem = (e)=>{
    e.preventDefault();
    let advice = input.value;
   adviseTable.push(advice);
   input.value = '';
   
}
const removeItem = (e)=>{
    e.preventDefault();
    adviseTable = [];
    h2.textContent = '';
}
const showAdvice = (e)=>{
    e.preventDefault();
   let randomWord = Math.floor(Math.random()*adviseTable.length);
   h2.textContent =`najlepsze są ${adviseTable[randomWord]} `;
    
}
const showOpportunies = (e)=>{
    e.preventDefault();
    alert(`możliwe opcję to ${adviseTable}`);
}
addButton.addEventListener('click', addItem);
remButton.addEventListener('click',removeItem);
showAdv.addEventListener('click',showAdvice);
showOp.addEventListener('click', showOpportunies);

const mathRandom = (min , max)=>{
    let random = Math.floor(Math.random()* (max - min +1) + min);
    return random;
}
console.log(mathRandom(40,45));
*/
/*
const gameSummary = {
    gameNumbers: 0,
    wins : 0,
    losses : 0,
    draws : 0
}
const game = {
    playerHand : "",
    aiHand: '' 

}
function pickHand(){
   game.playerHand = this.dataset.option;
    divs.forEach((div)=>{
        div.style.background = '';
    })
   
   this.style.background = 'cyan' ;
  
 
}
function aiPick(){
    game.aiHand = divs[Math.floor(Math.random()*3)].dataset.option;
  
}
function checkResult(player , ai){
    if(!player){
        alert('proszę wybrać');
        return;
    }
    else if(player === ai){
    
       gameSummary.draws++;
       return 'remis';
    }
    else if((player === 'nozyczki' && ai === 'papier') || (player == 'kamien' && ai === 'nozyczki')|| (player === 'papier' && ai === 'kamien')){
        gameSummary.wins++
        return 'wygrałeś';
  
    }
    else{
        gameSummary.losses++;
        return 'przegrałeś';
    }
}

function printScores(player , ai){
 const yourChoice =  document.querySelector('[data-summary="your-choice"]');
 const aiChoice =  document.querySelector('[data-summary="ai-choice"]');
 const numbers =  document.querySelector('.numbers span');
 const wins=  document.querySelector('.wins span');
 const losses=  document.querySelector('.losses span');
 const draws=  document.querySelector('.draws span');
 

 yourChoice.textContent = player;
 aiChoice.textContent = ai;
 gameSummary.gameNumbers++;
numbers.textContent = gameSummary.gameNumbers;
wins.textContent = gameSummary.wins;
losses.textContent = gameSummary.losses;
draws.textContent = gameSummary.draws;

}
function end(){
    divs.forEach((div)=>{
        div.style.background = '';
    })
}
const divs = document.querySelectorAll('.div__container div');
divs.forEach((div)=>{
    div.addEventListener('click', pickHand);
})
function startGame(){
    aiHand = aiPick();
    const result = checkResult(game.playerHand,game.aiHand);
    printScores(game.playerHand,game.aiHand);
    const winner = result;
    const whoWin=  document.querySelector('[data-summary="who-win"]').textContent =winner;
     end();
  
}

const button = document.querySelector('.start').addEventListener('click', startGame);

*/
/*
const txtPlace = document.querySelector('.txt');
let txt = 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker';
let number= 0;
const addLetter = ()=>{
   txtPlace.textContent += txt[number];
  number++
  
   if(number ===txt.length){
       clearInterval(machTyping);
  
   }
}



let machTyping = setInterval(addLetter, 0);
*/

/*
const txtPlace = document.querySelector('.txt');
const cursor = document.querySelector('.cursor');

const txt = ['cycki są najlepsze', 'bardziej jędrny tyłek :)', 'długie nogi też niczego sobie'];
const toggleClass =() =>{
    cursor.classList.toggle('active');
}
let activeLetter = 0;
let activeTxt = 0;
const addLetter =() =>{
    txtPlace.textContent += txt[activeTxt][activeLetter];
    activeLetter++
    if(activeLetter === txt[activeTxt].length){
        activeTxt++;
       
        if(activeTxt == txt.length)return; 
        return setTimeout(() => {
            activeLetter = 0;
            txtPlace.textContent = '';
            addLetter();
        }, 1000);
    }
     setTimeout(addLetter,100);
}
   
addLetter();
const changeOpacity =setInterval(toggleClass,1000);
*/
/*
const slideList = [{
    img: "/pictures/DALLAS_l.jpg",
    txt: 'slajd pierwszy'
},{
    img: "/pictures/DENVER_kadr_l.jpg",
    txt: 'slide drugi'
},{
    img: "/pictures/Elizabeth_grey_l.jpg",
    txt: 'slide trzeci'
}];
const img = document.querySelector('.slider');
const sliderText = document.querySelector('.slider-text');
const dots =[...document.querySelectorAll('.span')];

const time = 2000;
let number = 0;
const changeDots = ()=>{
   const index = dots.findIndex(dot=>
       dot.classList.contains('current')
   )
    dots[index].classList.remove('current')
    dots[number].classList.add('current');
}
const changeSlide =()=>{
   
    img.src = slideList[number].img;
    sliderText.textContent = slideList[number].txt;
    number++

    if(number ===slideList.length){
        number= 0;
    }
    changeDots()
}
setInterval(changeSlide,time);
*/
/*
const img = document.querySelector('.slider');
const sliderTxt = document.querySelector('.slider-text');
const dots = [...document.querySelectorAll('.span')]
const SliderItems = [{
    image : "/pictures/Margaret_l.jpg",
    txt : 'to jest slajd pierwszy'
},{
    image : "/pictures/SYDNEY_BIALA_l.jpg",
    txt : 'to jest slajd drugi'
},{
    image : "/pictures/Etna2_l.jpg",
    txt : 'to jest slajd trzeci'
}]
let counter = 0;
let flag = true;
const changeDots = ()=>{
   let realIndex =  dots.findIndex(dot => dot.classList.contains('current'));    
   dots[realIndex].classList.remove('current'); 
   dots[counter].classList.add('current');
  
}
const changeSlide = ()=>{
  if(flag === true){
    img.src = SliderItems[counter].image;
    sliderTxt.textContent = SliderItems[counter].txt;
    counter++;
    if(counter == SliderItems.length){
        counter = 0;
    }
    changeDots();
    setTimeout(changeSlide,2000)
  }
  
 
}
let number = 0;
changeSlide();
let time = ()=>{
   
    number++;
    
    setTimeout(time,1000)
    if(number === 10){
        flag = true;
        changeSlide();
        console.log(number)
    }
}
const userSwap = (e)=>{
    number = 0;
    console.log(counter)
    flag = false;
   let key = e.keyCode;
     if(key === 37){
        img.src = SliderItems[counter--].image;
     
       
        if(counter === -1){
           
            counter = 2;
         
          
        }
    }
    else if(key === 39){
        img.src = SliderItems[counter++].image;
      
        if(counter === SliderItems.length){
            counter =0;
           
           
        }
    }
    time()
    
   
}

window.addEventListener('keydown',userSwap);
*/
/*
const trainingDiv = document.querySelector('.training');

function time(sec){
    let number = sec;
    function counter(){
        setInterval(()=>{
            trainingDiv.textContent = `mineło ${++number} sekund`
        },1000)
    }
    return counter;
}
const timer = time(0);
timer();
*/
/*
const trainingDiv = document.querySelector('.training');


const printTime = ()=>{
    const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
    trainingDiv.textContent = `${hours} : ${minutes} : ${second}`;
}
setInterval(printTime,1000)
*/
/*
const trainingDiv = document.querySelector('.stoper');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('reset');



const stoper = ()=>{
    let seconds = 0;
    let minutes = 0;
    setInterval(()=>{
      
        seconds++
        trainingDiv.textContent = `${minutes}.${seconds}`;
        if(seconds > 10){
            minutes++;
            seconds =0;
        }
    },100)
}

startBtn.addEventListener('click',stoper)
*/
