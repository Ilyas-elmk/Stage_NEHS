function AssetLoaders(){
  this._loadingList = [];
}

Tomahawk.registerClass(AssetLoaders,"AssetLoaders");

AssetLoaders._instate = null;
AssetLoaders.getInstance = function(){
  (AssetLoaders._instance == null)
  AssetLoaders._instance = new AssetLoaders();

  return AssetLoaders._instance;
};

AssetLoaders.prototype.onComplete = null;
AssetLoaders.prototype._loadingList = null;
AssetLoaders.prototype._data = null;

AssetLoaders.prototype._getData = function(){
  return this._data;
}

AssetLoaders.prototype.addFile = function(fileURL,fileAlias){
  this._data = {}
  this._loadingList.push({url:fileURL,alias:fileAlias});
};

AssetLoaders.prototype.load = function(){
  if(this._loadingList.length==0){
    if(this.onComplete){
      this.onComplete();
    }
  } else {
    var obj = this._loadingList.shift();
    var scope = this
    var image = new Image();
    image.onload = function(){
      scope._onLoadComplete(image,obj.alias);
    };
    image.src = obj.url
  }
};

AssetLoaders.prototype._onLoadComplete = function(image,alias){
  this._data[alias] = image
  this.load();
}





