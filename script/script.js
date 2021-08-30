// add addEventListener to buttons an select
// document.getElementById("insertData").addEventListener("click", insertData());
document.getElementById("deleteForm").addEventListener("click", deleteForm());
document.getElementById("userAge").addEventListener("click", hideEmptyOption());

function hideEmptyOption(){
    document.getElementById("userAge").getElementsByTagName("option")[0].classList.add("d-none");
}
document.getElementById("insertData").addEventListener("click", function insertData()
{
    let userName = document.getElementById("userName").value;
    let distance = document.getElementById("distance").value;
    let age = document.getElementById("userAge").value;
    distance*=0.21;
    document.getElementById("dataContainer").classList.remove("d-none");
    // document.getElementById("tiketsRecap").innerHTML+="<li></li>"
    document.getElementById("tiketsRecap").getElementsByClassName("nome")[0].innerHTML=userName;
    if(age=="minorenne"){
        age="Offerta Junior";
        distance*=0.8;
    }else if(age=="maggiorenne"){
        age="Biglietto Standard";
    }else{
        age="Offerta Silver";
        distance*=0.6;
    }
    document.getElementById("tiketsRecap").getElementsByClassName("offerta")[0].innerHTML=age;
    document.getElementById("tiketsRecap").getElementsByClassName("carrozza")[0].innerHTML=Math.floor(Math.random()*9+1);
    document.getElementById("tiketsRecap").getElementsByClassName("codice")[0].innerHTML=Math.floor(Math.random()*100000);
    distance*=0.21;
    if(age)
    document.getElementById("tiketsRecap").getElementsByClassName("costo")[0].innerHTML=distance+"€";
});
function deleteForm(){

}