let count;
let wait;
onmessage = function(e) {
    count = e.data[0];
    wait = e.data[1];
};

function countIt(){
    count++;
    postMessage(count);
    setTimeout("countIt()",wait);
}

countIt();