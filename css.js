// 通用功能脚本
console.log('福之缘婚恋网站 - 用心服务每一位用户');

// 页面加载完成后执行
window.onload = function() {
    // 检测是否登录（模拟）
    const isLogin = localStorage.getItem('fuzhiyuan_login');
    if (isLogin && window.location.pathname.includes('login.html')) {
        window.location.href = 'profile.html';
    }

    // 退出登录功能（后续扩展）
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('fuzhiyuan_login');
            alert('已退出登录！');
            window.location.href = 'login.html';
        });
    }
};

// 图片懒加载（基础版）
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});
