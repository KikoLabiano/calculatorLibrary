// module "matrixCalculator.js"

    var matrixCalculator = (function(){
        "use strict";  
    
        var publicAPI ={
            //Con anotación flecha (con una sóla sentencia el return está implícito)
            matrixSize: (matrix)=> matrix.size()
        }
        return publicAPI;
    })();

export default matrixCalculator;