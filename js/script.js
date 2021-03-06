const taskNumber = document.querySelector('.header__span');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const ul = document.querySelector('.header__ul');
const li = document.querySelectorAll('.main');
//// adding listener on form submit //////
let liArray =[];
let taskCounter = 0;
console.log(taskCounter);
const removeTask = (e)=>{
    taskCounter--;
    taskNumber.textContent = taskCounter;
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
    
    console.log(taskCounter);
    taskNumber.textContent = taskCounter;
    let inputText = formInput.value;
    
    if(!inputText)return;
    else if(inputText){
        ++taskCounter;
        taskNumber.textContent = taskCounter;
    }
    const li = document.createElement('li');
    li.innerHTML = `${inputText} <button class ="delete">remove</button>`;
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

