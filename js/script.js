const taskCounter = document.querySelector('.header__span');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const ul = document.querySelector('.header__ul');
//// adding listener on form submit //////

const addTask = (e)=>{
    e.preventDefault();
    
    let inputText = formInput.value;
    if(!inputText)return;
    const li = document.createElement('li');
    li.innerHTML = `${inputText} <button>usun</button>`;
    ul.appendChild(li);
    
    formInput.value = '';
    
}
form.addEventListener('submit',addTask);
