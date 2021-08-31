var liElement="<li class=\"element\"><span class=\"nome\"></span><span class=\"offerta\"></span><span class=\"carrozza\"></span><span class=\"codice\"></span><span class=\"costo\"></span></li>"
var tiketsRecap = document.getElementById("tiketsRecap");
var userAgeInput = document.getElementById("userAge");
var userNameInput = document.getElementById("userName");
var DistanceInput = document.getElementById("distance");
document.getElementById("deleteForm").addEventListener("click", function deleteForm(){
    tiketsRecap.innerHTML="<li class=\"element\"><h3>NOME PASSEGGERO</h3><h4>Offerta</h4><h4>Carrozza</h4><h4>Codice CP</h4><h4>Costo Biglietto</h4></li>";
    document.getElementById("dataContainer").classList.add("d-none");
    document.getElementById("insertData").innerHTML="Genera";
    document.getElementById("secondTitle").classList.add("d-none");
});

document.getElementById("insertData").addEventListener("click", function insertData()
{
    let userName = userNameInput.value;
    let distance = parseInt(DistanceInput.value);
    let age = userAgeInput.value;
    userNameInput.value="";
    DistanceInput.value="";
    userAgeInput.value="";
    userAgeInput.selectedIndex = "0";
    userAgeInput.focus();
    if(userName!="" && !isNaN(distance) && age!="empty" && distance>0){
        let i=tiketsRecap.getElementsByClassName("element").length-1;
        if(i==-1){
            i=0;
            tiketsRecap.innerHTML="<li class=\"element\"><h3>NOME PASSEGGERO</h3><h4>Offerta</h4><h4>Carrozza</h4><h4>Codice CP</h4><h4>Costo Biglietto</h4></li>";
        }
        tiketsRecap.innerHTML+=liElement;
        document.getElementById("insertData").innerHTML="Aggiungi passeggero";
        distance*=0.21;
        document.getElementById("dataContainer").classList.remove("d-none");
        document.getElementById("secondTitle").classList.remove("d-none");
        tiketsRecap.getElementsByClassName("nome")[i].innerHTML=userName;
        if(age=="minorenne"){
            age="Offerta Junior";
            distance*=0.8;
        }else if(age=="maggiorenne"){
            age="Biglietto Standard";
        }else{
            age="Offerta Silver";
            distance*=0.6;
        }
        tiketsRecap.getElementsByClassName("offerta")[i].innerHTML=age;
        tiketsRecap.getElementsByClassName("carrozza")[i].innerHTML=Math.floor(Math.random()*9+1);
        tiketsRecap.getElementsByClassName("codice")[i].innerHTML=Math.floor(Math.random()*90000+10000);
        distance = (distance*0.21).toFixed(2);
        tiketsRecap.getElementsByClassName("costo")[i].innerHTML=distance+"€";
    }
});