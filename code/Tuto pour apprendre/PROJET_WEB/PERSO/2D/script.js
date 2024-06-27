    const context = getContext();
    var canvas = document.getElementById('tomahawk');
    var width = canvas.width;
    var minWidth = canvas.style.minWidth
    var height = canvas.height;
    let x = 0; // define x
    let y = 0;
    console.log(width);
    
    const stickmanParameter = {
        armColor: "red",
        headColor: "yellow",
        legColor: "green",
        bodyColor: "brown",
        positionX: 140,
        positionY: 100,
        startAngle:0, // define startAngle
        endAngle: 2 * Math.PI // define endAngle
    }

    const defaultProperty = {
        armColor: "red",
        headColor: "red",
        legColor: "red",
        bodyColor: "red",
        positionX: 140,
        positionY: 100,
        startAngle:0, // define startAngle
        endAngle: 2 * Math.PI // define endAngle
    };

    function getContext(){
        const canvas =document.getElementById("tomahawk");
        return canvas.getContext("2d");
    }

    function verif(property) {

        const {headColor = defaultProperty.headColor} = property;
        // const headColor = property?.headColor ?? defaultProperty.headColor;
        const armColor = (property && property.armColor)? property.armColor : defaultProperty.armColor;
        const legColor = (property && property.legColor)? property.legColor : defaultProperty.legColor;
        const bodyColor = (property && property.bodyColor)? property.bodyColor : defaultProperty.bodyColor;
        const positionX = (property && property.positionX)? property.positionX : defaultProperty.positionX;
        const positionY = (property && property.positionY)? property.positionY : defaultProperty.positionY;
        const startAngle = (property && property.startAngle)? property.startAngle : defaultProperty.startAngle;
        const endAngle = (property && property.endAngle)? property.endAngle : defaultProperty.endAngle;
        return { headColor, armColor, legColor, bodyColor, positionX, positionY,startAngle , endAngle };
    }

    function head(head) {

        context.beginPath();
        context.fillStyle = head.headColor
        context.moveTo(head.positionX+x,40)
        context.arc(head.positionX+9+x,40,14,head.startAngle,head.endAngle,false) // context.arc(x,y,radius,startAngle,endAngle,counterClockwise)
        context.lineTo(150+x,40)
        context.fill();
    }

    function tronc(body){
        context.beginPath();
        context.lineWidth=5;
        //   commence   x, y
        context.moveTo(body.positionX+10+x,50);
        context.lineTo(body.positionX+10+x,100);
        // POUR FAIRE UNE LIGNE
        context.strokeStyle = body.bodyColor;
        context.stroke();
    }

    function brasDroit(arm){
        context.beginPath();
        context.lineWidth=5;
        context.moveTo(arm.positionX+10+x,50);
        context.lineTo(arm.positionX+20+x-(y/1.5),90+y);
        context.strokeStyle = arm.armColor;
        context.stroke();
    }

    function brasGauche(arm){
        context.lineWidth=5;
        context.moveTo(arm.positionX+10+x,50);
        context.lineTo(arm.positionX+x+(y/1.5),90+y);
        context.strokeStyle = arm.armColor;
        context.stroke();
    }

    function jambeDroite(leg){
        context.beginPath();
        context.lineWidth=5;
        context.moveTo(leg.positionX+10+x,100);
        context.lineTo(leg.positionX+5+x,140);
        context.strokeStyle = leg.legColor;
        context.stroke();
    context.beginPath();
    }

    function jambeGauche(leg){
        context.beginPath();
        context.lineWidth=5;
        context.moveTo(leg.positionX+10+x,100);
        context.lineTo(leg.positionX+15+x,140);
        context.strokeStyle = leg.legColor;
        context.stroke();
    context.beginPath();
    }

    function stickman(property) {
    let parameter = verif(property)

    head(parameter)

    tronc(parameter)

    brasDroit(parameter)

    brasGauche(parameter)

    jambeGauche(parameter)

    jambeDroite(parameter)
    }

    function deviceControl(gameControl){
        if (gameControl instanceof MouseEvent) {
            const movement ={
                moveLeft: 'q',
                moveRight : 'd',
                moveUp: 'z',
                moveDown:'s',
                speedX: 5
                
            }
            print('caca')
            return movement
            
        } else if (gameControl instanceof KeyboardEvent) {
            const movement ={
                moveLeft: 'q',
                moveRight : 'd',
                moveUp: 'z',
                moveDown:'s',
                speedX: 5    
            }
            return movement
        } else if (gameControl instanceof GamepadEvent) {
            const movement ={
                moveLeft: 'q',
                moveRight : 'd',
                moveUp: 'z',
                moveDown:'s',
                speedX: 5
            }
            return movement
        } 

    }
    function effacer(){
        context.clearRect(0,0,800,800)
    }

    function bouger(event) {
        const movement = deviceControl(event);
        const key = event.key.toLowerCase();
        let newX = x;
        let newY = y;

        switch (key) {
            case movement.moveLeft:
                newX -= movement.speedX;
                break;
            case movement.moveRight:
                newX += movement.speedX;
                break;
            case movement.moveUp:
                if (y < -45) {
                    stickman(stickmanParameter);
                    return;
                }
                newY -= 5;
                break;
            case movement.moveDown:
                if (y < 0) {
                    newY += 5;
                }
                break;
            default:
                return;
        }

        effacer();
        x = newX;
        y = newY;
        stickman(stickmanParameter);
    }

    init = () => {
        stickman(stickmanParameter)
        //code de notre Application
    }

    window.addEventListener('DOMContentLoaded', init, false);
    window.addEventListener('keypress',(event)=>{
        console.log(event)
        bouger(event)})


// FAIRE UN CARRE
// translate permet de positioner en fonction de x et y, fillRect le fait tout aussi bien
//-------------------------------------------------------------------------------------------------------------------------
// context.beginPath();
// context.translate(100, 25 );
// // // Permet d'agrandir en fonction de x et y 
// context.scale(1,1)
// context.fillStyle = "blue";
// context.rotate(45 * toRadians)
//                 //  x,y,largeur,hauteur
// context.fillRect( 0, 0, 50, 50 );
// context.fill();
//-------------------------------------------------------------------------------------------------------------------------
// // La sauvegarde marche comme une Stack 
// var context = getContext();

// context.save(); // sauvegarde 1
// context.translate( 50, 50 );
// context.scale( 2, 2 );

// context.beginPath();
// context.fillStyle = "red"
// context.fillRect( 0, 0, 100, 100 );
// context.fill();

// context.save(); // sauvegarde 2, ici les transformations et les paramètres de dessins sont sauvés.


// context.rotate( 60 * ( Math.PI / 180 ) );

// context.beginPath();
// context.fillStyle = "green"
// context.fillRect( 0, 0, 100, 100 );
// context.fill();

// context.restore(); // restaure la 2e sauvegarde

// context.beginPath();
// context.fillStyle = "blue"
// context.fillRect( 0, 0, 50, 50 );
// context.fill();

// context.restore(); // restaure la 1re sauvegarde

// context.beginPath();
// context.fillStyle = "purple"
// context.fillRect( 0, 0, 100, 100 );
// context.fill();
//-------------------------------------------------------------------------------------------------------------------------
//     var context = getContext();
// // ici on applique une translation AVANT le scale
//     context.translate( 47, 72 );
//     context.scale( 2, 2 );
    
//     context.beginPath();
//     context.fillStyle = "red";
//     context.fillRect( 0, 0, 100, 100 );
//     context.fill();
    
//     var context = getContext();
// // ici on applique une translation APRES le scale
//     context.scale( 2, 2 );
//     context.translate( 47, 72 );
    
//     context.beginPath();
//     context.fillStyle = "red";
//     context.fillRect( 0, 0, 100, 100 );
//     context.fill();

    // ordre : translation, rotation et l'échelle.
//-------------------------------------------------------------------------------------------------------------------------
//     var context = getContext();

// context.scale( 2, 2 ); // l'échelle est à 2
// context.scale( 0.5, 0.5 ); 
// // ici l'échelle ne vaut pas 0.5, MAIS 1, car j'ai MULTIPLIÉ la valeur 
// // de l'échelle courante par 0.5, donc le résultat est 1, pour avoir une valeur d'échelle à 2, il aurait 
// // fallu que j'applique un scale de 0,25
// Transparence
// context.globalAlpha = 0.5;
//-------------------------------------------------------------------------------------------------------------------------
// Pour faire un xman
