// 車站數據
const stations = [
    // 廣深港主線 (紅色 #e31837)
    { id: 1, name: "香港西九龍", time: "0小時", minutes: 0, line: "main", x: 25, y: 85, 
      desc: "起點站，需在此完成出入境手續", region: "香港", isHub: true, color: "#e31837" },
    { id: 2, name: "深圳福田", time: "14分鐘", minutes: 14, line: "main", x: 30, y: 70, 
      desc: "位於深圳市中心，連接深圳地鐵", region: "深圳", isHub: false, color: "#e31837" },
    { id: 3, name: "深圳北", time: "25分鐘", minutes: 25, line: "main", x: 35, y: 65, 
      desc: "主要換乘樞紐，可轉乘東部及北部線路", region: "深圳", isHub: true, color: "#e31837" },
    { id: 4, name: "光明城", time: "30分鐘", minutes: 30, line: "main", x: 40, y: 60, 
      desc: "服務深圳光明區", region: "深圳", isHub: false, color: "#e31837" },
    { id: 5, name: "東莞虎門", time: "40分鐘", minutes: 40, line: "main", x: 45, y: 55, 
      desc: "服務東莞西部地區，重要換乘站", region: "東莞", isHub: true, color: "#e31837" },
    { id: 6, name: "慶盛", time: "35分鐘", minutes: 35, line: "main", x: 48, y: 52, 
      desc: "服務廣州南沙區", region: "廣州", isHub: false, color: "#e31837" },
    { id: 7, name: "廣州南", time: "55分鐘", minutes: 55, line: "main", x: 55, y: 45, 
      desc: "全國主要換乘樞紐，連接全國高鐵網絡", region: "廣州", isHub: true, color: "#e31837" },
    
    // 東部沿海線 (綠色 #00a650)
    { id: 8, name: "坪山", time: "30分鐘", minutes: 30, line: "east", x: 42, y: 62, 
      desc: "經深圳北換乘，服務深圳東部", region: "深圳", isHub: false, color: "#00a650" },
    { id: 9, name: "惠州南", time: "45分鐘", minutes: 45, line: "east", x: 50, y: 55, 
      desc: "經深圳北換乘，服務惠州地區", region: "惠州", isHub: false, color: "#00a650" },
    { id: 10, name: "惠東", time: "1小時15分鐘", minutes: 75, line: "east", x: 55, y: 50, 
      desc: "服務惠東縣", region: "惠州", isHub: false, color: "#00a650" },
    { id: 11, name: "汕尾", time: "1小時45分鐘", minutes: 105, line: "east", x: 65, y: 40, 
      desc: "東部沿海線主要車站，有直達車", region: "汕尾", isHub: true, color: "#00a650" },
    { id: 12, name: "陸豐", time: "2小時", minutes: 120, line: "east", x: 70, y: 38, 
      desc: "服務陸豐市", region: "汕尾", isHub: false, color: "#00a650" },
    { id: 13, name: "揭陽", time: "2小時45分鐘", minutes: 165, line: "east", x: 75, y: 32, 
      desc: "服務揭陽市", region: "揭陽", isHub: false, color: "#00a650" },
    { id: 14, name: "潮汕", time: "3小時", minutes: 180, line: "east", x: 78, y: 30, 
      desc: "服務潮州、揭陽、汕頭地區，有直達車", region: "潮汕", isHub: true, color: "#00a650" },
    { id: 15, name: "饒平", time: "3小時15分鐘", minutes: 195, line: "east", x: 82, y: 28, 
      desc: "粵閩交界車站", region: "潮州", isHub: false, color: "#00a650" },
    { id: 16, name: "漳州", time: "3小時45分鐘", minutes: 225, line: "east", x: 85, y: 25, 
      desc: "服務漳州市", region: "福建", isHub: false, color: "#9c27b0" },
    { id: 17, name: "廈門北", time: "4小時", minutes: 240, line: "east", x: 88, y: 22, 
      desc: "4小時生活圈邊界，有直達車", region: "福建", isHub: true, color: "#9c27b0" },
    
    // 北部幹線 (橙色 #ff6b35)
    { id: 18, name: "東莞南", time: "40分鐘", minutes: 40, line: "north", x: 43, y: 58, 
      desc: "服務東莞東部", region: "東莞", isHub: false, color: "#ff6b35" },
    { id: 19, name: "惠州北", time: "50分鐘", minutes: 50, line: "north", x: 48, y: 50, 
      desc: "服務惠州北部", region: "惠州", isHub: false, color: "#ff6b35" },
    { id: 20, name: "博羅北", time: "55分鐘", minutes: 55, line: "north", x: 50, y: 45, 
      desc: "服務博羅縣", region: "惠州", isHub: false, color: "#ff6b35" },
    { id: 21, name: "河源東", time: "1小時45分鐘", minutes: 105, line: "north", x: 55, y: 35, 
      desc: "經深圳北換乘，連接粵北地區", region: "河源", isHub: true, color: "#ff6b35" },
    { id: 22, name: "龍川西", time: "2小時15分鐘", minutes: 135, line: "north", x: 60, y: 28, 
      desc: "服務龍川縣", region: "河源", isHub: false, color: "#ff6b35" },
    { id: 23, name: "和平北", time: "2小時30分鐘", minutes: 150, line: "north", x: 63, y: 25, 
      desc: "粵贛交界車站", region: "河源", isHub: false, color: "#ff6b35" },
    { id: 24, name: "定南南", time: "2小時45分鐘", minutes: 165, line: "north", x: 65, y: 22, 
      desc: "江西省定南縣", region: "江西", isHub: false, color: "#2196f3" },
    { id: 25, name: "龍南東", time: "3小時", minutes: 180, line: "north", x: 68, y: 20, 
      desc: "江西省龍南市", region: "江西", isHub: false, color: "#2196f3" },
    { id: 26, name: "信豐西", time: "3小時15分鐘", minutes: 195, line: "north", x: 72, y: 18, 
      desc: "江西省信豐縣", region: "江西", isHub: false, color: "#2196f3" },
    { id: 27, name: "贛州西", time: "3小時30分鐘", minutes: 210, line: "north", x: 75, y: 15, 
      desc: "江西省車站，有直達車", region: "江西", isHub: true, color: "#2196f3" },
    
    // 經廣州南轉乘 (黃色 #ffd200)
    { id: 28, name: "佛山西", time: "1小時10分鐘", minutes: 70, line: "west", x: 52, y: 42, 
      desc: "經廣州南換乘，服務佛山地區", region: "佛山", isHub: true, color: "#ffd200" },
    { id: 29, name: "肇慶東", time: "1小時30分鐘", minutes: 90, line: "west", x: 48, y: 38, 
      desc: "經廣州南換乘", region: "肇慶", isHub: false, color: "#ffd200" },
    { id: 30, name: "雲浮東", time: "1小時45分鐘", minutes: 105, line: "west", x: 45, y: 35, 
      desc: "經廣州南換乘", region: "雲浮", isHub: false, color: "#ffd200" },
    { id: 31, name: "南江口", time: "2小時", minutes: 120, line: "west", x: 42, y: 32, 
      desc: "經廣州南換乘", region: "雲浮", isHub: false, color: "#ffd200" },
    { id: 32, name: "梧州南", time: "2小時15分鐘", minutes: 135, line: "west", x: 38, y: 28, 
      desc: "廣西梧州市", region: "廣西", isHub: false, color: "#ffd200" },
    { id: 33, name: "中山", time: "1小時", minutes: 60, line: "west", x: 58, y: 48, 
      desc: "經廣州南換乘，連接中山市", region: "中山", isHub: false, color: "#ffd200" },
    { id: 34, name: "珠海", time: "1小時10分鐘", minutes: 70, line: "west", x: 60, y: 50, 
      desc: "經廣州南換乘，終點站之一", region: "珠海", isHub: false, color: "#ffd200" }
];

// 線路數據
const lines = [
    { id: "main", name: "廣深港高鐵主線", color: "#e31837", stations: [1,2,3,4,5,6,7] },
    { id: "east", name: "東部沿海線", color: "#00a650", stations: [3,8,9,10,11,12,13,14,15,16,17] },
    { id: "north", name: "北部幹線", color: "#ff6b35", stations: [3,18,19,20,21,22,23,24,25,26,27] },
    { id: "west", name: "廣州南轉乘線", color: "#ffd200", stations: [7,28,29,30,31,32,33,34] }
];

// 全局變量
let currentFilter = "all";
let currentLineFilter = "all";
let currentSearch = "";

// 初始化地圖
function initMap() {
    const map = document.getElementById('railwayMap');
    
    // 清除現有元素
    const existingElements = document.querySelectorAll('.rail-line, .station, .station-label');
    existingElements.forEach(el => el.remove());
    
    // 繪製線路
    lines.forEach(line => {
        const lineStations = stations.filter(s => line.stations.includes(s.id));
        if (lineStations.length < 2) return;
        
        // 創建線路路徑
        for (let i = 0; i < lineStations.length - 1; i++) {
            const start = lineStations[i];
            const end = lineStations[i + 1];
            
            const lineEl = document.createElement('div');
            lineEl.className = 'rail-line';
            lineEl.style.background = line.color;
            lineEl.dataset.line = line.id;
            
            // 計算線條位置和角度
            const x1 = start.x;
            const y1 = start.y;
            const x2 = end.x;
            const y2 = end.y;
            
            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            lineEl.style.width = `${length}%`;
            lineEl.style.left = `${x1}%`;
            lineEl.style.top = `${y1}%`;
            lineEl.style.transform = `rotate(${angle}deg)`;
            lineEl.style.transformOrigin = '0 0';
            
            map.appendChild(lineEl);
        }
    });
    
    // 繪製車站
    stations.forEach(station => {
        // 車站點
        const stationEl = document.createElement('div');
        stationEl.className = 'station';
        stationEl.style.left = `${station.x}%`;
        stationEl.style.top = `${station.y}%`;
        stationEl.style.borderColor = station.color;
        stationEl.dataset.id = station.id;
        stationEl.title = `${station.name} (${station.time})`;
        
        // 樞紐站更大
        if (station.isHub) {
            stationEl.style.width = '30px';
            stationEl.style.height = '30px';
            stationEl.style.borderWidth = '4px';
        }
        
        // 車站標籤
        const labelEl = document.createElement('div');
        labelEl.className = 'station-label';
        labelEl.style.left = `${station.x + 2}%`;
        labelEl.style.top = `${station.y - 5}%`;
        labelEl.textContent = station.name;
        labelEl.style.borderLeftColor = station.color;
        
        // 根據時間設置標籤顏色
        const timeColor = getTimeColor(station.minutes);
        labelEl.style.color = timeColor;
        
        map.appendChild(stationEl);
        map.appendChild(labelEl);
        
        // 點擊事件
        stationEl.addEventListener('click', (e) => {
            e.stopPropagation();
            showStationInfo(station);
        });
    });
    
    // 更新車站計數
    updateFilterCounts();
    // 渲染車站列表
    renderStationList();
    // 更新活動篩選標籤
    updateActiveFilters();
    
    // 點擊地圖其他區域隱藏信息
    map.addEventListener('click', hideStationInfo);
}

// 獲取時間對應的顏色
function getTimeColor(minutes) {
    if (minutes <= 60) return '#4CAF50'; // 綠色
    if (minutes <= 120) return '#FFC107'; // 黃色
    if (minutes <= 180) return '#FF9800'; // 橙色
    return '#F44336'; // 紅色
}

// 顯示車站信息
function showStationInfo(station) {
    // 移除現有信息框
    const existingInfo = document.querySelector('.station-info');
    if (existingInfo) existingInfo.remove();
    
    const map = document.getElementById('railwayMap');
    const infoEl = document.createElement('div');
    infoEl.className = 'station-info';
    infoEl.style.borderTopColor = station.color;
    infoEl.style.left = `${station.x + 5}%`;
    infoEl.style.top = `${station.y + 5}%`;
    
    const lineName = lines.find(l => l.id === station.line)?.name || station.line;
    
    infoEl.innerHTML = `
        <h3>${station.name}站</h3>
        <div class="time-badge">${station.time}</div>
        <p><strong>地區：</strong>${station.region}</p>
        <p><strong>路線：</strong>${lineName}</p>
        <p><strong>說明：</strong>${station.desc}</p>
        <p><strong>車站類型：</strong>${station.isHub ? '主要樞紐站' : '中途站'}</p>
        <p style="margin-top: 15px; font-size: 14px; color: #666;">💡 點擊地圖其他區域關閉</p>
    `;
    
    map.appendChild(infoEl);
    
    // 確保信息框在視圖內
    const rect = infoEl.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
        infoEl.style.left = `${station.x - 30}%`;
    }
    if (rect.bottom > window.innerHeight) {
        infoEl.style.top = `${station.y - 40}%`;
    }
    
    // 顯示信息框
    infoEl.style.display = 'block';
}

// 隱藏車站信息
function hideStationInfo() {
    const infoEl = document.querySelector('.station-info');
    if (infoEl) infoEl.remove();
}

// 更新篩選計數
function updateFilterCounts() {
    // 更新時間篩選計數
    const timeFilters = [
        { filter: 'all', count: stations.length },
        { filter: '1', count: stations.filter(s => s.minutes <= 60).length },
        { filter: '2', count: stations.filter(s => s.minutes <= 120).length },
        { filter: '3', count: stations.filter(s => s.minutes <= 180).length },
        { filter: '4', count: stations.filter(s => s.minutes <= 240).length }
    ];
    
    document.getElementById('time-filter-count').textContent = timeFilters.length;
    
    // 更新線路篩選計數
    document.getElementById('line-filter-count').textContent = lines.length + 1; // +1 為 "全部路線"
}

// 渲染車站列表
function renderStationList() {
    const listEl = document.getElementById('stationList');
    listEl.innerHTML = '';
    
    // 篩選車站
    let filteredStations = stations;
    
    // 時間篩選
    if (currentFilter !== 'all') {
        const maxMinutes = parseInt(currentFilter) * 60;
        filteredStations = filteredStations.filter(s => s.minutes <= maxMinutes);
    }
    
    // 線路篩選
    if (currentLineFilter !== 'all') {
        filteredStations = filteredStations.filter(s => s.line === currentLineFilter);
    }
    
    // 搜尋篩選
    if (currentSearch.trim() !== '') {
        const searchLower = currentSearch.toLowerCase();
        filteredStations = filteredStations.filter(s => 
            s.name.toLowerCase().includes(searchLower) ||
            s.region.toLowerCase().includes(searchLower) ||
            s.desc.toLowerCase().includes(searchLower)
        );
    }
    
    // 按時間排序
    filteredStations.sort((a, b) => a.minutes - b.minutes);
    
    // 更新結果計數
    document.getElementById('resultCount').textContent = filteredStations.length;
    
    // 創建車站卡片
    if (filteredStations.length > 0) {
        filteredStations.forEach(station => {
            const cardEl = document.createElement('div');
            cardEl.className = 'station-card';
            cardEl.style.borderLeftColor = station.color;
            cardEl.dataset.id = station.id;
            
            const lineName = lines.find(l => l.id === station.line)?.name || station.line;
            const timeColor = getTimeColor(station.minutes);
            
            cardEl.innerHTML = `
                <h4>${station.name}</h4>
                <div class="card-time" style="color: ${timeColor}">${station.time}</div>
                <div class="card-line" style="background: ${station.color}">${lineName}</div>
                <div class="card-region">${station.region}</div>
                <p style="font-size: 14px; color: #666; margin-top: 8px;">${station.desc}</p>
            `;
            
            // 點擊事件
            cardEl.addEventListener('click', () => {
                showStationInfo(station);
                
                // 高亮對應的車站
                const stationEl = document.querySelector(`.station[data-id="${station.id}"]`);
                if (stationEl) {
                    stationEl.style.transform = 'translate(-50%, -50%) scale(1.8)';
                    stationEl.style.boxShadow = '0 0 30px rgba(227, 24, 55, 0.8)';
                    setTimeout(() => {
                        stationEl.style.transform = 'translate(-50%, -50%) scale(1)';
                        stationEl.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
                    }, 1500);
                }
            });
            
            listEl.appendChild(cardEl);
        });
    } else {
        // 如果沒有結果
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3>未找到符合條件的車站</h3>
                <p>請嘗試調整篩選條件或搜尋關鍵字</p>
            </div>
        `;
    }
}

// 更新活動篩選標籤
function updateActiveFilters() {
    const activeFiltersEl = document.getElementById('activeFilters');
    activeFiltersEl.innerHTML = '';
    
    const activeFilters = [];
    
    // 添加時間篩選標籤
    if (currentFilter !== 'all') {
        const timeLabel = currentFilter === '4' ? '4小時內' : `${currentFilter}小時內`;
        activeFilters.push({
            id: 'time-filter',
            label: `旅行時間: ${timeLabel}`,
            type: 'time'
        });
    }
    
    // 添加線路篩選標籤
    if (currentLineFilter !== 'all') {
        const line = lines.find(l => l.id === currentLineFilter);
        if (line) {
            activeFilters.push({
                id: 'line-filter',
                label: `路線: ${line.name}`,
                type: 'line'
            });
        }
    }
    
    // 添加搜尋篩選標籤
    if (currentSearch.trim() !== '') {
        activeFilters.push({
            id: 'search-filter',
            label: `搜尋: ${currentSearch}`,
            type: 'search'
        });
    }
    
    // 創建活動篩選標籤
    activeFilters.forEach(filter => {
        const tagEl = document.createElement('div');
        tagEl.className = 'active-filter-tag';
        tagEl.innerHTML = `
            ${filter.label}
            <button class="remove-btn" data-filter-type="${filter.type}">×</button>
        `;
        
        // 移除按鈕事件
        tagEl.querySelector('.remove-btn').addEventListener('click', () => {
            removeFilter(filter.type);
        });
        
        activeFiltersEl.appendChild(tagEl);
    });
}

// 移除篩選條件
function removeFilter(filterType) {
    switch(filterType) {
        case 'time':
            currentFilter = 'all';
            document.querySelectorAll('.pill-btn[data-filter]').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === 'all') btn.classList.add('active');
            });
            break;
        case 'line':
            currentLineFilter = 'all';
            document.querySelectorAll('.line-pill').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.line === 'all') btn.classList.add('active');
            });
            break;
        case 'search':
            currentSearch = '';
            document.querySelector('.search-box').value = '';
            break;
    }
    
    renderStationList();
    updateActiveFilters();
}

// 重置所有篩選
function resetAllFilters() {
    // 重置變量
    currentFilter = "all";
    currentLineFilter = "all";
    currentSearch = "";
    
    // 重置按鈕狀態
    document.querySelectorAll('.pill-btn[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.line-pill').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.line === 'all') {
            btn.classList.add('active');
        }
    });
    
    // 清空搜尋框
    document.querySelector('.search-box').value = '';
    
    // 重新渲染
    renderStationList();
    updateActiveFilters();
}

// 初始化事件監聽器
function initEventListeners() {
    // 時間篩選按鈕事件
    document.querySelectorAll('.pill-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.pill-btn[data-filter]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            renderStationList();
            updateActiveFilters();
        });
    });
    
    // 線路篩選按鈕事件
    document.querySelectorAll('.line-pill').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.line-pill').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentLineFilter = this.dataset.line;
            renderStationList();
            updateActiveFilters();
        });
    });
    
    // 搜尋框事件
    const searchBox = document.querySelector('.search-box');
    searchBox.addEventListener('input', function() {
        currentSearch = this.value;
        renderStationList();
        updateActiveFilters();
    });
    
    // 重置篩選按鈕事件
    document.getElementById('resetAllFilters').addEventListener('click', resetAllFilters);
}

// 初始化應用
function initApp() {
    initMap();
    initEventListeners();
    renderStationList();
    updateActiveFilters();
}

// 當DOM完全加載後初始化應用
document.addEventListener('DOMContentLoaded', initApp);