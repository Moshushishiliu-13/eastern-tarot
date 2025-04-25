// js/draw.js
document.addEventListener('DOMContentLoaded', function() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    const cardDeck = document.getElementById('card-deck');
    const cardSelection = document.getElementById('card-selection');
    const cardResult = document.getElementById('card-result');
    
    let cards = [...tarotCards]; // 从cards.js导入的塔罗牌数组的副本
    let isShuffled = false;
    
    // 洗牌并展示卡牌选择
    shuffleBtn.addEventListener('click', function() {
        // 重置状态
        cardResult.style.display = 'none';
        cardSelection.innerHTML = '';
        isShuffled = true;
        
        // 洗牌动画
        cardDeck.classList.add('shuffling');
        
        // 随机排序牌组
        cards = shuffleArray([...tarotCards]);
        
        setTimeout(() => {
            cardDeck.classList.remove('shuffling');
            
            // 显示卡牌选择（这里只显示前6张作为示例）
            displayCardSelection(cards.slice(0, 6));
        }, 1000);
    });
    
    // 显示卡牌选择界面
    function displayCardSelection(cardsToDisplay) {
        cardSelection.innerHTML = '';
        
        cardsToDisplay.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.style.backgroundImage = 'url("images/card-back.jpg")';
            cardElement.dataset.index = index;
            
            cardElement.addEventListener('click', function() {
                if (isShuffled) {
                    const selectedCard = cards[index];
                    const isReversed = Math.random() > 0.5; // 50%几率正逆位
                    displayCardResult(selectedCard, isReversed);
                }
            });
            
            cardSelection.appendChild(cardElement);
        });
    }
    
    // 显示抽卡结果
    function displayCardResult(card, isReversed) {
        // 构建结果HTML
        const position = isReversed ? '逆位' : '正位';
        const interpretation = isReversed ? card.reversed : card.upright;
        
        const resultHTML = `
            <div class="result-header">
                <div class="result-image" style="background-image: url('${card.image}'); 
                    ${isReversed ? 'transform: rotate(180deg);' : ''}"></div>
                <div class="result-info">
                    <h2>${card.name}</h2>
                    <p class="card-position">${position}</p>
                    <p><strong>关键词：</strong> ${interpretation.keywords}</p>
                </div>
            </div>
            <div class="interpretation">
                <h3>牌意解读</h3>
                <p>${interpretation.description}</p>
                
                <h3>与您问题的关联</h3>
                <p>根据您的问题 "${document.getElementById('question').value || '未提供具体问题'}"，这张牌表明：</p>
                <p>
                    ${position === '正位' 
                        ? `${card.name}的出现表明您面临新的机会和可能性。这个时刻可能是开始新项目或探索新方向的理想时机。信任您的能力和直觉。` 
                        : `${card.name}逆位提示您可能需要重新审视自己的方向或决定。这可能是一个反思和内省的时期，而非立即行动的时机。`}
                </p>
            </div>
        `;
        
        cardResult.innerHTML = resultHTML;
        cardResult.style.display = 'block';
        
        // 滚动到结果区域
        cardResult.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Fisher-Yates 洗牌算法
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
