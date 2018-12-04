// module "matrixCalculator.js"

    var matrixCalculator = (function(options){
        "use strict";  
    
        var publicAPI ={
            //Con anotación flecha (con una sóla sentencia el return está implícito)
            matrixSize: (matrix)=> matrix.size()            
        }
        return publicAPI;
    })();

export default matrixCalculator;