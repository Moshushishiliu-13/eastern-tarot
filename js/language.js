/**
 * 语言切换功能
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有语言按钮
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('language') || 'zh';
    
    // 设置初始语言
    setLanguage(currentLang);
    
    // 为每个语言按钮添加点击事件
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });
    
    /**
     * 设置语言
     * @param {string} lang 语言代码
     */
    function setLanguage(lang) {
        // 更新按钮状态
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
        
        // 保存语言选择
        localStorage.setItem('language', lang);
        
        // 设置文档语言属性
        document.documentElement.lang = lang;
        
        // 更新页面内容
        updateContent(lang);
    }
    
    /**
     * 更新页面内容
     * @param {string} lang 语言代码
     */
    function updateContent(lang) {
        // 获取所有需要翻译的元素
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = translations[lang][key];
            if (translation) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
});

// 翻译内容
const translations = {
    zh: {
        'home': '首页',
        'draw': '单牌抽取',
        'spread': '牌阵解读',
        'about': '关于我们',
        'title': '神秘塔罗',
        'description': '探索神秘的塔罗世界',
        'startReading': '开始占卜',
        'favorite': '收藏本站',
        'tarotServices': '塔罗牌测试服务',
        'singleCard': '单牌抽取',
        'singleCardDesc': '适合快速获取指引，回答简单的是非问题',
        'threeCard': '三卡牌阵',
        'threeCardDesc': '过去、现在、未来的完整视角',
        'fiveCard': '万能二选一牌阵',
        'fiveCardDesc': 'V字型布局，帮助您在两个选择间做出明智决策',
        'celticCross': '凯尔特十字',
        'celticCrossDesc': '深入解析复杂问题的各个方面',
        'drawTitle': '单牌抽取 - 神秘塔罗',
        'drawInstruction': '集中您的意念，想着您的问题，然后选择一张牌',
        'questionLabel': '输入您的问题（可选）:',
        'questionPlaceholder': '例如：我的职业发展如何？',
        'shuffle': '洗牌',
        'footerSlogan': '您的命运指南',
        'quickLinks': '快速链接',
        'contactUs': '联系我们',
        'allRights': '保留所有权利',
        'spreadTitle': '牌阵解读 - 神秘塔罗',
        'spreadInstruction': '选择一种牌阵来获得更深入的指引',
        'spreadQuestionLabel': '输入您的问题:',
        'spreadQuestionPlaceholder': '例如：我未来的爱情走向如何？',
        'selectSpreadError': '请先选择一个牌阵',
        'drawingError': '抽牌过程中发生错误：',
        'noQuestion': '未提供具体问题'
    },
    en: {
        'home': 'Home',
        'draw': 'Single Card',
        'spread': 'Card Spread',
        'about': 'About',
        'title': 'Mystic Tarot',
        'description': 'Explore the Mysterious World of Tarot',
        'startReading': 'Start Reading',
        'favorite': 'Add to Favorites',
        'tarotServices': 'Tarot Reading Services',
        'singleCard': 'Single Card Reading',
        'singleCardDesc': 'Perfect for quick guidance and yes/no questions',
        'threeCard': 'Three Card Spread',
        'threeCardDesc': 'A complete perspective of past, present, and future',
        'fiveCard': 'Decision-Making Spread',
        'fiveCardDesc': 'V-shaped layout to help you make wise choices between two options',
        'celticCross': 'Celtic Cross',
        'celticCrossDesc': 'In-depth analysis of all aspects of complex issues',
        'drawTitle': 'Single Card Reading - Mystic Tarot',
        'drawInstruction': 'Focus your mind, think about your question, and select a card',
        'questionLabel': 'Enter your question (optional):',
        'questionPlaceholder': 'e.g., How will my career develop?',
        'shuffle': 'Shuffle',
        'footerSlogan': 'Your Guide to Destiny',
        'quickLinks': 'Quick Links',
        'contactUs': 'Contact Us',
        'allRights': 'All rights reserved',
        'spreadTitle': 'Card Spread Reading - Mystic Tarot',
        'spreadInstruction': 'Choose a spread for deeper guidance',
        'spreadQuestionLabel': 'Enter your question:',
        'spreadQuestionPlaceholder': 'e.g., What is the future of my love life?',
        'selectSpreadError': 'Please select a spread first',
        'drawingError': 'An error occurred during card drawing:',
        'noQuestion': 'No specific question provided'
    }
}; 