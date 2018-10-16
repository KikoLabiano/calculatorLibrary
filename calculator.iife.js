var calculatorIIFE = (function(options){
    "use strict";
     
    let miCalc = {};

    //Objeto miCalc sin ninguna utilidad por ahora.
    if(options!==undefined)
    {
        miCalc = {
            listNames: options.lstN,
            listOps: options.lstO,
            name: options.name,
            favOp: options.op
        };  
    }
    else
    {
        miCalc = {
            listNames: ["Pitagorin", "Cientifica", "Casio"],
            listOps: ["add", "substract", "multiply", "divide"],
            name: "Default calc",
            favOp: "add"
        };  
    }

    var publicAPI ={
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
            let childNodeCounterInner;           
            if(typeof(Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    childNodeCounter = document.createElement("div"); 
                    childNodeCounter.classList.add("counter-back");
                    childNodeCounterInner= document.createElement("div"); 
                    childNodeCounterInner.classList.add("counter-mask");
                    childNodeCounter.append(childNodeCounterInner);
                    elt.appendChild(childNodeCounter); 
                    w = new Worker("./web_workers/ww_counter.js");
                    w.postMessage([init,wait]);
                }
                w.onmessage = function(event) {     
                    if(!isNaN(event.data)){       
                        if(event.data < end){        
                            childNodeCounterInner.innerHTML = event.data;  
                            //TODO: Ajustar ancho y alto del container según el tamaño del contador
                            // if(event.data.toString().length>4)
                            // {
                            //     elt.style.transform("scale(1.5))");
                            // }                            
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
            miCalc.name = miCalc.listNames[Math.floor(Math.random()*miCalc.listNames.length)];
            miCalc.favOp = miCalc.listOps[Math.floor(Math.random()*miCalc.listOps.length)];
            return miCalc;
        }        
    }
    return publicAPI;
})();