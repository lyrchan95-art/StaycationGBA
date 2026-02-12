/**
 * 目的地詳情頁面 JavaScript
 * 功能：錨點導航、標籤頁切換、行程天數切換、評論評分、圖片懶加載等
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. 錨點導航 - 滾動時自動高亮對應選單
    // ============================================
    const anchorLinks = document.querySelectorAll('.anchor-link');
    const sections = document.querySelectorAll('.content-section');
    
    if (anchorLinks.length > 0 && sections.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // 偏移量，避免太晚切換
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            anchorLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').replace('#', '');
                if (href === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // 平滑滾動到錨點
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ============================================
    // 2. 交通指南標籤頁切換
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 找到所屬的 tab 容器
            const tabsContainer = this.closest('.transport-tabs');
            if (!tabsContainer) return;
            
            // 移除所有 active 狀態
            tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabsContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // 添加 active 狀態到當前按鈕
            this.classList.add('active');
            
            // 顯示對應的 tab 內容
            const tabId = this.dataset.tab;
            const targetContent = tabsContainer.querySelector(`#${tabId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ============================================
    // 3. 行程天數切換 (一日遊/兩日遊/三日遊)
    // ============================================
    const itineraryTabs = document.querySelectorAll('.itinerary-tab');
    
    itineraryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const container = this.closest('.itinerary-tabs').parentElement;
            
            // 移除所有 active 狀態
            container.querySelectorAll('.itinerary-tab').forEach(t => t.classList.remove('active'));
            container.querySelectorAll('.itinerary-content').forEach(c => c.classList.remove('active'));
            
            // 添加 active 狀態到當前按鈕
            this.classList.add('active');
            
            // 顯示對應的行程內容
            const days = this.dataset.days;
            const targetContent = container.querySelector(`#day${days}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ============================================
    // 4. 城市美食標籤切換 (潮汕頁面 - 潮州/汕頭)
    // ============================================
    const cityTabs = document.querySelectorAll('.city-tab');
    
    cityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const container = this.closest('.food-city-tabs');
            
            container.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
            container.querySelectorAll('.city-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            
            const cityId = this.dataset.city;
            const targetContent = container.querySelector(`#${cityId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ============================================
    // 5. 住宿篩選按鈕
    // ============================================
    const filterChips = document.querySelectorAll('.filter-chip');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // 移除同組其他 active 狀態
            const parent = this.parentElement;
            parent.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // 這裡可以加入實際的篩選邏輯
            // 例如：根據價格篩選住宿卡片
            const filterType = this.textContent;
            filterAccommodations(filterType);
        });
    });
    
    // 住宿篩選函數 (可擴充)
    function filterAccommodations(filter) {
        const cards = document.querySelectorAll('.accommodation-card');
        
        cards.forEach(card => {
            // 簡單示範：全部顯示
            // 實際應用可根據價格、距離等條件篩選
            card.style.display = 'flex';
            
            if (filter.includes('經濟型') && card.querySelector('.price-badge')) {
                const price = card.querySelector('.price-badge').textContent;
                // 這裡可以加入價格判斷邏輯
            }
        });
    }
    
    // ============================================
    // 6. 評論評分功能 (星星評分)
    // ============================================
    const starContainers = document.querySelectorAll('.stars');
    
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            // 滑鼠懸停效果
            star.addEventListener('mouseenter', function() {
                resetStars(stars);
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('hover');
                }
            });
            
            // 點擊評分
            star.addEventListener('click', function() {
                resetStars(stars, true);
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('selected');
                }
                
                // 可以將評分值儲存在隱藏欄位
                const ratingValue = index + 1;
                const form = this.closest('form');
                if (form) {
                    let ratingInput = form.querySelector('.rating-value');
                    if (!ratingInput) {
                        ratingInput = document.createElement('input');
                        ratingInput.type = 'hidden';
                        ratingInput.className = 'rating-value';
                        form.appendChild(ratingInput);
                    }
                    ratingInput.value = ratingValue;
                }
            });
        });
        
        // 離開星星區域時移除懸停效果
        container.addEventListener('mouseleave', function() {
            stars.forEach(star => star.classList.remove('hover'));
        });
    });
    
    // 重置星星狀態
    function resetStars(stars, keepSelected = false) {
        stars.forEach(star => {
            star.classList.remove('hover');
            if (!keepSelected) {
                star.classList.remove('selected');
            }
        });
    }
    
    // ============================================
    // 7. 評論表單提交
    // ============================================
    const commentForms = document.querySelectorAll('.comment-form form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 獲取表單數據
            const nickname = this.querySelector('input[type="text"]')?.value || '匿名';
            const rating = this.querySelector('.rating-value')?.value || '5';
            const comment = this.querySelector('textarea')?.value;
            
            if (!comment) {
                alert('請填寫評論內容');
                return;
            }
            
            // 這裡可以發送 AJAX 請求到後端
            console.log('提交評論:', { nickname, rating, comment });
            
            // 模擬提交成功
            alert('評論已提交，審核後將顯示');
            
            // 重置表單
            this.reset();
            resetStars(document.querySelectorAll('.stars .star'));
        });
    });
    
    // ============================================
    // 8. 圖片懶加載 (優化效能)
    // ============================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // 9. 返回頂部按鈕 (動態建立)
    // ============================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = '返回頂部';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #e31837;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 999;
        transition: all 0.3s;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // 10. 高鐵班次表 - 今日是否營運
    // ============================================
    const scheduleTables = document.querySelectorAll('.schedule-table');
    
    scheduleTables.forEach(table => {
        // 可在此加入動態更新班次資訊的功能
        // 例如：根據當前時間顯示最近班次
    });
    
    // ============================================
    // 11. 下載攻略按鈕追蹤
    // ============================================
    const downloadBtns = document.querySelectorAll('.download-guide-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 獲取當前頁面的目的地名稱
            const destination = document.querySelector('.hero-title h1')?.textContent || '目的地';
            
            // 這裡可以發送下載統計
            console.log(`下載攻略: ${destination}`);
            
            // 模擬下載
            alert(`《${destination}旅遊攻略》下載中...\n(實際應用中會提供PDF下載連結)`);
            
            // 實際應用中，這裡可以：
            // 1. 跳轉到真實的 PDF 檔案連結
            // 2. 發送 AJAX 請求記錄下載次數
            // 3. 彈出訂閱電子報視窗
        });
    });
    
    // ============================================
    // 12. 分享按鈕功能
    // ============================================
    function initShareButtons() {
        const shareButtons = document.querySelectorAll('.share-btn');
        
        shareButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const platform = this.dataset.platform;
                const title = document.title;
                const url = window.location.href;
                
                let shareUrl = '';
                
                switch(platform) {
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                        break;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                        break;
                    case 'whatsapp':
                        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
                        break;
                    case 'line':
                        shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
                        break;
                    case 'email':
                        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
                        break;
                }
                
                if (shareUrl) {
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                }
            });
        });
    }
    
    // 初始化分享按鈕 (如果有)
    initShareButtons();
    
    // ============================================
    // 13. 導航欄搜尋功能
    // ============================================
    const blogSearch = document.getElementById('blogSearch');
    
    if (blogSearch) {
        blogSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    // 跳轉到搜尋結果頁面 (這裡先跳轉到 blog 頁面)
                    window.location.href = `../blog.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
    
    // ============================================
    // 14. 訂閱電子報表單
    // ============================================
    const subscribeForms = document.querySelectorAll('.subscribe-form');
    
    subscribeForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]')?.value;
            
            if (!email || !email.includes('@')) {
                alert('請輸入有效的電子郵件地址');
                return;
            }
            
            // 這裡可以發送 AJAX 請求到後端
            console.log('訂閱電子報:', email);
            
            alert('感謝訂閱！我們將定期發送旅遊情報給您。');
            this.reset();
        });
    });
    
    // ============================================
    // 15. 頁面載入完成後執行
    // ============================================
    console.log('目的地頁面初始化完成');
    
    // 檢查 URL 參數，自動滾動到指定區塊
    const urlHash = window.location.hash;
    if (urlHash) {
        setTimeout(() => {
            const targetElement = document.querySelector(urlHash);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// ============================================
// 16. 地圖相關功能 (如果頁面有嵌入地圖)
// ============================================
function initDestinationMap() {
    // 這裡可以加入 Google Maps 或其他地圖服務的初始化程式碼
    // 例如：顯示景點位置、高鐵站位置等
}

// ============================================
// 17. 列印攻略功能
// ============================================
function printGuide() {
    window.print();
}

// 將函數暴露給全域，以便 HTML 直接調用
window.printGuide = printGuide;
window.initDestinationMap = initDestinationMap;