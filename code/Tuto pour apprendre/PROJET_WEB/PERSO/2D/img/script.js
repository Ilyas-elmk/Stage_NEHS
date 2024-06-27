function Tomahawk() {
    // Définition des propriétés de l'objet Tomahawk
    Tomahawk._classes = {}; // Stockage des définitions de classes
    Tomahawk._extends = []; // Stockage des relations d'héritage
  
    // Méthode pour enregistrer une classe
    Tomahawk.registerClass = function(classDef, className) {
      Tomahawk._classes[className] = classDef;
    };
  
    // Méthode pour définir une relation d'héritage
    Tomahawk.extend = function(p_child, p_ancestor) {
      Tomahawk._extends.push({"child": p_child, "ancestor": p_ancestor});
    };
  
    // Méthode pour récupérer la classe parente d'une classe
    Tomahawk._getParentClass = function(child) {
      var i = 0;
      var max = Tomahawk._extends.length;
      
      for (i = 0; i < max; i++ ) {
        obj = Tomahawk._extends[i];
        if (obj["child"] == child) {
          return obj;
        }
      }
  
      return null;
    };
  
    // Méthode pour établir l'héritage entre deux classes
    Tomahawk._inherits = function(obj) {
      var child = null;
      var ancestor = null;
      var superParent = Tomahawk._getParentClass(obj["ancestor"]);
      
      if (superParent!= null) {
        Tomahawk._inherits(superParent);
      }
  
      child = Tomahawk._classes[obj["child"]];
      ancestor = Tomahawk._classes[obj["ancestor"]];
      
      if (child!= null && ancestor!= null) {
        ancestor = new ancestor();
        for (var prop in ancestor) {
          if (!child.prototype[prop]) {
            child.prototype[prop] = ancestor[prop];
          }
        }
      }
    };
  
    // Méthode pour lancer l'établissement de l'héritage pour toutes les classes
    Tomahawk.run = function() {
      var obj = null;
      var i = 0;
      var max = Tomahawk._extends.length;
          
      for (i = 0; i < max; i++ ) {
        Tomahawk._inherits(Tomahawk._extends[i]);
      }
    };
  }










/*
* Retourne une référence à l'objet canvas
*/
function getCanvas(){
    return document.getElementById("tomahawk");
}

/*
* Retourne le contexte d'exécution 2d du canvas
*/
function getContext(){
    return getCanvas().getContext("2d");
}

/* Point d'entrée de l'application */
function init(){
    //code de notre Application
    var canvas = getCanvas();
    var context = getContext();
    var texture = document.getElementById('perso1');
    
    context.save(); // sauvegarde 1
//-------------------------------------------------------------------------------------------------------------------------
//     // Une ombre rouge décalé de 20px et faisant 20px avec une qualité de flou de 2 
//     context.shadowColor = "#FF0000";
//     context.shadowBlur = 2;
//     context.shadowOffsetX = 20;
//     context.shadowOffsetY = 20;
//     // position et taille de l'image dans le canvas X,Y,WIDTH,HEIGHT
//     //les 4 derniers sont la Portion de texture que je veux dessiner en prennant les parametres derriere
//     context.drawImage(texture,0,0,100,100,0,0,200,200);
//     context.restore();
//-------------------------------------------------------------------------------------------------------------------------
// context.beginPath();
// context.fillStyle = "blue";
// context.fillRect(0,0,55,55);
// context.fill();
// context.globalCompositeOperation = "source-atop";
// context.beginPath();
// context.fillStyle = "red";
// context.arc(50,50,35,0,2 * Math.PI,false);
// context.fill();
// Il s'agit d'une opération en deux étapes :

// tout d'abord, on dessine le masque sur l'objet context (ici le rectangle bleu) ;
// ensuite, on spécifie la valeur de la propriété globalCompositeOperation de l'objet context (ici source-in) ;
// puis on dessine le contenu que l'on souhaite voir apparaître à travers le masque (le cercle rouge)
//-------------------------------------------------------------------------------------------------------------------------
}
 
/* Quand toutes les données sont chargées ( DOM, Images, Sons, Vidéos, etc. )
* On démarre l'application par la fonction init
*/
 window.onload = init;

