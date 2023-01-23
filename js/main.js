maj();

function addZero(x){
    if (x<10){
        x="0"+x;
    }
    return x;
}

let timer = setInterval(maj,1000);

function maj(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // MAJ DES HEURES
    let nH = document.querySelector("#h-"+h);
    nH.innerHTML=`<span>${h}</span>`;
    nH.style.backgroundColor="#B22222";
    nH.style.color="white";
    // reset heure précédente :
    let previousH;
    if (h==0){
        previousH = document.querySelector("#h-23");
    }else{
        previousH = document.querySelector("#h-"+(h-1));
    }
    previousH.innerHTML=``;
    previousH.style.backgroundColor="#fff";


    // MAJ DES MINUTES 
    let nM = document.querySelector("#m-"+m);
    nM.innerHTML=`<span>${m}</span>`;
    nM.style.backgroundColor="#b39800";
    nM.style.color="white";
    // reset minute précédente :
    let previousM;
    if (m==0){
        previousM = document.querySelector("#m-59");
    }else{
        previousM = document.querySelector("#m-"+(m-1));
    }
    previousM.innerHTML=``;
    previousM.style.backgroundColor="#FFF";

    // reset secondes précédente :
    for (i=0;i<60;i++){
        let reset = document.querySelector("#s-"+(i));
        reset.innerHTML=``;
        if (s==0){
            reset.style.backgroundColor="#FFF";
        }
    }
    // MAJ DES SECONDES
    let nS = document.querySelector("#s-"+s);
    nS.innerHTML=`<span>${s}</span>`;
    nS.style.backgroundColor="#51ac5f";
    nS.style.color="white";
}