// حالة التطبيق
let currentQuestion = 0;
const answers = {};

// الأسئلة
const questions = [
    {
        id: 'q1',
        text: 'ما هو معدل شراء الملابس سنويًا؟',
        options: [
            { 
                label: 'قليل', 
                value: 0.5,
                icon: 'fas fa-leaf',
                description: 'أقل من 5 قطع في السنة'
            },
            { 
                label: 'معتدل', 
                value: 1.0,
                icon: 'fas fa-tree',
                description: 'بين 5 إلى 10 قطع في السنة'
            },
            { 
                label: 'كثير', 
                value: 1.5,
                icon: 'fas fa-seedling',
                description: 'بين 11 إلى 20 قطعة في السنة'
            },
            { 
                label: 'مفرط', 
                value: 2.0,
                icon: 'fas fa-fire',
                description: 'أكثر من 20 قطعة في السنة'
            }
        ]
    },
    {
        id: 'q2',
        text: 'ما هو نوع القماش الأكثر شراءً؟',
        options: [
            { 
                label: 'أقمشة طبيعية', 
                value: { type: 'cotton', water: 1.4, microfiber: 0.6 },
                icon: 'fas fa-leaf',
                description: 'مثل القطن والكتان والحرير'
            },
            { 
                label: 'أقمشة صناعية', 
                value: { type: 'synthetic', water: 0.7, microfiber: 1.6 },
                icon: 'fas fa-industry',
                description: 'مثل البوليستر والنايلون'
            },
            { 
                label: 'مزيج من النوعين', 
                value: { type: 'blend', water: 1.0, microfiber: 1.0 },
                icon: 'fas fa-blender',
                description: 'خليط من الأقمشة الطبيعية والصناعية'
            }
        ]
    },
    {
        id: 'q3',
        text: 'كيف تتخلص/ين من الملابس القديمة؟',
        options: [
            { 
                label: 'التبرع أو إعادة البيع', 
                value: 0.5,
                icon: 'fas fa-hand-holding-heart',
                description: 'إعطاء الملابس لمن يحتاجها أو بيعها'
            },
            { 
                label: 'إعادة التدوير', 
                value: 0.7,
                icon: 'fas fa-recycle',
                description: 'تحويل الملابس إلى مواد جديدة'
            },
            { 
                label: 'التخلص في القمامة', 
                value: 1.3,
                icon: 'fas fa-trash',
                description: 'رمي الملابس في سلة المهملات'
            }
        ]
    },
    {
        id: 'q4',
        text: 'كم مرة تغسل/ين ملابسك أسبوعيًا؟',
        options: [
            { 
                label: 'قليل', 
                value: 0.6,
                icon: 'fas fa-soap',
                description: 'مرة واحدة أو أقل في الأسبوع'
            },
            { 
                label: 'معتدل', 
                value: 1.0,
                icon: 'fas fa-soap',
                description: 'مرتين إلى ثلاث مرات في الأسبوع'
            },
            { 
                label: 'كثير', 
                value: 1.4,
                icon: 'fas fa-soap',
                description: 'أربع مرات أو أكثر في الأسبوع'
            }
        ]
    },
    {
        id: 'q5',
        text: 'كيف تغسل/ين وتجفف/ين ملابسك؟',
        options: [
            { 
                label: 'طريقة مستدامة', 
                value: { type: 'cold', microfiber: 0.8, co2: 0.6 },
                icon: 'fas fa-wind',
                description: 'ماء بارد وتجفيف طبيعي بالهواء'
            },
            { 
                label: 'طريقة متوسطة', 
                value: { type: 'warm', microfiber: 1.0, co2: 1.0 },
                icon: 'fas fa-temperature-low',
                description: 'ماء دافئ وتجفيف جزئي بالمجفف'
            },
            { 
                label: 'طريقة مكثفة', 
                value: { type: 'hot', microfiber: 1.2, co2: 1.5 },
                icon: 'fas fa-temperature-high',
                description: 'ماء ساخن وتجفيف كامل بالمجفف'
            }
        ]
    },
    {
        id: 'q6',
        text: 'كم منتج تجميل تستخدم/ين يوميًا؟',
        options: [
            { 
                label: 'قليل', 
                value: 0.6,
                icon: 'fas fa-pump-soap',
                description: 'منتج واحد أو أقل يوميًا'
            },
            { 
                label: 'معتدل', 
                value: 1.0,
                icon: 'fas fa-pump-soap',
                description: 'منتجان إلى ثلاثة منتجات يوميًا'
            },
            { 
                label: 'كثير', 
                value: 1.4,
                icon: 'fas fa-pump-soap',
                description: 'أربعة منتجات أو أكثر يوميًا'
            }
        ]
    },
    {
        id: 'q7',
        text: 'ما نوع عبوات مستحضرات التجميل التي تفضل/ينها؟',
        options: [
            { 
                label: 'عبوات صديقة للبيئة', 
                value: 0.7,
                icon: 'fas fa-box-open',
                description: 'قابلة لإعادة التعبئة أو التدوير'
            },
            { 
                label: 'عبوات تقليدية', 
                value: 1.2,
                icon: 'fas fa-cube',
                description: 'عبوات بلاستيكية تقليدية'
            }
        ]
    },
    {
        id: 'q8',
        text: 'هل تتحقق/ين من وجود ميكروبلاستيك في منتجات التجميل؟',
        options: [
            { 
                label: 'دائمًا', 
                value: 0.6,
                icon: 'fas fa-check-circle',
                description: 'أتأكد دائمًا من خلو المنتجات من الميكروبلاستيك'
            },
            { 
                label: 'أحيانًا', 
                value: 0.9,
                icon: 'fas fa-question-circle',
                description: 'أتأكد أحيانًا ولكن ليس دائمًا'
            },
            { 
                label: 'نادرًا', 
                value: 1.2,
                icon: 'fas fa-times-circle',
                description: 'لا أتحقق من وجود الميكروبلاستيك'
            }
        ]
    },
    {
        id: 'q9',
        text: 'ما هي خياراتك في شراء الملابس؟',
        options: [
            { 
                label: 'خيارات مستدامة', 
                value: { type: 'sustainable', waste: 0.7, co2: 0.8 },
                icon: 'fas fa-handshake',
                description: 'شراء ملابس مستعملة أو استئجارها'
            },
            { 
                label: 'خيارات مسؤولة', 
                value: { type: 'quality', waste: 0.9, co2: 0.9 },
                icon: 'fas fa-award',
                description: 'شراء ملابس جديدة عالية الجودة وقليلة الكمية'
            },
            { 
                label: 'خيارات تقليدية', 
                value: { type: 'fast', waste: 1.2, co2: 1.1 },
                icon: 'fas fa-shopping-cart',
                description: 'شراء ملابس جديدة بشكل متكرر وبأسعار منخفضة'
            }
        ]
    },
    {
        id: 'q10',
        text: 'من أين تأتي غالبية منتجاتك؟',
        options: [
            { 
                label: 'منتجات محلية', 
                value: 0.8,
                icon: 'fas fa-home',
                description: 'منتجات محلية أو إقليمية'
            },
            { 
                label: 'منتجات مستوردة', 
                value: 1.2,
                icon: 'fas fa-plane',
                description: 'منتجات دولية تستلزم شحنًا لمسافات طويلة'
            }
        ]
    }
];

// عناصر DOM
const welcomeScreen = document.getElementById('welcome-screen');
const calculator = document.getElementById('calculator');
const results = document.getElementById('results');
const progress = document.getElementById('progress');
const questionContainer = document.getElementById('question-container');
const startBtn = document.getElementById('start-btn');
const detailsBtn = document.getElementById('details-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const detailsModal = document.getElementById('details-modal');
const closeModal = document.getElementById('close-modal');
const statsGrid = document.getElementById('stats-grid');
const recommendations = document.getElementById('recommendations');
const tipsGrid = document.getElementById('tips-grid');

// معالجات الأحداث
startBtn.addEventListener('click', startCalculator);
detailsBtn.addEventListener('click', showDetails);
restartBtn.addEventListener('click', restartCalculator);
shareBtn.addEventListener('click', shareResults);
closeModal.addEventListener('click', hideDetails);

// إغلاق النافذة عند النقر خارجها
detailsModal.addEventListener('click', function(e) {
    if (e.target === detailsModal) {
        hideDetails();
    }
});

// بدء الحاسبة
function startCalculator() {
    welcomeScreen.style.display = 'none';
    calculator.style.display = 'block';
    showQuestion();
}

// عرض السؤال الحالي
function showQuestion() {
    const question = questions[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;

    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `
            <div class="option-card" data-index="${index}">
                <div class="option-icon">
                    <i class="${option.icon}"></i>
                </div>
                <div class="option-text">${option.label}</div>
                <div class="option-desc">${option.description}</div>
            </div>
        `;
    });

    questionContainer.innerHTML = `
        <div class="question-header">
            <div class="question-number">السؤال ${currentQuestion + 1} من ${questions.length}</div>
        </div>
        
        <h2 class="question-title">${question.text}</h2>
        
        <div class="options-grid">
            ${optionsHTML}
        </div>
        
        <div class="nav-buttons">
            <button class="btn btn-prev" id="prev-btn" ${currentQuestion === 0 ? 'disabled' : ''}>
                <i class="fas fa-arrow-right"></i> السابق
            </button>
            <button class="btn btn-next" id="next-btn" ${!answers[question.id] ? 'disabled' : ''}>
                ${currentQuestion === questions.length - 1 ? 'عرض النتائج' : 'التالي'} <i class="fas fa-arrow-left"></i>
            </button>
        </div>
    `;

    // إضافة معالجات الأحداث للخيارات
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            // إلغاء تحديد جميع الخيارات
            document.querySelectorAll('.option-card').forEach(c => {
                c.classList.remove('selected');
            });
            
            // تحديد الخيار الحالي
            this.classList.add('selected');
            
            // حفظ الإجابة
            const optionIndex = this.getAttribute('data-index');
            answers[question.id] = question.options[optionIndex].value;
            
            // تمكين زر التالي
            document.getElementById('next-btn').disabled = false;
        });
    });

    // إضافة معالجات الأحداث لأزرار التنقل
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

// الانتقال للسؤال التالي
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

// الانتقال للسؤال السابق
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// عرض النتائج
function showResults() {
    calculator.style.display = 'none';
    results.style.display = 'block';
    
    const resultsData = calculateResults();
    updateResultsDisplay(resultsData);
}

// حساب النتائج
function calculateResults() {
    // استخراج الإجابات مع قيم افتراضية إذا لم يتم الإجابة
    const q1 = answers.q1 || 1.0;
    const q2 = answers.q2 || { water: 1.0, microfiber: 1.0 };
    const q3 = answers.q3 || 1.0;
    const q4 = answers.q4 || 1.0;
    const q5 = answers.q5 || { microfiber: 1.0, co2: 1.0 };
    const q6 = answers.q6 || 1.0;
    const q7 = answers.q7 || 1.0;
    const q8 = answers.q8 || 1.0;
    const q9 = answers.q9 || { waste: 1.0, co2: 1.0 };
    const q10 = answers.q10 || 1.0;

    // الحسابات الأساسية
    const avgPiecesPerYear = q1 * 10;
    const waterPerPiece = 2200 * q2.water;
    const clothesWater = avgPiecesPerYear * waterPerPiece;
    
    const washesPerYear = q4 * 52;
    const waterPerWash = 150;
    const washingWater = washesPerYear * waterPerWash;
    
    const totalWater = Math.round(clothesWater + washingWater);

    const fiberPerWash = 400000 * q2.microfiber * q5.microfiber;
    const totalMicrofiber = Math.round(fiberPerWash * washesPerYear / 1000000 * 100) / 100;

    const packagingWeight = 40;
    const beautyWaste = q6 * q7 * packagingWeight * 365 / 1000;

    const clothesWaste = avgPiecesPerYear * 0.5 * q3 * q9.waste;
    const totalWaste = Math.round((beautyWaste + clothesWaste) * 10) / 10;

    const co2PerPiece = 6.5;
    const clothesCO2 = avgPiecesPerYear * co2PerPiece * q9.co2 * q10;
    const washingCO2 = washesPerYear * 0.6 * q5.co2;
    const totalCO2 = Math.round(clothesCO2 + washingCO2);

    const microplasticRisk = Math.round(q8 * 100);
    
    let plasticRiskLevel;
    if (microplasticRisk <= 60) plasticRiskLevel = 'منخفض';
    else if (microplasticRisk <= 90) plasticRiskLevel = 'متوسط';
    else plasticRiskLevel = 'مرتفع';

    // حساب عدد الكواكب
    const waterRatio = totalWater / 100000;
    const wasteRatio = totalWaste / 12;
    const microfiberRatio = totalMicrofiber / 1.0;
    const co2Ratio = totalCO2 / 200;

    const averageRatio = (waterRatio + wasteRatio + microfiberRatio + co2Ratio) / 4;
    
    let earthsNeeded;
    if (averageRatio <= 0.5) earthsNeeded = 1;
    else if (averageRatio <= 1.0) earthsNeeded = 2;
    else if (averageRatio <= 1.5) earthsNeeded = 3;
    else if (averageRatio <= 2.0) earthsNeeded = 4;
    else if (averageRatio <= 2.5) earthsNeeded = 5;
    else earthsNeeded = 6;

    let earthDescription;
    if (earthsNeeded === 1) earthDescription = 'أرض واحدة للحفاظ على نمط حياتك الحالي';
    else if (earthsNeeded === 2) earthDescription = 'أرضين للحفاظ على نمط حياتك الحالي';
    else earthDescription = `${earthsNeeded} أراضٍ للحفاظ على نمط حياتك الحالي`;

    return {
        water: totalWater,
        waste: totalWaste,
        microfiber: totalMicrofiber,
        co2: totalCO2,
        plasticRisk: plasticRiskLevel,
        earthsNeeded,
        earthDescription,
        details: {
            q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
        }
    };
}

// تحديث عرض النتائج
function updateResultsDisplay(results) {
    document.getElementById('earth-count').textContent = results.earthsNeeded;
    document.getElementById('earth-description').textContent = results.earthDescription;
    document.getElementById('water-value').textContent = results.water.toLocaleString() + ' لتر';
    document.getElementById('waste-value').textContent = results.waste + ' كجم';
    document.getElementById('microfiber-value').textContent = results.microfiber + ' مليون';
    document.getElementById('carbon-value').textContent = results.co2 + ' كجم';
    document.getElementById('plastic-risk').textContent = results.plasticRisk;
    
    // تحديث النصائح
    updateTips(results);
}

// تحديث النصائح
function updateTips(results) {
    let tipsHTML = '';
    
    if (results.water > 50000) {
        tipsHTML += `
            <div class="tip-card">
                <div class="tip-icon">
                    <i class="fas fa-tint"></i>
                </div>
                <div class="tip-content">
                    <h4>توفير المياه</h4>
                    <p>استخدم الغسالة بكامل حمولتها واختر برامج الغسيل الموفرة للماء. يمكنك توفير حتى 50% من استهلاك الماء.</p>
                </div>
            </div>
        `;
    }
    
    if (results.waste > 15) {
        tipsHTML += `
            <div class="tip-card">
                <div class="tip-icon">
                    <i class="fas fa-recycle"></i>
                </div>
                <div class="tip-content">
                    <h4>تقليل النفايات</h4>
                    <p>اختر منتجات التجميل ذات العبوات القابلة لإعادة التعبئة، وتبرع بملابسك القديمة بدلاً من التخلص منها.</p>
                </div>
            </div>
        `;
    }
    
    if (results.microfiber > 1.0) {
        tipsHTML += `
            <div class="tip-card">
                <div class="tip-icon">
                    <i class="fas fa-microscope"></i>
                </div>
                <div class="tip-content">
                    <h4>تقليل الميكروبلاستيك</h4>
                    <p>استخدم أكياس الغسيل المخصصة لحبس الألياف البلاستيكية، واختر الملابس المصنوعة من ألياف طبيعية.</p>
                </div>
            </div>
        `;
    }
    
    if (results.co2 > 150) {
        tipsHTML += `
            <div class="tip-card">
                <div class="tip-icon">
                    <i class="fas fa-leaf"></i>
                </div>
                <div class="tip-content">
                    <h4>خفض الانبعاثات</h4>
                    <p>جفف ملابسك في الهواء الطلق بدلاً من المجفف الكهربائي، واختر المنتجات المحلية لتقليل انبعاثات النقل.</p>
                </div>
            </div>
        `;
    }
    
    // نصائح عامة
    tipsHTML += `
        <div class="tip-card">
            <div class="tip-icon">
                <i class="fas fa-shopping-bag"></i>
            </div>
            <div class="tip-content">
                <h4>الشراء الواعي</h4>
                <p>اشترِ ملابس عالية الجودة تدوم لفترة أطول، واختر منتجات من علامات تجارية تتبنى ممارسات مستدامة.</p>
            </div>
        </div>
        
        <div class="tip-card">
            <div class="tip-icon">
                <i class="fas fa-hand-holding-heart"></i>
            </div>
            <div class="tip-content">
                <h4>العناية المستدامة</h4>
                <p>اغسل ملابسك بماء بارد، وأصلح الملابس التالفة بدلاً من استبدالها، واستخدم منتجات تنظيف صديقة للبيئة.</p>
            </div>
        </div>
    `;
    
    tipsGrid.innerHTML = tipsHTML;
}

// عرض التفاصيل
function showDetails() {
    const results = calculateResults();
    
    // تحديث الإحصاءات
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${results.water.toLocaleString()}</div>
            <div class="stat-label">لتر ماء مستهلك سنويًا</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${results.waste}</div>
            <div class="stat-label">كجم نفايات بلاستيكية سنويًا</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${results.microfiber}</div>
            <div class="stat-label">مليون ليفة ميكروبلاستيك سنويًا</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${results.co2}</div>
            <div class="stat-label">كجم انبعاثات كربونية سنويًا</div>
        </div>
    `;
    
    // تحديث التوصيات
    let recHTML = '';
    
    if (results.water > 50000) {
        recHTML += `
            <div class="recommendation">
                <div class="recommendation-title">
                    <i class="fas fa-tint water-icon"></i>
                    <span>تقليل استهلاك المياه</span>
                </div>
                <div class="recommendation-content">
                    <p>استهلاكك للمياه مرتفع. يمكنك تقليله بـ:</p>
                    <ul>
                        <li>غسل الملابس عند الحاجة فقط وليس بعد كل استخدام</li>
                        <li>استخدام الغسالة بكامل سعتها</li>
                        <li>اختيار دورة الغسيل القصيرة والباردة</li>
                        <li>تركيب رأس دش موفر للمياه</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    if (results.waste > 15) {
        recHTML += `
            <div class="recommendation">
                <div class="recommendation-title">
                    <i class="fas fa-trash waste-icon"></i>
                    <span>تقليل النفايات البلاستيكية</span>
                </div>
                <div class="recommendation-content">
                    <p>يمكنك تقليل النفايات البلاستيكية بـ:</p>
                    <ul>
                        <li>شراء منتجات التجميل ذات العبوات القابلة لإعادة التعبئة</li>
                        <li>اختيار المنتطقات الصلبة بدلاً من السائلة (شامبو صلب، etc.)</li>
                        <li>إعادة استخدام العبوات البلاستيكية</li>
                        <li>التبرع بالملابس بدلاً من التخلص منها</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    if (results.microfiber > 1.0) {
        recHTML += `
            <div class="recommendation">
                <div class="recommendation-title">
                    <i class="fas fa-microscope fiber-icon"></i>
                    <span>الحد من الميكروبلاستيك</span>
                </div>
                <div class="recommendation-content">
                    <p>للتقليل من انبعاثات الميكروبلاستيك:</p>
                    <ul>
                        <li>استخدم كيس غسيل خاص (مثل Guppyfriend) للأقمشة الصناعية</li>
                        <li>اختر الملابس المصنوعة من ألياف طبيعية</li>
                        <li>اغسل الملابس بماء بارد</li>
                        <li>قلل عدد مرات الغسيل</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    if (results.co2 > 150) {
        recHTML += `
            <div class="recommendation">
                <div class="recommendation-title">
                    <i class="fas fa-cloud carbon-icon"></i>
                    <span>خفض البصمة الكربونية</span>
                </div>
                <div class="recommendation-content">
                    <p>لخفض انبعاثات الكربون:</p>
                    <ul>
                        <li>جفف الملابس في الهواء الطلق بدلاً من المجفف الكهربائي</li>
                        <li>اشترِ ملابس مستعملة أو من مصادر محلية</li>
                        <li>اختر الملابس عالية الجودة التي تدوم لفترة أطول</li>
                        <li>قلل من شراء الملابس الجديدة</li>
                    </ul>
                </div>
            </div>
        `;
    }
    
    recommendations.innerHTML = recHTML;
    detailsModal.style.display = 'flex';
    setTimeout(() => {
        detailsModal.classList.add('active');
    }, 10);
}

// إخفاء التفاصيل
function hideDetails() {
    detailsModal.classList.remove('active');
    setTimeout(() => {
        detailsModal.style.display = 'none';
    }, 300);
}

// إعادة بدء الحاسبة
function restartCalculator() {
    currentQuestion = 0;
    for (let key in answers) {
        delete answers[key];
    }
    
    results.style.display = 'none';
    calculator.style.display = 'block';
    showQuestion();
}

// مشاركة النتائج
function shareResults() {
    const results = calculateResults();
    const text = `حسبت بصمتي البيئية ووجدت أنني أستهلك موارد تعادل ${results.earthsNeeded} ${results.earthsNeeded === 1 ? 'أرض' : results.earthsNeeded === 2 ? 'أرضين' : 'أراضٍ'}! جرب/ي الحاسبة الآن:`;
    
    if (navigator.share) {
        navigator.share({
            title: 'بصمتي البيئية',
            text: text,
            url: window.location.href
        });
    } else {
        // نسخ إلى الحافظة
        const textArea = document.createElement('textarea');
        textArea.value = text + ' ' + window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('تم نسخ النتائج إلى الحافظة! يمكنك مشاركتها الآن.');
    }
}