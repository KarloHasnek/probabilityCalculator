document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.querySelector('.btn-submit');
    calculateBtn.addEventListener('click', calculateProbabilities);
});

function calculateProbabilities() {
    const deckSize = parseInt(document.getElementById('deckSize').value);
    const wantedCards = parseInt(document.getElementById('wantedCards').value);
    const handSize = parseInt(document.getElementById('handSize').value);

    console.log(deckSize, wantedCards, handSize);

    if (isNaN(deckSize) || isNaN(wantedCards) || isNaN(handSize)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    if (deckSize < 1 || wantedCards < 1 || handSize < 1) {
        alert("Please enter positive numbers in all fields.");
        return;
    }

    
}
