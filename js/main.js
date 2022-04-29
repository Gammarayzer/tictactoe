
//this is gold and saves the amount of inputs listeners I need :)
// so this grabs all the buttons at once so there is no need to do for each button. there is a value added to each html tag that it uses but extracting?? deconstructing the object that is created from the listener because guess what it creates an object for the whole action.
document.querySelector('.game-container').addEventListener('click', event => {
    // the event is passed through which is an object the the short code {target} which is a property in side of the newly created event object
    const {target} = event;
    //the target is now an object that has a value from html which this extracts turning into a value value. :)
    const {value} = target;
    //this cleans up if there is anything else floating around in the html that isn't a button.
    if (!target.matches('button')) {
        return;
    } else {
        //this pushes that value to the console and then to the object we are working with called the calculator.
        console.log(value)
        ticTacToe.playGame(value)

       }
})

let ticTacToe = {

    player: 1,
    gameMemory: [],
    winner: false,
    


    playGame(value) {

        if (isNaN(value)) {
                this.resetGame()
                
            } else {
                this.markSheet(value)
            } 
    },

    markSheet(value) {

        let markValue = `.cell-${value}`

        if ((this.player === 1) && (this.gameMemory[value-1]===undefined) && (!this.winner)) {
            console.log(markValue)
            console.log('player: ' + this.player)
            this.gameMemory[value-1] = this.player
            document.querySelector(markValue).innerText = "X"
            console.log(this.gameMemory)
            this.gameWin()
            this.player = 2

        } else if ((this.player === 2) && (this.gameMemory[value-1]===undefined) && (!this.winner)) {
            console.log(markValue)
            console.log('player: ' + this.player)
            this.gameMemory[value-1] = this.player
            document.querySelector(markValue).innerText = "O"
            console.log(this.gameMemory)
            this.gameWin()
            this.player = 1
            

        } else {
            console.log('box already marked')
        }
        
        },

    whosTurn() {
        if (this.player === 1) {
            
            document.querySelector('.player-1').style.backgroundColor = "white"
            document.querySelector('.player-1').style.color = "black"
            document.querySelector('.player-2').style.backgroundColor = "red"
            document.querySelector('.player-2').style.color = "white"
        } else {
            document.querySelector('.player-2').style.backgroundColor = "white"
            document.querySelector('.player-2').style.color = "black"
            document.querySelector('.player-1').style.backgroundColor = "red"
            document.querySelector('.player-1').style.color = "white"
        }


    },

    resetGame() {
        this.gameMemory= []
        this.player = 1
        let cells = [1,2,3,4,5,6,7,8,9]
        this.winner = false
        cells.forEach(value => 
            document.querySelector(`.cell-${value}`).innerText = "")
        
        document.querySelector('.player-2').style.backgroundColor = "white"
        document.querySelector('.player-2').style.color = "black"
        document.querySelector('.player-1').style.backgroundColor = "red"
        document.querySelector('.player-1').style.color = "white"
        document.querySelector('h1').innerText = ""



    },

    gameWin() {
      
        
        let win = this.gameMemory
        if (((win[0]===1) && (win[1]===1) && (win[2]===1)) || ((win[3]===1) && (win[4]===1) && (win[5]===1))  || ((win[6]===1) && (win[7]===1) && (win[8]===1)) || 
        ((win[0]===1) && (win[3]===1) && (win[6]===1)) || ((win[1]===1) && (win[4]===1) && (win[7]===1))  || ((win[2]===1) && (win[5]===1) && (win[8]===1)) || ((win[0]===1) && (win[4]===1) && (win[8]===1)) || ((win[2]===1) && (win[4]===1) && (win[6]===1)) ) 
         {
            
            this.winner = true
            console.log('Winner is player X!')  
            console.log(this.winner)
            document.querySelector('h1').innerText = "The Winner is player X!!!"

        } else if (((win[0]===2) && (win[1]===2) && (win[2]===2)) || ((win[3]===2) && (win[4]===2) && (win[5]===2))  || ((win[6]===2) && (win[7]===2) && (win[8]===2)) || 
        ((win[0]===2) && (win[3]===2) && (win[6]===2)) || ((win[1]===2) && (win[4]===2) && (win[7]===2))  || ((win[2]===2) && (win[5]===2) && (win[8]===2)) || ((win[0]===2) && (win[4]===2) && (win[8]===2)) || ((win[2]===2) && (win[4]===2) && (win[6]===2)) ) {
            this.winner = true 
            console.log('Winner is player O')
            console.log(this.winner)
            document.querySelector('h1').innerText = "The Winner is player O!!!"
           
        } else {
            this.whosTurn()
        }

       


    },

}