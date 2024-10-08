function funkcija() {
    var a = parseFloat(document.getElementById("punkti").value);
    if (isNaN(a)) { // check if input is a valid number
        document.getElementById("izvade").innerHTML = "Nederīgs skaitlis";
        document.getElementById("k").innerHTML = "Kopā: "; 
        document.getElementById("1").innerHTML = "I(40%): "; 
        document.getElementById("2").innerHTML = "II(26%): ";
        document.getElementById("3").innerHTML = "III(20%): ";
        document.getElementById("4").innerHTML = "IV(14%): ";
        document.getElementById("punkti").value = ""; 
        return;
    }
  var a1=a*0.4
  var a2=a*0.26
  var a3=a*0.2
  var a4=a*0.14
    document.getElementById("k").innerHTML = "Kopā: "+a;
    document.getElementById("1").innerHTML = "I(40%): " + a1.toFixed(1); 
    document.getElementById("2").innerHTML = "II(26%): " + a2.toFixed(1);
    document.getElementById("3").innerHTML = "III(20%): " + a3.toFixed(1);
    document.getElementById("4").innerHTML = "IV(14%): " + a4.toFixed(1);
    document.getElementById("izvade").innerHTML = " ";
document.getElementById("punkti").value = ""; }