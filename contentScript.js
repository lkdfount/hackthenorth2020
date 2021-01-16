
const FIND = "the";
const contents = document.querySelectorAll('a,p,li,span,h1,h2,h3,h4,h5,h6,div');
for(const snippet of contents){
  if (snippet.textContent.includes(FIND)){
  	snippet.style.color = "#B62352";
  	snippet.style.fontWeight = "bold";
    snippet.addEventListener("click", () => myFunction(snippet.textContent));
  }
}

function myFunction(snip) {
  if (window.confirm("Looks like you clicked " + FIND + "." +
  	"\n\nIf you click OK you will be redirected to a website with a different view." + 
  	"\n\nIf you want to stay here, click cancel.")) 
    {
      window.location.href='https://www.nytimes.com/ca/';
    };
}
