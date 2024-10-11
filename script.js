var a;
var a0;
var a1;
var a2;
var a3;
var a4;
var a5;

function izdruka(){
    document.getElementById("k1").innerHTML = "Kopā: " + a0.toFixed(0);
    document.getElementById("11").innerHTML = "I (40%): " + a1.toFixed(1); 
    document.getElementById("22").innerHTML = "II (26%): " + a2.toFixed(1);
    document.getElementById("33").innerHTML = "III (34%): " + a5.toFixed(1);

    document.getElementById("k").innerHTML = "Kopā: " + a0.toFixed(0);
    document.getElementById("1").innerHTML = "I (40%): " + a1.toFixed(1); 
    document.getElementById("2").innerHTML = "II (26%): " + a2.toFixed(1);
    document.getElementById("3").innerHTML = "III (20%): " + a3.toFixed(1);
    document.getElementById("4").innerHTML = "IV (14%): " + a4.toFixed(1);
    document.getElementById("izvade").innerHTML = " ";
    document.getElementById("punkti").value = ""; }
    

    
function funkcija() {
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I (40%): "; 
        document.getElementById("2").innerHTML = "II (26%): ";
        document.getElementById("3").innerHTML = "III (20%): ";
        document.getElementById("4").innerHTML = "IV (14%): ";
        document.getElementById("punkti").value = ""; 
        document.getElementById("k1").innerHTML = "Kopā: "; 
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";
        return;
    }else{
    a0=a;
    a1=a*0.4;
    a2=a*0.26;
    a3=a*0.2;
    a4=a*0.14;
    a5=a3+a4;
    izdruka();}
}

function funkcija1(){
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I (40%): "; 
        document.getElementById("2").innerHTML = "II (26%): ";
        document.getElementById("3").innerHTML = "III (20%): ";
        document.getElementById("4").innerHTML = "IV (14%): ";
        document.getElementById("punkti").value = ""; 
        document.getElementById("k1").innerHTML = "Kopā: "; 
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";
        return;
    }else{
        a=a/0.4;
        a0=a;
        a1=a*0.4;
        a2=a*0.26;
        a3=a*0.2;
        a4=a*0.14;
        a5=a3+a4;
        izdruka();}
}
function funkcija2(){
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I (40%): "; 
        document.getElementById("2").innerHTML = "II (26%): ";
        document.getElementById("3").innerHTML = "III (20%): ";
        document.getElementById("4").innerHTML = "IV (14%): ";
        document.getElementById("punkti").value = ""; 
        document.getElementById("k1").innerHTML = "Kopā: "; 
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";
        return;
    }else{
        a=a/0.26;
        a0=a;
        a1=a*0.4;
        a2=a*0.26;
        a3=a*0.2;
        a4=a*0.14;
        a5=a3+a4;
        izdruka();}
}
function funkcija3(){
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I (40%): "; 
        document.getElementById("2").innerHTML = "II (26%): ";
        document.getElementById("3").innerHTML = "III (20%): ";
        document.getElementById("4").innerHTML = "IV (14%): ";
        document.getElementById("punkti").value = ""; 
        document.getElementById("k1").innerHTML = "Kopā: "; 
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";
        return;
    }else{
        a=a/0.2;
        a0=a;
        a1=a*0.4;
        a2=a*0.26;
        a3=a*0.2;
        a4=a*0.14;
        a5=a3+a4;
        izdruka();}
}
function funkcija4(){
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I (40%): "; 
        document.getElementById("2").innerHTML = "II (26%): ";
        document.getElementById("3").innerHTML = "III (20%): ";
        document.getElementById("4").innerHTML = "IV (14%): ";
        document.getElementById("punkti").value = ""; 
        document.getElementById("k1").innerHTML = "Kopā: "; 
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";
        return;
    }else{
        a=a/0.14;
        a0=a;
        a1=a*0.4;
        a2=a*0.26;
        a3=a*0.2;
        a4=a*0.14;
        a5=a3+a4;
        document.getElementById("k1").innerHTML = "Kopā: ";
        document.getElementById("11").innerHTML = "I (40%): "; 
        document.getElementById("22").innerHTML = "II (26%): ";
        document.getElementById("33").innerHTML = "III (34%): ";

        document.getElementById("k").innerHTML = "Kopā: " + a0.toFixed(0);
        document.getElementById("1").innerHTML = "I (40%): " + a1.toFixed(1); 
        document.getElementById("2").innerHTML = "II (26%): " + a2.toFixed(1);
        document.getElementById("3").innerHTML = "III (20%): " + a3.toFixed(1);
        document.getElementById("4").innerHTML = "IV (14%): " + a4.toFixed(1);
        document.getElementById("izvade").innerHTML = " ";
        document.getElementById("punkti").value = "";}
}
