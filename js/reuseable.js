// show element by id
function hideElementById(idName){
    const element =document.getElementById(idName);
    element.classList.add('hidden')
}
// set background clr
function setBackgroundClrById(idName){
    const element =document.getElementById(idName);
    element.classList.add('bg-green-500')
}
// set innerText by id
function setInnerTextById(idName,value){
    const text= document.getElementById(idName).innerText;
    text=value;
}