const form=document.querySelector('.register__form');
const input=document.getElementById('inputJs');
const input2=document.getElementById('inputJss');
const input3=document.getElementById('inputUserName');
const password=document.querySelector('.password');
const password2=document.querySelector('.password2');
const btn1=document.getElementById('btnADD');
const list=document.getElementById('list');
let error =document.querySelector('.error');
let newFolder=[];

function addFolder(text){
    newFolder.push(text);
   renderFolder();
}

function DeleteBtn(i){
 newFolder=[];
 renderFolder();
 console.log(newFolder)
}

function renderFolder(){
    list.innerHTML="";
    newFolder.forEach((folder,index)=>{
        list.innerHTML+=`<div class="news">
        <h3>${folder}</h3></div>`;
    });
    if (!newFolder.length==0){
        list.innerHTML+=`<button onclick='DeleteBtn()' class="delBtn">Delete</button>`;
        console.log(newFolder);
    }
}


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let value=input.value.trim();
  let value2=input2.value.trim();
  let value3=input3.value.trim();
  let value4=password.value.trim();
  let value5=password2.value.trim();


  if(value4==value5){
    newFolder=[];
    console.log("click");
     addFolder('Firstname: '+value);
     addFolder('Lastname: '+value2);
     addFolder('Username: '+value3);
     addFolder('Password: '+value4);
     addFolder('Confirm password: '+value5);
     error.innerHTML='';
  }else{
     error.innerHTML='error';
  }
})