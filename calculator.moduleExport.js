var calculatorModule = (function(options){
    "use strict";
    
    let listNames = ["Pitagorin", "Cientifica", "Casio"];
    let listOps= ["add", "substract", "multiply", "divide"];    
    //let miCalc = {};

    //Objeto miCalc sin ninguna utilidad
    if(options!==undefined)
    {
        this.miCalc = {
            name: options.name,
            favOp: options.op
        };  
    }

    //Con anotación flecha (con una sóla sentencia el return está implícito)
    this.add = (a,b) =>  a + b;

    this.substract = (a,b) =>  a - b;

    this.multiply = function(a,b){
        return a * b;
    }

    this.divide = function(a,b){
        return a / b;
    }

    this.module = function(a,b){
        return a % b;
    }

    this.pot = function(a,b){
        return Math.pow(a,b);
    }

    this.counter = function(init,end,wait,elt)
    {
        let w;
        if(typeof(Worker) !== "undefined") {
            if(typeof(w) == "undefined") {
                w = new Worker("demo_workers.js");
                w.postMessage(init);
            }
            w.onmessage = function(event) {
                elt.innerHTML = event.data;
            };
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
        }
        w.startWorker();
        function start(){
            w.startWorker();
        }
    }

    //Función que realiza un cálculo asíncrono de la función pasada por parámetro
    this.calculoAsincrono = function(f,a,b){ 
        return new Promise(resolve=>{
            return resolve(f(a,b));
        });
    }

    //Crear un objeto miCalc aleatorio - Sólo por probar, sin ninguna utilidad práctica...
    this.randomizeProp = function(){
        this.miCalc.name = listNames[Math.floor(Math.random()*listNames.length)];
        this.miCalc.favOp = listOps[Math.floor(Math.random()*listOps.length)];
        return this.miCalc;
    }
 
});