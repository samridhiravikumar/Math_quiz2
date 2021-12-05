function adduser() {
    add_user1 = document.getElementById("player1_name").value;
    add_user2 = document.getElementById("player2_name").value;
    localStorage.setItem("add_user1",add_user1);
    localStorage.setItem("add_user2",add_user2);
    window.location = "quiz_game_page.html";
}

