let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());

    },
    toString: function() {{
        coin.flip()
            if (this.state === 0) {
                document.body.append('Heads')
            } 
            else {
                document.body.append('Tails')
            }
        }
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
            if (this.state === 0) {
                image.src = './images/coinHeads.jpg'
                document.body.append(image)
            } 
            else {
                image.src = './images/coinTails.jpg'
                document.body.append(image)
            }
        }
    }

    
function check(){
    coin.toString()
    coin.toHTML()    }

// check()
// writer two functions that rolls the coin 20 times
function display20Flips(){
    for (let display20Flips = 0; display20Flips < 20; display20Flips += 1){
        coin.toString()
    }
}
function display20Images(){
    for (let display20Images = 0; display20Images < 20; display20Images += 1){      
        coin.toHTML()
    }
}

display20Flips()
display20Images()
