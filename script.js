// AI Assistant Interactive Tool
class HotelAssistant {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.userSelections = {
            travelType: null,
            budget: null,
            facilities: [],
            destination: null
        };
        this.userPoints = 0;
        this.userLevel = '新手探險家';
        
        this.questions = [
            {
                question: "今次旅行同邊個一齊去？",
                description: "選擇旅行夥伴，幫你推薦最合適嘅酒店類型"
            },
            {
                question: "你嘅預算範圍係？",
                description: "選擇適合你嘅預算範圍"
            },
            {
                question: "你最重視咩酒店設施？",
                description: "可以選擇多項你最需要嘅設施"
            },
            {
                question: "想去邊度玩？",
                description: "根據距離同特色選擇目的地"
            },
            {
                question: "完美匹配！",
                description: "根據你的偏好推薦最佳酒店"
            }
        ];

        this.hotelsDatabase = [
            {
                id: 1,
                name: "深圳星河麗思卡爾頓酒店",
                city: "shenzhen",
                location: "深圳福田區",
                distance: 35,
                price: 1200,
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["無邊際泳池", "五星級", "情侶推薦"],
                features: ["泳池", "水療", "餐廳"],
                themes: ["luxury", "couple"],
                facilities: ["pool", "spa", "dining", "gym"],
                budget: "luxury"
            },
            {
                id: 2,
                name: "珠海長隆橫琴灣酒店",
                city: "zhuhai",
                location: "珠海橫琴新區",
                distance: 65,
                price: 1500,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["主題公園", "親子樂園", "家庭推薦"],
                features: ["水上樂園", "兒童俱樂部", "多間餐廳"],
                themes: ["family"],
                facilities: ["pool", "kids", "dining", "beach"],
                budget: "luxury"
            },
            {
                id: 3,
                name: "開平碉樓民居客棧",
                city: "kaiping",
                location: "開平塘口鎮",
                distance: 185,
                price: 600,
                image: "https://images.unsplash.com/photo-1555854871-d6dfc30e2bfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["世界遺產", "文化體驗", "特色民宿"],
                features: ["傳統建築", "文化導賞", "農家菜"],
                themes: ["solo", "culture"],
                facilities: ["dining"],
                budget: "budget"
            },
            {
                id: 4,
                name: "惠州金海灣喜來登度假酒店",
                city: "huizhou",
                location: "惠州惠東縣",
                distance: 115,
                price: 800,
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["海灘度假", "溫泉", "家庭推薦"],
                features: ["私人海灘", "溫泉", "兒童樂園"],
                themes: ["family", "couple"],
                facilities: ["pool", "spa", "beach", "kids"],
                budget: "medium"
            },
            {
                id: 5,
                name: "東莞松山湖凱悅酒店",
                city: "dongguan",
                location: "東莞松山湖",
                distance: 85,
                price: 700,
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["湖景", "高爾夫", "性價比高"],
                features: ["高爾夫球場", "湖景餐廳", "會議設施"],
                themes: ["friends", "business"],
                facilities: ["pool", "gym", "dining"],
                budget: "medium"
            },
            {
                id: 6,
                name: "廣州四季酒店",
                city: "guangzhou",
                location: "廣州天河區",
                distance: 155,
                price: 1600,
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                tags: ["無邊際泳池", "五星級", "城市景觀"],
                features: ["天際泳池", "米其林餐廳", "水療"],
                themes: ["luxury", "couple"],
                facilities: ["pool", "spa", "dining", "gym"],
                budget: "luxury"
            }
        ];

        this.initializeEventListeners();
        this.updateProgress();
    }

    initializeEventListeners() {
        // Navigation buttons
        document.getElementById('nextBtn').addEventListener('click', () => this.nextStep());
        document.getElementById('prevBtn').addEventListener('click', () => this.previousStep());
        document.getElementById('restartQuiz').addEventListener('click', () => this.restartQuiz());
        document.getElementById('viewAllHotels').addEventListener('click', () => this.viewAllHotels());

        // Option card selections
        document.querySelectorAll('.option-card:not(.multi-select)').forEach(card => {
            card.addEventListener('click', (e) => this.handleSingleSelect(e.currentTarget));
        });

        // Multi-select option cards
        document.querySelectorAll('.option-card.multi-select').forEach(card => {
            card.addEventListener('click', (e) => this.handleMultiSelect(e.currentTarget));
        });
    }

    handleSingleSelect(card) {
        const step = this.currentStep;
        const value = card.getAttribute('data-value');
        const points = parseInt(card.querySelector('.points-badge')?.textContent.match(/\d+/)?.[0] || 10);

        // Remove selection from other cards in the same step
        document.querySelectorAll(`#step${step} .option-card`).forEach(otherCard => {
            otherCard.classList.remove('selected');
        });

        // Select current card
        card.classList.add('selected');

        // Store selection and add points
        switch(step) {
            case 1:
                this.userSelections.travelType = value;
                break;
            case 2:
                this.userSelections.budget = value;
                break;
            case 4:
                this.userSelections.destination = value;
                break;
        }

        this.addPoints(points, card);
        document.getElementById('nextBtn').disabled = false;
    }

    handleMultiSelect(card) {
        const value = card.getAttribute('data-value');
        const index = this.userSelections.facilities.indexOf(value);

        if (index > -1) {
            // Deselect
            this.userSelections.facilities.splice(index, 1);
            card.classList.remove('selected');
        } else {
            // Select
            this.userSelections.facilities.push(value);
            card.classList.add('selected');
            this.addPoints(5, card);
        }

        // Enable next button if at least one facility is selected
        document.getElementById('nextBtn').disabled = this.userSelections.facilities.length === 0;
    }

    addPoints(points, element) {
        this.userPoints += points;
        this.updateUserLevel();

        // Update points display
        document.getElementById('userPoints').textContent = this.userPoints;

        // Create floating points animation
        this.createFloatingPoints(points, element);
    }

    createFloatingPoints(points, element) {
        const rect = element.getBoundingClientRect();
        const floatingPoints = document.getElementById('floatingPoints');
        
        floatingPoints.textContent = `+${points}`;
        floatingPoints.style.left = `${rect.left + rect.width / 2}px`;
        floatingPoints.style.top = `${rect.top}px`;
        
        floatingPoints.classList.remove('animate');
        void floatingPoints.offsetWidth; // Trigger reflow
        floatingPoints.classList.add('animate');
    }

    updateUserLevel() {
        const levels = [
            { points: 0, name: '新手探險家' },
            { points: 50, name: '週末旅人' },
            { points: 100, name: '酒店達人' },
            { points: 200, name: '奢華體驗師' },
            { points: 500, name: '終極酒店專家' }
        ];

        const newLevel = levels.reduce((current, level) => {
            return this.userPoints >= level.points ? level.name : current;
        }, '新手探險家');

        if (newLevel !== this.userLevel) {
            this.userLevel = newLevel;
            document.getElementById('userLevel').textContent = this.userLevel;
            this.createConfetti();
        }
    }

    createConfetti() {
        const container = document.getElementById('confettiContainer');
        container.innerHTML = '';

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.background = this.getRandomColor();
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(confetti);

            setTimeout(() => {
                confetti.classList.add('animate');
            }, 10);
        }
    }

    getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateProgress();
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateProgress();
        }
    }

    updateProgress() {
        // Update progress bar
        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;

        // Update step indicators
        document.querySelectorAll('.step').forEach((step, index) => {
            const stepNumber = index + 1;
            if (stepNumber <= this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update question and description
        document.getElementById('currentQuestion').textContent = this.questions[this.currentStep - 1].question;
        document.getElementById('questionDescription').textContent = this.questions[this.currentStep - 1].description;

        // Show/hide step content
        document.querySelectorAll('.step-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`step${this.currentStep}`).style.display = 'grid';

        // Update navigation buttons
        document.getElementById('prevBtn').style.display = this.currentStep > 1 ? 'block' : 'none';
        
        if (this.currentStep === this.totalSteps) {
            document.getElementById('nextBtn').style.display = 'none';
            this.showResults();
        } else {
            document.getElementById('nextBtn').style.display = 'block';
            document.getElementById('nextBtn').textContent = this.currentStep === 1 ? '開始探索' : '下一題';
            document.getElementById('nextBtn').disabled = this.currentStep !== 3 ? !this.hasSelectionForCurrentStep() : this.userSelections.facilities.length === 0;
        }
    }

    hasSelectionForCurrentStep() {
        switch(this.currentStep) {
            case 1: return this.userSelections.travelType !== null;
            case 2: return this.userSelections.budget !== null;
            case 4: return this.userSelections.destination !== null;
            default: return true;
        }
    }

    showResults() {
        const recommendedHotels = this.getRecommendedHotels();
        const hotelsContainer = document.getElementById('recommendedHotels');
        
        hotelsContainer.innerHTML = recommendedHotels.map(hotel => `
            <div class="hotel-result-card">
                <div class="hotel-image" style="background-image: url('${hotel.image}')"></div>
                <div class="hotel-details">
                    <h4>${hotel.name}</h4>
                    <div class="hotel-meta">
                        <span>${hotel.location}</span>
                        <span>${hotel.distance}公里</span>
                    </div>
                    <div class="hotel-features">
                        ${hotel.tags.map(tag => `<span class="feature-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="hotel-price">
                    <div class="price-amount">HK$${hotel.price}</div>
                    <div class="price-unit">每晚</div>
                </div>
            </div>
        `).join('');

        // Calculate match score
        const matchScore = Math.min(95 + Math.floor(Math.random() * 5), 100);
        document.getElementById('matchScore').textContent = `${matchScore}%`;

        // Show total points earned in this session
        document.getElementById('totalPoints').textContent = this.userPoints;

        // Add final points bonus
        const bonusPoints = 50;
        this.addPoints(bonusPoints, document.querySelector('.results-header'));
    }

    getRecommendedHotels() {
        return this.hotelsDatabase.filter(hotel => {
            let score = 0;

            // Match travel type
            if (this.userSelections.travelType && hotel.themes.includes(this.userSelections.travelType)) {
                score += 2;
            }

            // Match budget
            if (this.userSelections.budget && hotel.budget === this.userSelections.budget) {
                score += 2;
            }

            // Match facilities
            const facilityMatches = this.userSelections.facilities.filter(facility => 
                hotel.facilities.includes(facility)
            ).length;
            score += facilityMatches;

            // Match destination
            if (this.userSelections.destination && hotel.city === this.userSelections.destination) {
                score += 2;
            }

            return score >= 3; // Only show hotels with reasonable match
        }).slice(0, 3); // Show top 3 matches
    }

    restartQuiz() {
        this.currentStep = 1;
        this.userSelections = {
            travelType: null,
            budget: null,
            facilities: [],
            destination: null
        };
        
        // Reset UI
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        this.updateProgress();
    }

    viewAllHotels() {
        window.location.href = 'hotel.html';
    }
}

// Initialize the assistant when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new HotelAssistant();
});