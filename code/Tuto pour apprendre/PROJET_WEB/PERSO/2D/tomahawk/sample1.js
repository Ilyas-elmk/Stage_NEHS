/* Point d'entrée de l'application */
function init(){
    Tomahawk.run(); // on démarre la plateforme Tomahawk
    
    var scope = this;
    
    AssetLoader.getInstance().onComplete = onComplete;
    AssetLoader.getInstance().addFile("perso1.png","perso1");
    AssetLoader.getInstance().addFile("perso2.png","perso2");
    AssetLoader.getInstance().addFile("perso3.png","perso3");
    AssetLoader.getInstance().addFile("ground.png","ground");
    AssetLoader.getInstance().load();
}

function onComplete(){
    var data = AssetsLoader.getInstance().getData();
    var canvas = document.getElementById('tomahawk');
    var context = canvas.getContext('2d');
    for( var alias in data ){
        AssetsManager.getInstance().addImage(data[alias],alias);
    }
    
    // on crée un nouvel atlas
    var atlas = new TextureAtlas();
    
    // on lui associe une image qui sera celle partagée par toutes les textures stockée en son sein
    atlas.data = AssetsManager.getInstance().getDataByAlias("ground");
    
    // on crée deux textures différentes, portant un nom différent, ayant chacune la même image
    //, mais pas les mêmes portions d'image associées
    
    atlas.createTexture( "texture_1", 0,0,32,43);
    atlas.createTexture( "texture_2", 32,0,32,43);
    
    var texture = atlas.getTextureByName("texture_1");
    
    context.save();
    
    // on dessine la première texture
    context.drawImage(     texture.data, 
                        texture.rect[0], 
                        texture.rect[1],
                        texture.rect[2],
                        texture.rect[3],
                        0,
                        0,
                        100,
                        100 );
    
    texture = atlas.getTextureByName("texture_2");
                        
    // puis la deuxième
    context.drawImage(     texture.data, 
                        texture.rect[0], 
                        texture.rect[1],
                        texture.rect[2],
                        texture.rect[3],
                        110,
                        0,
                        100,
                        100 );
                        
    // en gros, nous avons dessiné les deux moitiés de l'image
    // sur une largeur et une hauteur de 100 pixels
    // les deux moitiés étant séparées de 10 pixels
    context.restore();
}

 window.onload = init;