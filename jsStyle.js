const sectionSelector = document.getElementsByTagName('section');
console.log(sectionSelector);
sectionSelector[0].style.margin='20px'         
sectionSelector[0].style.gap='10px'
sectionSelector[1].classList.add('bg-gradient')


// ------------------- append method ---------
let newLi = document.createElement('li');
newLi.innerText='appeded from javascript'

const ulContainer = document.getElementById('ul-container');
ulContainer.appendChild(newLi)
// ----------------------chng inner html ------------------------------
const listItems = document.getElementsByClassName('title');
for(let list of listItems){
    console.log(list);
    // list.classList.add('font-color')
    list.innerHTML ='DOM is Changing'
}
listItems[2].style.color='red'
// listItems[1].classList.add('bg-gradient')


const  section2nd = document.getElementById('flex-section');
console.log(section2nd.childNodes);
console.log(section2nd.firstChild);
console.log(section2nd.firstChild.nextSibling);
console.log(section2nd.lastChild);

