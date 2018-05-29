var articles = [
  "First Article Title",
  "JavaScript Is ES7",
  "HTML5 evolves",
  "Java"
];
var views = [
  10,
  2,
  4,
  0
];

function showResults(){
  //1)cautam imputu
  var input = document.getElementById('search-input');
  var val = input.value;
  console.log(val);


  var ul = document.getElementById('results');
  var n = 0;
  ul.innerHTML="";
  for(var i=0; i < articles.length; i++){
     if(articles[i].toLowerCase().startsWith(val.toLowerCase())){
       n++; // mai numaram un rezultat!!!!!!!!!!!!
        //adaugam un element!!!!!!!!!!!!!!!
        var li = document.createElement('li');
        // li.innerHTML = articles[i];
        //li.innerHTML = articles[i].replace(val,'<b>'+ val +'</b>');
        // REGULAR EXPRESSIONS
        li.innerHTML = articles[i].replace(new RegExp(val,"i"),'<b>'+ val +'</b>');
        ul.appendChild(li);
        //!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
  }


var li = document.createElement('li');
li.innerHTML = "<small>Au fost gasite " + n + "   resultate</small>";

ul.appendChild(li);
}
//
