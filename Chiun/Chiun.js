var flag = false;
const dayofmonth = [30, 31, 31, 30, 31]; 
const dayBorn = new Date(2024, 10, 28);

function CountboxDisplay()
{
    Count2();
    if(flag){
        document.getElementById('countdown').removeAttribute("hidden");
        document.getElementById('countup').setAttribute('hidden', 'true');
    }
    else{
        document.getElementById('countup').removeAttribute("hidden");
        document.getElementById('countdown').setAttribute('hidden', 'true');
    }
    flag = !flag
}

/*
function DayLeft(){
    
    let td = new Date();
    let bMonth = dayBorn.getMonth();
    let tMonth = td.getMonth();
    if(tMonth > bMonth) return 1;

    let tDay = td.getDate();
    let re = dayBorn.getDate();

    while(tMonth < bMonth){
        re += dayofmonth[(--bMonth)-5];
    }
    return re - tDay;
}

function ZeroPadding(num){
    return (num<10?'0':'')+num;
}

function Count(){
    let dl = DayLeft();
    document.getElementById('daysleft').innerText = ZeroPadding(dl);
    dl = 280-dl;
    let wl = Math.floor(dl/7);
    document.getElementById('week').innerText = ZeroPadding(wl);
    document.getElementById('day').innerText = ZeroPadding(dl-wl*7);
}*/

function IsLeapYear(year){
    if(year%4===0){
        if(year%100===0&&year%400>0) return false;
        return true;
    }
    return false;
}

let dom=[31,28,31,30,31,30,31,31,30,31,30,31];
let dateob = new Date(2024,10,24);


function Count2(){
    let td = new Date();
    var dot = td.getDate();
    var mot = td.getMonth();
    var yot = td.getFullYear();
    
    var dob = dateob.getDate();
    var mob = dateob.getMonth();
    var yob = dateob.getFullYear();

    var Days = ((new Date(yot, mot, dot)) - (new Date(yob, mob, dob))).getTime()/86400000;
    document.getElementById('daysleft').innerText = ZeroPadding(Days);

    var Months = (yot - yob) * 12 + (mot - mob);

    if(dot>=dob){
        Days = dot-dob;
    } else if(mot===2){
        Months--;
        Days = dot - dob + (IsLeapYear(yot)?29:28);
    } else {
        Months--;
        Days = dot - dob + dom[mot===0?11:(mot-1)];
    }

    document.getElementById('week').innerText = ZeroPadding(Months);
    document.getElementById('day').innerText = ZeroPadding(Days);
}