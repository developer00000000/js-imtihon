const btn=document.querySelector('#addBtn');
const menu=document.querySelector('.for__tablet__list');

btn.addEventListener('click', ()=>{
    menu.classList.toggle('show')
})