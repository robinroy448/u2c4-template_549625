// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",match);
var matcharr = JSON.parse(localStorage.getItem("schedule")) || [];

function match(){
    event.preventDefault();

    var matobj = {
        matchNum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value
    }
    console.log(matobj)
    matcharr.push(matobj);
    //console.log(matobj)
    localStorage.setItem("schedule", JSON.stringify(matcharr))
    window.location.href = "matches.html";
}
