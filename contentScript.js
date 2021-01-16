const FIND = "Trump";
const REPLACE_WITH = "???";
const regex = new RegExp(FIND, "gi");
const contents = document.querySelectorAll('a,p,li,span,h1,h2,h3,h4,h5,h6');
//const contents = document.querySelectorAll('a[href*="http://www.cbc.ca"]');
for(const snippet of contents){
    //if (snippet.contains("Trump")){
        snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
    //}
}