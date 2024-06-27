let ctx = document.getElementById('canvas')
let context = ctx.getContext('2d')
var interval
const alien = document.getElementById('alien')
const vaisseau = document.getElementById('vaisseau')

class Objet{
    constructor(x,y,img){
        this.x = x
        this.y = y
        this.img = img
        this.active = true
    }
}
class missile{
    constructor(x,y,dy){
        this.x = x
        this.y = y
        this.dy = dy
    }
}

missile.prototype.move = function(){
    this.y += this.dy
    return this.y > 0 && this.y < 600
}

missile.prototype.draw = function(context){
    context.fillStyle = '#000'
    context.fillRect(this.x-1,this.y,3,20)
}
Objet.prototype.draw = function(context){
    this.active && context.drawImage(this.img,this.x,this.y,40,40)
}

Objet.prototype.bouger = function(dx,dy){
    this.x += dx ; this.y += dy
}
Objet.prototype.toucher = function(tir) {
    function between(x, a, b) { return a < x && x < b}
    return this.active && between(tir.x, this.x, this.x+40) && between(tir.y+10, this.y, this.y+20)
  }
  Objet.prototype.tir = function(dy){
    return new missile(this.x+20,this.y+20,dy)
}

var aliens = []
var vaisseau1 = new Objet(230,550,vaisseau)
let alienDx = -5 // initialize alienDx
var tirAlien,tirVaisseau

function init(){
    const img = document.getElementById('alien')
    for (let y = 0 ; y<3;y++){
        for (let x = 0 ; x < 8 ; x++){
            aliens.push(new Objet(50+x*50,20+y*50,img))
        }
    }
}
function gameOver(){
    alert('game over')
    clearInterval(interval)
}
function bouger(){
    let gaucheX = aliens[0].x, droiteX = aliens[aliens.length-1].x
    if (gaucheX <= 20 || droiteX >= 440) alienDx = -alienDx
    aliens.forEach(inv=>inv.bouger(alienDx,1))
    if (tirAlien &&!tirAlien.move()){
        tirAlien = null
    }
    if (!tirAlien){
        var active = aliens.filter(i=>i.active)
        
        var r = active[Math.floor(Math.random()*active.length)]
        
        tirAlien = r.tir(20)
    } else { 
        if (vaisseau1.toucher(tirAlien)) {
            gameOver();
        }

    }
    if (tirVaisseau){
        var hit = aliens.find(inv => inv.toucher(tirVaisseau))
        if (hit){
            hit.active = false
            tirVaisseau = null
        }else  {
            if (!tirVaisseau.move()) tirVaisseau = null
        }
    }
}

function dessiner(){
    context.fillStyle = '#ddd'
    context.fillRect(0,0,500,600)
    aliens.forEach(inv => inv.draw(context))
    vaisseau1.draw(context)
    tirAlien && tirAlien.draw(context)
    tirVaisseau && tirVaisseau.draw(context)
}

function jeu(){
    bouger()
    dessiner()
}

function start(){
    init()
    document.addEventListener("keydown",function(e){
        if(e.keyCode==37&& vaisseau1.x > 40 ){
            vaisseau1.bouger(-20,0)}
        if(e.keyCode==39&& vaisseau1.x < 420 ){
            vaisseau1.bouger(20,0)}
        if(e.keyCode==32 && !tirVaisseau){
            tirVaisseau = vaisseau1.tir(-30)
        }
    })
    interval = setInterval(jeu,50)
}
window.onload = start