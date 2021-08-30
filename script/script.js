// add addEventListener to buttons an select
// document.getElementById("insertData").addEventListener("click", insertData());
var liElement="<li class=\"element\"><span class=\"nome\"></span><span class=\"offerta\"></span><span class=\"carrozza\"></span><span class=\"codice\"></span><span class=\"costo\"></span></li>"
document.getElementById("deleteForm").addEventListener("click", function deleteForm(){
    document.getElementById("tiketsRecap").innerHTML="<li class=\"element\"><h3>NOME PASSEGGERO</h3><h4>Offerta</h4><h4>Carrozza</h4><h4>Codice CP</h4><h4>Costo Biglietto</h4></li>";
    document.getElementById("dataContainer").classList.add("d-none");
    document.getElementById("insertData").innerHTML="Genera";
    document.getElementById("secondTitle").classList.add("d-none");
});

document.getElementById("userAge").addEventListener("focus", function hideEmptyOption(){
    document.getElementById("userAge").getElementsByTagName("option")[0].classList.add("d-none");
});

document.getElementById("insertData").addEventListener("click", function insertData()
{
    let userName = document.getElementById("userName").value;
    let distance = parseInt(document.getElementById("distance").value);
    let age = document.getElementById("userAge").value;
    document.getElementById("userName").value="";
    document.getElementById("distance").value="";
    document.getElementById("userAge").value="";
    console.log(age);
    if(userName!="" && !isNaN(distance) && age!="empty"){
        let i=document.getElementById("tiketsRecap").getElementsByClassName("element").length-1;
        document.getElementById("tiketsRecap").innerHTML+=liElement;
        document.getElementById("insertData").innerHTML="Aggiungi passeggero";
        distance*=0.21;
        document.getElementById("dataContainer").classList.remove("d-none");
        document.getElementById("secondTitle").classList.remove("d-none");
        document.getElementById("tiketsRecap").getElementsByClassName("nome")[i].innerHTML=userName;
        if(age=="minorenne"){
            age="Offerta Junior";
            distance*=0.8;
        }else if(age=="maggiorenne"){
            age="Biglietto Standard";
        }else{
            age="Offerta Silver";
            distance*=0.6;
        }
        document.getElementById("tiketsRecap").getElementsByClassName("offerta")[i].innerHTML=age;
        document.getElementById("tiketsRecap").getElementsByClassName("carrozza")[i].innerHTML=Math.floor(Math.random()*9+1);
        document.getElementById("tiketsRecap").getElementsByClassName("codice")[i].innerHTML=Math.floor(Math.random()*100000);
        distance*=0.21;
        document.getElementById("tiketsRecap").getElementsByClassName("costo")[i].innerHTML=distance+"€";
    }
});