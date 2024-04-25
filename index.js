 function clicked(btnName){
  //  getElementTextById('sit')
  //  setBackgroundColorById(sit)
  // console.log(sit);

  
let allClassName = document.getElementsByClassName('sit');
console.log(allClassName.innerHTML);
  
 }

 function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-[#1DD100]');
  console.log(elementId);
}


function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}


