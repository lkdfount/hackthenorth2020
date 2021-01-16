const FIND = "New York Times";
const contents = document.querySelectorAll('a,p,li,span,h1,h2,h3,h4,h5,h6,div');
for(const snippet of contents){
	if (snippet.firstChild!== null){
		if (snippet.firstChild.nodeValue!== null){
		    if (snippet.firstChild.nodeValue.includes(FIND)){
			  	console.log(snippet.firstChild.nodeValue);
			  	snippet.style.color = "#B62352";
			  	snippet.style.fontWeight = "bold";
			    snippet.addEventListener("click", () => myFunction(snippet.textContent));
		    }
		}
	}
}

function myFunction(snip) {
	if (window.confirm("Looks like you clicked " + FIND + "." +
  		"\n\nIf you click OK you will be redirected to a website with a different view." + 
  		"\n\nIf you want to stay here, click cancel.")) 
    	{
    		window.location.href='https://www.foxnews.com/politics/biden-stimulus-plan-bailout-blue-states-bad-lockdown-policies-waltz?fbclid=IwAR3_8R5ucEAzOaxie7nCqFrFj4mLjwviBBCImuOdsyeO2BbX0CCTdza8rrY';
    	};
}
