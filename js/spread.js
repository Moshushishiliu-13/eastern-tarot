// js/spread.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('spread.js已加载');
    
    const spreadOptions = document.querySelectorAll('.spread-option');
    const drawSpreadBtn = document.getElementById('draw-spread');
    const spreadReading = document.getElementById('spread-reading');
    
    let selectedSpread = null;
    
    // 处理URL锚点
    const hash = window.location.hash.substring(1);
    if (hash) {
        console.log('检测到URL锚点:', hash);
        spreadOptions.forEach(option => {
            if (option.dataset.spread === hash) {
                console.log('根据锚点选中牌阵:', hash);
                setTimeout(() => {
                    option.click();
                    option.scrollIntoView({behavior: 'smooth'});
                }, 300);
            }
        });
    }
    
    // 选择牌阵类型
    spreadOptions.forEach(option => {
        option.addEventListener('click', function() {
            console.log('选择牌阵:', this.dataset.spread);
            spreadOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedSpread = this.dataset.spread;
        });
    });
    
    // 开始牌阵解读
    if (drawSpreadBtn) {
        drawSpreadBtn.addEventListener('click', function() {
            console.log('点击抽牌按钮, 选中的牌阵:', selectedSpread);
            
            if (!selectedSpread) {
                alert('请先选择一种牌阵类型');
                return;
            }
            
            const question = document.getElementById('spread-question').value || '未提供具体问题';
            console.log('问题:', question);
            
            try {
                // 洗牌
                const shuffledCards = shuffleArray([...tarotCards]);
                console.log('洗牌完成');
                
                // 根据选择的牌阵类型展示不同的结果
                if (selectedSpread === 'three-card') {
                    console.log('显示三卡牌阵');
                    displayThreeCardSpread(shuffledCards.slice(0, 3), question);
                } else if (selectedSpread === 'five-card') {
                    console.log('显示万能二选一牌阵');
                    displayFiveCardSpread(shuffledCards.slice(0, 5), question);
                } else if (selectedSpread === 'celtic-cross') {
                    console.log('显示凯尔特十字牌阵');
                    displayCelticCross(shuffledCards.slice(0, 10), question);
                }
                
                // 显示结果区域并滚动到此处
                spreadReading.style.display = 'block';
                spreadReading.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('抽牌过程中发生错误:', error);
                alert('抽牌过程中发生错误: ' + error.message);
            }
        });
    } else {
        console.error('未找到抽牌按钮');
    }
    
    // 洗牌函数
    function shuffleArray(array) {
        console.log('开始洗牌');
        const arrayCopy = [...array];
        for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        return arrayCopy;
    }
    
    // 显示三卡牌阵
    function displayThreeCardSpread(cards, question) {
        const positions = ['过去', '现在', '未来'];
        const meanings = [
            '这张牌代表影响您当前情况的过去事件或能量。',
            '这张牌展示了您现在所处的情况和影响您的能量。',
            '这张牌暗示了您问题可能的发展方向或结果。'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.5 ? '逆位' : '正位');
        let spreadHTML = `
            <div class="container">
                <div class="three-card-spread">
        `;
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="spread-card" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === '逆位' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
                    <h2>三卡牌阵：${question}</h2>
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === '正位' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>关键词：</strong> ${interpretation.keywords}</p>
                    <p><strong>牌意：</strong> ${interpretation.description}<br><span style="color:#4CAF50;font-size:14px;">@https://www.eastern-tarot.com 欢迎您进入东大塔罗网！</span></p>
                    <p><strong>位置意义：</strong> ${meanings[index]}</p>
                    <p><strong>在您问题中的意义：</strong> 
                        ${generateMeaning(card, positionText, positions[index], question)}
                    </p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>整体解读</h3>
                    <p>
                        根据这三张牌的组合，您的问题"${question}"可以从以下角度理解：
                        过去的${cards[0].name}${cardPositions[0] === '逆位' ? '逆位' : ''}表明
                        ${cardPositions[0] === '正位' 
                            ? '您有良好的基础和经验可以依靠。' 
                            : '过去可能存在未解决的问题需要处理。'}
                        
                        而现在的${cards[1].name}${cardPositions[1] === '逆位' ? '逆位' : ''}显示
                        ${cardPositions[1] === '正位' 
                            ? '您目前正在采取正确的行动方向。' 
                            : '当前情况可能存在一些障碍或挑战。'}
                        
                        未来的${cards[2].name}${cardPositions[2] === '逆位' ? '逆位' : ''}预示
                        ${cardPositions[2] === '正位' 
                            ? '结果很可能是积极的，只要您继续当前的路径。' 
                            : '可能需要调整您的方法才能获得理想的结果。'}
                        
                        整体而言，这个牌阵建议您
                        ${cardPositions.filter(p => p === '正位').length >= 2 
                            ? '保持信心，继续前进，大部分能量是支持您的。' 
                            : '反思并调整您的方法，可能需要解决一些潜在的阻碍。'}
                    </p>
                </div>
            </div>
        </div>
        `;
        spreadReading.innerHTML = spreadHTML;
    }
    
    // 显示凯尔特十字牌阵
    function displayCelticCross(cards, question) {
        const positions = [
            '核心问题', '交叉影响', '思想基础', '过去影响', 
            '目标/可能性', '近期发展', '自我认知', '外在环境', 
            '希望或担忧', '最终结果'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.5 ? '逆位' : '正位');
        let spreadHTML = `
            <div class="container">
                <div class="celtic-cross-spread">
        `;
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="celtic-card card-${index + 1}" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === '逆位' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
                    <h2>凯尔特十字牌阵：${question}</h2>
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === '正位' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${index + 1}. ${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>关键词：</strong> ${interpretation.keywords}</p>
                    <p><strong>牌意：</strong> ${interpretation.description}<br><span style="color:#4CAF50;font-size:14px;">@https://www.eastern-tarot.com 欢迎您进入东大塔罗网！</span></p>
                    <p><strong>位置意义：</strong> ${getCelticPositionMeaning(index)}</p>
                    <p><strong>在您问题中的意义：</strong> 
                        ${generateMeaning(card, positionText, positions[index], question)}
                    </p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>整体解读</h3>
                    <p>
                        您的问题"${question}"通过凯尔特十字牌阵展现了多层次的解读。
                        中心的${cards[0].name}${cardPositions[0] === '逆位' ? '逆位' : ''}与
                        ${cards[1].name}${cardPositions[1] === '逆位' ? '逆位' : ''}显示了核心情况和主要挑战。
                        
                        基础和冠顶位置的${cards[2].name}和${cards[3].name}揭示了问题的根源和您的思维模式。
                        
                        过去的${cards[4].name}和将来的${cards[5].name}展示了情况的变化趋势。
                        
                        最右侧的牌列表明了情况将如何展开，最终结果的${cards[9].name}
                        ${cardPositions[9] === '正位' 
                            ? '预示着积极的结局。' 
                            : '提醒您需要克服一些障碍才能达成目标。'}
                        
                        总的来说，这个牌阵建议您
                        ${cardPositions.filter(p => p === '正位').length >= 6 
                            ? '顺应当前能量，继续您的计划，多数指标是有利的。' 
                            : '需要更加谨慎并检视可能存在的障碍，做好充分准备再行动。'}
                    </p>
                </div>
            </div>
        </div>
        `;
        spreadReading.innerHTML = spreadHTML;
    }
    
    // 获取凯尔特十字牌阵各位置的含义
    function getCelticPositionMeaning(position) {
        const meanings = [
            '代表当前情况的核心或问题的本质。',
            '展示与核心问题交叉的挑战或影响。',
            '展示您的思想基础和意识心态。',
            '代表已经过去但仍在影响当前情况的事件。',
            '表示可能的未来发展或您希望达成的目标。',
            '预示即将到来的情况或短期内的发展。',
            '反映您在这个情况中如何看待自己。',
            '代表您周围的环境和他人的影响。',
            '反映您的希望或担忧，可能影响情况的心理因素。',
            '预示问题的可能结果或长期影响。'
        ];
        
        return meanings[position] || '';
    }
    
    // 根据牌和位置生成个性化解读文本
    function generateMeaning(card, positionText, positionName, question) {
        // 这是一个简化的示例，实际应用中可以有更复杂的逻辑
        const isPositive = positionText === '正位';
        const cardName = card.name;
        
        let meaning = '';
        
        // 根据位置生成不同的解读
        if (positionName.includes('过去')) {
            meaning = isPositive 
                ? `${cardName}表明您过去的经历为当前情况提供了有利基础。您积累的经验和智慧将帮助您解决当前问题。`
                : `${cardName}逆位表明过去可能有未解决的问题或经历仍在影响您。这可能需要您重新审视并处理这些旧事。`;
        } else if (positionName.includes('现在') || positionName.includes('核心')) {
            meaning = isPositive
                ? `${cardName}显示您目前正以积极的方式处理这个问题。继续保持这种状态将有助于取得进展。`
                : `${cardName}逆位表明您可能对当前情况有误解或态度不够积极。重新考虑您的方法可能会有所帮助。`;
        } else if (positionName.includes('未来') || positionName.includes('结果')) {
            meaning = isPositive
                ? `${cardName}预示着积极的发展。如果您保持当前路线，很可能会实现您的目标或解决问题。`
                : `${cardName}逆位提醒您需要做好准备面对一些挑战。调整您的期望和方法可能会帮助您获得更好的结果。`;
        } else {
            meaning = isPositive
                ? `${cardName}在这个位置表明能量是有利的，支持您在这个方面的发展。`
                : `${cardName}逆位表明这个方面可能存在一些障碍或需要您更多关注。`;
        }
        
        return meaning;
    }
    
    // 完整的五张牌阵显示函数
    function displayFiveCardSpread(cards, question) {
        console.log('执行displayFiveCardSpread函数');
        const positions = ['现在', '选择A的发展', '选择B的发展', '选择A的影响', '选择B的影响'];
        const meanings = [
            '这张牌代表您当前所处的情况和决策点。',
            '这张牌显示如果选择选项A，情况将如何发展。',
            '这张牌显示如果选择选项B，情况将如何发展。',
            '这张牌展示选择A可能带来的长期影响或结果。',
            '这张牌展示选择B可能带来的长期影响或结果。'
        ];
        const cardPositions = cards.map(() => Math.random() > 0.6 ? '逆位' : '正位');
        let optionA = "选项A";
        let optionB = "选项B";
        if (question.includes("是选") && question.includes("还是")) {
            const parts = question.split(/是选|还是/);
            if (parts.length >= 3) {
                optionA = parts[1].trim();
                optionB = parts[2].split('?')[0].trim();
            }
        }
        console.log('牌阵选项:', optionA, optionB);
        let spreadHTML = `
            <div class="container">
                <h2>万能二选一牌阵：${question}</h2>
                <p class="spread-description">V字型决策牌阵：底部为当前情况，左侧为"${optionA}"的发展和影响，右侧为"${optionB}"的发展和影响。</p>
                <div class="five-card-spread">
        `;
        const positionClasses = [
            'five-current',
            'five-option-a',
            'five-option-b',
            'five-option-a-impact',
            'five-option-b-impact'
        ];
        cards.forEach((card, index) => {
            spreadHTML += `
                <div class="five-card ${positionClasses[index]}" style="position: relative; background-image: url('${card.image}'); 
                    ${cardPositions[index] === '逆位' ? 'transform: rotate(180deg);' : ''}">
                    <div class="card-label">${positions[index]}</div>
                </div>
            `;
        });
        spreadHTML += `
                </div>
                <div class="spread-interpretation">
        `;
        cards.forEach((card, index) => {
            const positionText = cardPositions[index];
            const interpretation = positionText === '正位' ? card.upright : card.reversed;
            spreadHTML += `
                <div class="card-interpretation">
                    <h3>${card.name} <span class="position">(${positions[index]} - ${positionText})</span></h3>
                    <p><strong>关键词：</strong> ${interpretation.keywords}</p>
                    <p><strong>牌意：</strong> ${interpretation.description}<br><span style="color:#4CAF50;font-size:14px;">@https://www.eastern-tarot.com 欢迎您进入东大塔罗网！</span></p>
                    <p><strong>位置意义：</strong> ${meanings[index]}</p>
                </div>
            `;
        });
        spreadHTML += `
                <div class="overall-meaning">
                    <h3>整体解读</h3>
                    <p>
                        您正在考虑"${optionA}"和"${optionB}"两个选择。
                        根据牌面显示，如果选择"${optionA}"，发展趋势将如${cards[1].name}所示，
                        而选择"${optionB}"则会如${cards[2].name}所指引。
                        
                        从长远来看，您需要考虑这两个选择各自的影响：
                        "${optionA}"可能带来${cards[3].name}的能量，
                        而"${optionB}"则可能导向${cards[4].name}的结果。
                        
                        最终，您当前所处的${cards[0].name}状态提示您，
                        在做决定时需要权衡这些因素并倾听内心的声音。
                    </p>
                </div>
            </div>
        </div>
        `;
        console.log('生成HTML完成');
        spreadReading.innerHTML = spreadHTML;
        console.log('显示结果完成');
    }
    
    // 保存解读结果到localStorage
    function saveReadingToHistory(question, spreadType, cards, positions) {
        // 获取现有历史记录
        let history = JSON.parse(localStorage.getItem('tarot-reading-history') || '[]');
        
        // 添加新的解读记录
        const newReading = {
            id: Date.now(), // 使用时间戳作为唯一ID
            date: new Date().toISOString(),
            question: question,
            spreadType: spreadType,
            cards: cards.map((card, index) => ({
                name: card.name,
                position: spreadType === 'five-card' ? ['现状', '选择A的发展', '选择B的发展', '选择A的影响', '选择B的影响'][index] : '',
                orientation: positions[index]
            }))
        };
        
        // 将新记录添加到历史
        history.unshift(newReading); // 添加到最前面
        
        // 如果历史记录过多，只保留最近的20条
        if (history.length > 20) {
            history = history.slice(0, 20);
        }
        
        // 保存更新后的历史记录
        localStorage.setItem('tarot-reading-history', JSON.stringify(history));
    }
});
