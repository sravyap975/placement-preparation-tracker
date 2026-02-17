document.getElementById("date").innerText=new Date.toDateString();
function addStudy(){
    let topic=document.getElementById("topic").value;
    let duration=document.getElementById("duration").value;
    if(topic===""||duration===""){
        alert("Please fill in all fields");
        return;
    }
    let studyList=document.getElementById("studyList");
    let div=document.createElement("div");
    div.className="study-item";
    div.innerHTML=`<span>${topic}-${duration} mins</span>
    <div>
    <button onclick="toggleDone(this)">Done</button>
    <button onclick="deleteItem(this)">Delete</button>
    </div>`;
    studyList.appendChild(div);
    document.getElementById("topic").value="";
    document.getElementById("duration").value="";

}
function deleteItem(button){
    button.parentElement.parentElement.remove();
}
function toggleDone(button){
    let item=button.parentElement.parentElement;
    item.style.textDecoration=item.style.textDecoration==="line-through"?"none":"line-through";
}