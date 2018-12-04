var Matrix = function(data){
    //Todo: comprobación longitudes de datos
    this.rows = data!=undefined ? data.length : 0;
    this.cols = data[0] != undefined ? data[0].length: 0;
    this.values = data;
}

Matrix.prototype.size = function(){
    return [this.rows,this.cols];
} 

Matrix.prototype.identity = function(n){
    let a = [];
    let aux = [];    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i==j){
                aux.push(1);
            }else{
                aux.push(0);
            }
        }
        a.push(aux);
        aux=[];
    }
    return a;
} 

Matrix.prototype.transpose = function(){
    let aux = this;
    return Object.keys(aux.values).map(function(c) {
        return aux.values.map(function(r) { return r[c]; });
    });
}

Matrix.prototype.inverse = function(){
    
}