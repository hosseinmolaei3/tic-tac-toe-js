var c=document.querySelectorAll("input");
setInterval(function(){
    if((c[0].value==c[1].value)&&(c[0].value==c[2].value)&&(c[0].value!=0)){
        player(c[0].value);
        clearInterval();
    }
    if((c[0].value==c[4].value)&&(c[0].value==c[8].value)&&(c[0].value!=0)){
        player(c[0].value);
        clearInterval();
    }
    if((c[0].value==c[3].value)&&(c[0].value==c[6].value)&&(c[0].value!=0)){
        player(c[0].value);
        clearInterval();
    }
    if((c[3].value==c[3].value)&&(c[3].value==c[5].value)&&(c[3].value!=0)){
        player(c[3].value);
        clearInterval();
    }
    if((c[6].value==c[7].value)&&(c[6].value==c[8].value)&&(c[6].value!=0)){
        player(c[6].value);
        clearInterval();
    }
    if((c[1].value==c[4].value)&&(c[1].value==c[7].value)&&(c[1].value!=0)){
        player(c[1].value);
        clearInterval();
    }
    if((c[2].value==c[5].value)&&(c[5].value==c[8].value)&&(c[2].value!=0)){
        player(c[2].value);
        clearInterval();
    }
},100)
function player(e){
    document.getElementById("winner").innerHTML="player "+e+" winner";
    for (let i = 0; i < c.length; i++) {
        c[i].disabled=true;
    }
}
function ref(){
    location.replace("./index.html");
}