function add_user(){
    player1=document.getElementById("player-1-name-input").value;
    player2=document.getElementById("player-2-name-input").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location="game_page.html"
}