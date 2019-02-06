function checkWin(letter) {
    if ((boxes[0].status === letter && boxes[7].status === letter && boxes[14].status === letter && boxes[21].status === letter) ||
        (boxes[7].status === letter && boxes[14].status === letter && boxes[21].status === letter && boxes[28].status === letter) ||
        (boxes[14].status === letter && boxes[21].status === letter && boxes[28].status === letter && boxes[35].status === letter) ||
        (boxes[1].status === letter && boxes[8].status === letter && boxes[15].status === letter && boxes[22].status === letter) ||
        (boxes[8].status === letter && boxes[15].status === letter && boxes[22].status === letter && boxes[29].status === letter) ||
        (boxes[15].status === letter && boxes[22].status === letter && boxes[29].status === letter && boxes[36].status === letter) ||
        (boxes[2].status === letter && boxes[9].status === letter && boxes[16].status === letter && boxes[23].status === letter) ||
        (boxes[9].status === letter && boxes[16].status === letter && boxes[23].status === letter && boxes[30].status === letter) ||
        (boxes[16].status === letter && boxes[23].status === letter && boxes[30].status === letter && boxes[37].status === letter) ||
        (boxes[3].status === letter && boxes[10].status === letter && boxes[17].status === letter && boxes[24].status === letter) ||
        (boxes[10].status === letter && boxes[17].status === letter && boxes[24].status === letter && boxes[31].status === letter) ||
        (boxes[17].status === letter && boxes[24].status === letter && boxes[31].status === letter && boxes[38].status === letter) ||
        (boxes[4].status === letter && boxes[11].status === letter && boxes[18].status === letter && boxes[25].status === letter) ||
        (boxes[11].status === letter && boxes[18].status === letter && boxes[25].status === letter && boxes[32].status === letter) ||
        (boxes[18].status === letter && boxes[25].status === letter && boxes[32].status === letter && boxes[39].status === letter) ||
        (boxes[5].status === letter && boxes[12].status === letter && boxes[19].status === letter && boxes[26].status === letter) ||
        (boxes[12].status === letter && boxes[19].status === letter && boxes[26].status === letter && boxes[33].status === letter) ||
        (boxes[19].status === letter && boxes[26].status === letter && boxes[33].status === letter && boxes[40].status === letter) ||
        (boxes[6].status === letter && boxes[13].status === letter && boxes[20].status === letter && boxes[27].status === letter) ||
        (boxes[13].status === letter && boxes[20].status === letter && boxes[27].status === letter && boxes[34].status === letter) ||
        (boxes[20].status === letter && boxes[27].status === letter && boxes[34].status === letter && boxes[41].status === letter) ||
        (boxes[0].status === letter && boxes[1].status === letter && boxes[2].status === letter && boxes[3].status === letter) ||
        (boxes[1].status === letter && boxes[2].status === letter && boxes[3].status === letter && boxes[4].status === letter) ||
        (boxes[2].status === letter && boxes[3].status === letter && boxes[4].status === letter && boxes[5].status === letter) ||
        (boxes[3].status === letter && boxes[4].status === letter && boxes[5].status === letter && boxes[6].status === letter) ||
        (boxes[7].status === letter && boxes[8].status === letter && boxes[9].status === letter && boxes[10].status === letter) ||
        (boxes[8].status === letter && boxes[9].status === letter && boxes[10].status === letter && boxes[11].status === letter) ||
        (boxes[9].status === letter && boxes[10].status === letter && boxes[11].status === letter && boxes[12].status === letter) ||
        (boxes[10].status === letter && boxes[11].status === letter && boxes[12].status === letter && boxes[13].status === letter) ||
        (boxes[14].status === letter && boxes[15].status === letter && boxes[16].status === letter && boxes[17].status === letter) ||
        (boxes[15].status === letter && boxes[16].status === letter && boxes[17].status === letter && boxes[18].status === letter) ||
        (boxes[16].status === letter && boxes[17].status === letter && boxes[18].status === letter && boxes[19].status === letter) ||
        (boxes[17].status === letter && boxes[18].status === letter && boxes[19].status === letter && boxes[20].status === letter) ||
        (boxes[21].status === letter && boxes[22].status === letter && boxes[23].status === letter && boxes[24].status === letter) ||
        (boxes[22].status === letter && boxes[23].status === letter && boxes[24].status === letter && boxes[25].status === letter) ||
        (boxes[23].status === letter && boxes[24].status === letter && boxes[25].status === letter && boxes[26].status === letter) ||
        (boxes[24].status === letter && boxes[25].status === letter && boxes[26].status === letter && boxes[27].status === letter) ||
        (boxes[28].status === letter && boxes[29].status === letter && boxes[30].status === letter && boxes[31].status === letter) ||
        (boxes[29].status === letter && boxes[30].status === letter && boxes[31].status === letter && boxes[32].status === letter) ||
        (boxes[30].status === letter && boxes[31].status === letter && boxes[32].status === letter && boxes[33].status === letter) ||
        (boxes[31].status === letter && boxes[32].status === letter && boxes[33].status === letter && boxes[34].status === letter) ||
        (boxes[35].status === letter && boxes[36].status === letter && boxes[37].status === letter && boxes[38].status === letter) ||
        (boxes[36].status === letter && boxes[37].status === letter && boxes[38].status === letter && boxes[39].status === letter) ||
        (boxes[37].status === letter && boxes[38].status === letter && boxes[39].status === letter && boxes[40].status === letter) ||
        (boxes[38].status === letter && boxes[39].status === letter && boxes[40].status === letter && boxes[41].status === letter) ||
        (boxes[0].status === letter && boxes[8].status === letter && boxes[16].status === letter && boxes[24].status === letter) ||
        (boxes[1].status === letter && boxes[9].status === letter && boxes[17].status === letter && boxes[18].status === letter) ||
        (boxes[2].status === letter && boxes[10].status === letter && boxes[18].status === letter && boxes[19].status === letter) ||
        (boxes[3].status === letter && boxes[11].status === letter && boxes[19].status === letter && boxes[20].status === letter) ||
        (boxes[7].status === letter && boxes[15].status === letter && boxes[23].status === letter && boxes[31].status === letter) ||
        (boxes[8].status === letter && boxes[16].status === letter && boxes[24].status === letter && boxes[32].status === letter) ||
        (boxes[9].status === letter && boxes[17].status === letter && boxes[25].status === letter && boxes[33].status === letter) ||
        (boxes[10].status === letter && boxes[18].status === letter && boxes[26].status === letter && boxes[34].status === letter) ||
        (boxes[14].status === letter && boxes[22].status === letter && boxes[30].status === letter && boxes[38].status === letter) ||
        (boxes[15].status === letter && boxes[23].status === letter && boxes[31].status === letter && boxes[39].status === letter) ||
        (boxes[16].status === letter && boxes[24].status === letter && boxes[32].status === letter && boxes[40].status === letter) ||
        (boxes[17].status === letter && boxes[25].status === letter && boxes[33].status === letter && boxes[41].status === letter) ||
        (boxes[21].status === letter && boxes[15].status === letter && boxes[9].status === letter && boxes[3].status === letter) ||
        (boxes[22].status === letter && boxes[16].status === letter && boxes[10].status === letter && boxes[4].status === letter) ||
        (boxes[23].status === letter && boxes[17].status === letter && boxes[11].status === letter && boxes[5].status === letter) ||
        (boxes[24].status === letter && boxes[18].status === letter && boxes[12].status === letter && boxes[6].status === letter) ||
        (boxes[28].status === letter && boxes[22].status === letter && boxes[16].status === letter && boxes[10].status === letter) ||
        (boxes[29].status === letter && boxes[23].status === letter && boxes[17].status === letter && boxes[11].status === letter) ||
        (boxes[30].status === letter && boxes[24].status === letter && boxes[18].status === letter && boxes[12].status === letter) ||
        (boxes[31].status === letter && boxes[25].status === letter && boxes[19].status === letter && boxes[13].status === letter) ||
        (boxes[35].status === letter && boxes[29].status === letter && boxes[23].status === letter && boxes[17].status === letter) ||
        (boxes[36].status === letter && boxes[30].status === letter && boxes[24].status === letter && boxes[18].status === letter) ||
        (boxes[37].status === letter && boxes[31].status === letter && boxes[25].status === letter && boxes[19].status === letter) ||
        (boxes[38].status === letter && boxes[32].status === letter && boxes[26].status === letter && boxes[20].status === letter)) 
    {
        if (letter === "R") {
            message.innerHTML = `Win for Red!`
        }
        if (letter === "Y") {
            message.innerHTML = `Win for Yellow!`
        }
        won = 1
        buttonLocation.appendChild(refreshButton)
        gameStatus.innerHTML = "Game over"
    } else if (turnsTaken === 42) {
        message.innerHTML = `Tie!`
        won = 1
        buttonLocation.appendChild(refreshButton)
        gameStatus.innerHTML = "Game over"
    }
}