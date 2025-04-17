function setBoard(){
    let board = document.getElementById("boardArea");

    for (let i = 0; i < 6; i++){
        let playTile = document.createElement("div");
        playTile.classList.add("playTile");
        playTile.style.position = "absolute";
        playTile.style.left = (80 + (60 * i)) + "px";
        playTile.style.top = "250px";
        playTile.setAttribute("data-index",i);
        playTile.innerHTML = 4;
        board.appendChild(playTile);
    }

    let scoreTile1 = document.createElement("div");
    scoreTile1.classList.add("scoreTile");
    scoreTile1.style.position = "absolute";
    scoreTile1.style.left = "440px";
    scoreTile1.style.top = "200px";
    scoreTile1.setAttribute("data-index",6);

    board.appendChild(scoreTile1);

    for (let i = 0; i < 6; i++){
        let playTile = document.createElement("div");
        playTile.classList.add("playTile");
        playTile.style.position = "absolute";
        playTile.style.left = (380 - (60 * i)) + "px";
        playTile.style.top = "200px";
        playTile.setAttribute("data-index",7+i);
        playTile.innerHTML = 4;
        board.appendChild(playTile);
    }

    let scoreTile2 = document.createElement("div");
    scoreTile2.classList.add("scoreTile");
    scoreTile2.style.position = "absolute";
    scoreTile2.style.left = "20px";
    scoreTile2.style.top = "200px";
    scoreTile2.setAttribute("data-index",13);

    board.appendChild(scoreTile2);
}

function addToScore(playerNum, scoreToAdd){ //adds scoreToAdd to the score of player playerNum
    let scoreIndex = (7 * playerNum) - 1; //will return 6 if turn 1, 13 if turn 2
    let score = document.getElementById("boardArea").children[scoreIndex];
    score.innerHTML += scoreToAdd;
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
                        capturedStones += landing.innerHTML;
                        capturedStones += opposite.innerHTML;
                        landing.innerHTML = 0;
                        opposite.innerHTML = 0;

                        addToScore(turn, capturedStones);
                    }
                }
            }
            document.getElementById("currentTurn").innerHTML = turn == 1 ? 2 : 1;
        }
        
    }
    else {
        throw new Error(spaceIndex, "is not a valid landing index.");
    }
}

setBoard();