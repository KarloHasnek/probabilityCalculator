// event listeners for website
document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.querySelector(".btn-submit");
    calculateBtn.addEventListener("click", calculateProbabilities);
});
document.addEventListener("keydown", handleEnterKeyPress);

// function to calculate probabilities and display them
function calculateProbabilities() {
    const deckSize = parseInt(document.getElementById("deckSize").value);
    const wantedCards = parseInt(document.getElementById("wantedCards").value);
    const handSize = parseInt(document.getElementById("handSize").value);
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");

    // console.log(deckSize, wantedCards, handSize);

    if (isNaN(deckSize) || isNaN(wantedCards) || isNaN(handSize)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    if (deckSize < 1 || wantedCards < 1 || handSize < 1) {
        alert("Please enter positive numbers in all fields.");
        return;
    }

    if (wantedCards > deckSize || handSize > deckSize) {
        alert("You can't have more wanted cards than the deck size.");
        return;
    }

    const atLeastOneResult = atLeastOne(deckSize, wantedCards, handSize);
    // console.log(atLeastOneResult);
    one.value = atLeastOneResult;

    if (handSize > 1) {
        const exactlyTwoResult = exactlyTwo(deckSize, wantedCards, handSize);
        // console.log(exactlyTwoResult);
        two.value = exactlyTwoResult;

        if (handSize < 3) {
            three.value = "N/A";
        } else {
            const moreThanTwoResult = moreThanTwo(
                deckSize,
                wantedCards,
                handSize
            );
            // console.log(moreThanTwoResult);
            three.value = moreThanTwoResult;
        }
    } else {
        two.value = "N/A";
        three.value = "N/A";
    }
}

function atLeastOne(deckSize, wantedCards, handSize) {
    let totalProbability = 0;
    let notWantedProbability = 0;
    let result = 0;

    totalProbability = comb(deckSize, handSize);
    notWantedProbability = comb(deckSize - wantedCards, handSize);

    result = (1 - notWantedProbability / totalProbability) * 100;
    result = result.toFixed(3);
    // console.log(result);
    return result;
}

function exactlyTwo(deckSize, wantedCards, handSize) {
    let totalProbability = 0;
    let notWantedProbability = 0;
    let numOfWaysWanted = 0;
    let result = 0;

    totalProbability = comb(deckSize, handSize);
    notWantedProbability = comb(deckSize - wantedCards, handSize - 2);
    numOfWaysWanted = comb(wantedCards, 2);

    result =
        ((numOfWaysWanted * notWantedProbability) / totalProbability) * 100;
    result = result.toFixed(3);
    // console.log(result);
    return result;
}

function moreThanTwo(deckSize, wantedCards, handSize) {
    let result = 0;

    // Sum the probabilities for drawing exactly 3, 4, 5, ..., wantedCards
    for (let k = 3; k <= Math.min(handSize, wantedCards); k++) {
        result += exactlyK(wantedCards, deckSize, handSize, k);
    }

    function exactlyK(wanted, total, hand, k) {
        return (
            (comb(wanted, k) * comb(total - wanted, hand - k)) /
            comb(total, hand)
        );
    }

    result = (result * 100).toFixed(3);
    // console.log(result);
    return result;
}

// combination function
function comb(n, k) {
    return fact(n) / (fact(k) * fact(n - k));
}

// factorial function
function fact(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// function to handle enter key press event
function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
        calculateProbabilities();
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    // Get the input element
    const inputElement = document.getElementById("deckSize");

    // Set focus to the input element
    inputElement.focus();
});
