
var secretNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
let attemptsLeft = 10;
var digitInWrongPlace =0;
var correctDigit = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function(){
    const GivenNumber = document.querySelector('.GivenNumber').value;
    
    if(GivenNumber.toString().length!=4){
        displayMessage('The number should be a 4 digits number')
    }
    else {

    if (!GivenNumber) {
        displayMessage('⛔️ No number!');
      } else if (GivenNumber === secretNumber) {
        displayMessage('🎉 Correct Number!');
    
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (GivenNumber!= secretNumber) {
        if (attemptsLeft > 1) {
          digitInWrongPlace =0
          correctDigit = 0
          attemptsLeft--;
          document.querySelector('.attemptsLeft').textContent = attemptsLeft;
            for (i=0;i<4;i++) {
                for (j=0;j<4;j++) {
                    if (GivenNumber[i]==secretNumber[j]){
                        if (i==j){
                            correctDigit++;
                            
                        }
                        else {
                            digitInWrongPlace++;
                        }
                    }
                }
            }
            document.querySelector('.correctDigit').textContent = correctDigit;
            document.querySelector('.digitInWrongPlace').textContent = digitInWrongPlace;
    
        } else {
          displayMessage('💥 You lost the game!');
          document.querySelector('.attemptsLeft').textContent = 0;
          document.querySelector('.check').disabled = true;
        }
      }

}
})

    document.querySelector('.again').addEventListener('click', function () {
    attemptsLeft = 10;
    var secretNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.attemptsLeft').textContent = attemptsLeft;
    document.querySelector('.GivenNumber').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  
