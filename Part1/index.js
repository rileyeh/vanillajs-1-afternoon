
let playArray = []

function play(clickedId) {
    let players = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

       if (players.innerText === 'X') {
            players.innerText = 'O'
            clickedElement.innerText = 'X'
            playArray[clickedId] = 'X'
       } else { 
            players.innerText = 'X'
            clickedElement.innerText = "O"
            playArray[clickedId] = 'O'
    }

    let topLeft = playArray[0]
    let topCenter = playArray[1]
    let topRight = playArray[2]
    let midLeft = playArray[3]
    let midCenter = playArray[4]
    let midRight = playArray[5]
    let botLeft = playArray[6]
    let botCenter = playArray[7]
    let botRight = playArray[8]

    // horizontal 
    if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
        alert(`Player ${topRight} has won!`)
        return
    }

    if (midRight !== undefined && midRight === midCenter && midRight === midLeft) {
        alert(`Player ${midRight} has won!`)
        return
    }

    if (botRight !== undefined && botRight === botCenter && botRight === botLeft) {
        alert(`Player ${botRight} has won!`)
        return
    }

    // vertical
    if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
        alert(`Player ${topLeft} has won!`)
        return
    }

    if (topCenter !== undefined && topCenter === midCenter && topCenter === botCenter) {
        alert(`Player ${topCenter} has won!`)
        return
    }

    if (topRight !== undefined && topRight === midRight && topRight === botRight) {
        alert(`Player ${topRight} has won!`)
        return
    }

    //  diagonal
    if (topLeft !== undefined && topLeft === midCenter && topLeft === botRight) {
        alert(`Player ${topLeft} has won!`)
        return
    }

    if (topRight !== undefined && topRight === midCenter && topRight === botLeft) {
        alert(`Player ${topRight} has won!`)
        return
    }

    let boardFull = true

    for (let i = 0; i < 9; i++) {
        if (playArray[i] === undefined) {
            boardFull = false
        } 
        }
        if (boardFull === true) {
            alert(`Cats game!`)
        }
    }


    function resetBoard() {
        let squares = document.getElementsByTagName('td') 
        for (let i = 0; i < squares.length; i++) {
            squares[i].innerText = ''
        }
        //  console.log(playArray)
      
       playArray = []
        // console.log(playArray)
       return playArray
    }

    