let spinF = document.querySelector('.spin');
let stopF = document.querySelector('.stop');
let sacabampis = document.querySelector('.sacabampis');

let spinning = false;

function spinStart(){
    spinning = true;
    sacabampis.classList.add("rotate");
    console.log("spin");
}
function spinStop(){
    spinning = false;
    sacabampis.classList.remove("rotate");
    console.log("stop");
}

spinF.addEventListener("click", spinStart);
stopF.addEventListener("click", spinStop);
