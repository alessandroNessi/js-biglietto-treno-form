// add addEventListener to buttons an select
document.getElementById("insertData").addEventListener("click", insertData());
document.getElementById("deleteForm").addEventListener("click", deleteForm());
document.getElementById("userAge").addEventListener("click", hideEmptyOption());

function hideEmptyOption(){
    document.getElementById("userAge").getElementsByTagName("option")[0].classList.add("d-none");
}
function insertData(){
    let userName = document.getElementById("userName").value;
    let distance = document.getElementById("distance").value;
    let age = document.getElementById("userAge").value;
}
function deleteForm(){

}