const taskCounter = document.querySelector('.header__span');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const ul = document.querySelector('.header__ul');
const li = document.querySelectorAll('.main');
//// adding listener on form submit //////
let liArray =[];

const removeTask = (e)=>{
     let arrayIndex = e.target.parentNode.dataset.active;
    e.target.parentNode.remove();
     liArray.splice(arrayIndex,1);
     console.log(liArray);
     ul.textContent = '';
     liArray.forEach((li,index)=>{
         
         li.dataset.active = index;
         li.classList.add('main');
         ul.appendChild(li);
     })
   

}

const addTask = (e)=>{
    e.preventDefault();
    
    let inputText = formInput.value;
    
    if(!inputText)return;
    const li = document.createElement('li');
    li.innerHTML = `${inputText} <button class ="delete">usun</button>`;
    liArray.push(li);
    ul.appendChild(li);
    ul.textContent = '';
    liArray.forEach((li,index)=>{
        
        li.dataset.active = index;
        li.classList.add('main');
        ul.appendChild(li);
    })
    const deleteButtons = document.querySelectorAll('.delete');
    formInput.value = '';
    console.log(liArray);
    
    deleteButtons.forEach((button)=>{
        button.addEventListener('click',removeTask);
    })
  

    
}

form.addEventListener('submit',addTask);

