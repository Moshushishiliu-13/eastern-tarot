// 创建一个新的调试脚本文件

document.addEventListener('DOMContentLoaded', function() {
    console.log('调试脚本已加载');
    
    // 检查元素是否存在
    const spreadOptions = document.querySelectorAll('.spread-option');
    console.log('找到牌阵选项数量:', spreadOptions.length);
    
    spreadOptions.forEach((option, index) => {
        console.log(`牌阵选项 ${index+1}:`, option.dataset.spread);
        
        // 为每个选项添加更明显的点击效果和日志
        option.addEventListener('click', function() {
            console.log('点击了牌阵选项:', this.dataset.spread);
            this.style.border = '3px solid red';
            
            // 模拟原来的代码
            spreadOptions.forEach(opt => {
                if (opt !== this) {
                    opt.classList.remove('selected');
                    opt.style.border = '';
                }
            });
            this.classList.add('selected');
            
            // 设置全局变量让其他脚本可以访问
            window.selectedSpread = this.dataset.spread;
            console.log('当前选中的牌阵:', window.selectedSpread);
        });
    });
    
    // 检查抽牌按钮
    const drawBtn = document.getElementById('draw-spread');
    if (drawBtn) {
        console.log('找到抽牌按钮');
        drawBtn.addEventListener('click', function() {
            console.log('点击了抽牌按钮');
            console.log('当前选中的牌阵:', window.selectedSpread);
            
            if (!window.selectedSpread) {
                alert('请先选择一种牌阵类型');
                return;
            }
            
            alert('准备抽取牌阵: ' + window.selectedSpread);
        });
    } else {
        console.error('未找到抽牌按钮');
    }
}); 