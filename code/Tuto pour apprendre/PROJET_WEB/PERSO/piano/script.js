const note = document.querySelectorAll(".note"),
    boite = document.querySelector('.boite'),
    fermeture = document.querySelector('#fermeture'),
    playnote = (key) =>{
        const audio = new Audio("asset/" + key +".wav")
        audio.play()};

function enleve(e){
    if (e.propertyName!=="transform") return;
    this.classList.remove("playing")
}

console.log(note)


window.addEventListener('keypress',(e)=>{
    key=e.key

    if (key){
        playnote(key)
        note.classList.add("playing")
    }
})
    


fermeture.addEventListener('click',(e)=>{
    if(e.pressure===0){
        boite.style.filter='opacity(0)'

    }

})
