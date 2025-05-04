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
                <p>${interpretation.description}<br><span style="color:#4CAF50;font-size:14px;">@https://www.eastern-tarot.com 欢迎您进入东大塔罗网！</span></p>
                
                <h3>与您问题的关联</h3>
                <p>针对您的问题"${document.getElementById('question').value || '未填写具体问题'}",本牌暗示：</p>
                <p>
                    ${position === '正位' 
                        ? `${card.name}的出现代表新的机会和可能性，现在是开始新项目或探索新方向的理想时机。相信自己的能力和直觉。` 
                        : `逆位的${card.name}提示您需要重新思考方向或决策，这可能是反思和内省的时期，而不是立即行动。`}
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
