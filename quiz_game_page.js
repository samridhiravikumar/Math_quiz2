player1_name = localStorage.getItem("add_user1");
player2_name = localStorage.getItem("add_user2");

player1_score = "0";
player2_score = "0";
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send(){
    number1 = document.getElementById("input_value1").value;
    number2 = document.getElementById("input_value2").value;
    actual_answer = parseInt(number1) * parseInt(number2); 
    question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='iput_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_value1").value = "";
    document.getElementById("input_value2").value = "";
}