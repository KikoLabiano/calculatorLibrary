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
            let w;
            let childNodeCounter;            
            if(typeof(Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    childNodeCounter = document.createElement("div"); 
                    elt.appendChild(childNodeCounter); 
                    w = new Worker("./web_workers/ww_counter.js");
                    w.postMessage([init,wait]);
                }
                w.onmessage = function(event) {     
                    if(!isNaN(event.data)){       
                        if(event.data < end){        
                            childNodeCounter.innerHTML = event.data;  
                        }
                        else{
                            w.terminate();
                            w = undefined;
                        }
                    }
                };
            } else {
                elt = "Lo sentimos, su navegador no soporta Web Workers...";
            }
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