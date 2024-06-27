// SELECTEURS
// document.querySelector('h4').style.background = "red";

// const baliseHTML = document.querySelector("h4")

// baliseHTML.style.background="red"

// Click event
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const questionContainer = document.querySelector(".click-event");
const answer = document.querySelector("p")

questionContainer.addEventListener('click',() => {
    questionContainer.classList.toggle("question-click")});

btn1.addEventListener('click',()=> {
    answer.classList.add("show-response")
    answer.style.background="green"
});

btn2.addEventListener("click",()=>{
    answer.classList.add("show-response")
    answer.style.background="red"
});

// div > #id > .class > baliseHTML

// mouse event 

const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove',(e)=>{
    mousemove.style.left= e.pageX +"px";
    mousemove.style.top=e.pageY+"px"
})

mousemove.addEventListener('mousedown',()=>{
    mousemove.style.transform='scale(2) translate(-25%,-25%)'
})


mousemove.addEventListener('mouseup',()=>{
    mousemove.style.transform='scale(1) translate(-50%,-50%)'
})

questionContainer.addEventListener("mouseenter",()=>{
    questionContainer.style.background='rgba(0,0,0,0.6)'
})

questionContainer.addEventListener("mouseout",()=>{
    questionContainer.style.background='rgba(255,255,255,1)'
    questionContainer.style.transition='1s ease'
})

answer.addEventListener("mouseover",()=>{
    answer.style.transform="rotate(2deg)"
})

// keypress

const keypressContainer = document.querySelector(".keypress")
const key = document.getElementById('key')
const ring = (key) =>{
    const audio = new Audio()
    audio.src= key +".mp3"
    audio.play()
}

document.addEventListener('keypress',(e)=>{
    key.textContent = e.key
    
    if (e.key ==='j'){
        keypressContainer.style.background='pink'
    }

    // si j'ai un mp3 avec un nom de touche 
    // ring(e.key) 
})

// scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    console.log(window.scrollY)

    if (window.scrollY>50){
        nav.style.top=0
    } else {
        nav.style.top='-50px'
    }
})
// ---------------------------------------------------
// form event
const inputName = document.querySelector('input[type="text"]')
const select =document.querySelector("select")
const form = document.querySelector("form")
let pseudo = ""
let language =""

inputName.addEventListener('input',(e)=>{
    pseudo=e.target.value
    console.log(pseudo)
})

select.addEventListener('input',(e)=>{
    language = e.target.value
    console.log(language)
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    if (cgv.checked){
        document.querySelector("form > div").innerHTML=`
        <h3>Pseudo : ${pseudo}</h3>
        <h4>langue pref : ${language}</h4>
        `
    } else {
        alert('acceptez les cgv')
    }
})

// load event

window.addEventListener("load",()=>{
    
})

//ForEach

const boxes = document.querySelectorAll(".box")

boxes.forEach((box)=> box.addEventListener('click',(e)=>
    e.target.style.transform='scale(0.7)'
))

// addEventListener vs onclick
// le onclick écrase le précédent
//bubbling
document.body.addEventListener("click",()=> console.log("click1"), false)
//usecapture 'prio sur tout'
document.body.addEventListener("click",()=> console.log("click2"), true)
// Stop propagation stop l'event du click1 
// questionContainer.addEventListener("click",(e)=> {alert('test');
// e.stopPropagation()
// })


//removeEventListener
//BOM

// window.open('http://google.com') POP UP

// EVENT ADOSSE A WINDOW
btn2.addEventListener('click',()=>{
    confirm("voulez vous vraiment cette réponse")
})
let answer1
// prompt
btn1.addEventListener('click',()=>{
     answer1 = prompt('entre ta valeur');

     questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";

})