// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // 简单的轮播效果（如果有多个评价）
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length > 1) {
        // 初始化：只显示第一个评价
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // 每5秒切换一次评价
        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 5000);
    }
    
    // 在这里添加其他交互功能（如有需要）

    // 收藏按钮功能增强
    const favoriteBtn = document.getElementById('favoriteBtn');
    const favTip = document.getElementById('favTip');
    const keyCommand = document.getElementById('keyCommand');
    const closeTip = document.getElementById('closeTip');

    if (favoriteBtn) {
        // 设置正确的快捷键文本
        if (navigator.platform.indexOf('Mac') > -1) {
            keyCommand.textContent = 'Command+D';
        }
        
        favoriteBtn.addEventListener('click', function() {
            // 显示悬浮提示而不是弹窗
            favTip.style.display = 'flex';
            
            // 5秒后自动隐藏提示
            setTimeout(() => {
                favTip.style.display = 'none';
            }, 5000);
        });
    }

    // 关闭提示按钮
    if (closeTip) {
        closeTip.addEventListener('click', function() {
            favTip.style.display = 'none';
        });
    }
});

// 添加基本的反爬虫保护
(function(){
    // 禁用右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // 禁用复制功能
    document.addEventListener('copy', function(e) {
        e.preventDefault();
    });
    
    // 禁用F12开发者工具
    document.onkeydown = function(e) {
        if (e.keyCode === 123) { // F12
            return false;
        }
        
        // 禁用Ctrl+Shift+I (Chrome开发者工具)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            return false;
        }
        
        // 禁用Ctrl+U (查看源代码)
        if (e.ctrlKey && e.keyCode === 85) {
            return false;
        }
    };
    
    // 检测爬虫特征
    function detectBot() {
        const botPatterns = [
            'googlebot', 'bingbot', 'yandex', 'baiduspider', 'facebookexternalhit',
            'twitterbot', 'rogerbot', 'linkedinbot', 'embedly', 'quora link preview',
            'showyoubot', 'outbrain', 'pinterest', 'slackbot', 'vkShare', 'W3C_Validator'
        ];
        
        const userAgent = navigator.userAgent.toLowerCase();
        for (const botPattern of botPatterns) {
            if (userAgent.indexOf(botPattern) !== -1) {
                console.log('Bot detected');
                // 可以在这里添加重定向或其他操作
                document.body.innerHTML = "Access denied.";
                return true;
            }
        }
        return false;
    }
    
    // 执行爬虫检测
    detectBot();
})();
