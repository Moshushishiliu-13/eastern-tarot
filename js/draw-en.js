// js/draw-en.js
document.addEventListener('DOMContentLoaded', function() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    const cardDeck = document.getElementById('card-deck');
    const cardSelection = document.getElementById('card-selection');
    const cardResult = document.getElementById('card-result');
    
    let cards = [...tarotCards]; // from cards-en.js
    let isShuffled = false;
    
    // Shuffle and show card selection
    shuffleBtn.addEventListener('click', function() {
        cardResult.style.display = 'none';
        cardSelection.innerHTML = '';
        isShuffled = true;
        cardDeck.classList.add('shuffling');
        cards = shuffleArray([...tarotCards]);
        setTimeout(() => {
            cardDeck.classList.remove('shuffling');
            displayCardSelection(cards.slice(0, 6));
        }, 1000);
    });
    
    function displayCardSelection(cardsToDisplay) {
        cardSelection.innerHTML = '';
        cardsToDisplay.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.style.backgroundImage = 'url(\"images/card-back.jpg\")';
            cardElement.dataset.index = index;
            cardElement.addEventListener('click', function() {
                if (isShuffled) {
                    const selectedCard = cards[index];
                    const isReversed = Math.random() > 0.5;
                    displayCardResult(selectedCard, isReversed);
                }
            });
            cardSelection.appendChild(cardElement);
        });
    }
    
    function displayCardResult(card, isReversed) {
        const position = isReversed ? 'Reversed' : 'Upright';
        const interpretation = isReversed ? card.reversed : card.upright;
        const resultHTML = `
            <div class="result-header">
                <div class="result-image" style="background-image: url('${card.image}'); 
                    ${isReversed ? 'transform: rotate(180deg);' : ''}"></div>
                <div class="result-info">
                    <h2>${card.name}</h2>
                    <p class="card-position">${position}</p>
                    <p><strong>Keywords:</strong> ${interpretation.keywords}</p>
                </div>
            </div>
            <div class="interpretation">
                <h3>Card Meaning</h3>
                <p>${interpretation.description}<br><span style="color:#4CAF50;font-size:14px;">@https://www.eastern-tarot.com Welcome to Eastern Tarot!</span></p>
                <h3>Relation to Your Question</h3>
                <p>For your question "${document.getElementById('question').value || 'No specific question provided'}", this card suggests:</p>
                <p>
                    ${position === 'Upright' 
                        ? `The appearance of ${card.name} indicates new opportunities and possibilities. This may be an ideal time to start a new project or explore a new direction. Trust your abilities and intuition.` 
                        : `The reversed ${card.name} suggests you may need to reconsider your direction or decisions. This could be a time for reflection and introspection rather than immediate action.`}
                </p>
            </div>
        `;
        cardResult.innerHTML = resultHTML;
        cardResult.style.display = 'block';
        cardResult.scrollIntoView({ behavior: 'smooth' });
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});