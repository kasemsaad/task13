// var myHttp=new XMLHttpRequest()
// var apicontainer;
// myHttp.open('GET','https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90ca55dd74134e2ea79e42d805a0118d')
// myHttp.send()
// myHttp.addEventListener('readystatechange',function(){
//    if(myHttp.readyState == 4){
//       var myres=JSON.parse(myHttp.response)
//       apicontainer=myres.articles
      
//       display() 
//    }
// })
var mycategory=document.querySelectorAll('.navbar li')
console.log(mycategory)
var categorySrc;
var items;
for(var i=0;i<mycategory.length;i++){
   mycategory[i].addEventListener('click',function(e){
      console.log(e.target.getAttribute('category'))
      categorySrc=e.target.getAttribute('category')
      getapi(categorySrc)

   })
   
}
async function getapi(categorySrc){
   var resp=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categorySrc}&apiKey=90ca55dd74134e2ea79e42d805a0118d`)
   var endresp=await resp.json()
   apicontainer=endresp.articles
   display()
}

getapi(`general`)


function display(){
var box=``;
for(var i=0;i<apicontainer.length;i++){      
   if(apicontainer[i].title!==null&&apicontainer[i].description!==null&&apicontainer[i].urlToImage!==null){
      box+=`
      <div class="col-md-4 pt-3 ">
      <div class="post shadow h-100  ">
      <img class"w-25 " src="${apicontainer[i].urlToImage}" alt="">
      <h3>${apicontainer[i].title.split(' ').splice(0,5).join(' ')}</h3>
      <p>${apicontainer[i].description.split(' ').splice(0,13).join(' ')}</p>
      <a class="aa btn" href="${apicontainer[i].url}">more...</a>
      </div>
      </div>`

      document.getElementById('showdata').innerHTML=box;
   }
   else{
     
   }
 
 
}
}
