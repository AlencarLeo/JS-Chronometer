let hh = 0;
let mm = 0;
let ss = 0;
let ml = 0;
let time;

function iniciar(){
    time = setInterval(()=>{
        timer();
    }, 10)
}
function parar(){
    clearInterval(time);
}
function zerar(){
    clearInterval(time);
    document.querySelector('h2').innerText = "00 : 00 : 00 : 00";
    hh = 0;
    mm = 0;
    ss = 0;
    ml = 0;
}

function timer(){
    ml++;
    if(ml == 60){
        ml = 0;
        ss++;
        if(ss == 60){
            ss = 0;
            mm++
            if(mm == 60){
                mm = 0;
                hh++
            }
        }
    }
    const format = (hh < 10 ? '0' + hh : hh) + " : " + (mm < 10 ? '0' + mm : mm) + " : " + (ss < 10 ? '0' + ss : ss) + " : " + (ml < 10 ? '0' + ml : ml);
    document.querySelector('h2').innerText = format;
}