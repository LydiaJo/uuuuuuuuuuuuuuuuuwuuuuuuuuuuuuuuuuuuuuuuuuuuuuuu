var score=0;
function Update_score(){
score=score+1;
document.getElementById("Score").innerHTML="Score="+score;

}
function Save_score(){
localStorage.setItem("Save", score)

}
function Next(){
    window.location="activity_2.html";
}