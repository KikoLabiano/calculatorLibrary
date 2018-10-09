var calculatorIIFE = (function(options){
    "use strict";
    
    let listNames = ["Pitagorin", "Cientifica", "Casio"];
    let listOps= ["add", "substract", "multiply", "divide"];    
    let miCalc = {};

    //Objeto miCalc sin ninguna utilidad
    if(options!==undefined)
    {
        miCalc = {
            name: options.name,
            favOp: options.op
        };  
    }

    return{
        //Con anotación flecha (con una sóla sentencia el return está implícito)
        add : (a,b) =>  a + b,

        substract : (a,b) =>  a - b,

        multiply: (a,b) => a * b,

        divide: (a,b)=> a / b,

        module: (a,b) =>  a % b,

        pot: (a,b) =>  Math.pow(a,b),

        counter: (init,end,wait,elt) =>
        {
            
        },
        
        //Función que realiza un cálculo asíncrono de la función pasada por parámetro
        calculoAsincrono: (f,a,b) => { 
            return new Promise(resolve=>{
                return resolve(f(a,b));
            });
        },

        //Crear un objeto miCalc aleatorio - Sólo por probar, sin ninguna utilidad práctica...
        randomizeProp: () => {
            miCalc.name = listNames[Math.floor(Math.random()*listNames.length)];
            miCalc.favOp = listOps[Math.floor(Math.random()*listOps.length)];
            return miCalc;
    }
}

})();