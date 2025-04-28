// tarot-html-version/js/spread-en.js
// English version for Mystic Tarot spreads

document.addEventListener('DOMContentLoaded', function() {
    const spreadOptions = document.querySelectorAll('.spread-option');
    const drawSpreadBtn = document.getElementById('draw-spread');
    const spreadReading = document.getElementById('spread-reading');
    let selectedSpread = null;

    // Handle URL hash for direct navigation
    const hash = window.location.hash.substring(1);
    if (hash) {
        spreadOptions.forEach(option => {
            if (option.dataset.spread === hash) {
                setTimeout(() => {
                    option.click();
                    option.scrollIntoView({behavior: 'smooth'});
                }, 300);
            }
        });
    }

    // Spread selection
    spreadOptions.forEach(option => {
        option.addEventListener('click', function() {
            spreadOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedSpread = this.dataset.spread;
        });
    });

    // Draw spread
    if (drawSpreadBtn) {
        drawSpreadBtn.addEventListener('click', function() {
            if (!selectedSpread) {
                alert('Please select a spread type first.');
                return;
            }
            const question = document.getElementById('spread-question').value || 'No specific question provided';
            try {
                const shuffledCards = shuffleArray([...window.tarotCards]);
                if (selectedSpread === 'three-card') {
                    displayThreeCardSpread(shuffledCards.slice(0, 3), question);
                } else if (selectedSpread === 'five-card') {
                    displayFiveCardSpread(shuffledCards.slice(0, 5), question);
                } else if (selectedSpread === 'celtic-cross') {
                    displayCelticCross(shuffledCards.slice(0, 10), question);
                }
                spreadReading.style.display = 'block';
                spreadReading.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Error during card drawing:', error);
                alert('An error occurred during card drawing: ' + error.message);
            }
        });
    }

    // Shuffle function
    function shuffleArray(array) {
        const arrayCopy = [...array];
        for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        return arrayCopy;
    }

    // Three Card Spread
    function displayThreeCardSpread(cards, question) {
        const positions = ['Past', 'Present', 'Future'];
        const meanings = [
            'This card represents past events or energies influencing your current situation.',
            'This card shows your current situation and the energies affecting you.',
            'This card suggests the possible development or outcome of your question.'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.5 ? 'Reversed' : 'Upright');
        let spreadHTML = `
            <div class="container">
                <div class="three-card-spread">
        `;
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="spread-card" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === 'Reversed' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
                    <h2>Three Card Spread: ${question}</h2>
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === 'Upright' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>Keywords:</strong> ${interpretation.keywords}</p>
                    <p><strong>Meaning:</strong> ${interpretation.description}</p>
                    <p><strong>Position Meaning:</strong> ${meanings[index]}</p>
                    <p><strong>In the context of your question:</strong> 
                        ${generateMeaning(card, positionText, positions[index], question)}
                    </p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>Overall Interpretation</h3>
                    <p>
                        Based on these three cards, your question "${question}" can be interpreted as follows:
                        The past card ${cards[0].name}${cardPositions[0] === 'Reversed' ? ' (Reversed)' : ''} indicates
                        ${cardPositions[0] === 'Upright' 
                            ? 'you have a solid foundation and experience to rely on.' 
                            : 'there may be unresolved issues from the past that need attention.'}
                        The present card ${cards[1].name}${cardPositions[1] === 'Reversed' ? ' (Reversed)' : ''} shows
                        ${cardPositions[1] === 'Upright' 
                            ? 'you are currently taking the right actions.' 
                            : 'there may be some obstacles or challenges in your current situation.'}
                        The future card ${cards[2].name}${cardPositions[2] === 'Reversed' ? ' (Reversed)' : ''} suggests
                        ${cardPositions[2] === 'Upright' 
                            ? 'the outcome is likely positive if you stay on your current path.' 
                            : 'you may need to adjust your approach to achieve the desired result.'}
                        Overall, this spread suggests you should
                        ${cardPositions.filter(p => p === 'Upright').length >= 2 
                            ? 'stay confident and keep moving forward; most energies are supportive.' 
                            : 'reflect and adjust your approach; you may need to address some underlying issues.'}
                    </p>
                </div>
            </div>
        </div>
        `;
        spreadReading.innerHTML = spreadHTML;
    }

    // Celtic Cross Spread
    function displayCelticCross(cards, question) {
        const positions = [
            'Core Issue', 'Crossing Influence', 'Conscious Foundation', 'Past Influence', 
            'Goal/Possibility', 'Near Future', 'Self-Perception', 'External Environment', 
            'Hopes or Fears', 'Final Outcome'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.5 ? 'Reversed' : 'Upright');
        let spreadHTML = `
            <div class="container">
                <div class="celtic-cross-spread">
        `;
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="celtic-card card-${index + 1}" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === 'Reversed' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
                    <h2>Celtic Cross Spread: ${question}</h2>
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === 'Upright' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${index + 1}. ${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>Keywords:</strong> ${interpretation.keywords}</p>
                    <p><strong>Meaning:</strong> ${interpretation.description}</p>
                    <p><strong>Position Meaning:</strong> ${getCelticPositionMeaning(index)}</p>
                    <p><strong>In the context of your question:</strong> 
                        ${generateMeaning(card, positionText, positions[index], question)}
                    </p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>Overall Interpretation</h3>
                    <p>
                        Your question "${question}" is interpreted through the Celtic Cross spread as follows.
                        The center cards ${cards[0].name}${cardPositions[0] === 'Reversed' ? ' (Reversed)' : ''} and
                        ${cards[1].name}${cardPositions[1] === 'Reversed' ? ' (Reversed)' : ''} show the core situation and main challenge.
                        The foundation and crown cards ${cards[2].name} and ${cards[3].name} reveal the root and your mindset.
                        The past card ${cards[4].name} and future card ${cards[5].name} show the trend of change.
                        The rightmost cards indicate how things will unfold, and the final outcome card ${cards[9].name}
                        ${cardPositions[9] === 'Upright' 
                            ? 'suggests a positive ending.' 
                            : 'reminds you to overcome some obstacles to achieve your goal.'}
                        Overall, this spread suggests you should
                        ${cardPositions.filter(p => p === 'Upright').length >= 6 
                            ? 'go with the current energy and continue your plan; most indicators are favorable.' 
                            : 'be more cautious and examine possible obstacles; be well prepared before acting.'}
                    </p>
                </div>
            </div>
        </div>
        `;
        spreadReading.innerHTML = spreadHTML;
    }

    // Five Card Spread
    function displayFiveCardSpread(cards, question) {
        const positions = [
            'Current Situation', 'Challenge', 'Past', 'Future', 'Advice'
        ];
        const meanings = [
            'This card represents your current situation or the main theme of your question.',
            'This card shows the main challenge or obstacle you are facing.',
            'This card reveals past influences or background.',
            'This card suggests the direction things are heading.',
            'This card offers advice or guidance for your situation.'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.5 ? 'Reversed' : 'Upright');
        let spreadHTML = `
            <div class="container">
                <div class="five-card-spread">
        `;
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="five-card card-${index + 1}" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === 'Reversed' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
                    <h2>Universal Five Card Spread: ${question}</h2>
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === 'Upright' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>Keywords:</strong> ${interpretation.keywords}</p>
                    <p><strong>Meaning:</strong> ${interpretation.description}</p>
                    <p><strong>Position Meaning:</strong> ${meanings[index]}</p>
                    <p><strong>In the context of your question:</strong> 
                        ${generateMeaning(card, positionText, positions[index], question)}
                    </p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>Overall Interpretation</h3>
                    <p>
                        This five card spread for your question "${question}" suggests that the current situation card (${cards[0].name}) and the challenge card (${cards[1].name}) are most important.
                        The past card (${cards[2].name}) shows background influences, and the future card (${cards[3].name}) shows the likely direction.
                        The advice card (${cards[4].name}) offers guidance.
                        If most cards are upright, the outlook is positive; if reversed, you may need to reflect and adjust your approach.
                    </p>
                </div>
            </div>
        </div>
        `;
        spreadReading.innerHTML = spreadHTML;
    }

    // Celtic Cross position meanings
    function getCelticPositionMeaning(position) {
        const meanings = [
            'The heart of the matter or the main issue.',
            'The main challenge or obstacle.',
            'Your conscious thoughts or goals.',
            'Past influences or background.',
            'Your aspirations or what is possible.',
            'The near future or what is coming soon.',
            'Your self-perception or attitude.',
            'External influences or environment.',
            'Your hopes or fears.',
            'The final outcome or answer.'
        ];
        return meanings[position] || '';
    }

    // Generate a personalized meaning for each card in context
    function generateMeaning(card, positionText, positionName, question) {
        return `The card "${card.name}" in the position of "${positionName}" (${positionText}) suggests: ${positionText === 'Upright' ? card.upright.description : card.reversed.description}`;
    }
});