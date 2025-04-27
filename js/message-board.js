// 留言板功能
document.addEventListener('DOMContentLoaded', function() {
    // DOM元素
    const loginSection = document.getElementById('login-section');
    const messageSection = document.getElementById('message-section');
    const loginForm = document.getElementById('login-form');
    const messageForm = document.getElementById('message-form');
    const logoutBtn = document.getElementById('logout-btn');
    const loggedUsername = document.getElementById('logged-username');
    const messagesContainer = document.getElementById('messages-container');
    
    // 检查登录状态
    function checkLoginStatus() {
        const username = localStorage.getItem('tarot-username');
        if (username) {
            // 已登录
            loginSection.style.display = 'none';
            messageSection.style.display = 'block';
            loggedUsername.textContent = username;
            loadMessages();
        } else {
            // 未登录
            loginSection.style.display = 'block';
            messageSection.style.display = 'none';
        }
    }
    
    // 登录表单提交
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (username && password) {
                // 简单演示，任意用户名密码都可登录
                localStorage.setItem('tarot-username', username);
                checkLoginStatus();
                
                // 重置表单
                loginForm.reset();
            }
        });
    }
    
    // 退出登录
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('tarot-username');
            checkLoginStatus();
        });
    }
    
    // 留言表单提交
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageContent = document.getElementById('message-content').value.trim();
            
            if (messageContent) {
                const username = localStorage.getItem('tarot-username');
                if (!username) {
                    alert('请先登录后再留言');
                    return;
                }
                
                // 创建新留言
                const newMessage = {
                    id: Date.now(), // 使用时间戳作为ID
                    username: username,
                    content: messageContent,
                    date: new Date().toISOString()
                };
                
                // 保存留言
                saveMessage(newMessage);
                
                // 重置表单
                messageForm.reset();
                
                // 刷新留言列表
                loadMessages();
            }
        });
    }
    
    // 保存留言到localStorage
    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem('tarot-messages') || '[]');
        messages.push(message);
        localStorage.setItem('tarot-messages', JSON.stringify(messages));
    }
    
    // 加载留言
    function loadMessages() {
        if (!messagesContainer) return;
        
        const messages = JSON.parse(localStorage.getItem('tarot-messages') || '[]');
        
        if (messages.length === 0) {
            messagesContainer.innerHTML = '<div class="no-messages">暂无留言，成为第一个留言的用户吧！</div>';
            return;
        }
        
        // 清空容器
        messagesContainer.innerHTML = '';
        
        // 按时间倒序排列留言
        messages.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // 添加留言到列表
        messages.forEach(message => {
            const messageDate = new Date(message.date);
            const formattedDate = messageDate.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const messageElement = document.createElement('div');
            messageElement.className = 'message-item';
            messageElement.innerHTML = `
                <div class="message-header">
                    <span class="message-user">${escapeHTML(message.username)}</span>
                    <span class="message-date">${formattedDate}</span>
                </div>
                <div class="message-content">${escapeHTML(message.content)}</div>
            `;
            
            messagesContainer.appendChild(messageElement);
        });
    }
    
    // 安全：转义HTML，防止XSS攻击
    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function(match) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[match];
        });
    }
    
    // 初始检查登录状态
    checkLoginStatus();
}); 