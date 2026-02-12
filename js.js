/* كود الصفحة الأولى */
const cards = document.querySelectorAll('.card_count');

if (cards.length > 0) {
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();

            const url = new URL(this.href);
            const id = url.searchParams.get("id");

            const pElement = this.querySelector("p");
            const text = pElement ? pElement.innerText.trim() : "";

            window.location.href =
                `kbh_page2.html?id=${id}&infoText=${encodeURIComponent(text)}`;
        });
    });
}


/* 1. قاعدة بيانات بسيطة داخل الكود */
const detailsData = {
    "1": {
        img: "folder_images/1.jpg",
        year: "١٩٩٩ م",
        country: "الغراف / رليڤ",
        desc: "نحت على الحائط صورة شخصية للشيخ كريم برهان الجنابي وهو في الخدمة العسكرية برتبة ضابط (عميد). "
   },
    "2": {
        img: "folder_images/2.jpg",
        year: " ",
        country: "",
        desc: "  "
         },
    "3": { 
        img: "folder_images/3.jpg",
        year: "1975 م",
        country: "العراق",
        desc: "متحف صغير يضم الساعات والمسابح والخواتم والاهتمام والاقلام والجوازات  التي استخدمها في حياته .كذلك نماذج عملات كل الدول.   "
    },
    "4": { 
        img: "folder_images/4.jpg",
        year: "1979 م",
        country: "اوديسا. روسيا",
        desc: "   شمعدان مصنوع من الخشب  "
    },
    "5": { 
        img: "folder_images/5.jpg",
        year: "",
        country: "",
        desc: ""
    },
    "6": { 
        img: "folder_images/6.jpg",
        year: "1984 م",
        country: "الناصرية. العراق",
        desc: "  "
    },
    "7": { 
        img: "folder_images/7.jpg",
        year: "1987 م",
        country: "",
        desc: "ساعة باتري كبير جدارية  "
    },
    "8": { 
        img: "folder_images/8.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "9": { 
        img: "folder_images/9.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "10": { 
        img: "folder_images/10.jpg",
        year: "1973 م",
        country: "النجف. العراق",
        desc: " سماور   "
    },
    "11": { 
        img: "folder_images/11.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "12": { 
        img: "folder_images/12.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "13": { 
        img: "folder_images/13.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "14": { 
        img: "folder_images/14.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "15": { 
        img: "folder_images/15.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "16": { 
        img: "folder_images/16.jpg",
        year: "1979 م",
        country: "",
        desc: "  "
    },
    "17": { 
        img: "folder_images/17.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "18": { 
        img: "folder_images/18.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "19": { 
        img: "folder_images/19.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "20": { 
        img: "folder_images/20.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "21": { 
        img: "folder_images/21.jpg",
        year: "2012 م",
        country: "العراق . بابل . الكفل",
        desc: "  "
    },
    "22": { 
        img: "folder_images/22.jpg",
        year: "",
        country: "",
        desc: "  "
    }
};

function loadDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    const textFromP = urlParams.get('infoText'); // ✅ جلب النص اللي سحبناه من الـ p

    if (itemId && detailsData[itemId]) {
        // عرض الصورة
        if (document.getElementById('main-img')) {
            document.getElementById('main-img').src = detailsData[itemId].img;
        }

        // عرض النص اللي سحبناه من الـ p بالصفحة الأولى
        if (document.getElementById('item-title-display')) {
document.getElementById('item-title-display').innerText =
    textFromP ? decodeURIComponent(textFromP) : "";
        }

        // باقي البيانات من المصفوفة (detailsData)
        if (document.getElementById('item-year')) {
            document.getElementById('item-year').innerText = detailsData[itemId].year;
        }
        if (document.getElementById('item-country')) {
            document.getElementById('item-country').innerText = detailsData[itemId].country;
        }
        if (document.getElementById('item-desc')) {
            document.getElementById('item-desc').innerText = detailsData[itemId].desc;
        }
    }
}

/* 3. وظائف البحث */
function toggleSearch() {
    const box = document.getElementById("searchBox");
    if (!box) return;
    
    if (box.style.display === "flex") {
        box.style.display = "none";
    } else {
        box.style.display = "flex";
        setTimeout(() => {
            const input = document.getElementById("searchInput");
            if(input) input.focus();
        }, 100);
    }
}

function handleSearch(event) {
    if (event.key === "Enter") {
        executeSearch();
    }
}

function executeSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    let query = input.value;
    if (query.trim() !== "") {
        let found = window.find(query, false, false, true); 
        if (!found) {
            alert("لم يتم العثور على نتائج");
        }
    }
}

/* 4. تشغيل كل الوظائف عند تحميل الصفحة بطريقة صحيحة */
document.addEventListener('DOMContentLoaded', () => {
    // تشغيل كود التفاصيل
    loadDetails();

    // ربط أحداث البحث
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('keypress', handleSearch);
    }
});
/* 5. animation cuont imges*/
const track = document.getElementById('track');
let currentTranslate = 0; // الموقع الحالي للشريط
let isDragging = false;
let startX = 0;
let animationId;
const speed = 0.5; // سرعة الحركة التلقائية (يمكنك زيادتها أو تقليلها)

// 1. وظيفة الحركة التلقائية
function playAnimation() {
    if (!isDragging) {
        currentTranslate -= speed; // تحريك لليسار

        // إذا عبر الشريط نصف طوله (لأنه مكرر)، يرجع للصفر لعمل Loop سلس
        // ملاحظة: هذا يفترض أنك مكرر الصور داخل الـ track
        if (Math.abs(currentTranslate) >= track.offsetWidth / 2) {
            currentTranslate = 0;
        }

        track.style.transform = `translateX(${currentTranslate}px)`;
    }
    animationId = requestAnimationFrame(playAnimation);
}

// 2. بدء الحركة عند تحميل الصفحة
playAnimation();

// 3. أحداث السحب (الماوس واللمس)
track.addEventListener('mousedown', start);
track.addEventListener('touchstart', start);

window.addEventListener('mousemove', move);
window.addEventListener('touchmove', move);

window.addEventListener('mouseup', end);
window.addEventListener('touchend', end);

function start(e) {
    isDragging = true;
    // تحديد نقطة البداية (ماوس أو لمس)
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    track.style.cursor = 'grabbing';
}

function move(e) {
    if (!isDragging) return;
    
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const walk = x - startX; // المسافة المقطوعة باليد
    
    currentTranslate += walk; // تحديث الموقع الحالي بناءً على السحب
    startX = x; // إعادة تعيين النقطة لتجنب القفزات الكبيرة
    
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function end() {
    isDragging = false;
    track.style.cursor = 'grab';
}

// توقف الحركة عند مرور الماوس (اختياري)
track.addEventListener('mouseenter', () => { if(!isDragging) isDragging = true; }); 
track.addEventListener('mouseleave', () => { if(isDragging) isDragging = false; });