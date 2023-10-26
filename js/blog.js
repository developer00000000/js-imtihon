function blogExport(){
    const input=document.querySelector('.input');
const posts=document.querySelector('.posts');
const pages=document.querySelector('.pagination');
let news;
let pageSize=4;

async function allData(){
    const response=await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=c31f8eafecbe4a7e8e359ad5cdc233f0');
    // 02d816bcbb5647e49628f22852207df4
    const data= await response.json();
    news=data.articles;
    newCard(news)
    pagination()
    console.log(news);
}
allData();

function newCard(postData){
     posts.innerHTML="";
     postData.slice(0,4).forEach((element)=>{
        posts.innerHTML+=`<div class="allNews">
        <img src="${element.urlToImage}"> 
       <div class="allNewsTitle"><h4>${element.title}</h4>
       <p>${element.description}</p>
       <div class="data_one">${element.publishedAt.slice(0,10)}</div></div>
        </div>`
     })
}

function serch(){
    let foundTitle=[];
    foundTitle=news.filter((i)=>
    i.title.toLowerCase().startsWith(input.value.toLowerCase()))
    newCard(foundTitle)
}
input.addEventListener('input',()=>{
    serch()
})

function pagination(){
    const totalPages=news.length/pageSize;
    for(let i=0; i<totalPages; i++){
       let button=document.createElement('button');
       button.textContent=i+1;
       console.log(button.textContent)

       pages.appendChild(button);
       button.addEventListener('click', ()=>{
          newCard(news.slice(i*pageSize,i*pageSize+pageSize))
       })
    }
   
}





}
blogExport()
export default blogExport;