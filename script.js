let rubrik = document.querySelector("h1");
rubrik.textContent="JavaScript it is";
let p = document.querySelector("p");
p.textContent="Text has changed due to javascript";
let text = document.querySelector(".text");
text.style.border="4px solid black";
text.style.marginLeft="10vw";
text.style.marginRight="10vw";
rubrik.classList.add('xtra');
document.body.style.backgroundColor="#e9dd99";
let listan = document.querySelector("ul");
let li_1 = document.createElement("li");
li_1.textContent="Lära javascript syntax";
listan.appendChild(li_1);
let li_2=document.createElement("li");
li_2.textContent="Lära document objektet";
listan.appendChild(li_2);
listan.style.display="flex";
listan.style.flexDirection="column";
listan.style.alignItems="center";
let li_array=document.querySelector("li");
for(let i=0; i<li_array.length; i++){
    li_array[i].style.fontWeight="bold";
}
