let playing = true;

function setBoard(){
    let board = document.getElementById("boardArea");
    document.getElementById("turnIndicator").style.color = "#d12a3b";

    for (let i = 0; i < 6; i++){
        let playTile = document.createElement("div");
        playTile.classList.add("playTile");
        playTile.classList.add("p1Tile");
        playTile.style.position = "absolute";
        playTile.style.left = (80 + (60 * i)) + "px";
        playTile.style.top = "250px";
        playTile.setAttribute("data-index",i);
        playTile.innerHTML = 4;
        board.appendChild(playTile);

        playTile.addEventListener("click", startMovement);
    }

    let scoreTile1 = document.createElement("div");
    scoreTile1.classList.add("scoreTile");
    scoreTile1.classList.add("p1Score");
    scoreTile1.style.position = "absolute";
    scoreTile1.style.left = "440px";
    scoreTile1.style.top = "200px";
    scoreTile1.setAttribute("data-index",6);
    scoreTile1.innerHTML = 0;

    board.appendChild(scoreTile1);

    for (let i = 0; i < 6; i++){
        let playTile = document.createElement("div");
        playTile.classList.add("playTile");
        playTile.classList.add("p2Tile");
        playTile.style.position = "absolute";
        playTile.style.left = (380 - (60 * i)) + "px";
        playTile.style.top = "200px";
        playTile.setAttribute("data-index",7+i);
        playTile.innerHTML = 4;
        board.appendChild(playTile);

        playTile.addEventListener("click", startMovement);
    }

    let scoreTile2 = document.createElement("div");
    scoreTile2.classList.add("scoreTile");
    scoreTile2.classList.add("p2Score");
    scoreTile2.style.position = "absolute";
    scoreTile2.style.left = "20px";
    scoreTile2.style.top = "200px";
    scoreTile2.setAttribute("data-index",13);
    scoreTile2.innerHTML = 0;

    board.appendChild(scoreTile2);
}

function addToScore(playerNum, scoreToAdd){ //adds scoreToAdd to the score of player playerNum
    let scoreIndex = (7 * playerNum) - 1; //will return 6 if turn 1, 13 if turn 2
    let score = document.getElementById("boardArea").children[scoreIndex];
    score.innerHTML = parseInt(score.innerHTML) + scoreToAdd;
}

function checkLanding(spaceIndex){
    if (spaceIndex && spaceIndex >= 0 && spaceIndex <= 13){
        if (spaceIndex != 6 && spaceIndex != 13){ // don't update anything if the landing is in the score
            //check for a capture
            let turn = document.getElementById("currentTurn").innerHTML;
            if ((spaceIndex < 6 && turn == 1) || (spaceIndex > 6 && turn == 2)){//if space is yours
                let landing = document.getElementById("boardArea").children[spaceIndex];
                if (landing.innerHTML == 1){ //if landing space WAS empty
                    let opposite = document.getElementById("boardArea").children[12 - spaceIndex];
                    if (opposite.innerHTML > 0){ //and opposite space isn't
                        let capturedStones = 0;
                        capturedStones += parseInt(landing.innerHTML);
                        capturedStones += parseInt(opposite.innerHTML);
                        landing.innerHTML = 0;
                        opposite.innerHTML = 0;

                        addToScore(turn, capturedStones);
                    }
                }
            }
            document.getElementById("turnIndicator").style.color = turn == 1 ? "#4665e0" : "#d12a3b";
            document.getElementById("currentTurn").innerHTML = turn == 1 ? 2 : 1;
        }
        checkVictory();
    }
    else {
        throw new Error(spaceIndex, "is not a valid landing index.");
    }
}

function startMovement(event){
    if (playing){
        let tileElement = event.target;
        let spaceIndex = tileElement.dataset.index;
        let currentTurn = document.getElementById("currentTurn").innerHTML;

        if (tileElement.innerHTML != 0){
            if ((spaceIndex < 6 && currentTurn == 1) || (spaceIndex > 6 && currentTurn == 2)){//if space is yours
                movementStep(tileElement, 0, true);
            }
        }
    }
}

// tileOver - the current tile the hand is over
// hand - the remaining stones in your hand
// isStart - if true: empty starting tile. if false: drop one and carry on
function movementStep(tileOver, hand, isStart){
    if (isStart){
        let newHand = tileOver.innerHTML;
        tileOver.innerHTML = 0;
        movementStep(getNextTile(tileOver), newHand, false);
    }
    else{
        tileOver.innerHTML++
        hand--;

        if (hand > 0){
            movementStep(getNextTile(tileOver), hand, false);
        }
        else{
            checkLanding(tileOver.dataset.index);
        }
    }
}

function getNextTile(currentTile){
    let next = currentTile.nextElementSibling
    if (next){
        let currentTurn = document.getElementById("currentTurn").innerHTML;
        if (next.dataset.index == 6 && currentTurn == 2){
            return next.nextElementSibling;
        }
        else if (next.dataset.index == 13 && currentTurn == 1){
            return document.getElementById("boardArea").children[0];
        }
        else {
            return next;
        }
    }
    else{
        return document.getElementById("boardArea").children[0];
    }
}

function checkVictory(){
    let clearSide1 = true;
    let clearSide2 = true;
    for (tile of document.getElementById("boardArea").children){
        if (tile.innerHTML > 0){
            if (tile.dataset.index < 6){
                clearSide1 = false;
            }
            else if (tile.dataset.index > 6 && tile.dataset.index < 13){
                clearSide2 = false;
            }
        }
    }
    if (clearSide1 || clearSide2){
        let scores = document.getElementsByClassName("scoreTile");
        let winText = document.getElementById("turnIndicator");
        if (scores[0].innerHTML > scores[1].innerHTML){
            winText.innerHTML = "Player 1 Wins!";
            winText.style.color = "#d12a3b";
        }
        else if (scores[0].innerHTML < scores[1].innerHTML){
            winText.innerHTML = "Player 2 Wins!";
            winText.style.color = "#4665e0";
        }
        else{
            winText.innerHTML = "Tie Game!";
            winText.style.color = "white";
        }

        playing = false;
    }
}

setBoard();