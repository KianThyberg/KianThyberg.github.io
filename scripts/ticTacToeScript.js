let xTurn = true;
let isGameOver = false;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark && !isGameOver) {
        if (xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            document.getElementById(buttonId).style = "color:#7bb2f7; font-size:30px";
            document.getElementById("resultText").innerHTML = "Current Turn: O";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            document.getElementById(buttonId).style = "color:#ef9944; font-size:30px";
            document.getElementById("resultText").innerHTML = "Current Turn: X";
        }
        xTurn = !xTurn;
        checkWin();
    }
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    
    if (a1 == b1 && b1 == c1 && a1 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a2 == b2 && b2 == c2 && a2 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a3 == b3 && b3 == c3 && a3 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a1 == a2 && a2 == a3 && a3 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a1 == a2 && a2 == a3 && a3 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (b1 == b2 && b2 == b3 && b3 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (b1 == b2 && b2 == b3 && b3 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (c1 == c2 && c2 == c3 && c3 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (c1 == c2 && c2 == c3 && c3 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a1 == b2 && b2 == c3 && a1 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a3 == b2 && b2 == c1 && a3 == "X") {
        document.getElementById("resultText").innerHTML = "X wins!";
        isGameOver = true;
    }
    else if (a3 == b2 && b2 == c1 && a3 == "O") {
        document.getElementById("resultText").innerHTML = "O wins!";
        isGameOver = true;
    }
    else if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) {
        document.getElementById("resultText").innerHTML = "It's a tie.";
        isGameOver = true;
    }

}

function resetGame() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById("a1").style = "color:black; font-size:16px";
    document.getElementById("b1").style = "color:black; font-size:16px";
    document.getElementById("c1").style = "color:black; font-size:16px";
    document.getElementById("a2").style = "color:black; font-size:16px";
    document.getElementById("b2").style = "color:black; font-size:16px";
    document.getElementById("c2").style = "color:black; font-size:16px";
    document.getElementById("a3").style = "color:black; font-size:16px";
    document.getElementById("b3").style = "color:black; font-size:16px";
    document.getElementById("c3").style = "color:black; font-size:16px";
    
    xTurn = true;
    isGameOver = false;
    document.getElementById("resultText").innerHTML = "Current Turn: X";
}