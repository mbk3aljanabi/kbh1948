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

function moveManual(direction) {
    // مقدار القفزة عند الضغط (تقريباً عرض كارت واحد)
    const step = 300; 
    
    // إضافة كلاس التنعيم مؤقتاً لكي لا تكون القفزة حادة
    track.classList.add('smooth-transition');
    
    // تحديث الموقع
    currentTranslate += (direction * step);
    
    // تحريك الشريط
    track.style.transform = `translateX(${currentTranslate}px)`;

    // إزالة كلاس التنعيم بعد انتهاء الحركة لكي لا يؤثر على السحب اليدوي
    setTimeout(() => {
        track.classList.remove('smooth-transition');
    }, 500);
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
        year: "1987 م",
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
    },
    "23": { 
        img: "folder_images/23.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "24": { 
        img: "folder_images/24.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "25": { 
        img: "folder_images/25.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "26": { 
        img: "folder_images/26.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "27": { 
        img: "folder_images/27.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "28": { 
        img: "folder_images/28.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "29": { 
        img: "folder_images/29.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "30": { 
        img: "folder_images/30.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "31": { 
        img: "folder_images/31.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "32": { 
        img: "folder_images/32.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "33": { 
        img: "folder_images/33.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "34": { 
        img: "folder_images/34.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "35": { 
        img: "folder_images/35.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "36": { 
        img: "folder_images/36.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "37": { 
        img: "folder_images/37.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "38": { 
        img: "folder_images/38.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "39": { 
        img: "folder_images/39.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "40": { 
        img: "folder_images/40.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "41": { 
        img: "folder_images/41.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "42": { 
        img: "folder_images/42.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "43": { 
        img: "folder_images/43.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "44": { 
        img: "folder_images/44.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "45": { 
        img: "folder_images/45.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "46": { 
        img: "folder_images/46.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "47": { 
        img: "folder_images/47.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "48": { 
        img: "folder_images/48.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "49": { 
      img:"folder_images/49.jpg",
      year:"",
      country:"",
      desc:""
   },
  	"50": {
      img:"folder_images/50.jpg",
      year:"",
      country:"",
      desc:""
   },
    "51": { 
        img: "folder_images/51.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "52": { 
        img: "folder_images/52.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "53": { 
        img: "folder_images/53.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "54": { 
        img: "folder_images/54.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "55": { 
        img: "folder_images/55.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "56": { 
        img: "folder_images/56.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "57": { 
        img: "folder_images/57.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "58": { 
        img: "folder_images/58.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "59": { 
        img: "folder_images/59.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "60": { 
        img: "folder_images/60.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "61": { 
        img: "folder_images/61.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "62": { 
        img: "folder_images/62.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "63": { 
        img: "folder_images/63.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "64": { 
        img: "folder_images/64.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "65": { 
        img: "folder_images/65.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "66": { 
        img: "folder_images/66.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "67": { 
        img: "folder_images/67.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "68": { 
        img: "folder_images/68.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "69": { 
        img: "folder_images/69.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "70": { 
        img: "folder_images/70.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "71": { 
        img: "folder_images/71.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "72": { 
        img: "folder_images/72.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "73": { 
        img: "folder_images/73.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "74": { 
        img: "folder_images/74.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "75": { 
        img: "folder_images/75.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "76": { 
        img: "folder_images/76.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "77": { 
        img: "folder_images/77.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "78": { 
        img: "folder_images/78.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "79": { 
      img:"folder_images/79.jpg",
      year:"",
      country:"",
      desc:""
   },
  	"80": {
      img:"folder_images/80.jpg",
      year:"",
      country:"",
      desc:""
   },
    "81": { 
        img: "folder_images/81.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "82": { 
        img: "folder_images/82.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "83": { 
        img: "folder_images/83.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "84": { 
        img: "folder_images/84.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "85": { 
        img: "folder_images/85.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "86": { 
        img: "folder_images/86.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "87": { 
        img: "folder_images/87.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "88": { 
        img: "folder_images/88.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "89": { 
        img: "folder_images/89.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "90": { 
        img: "folder_images/90.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "91": { 
        img: "folder_images/91.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "92": { 
        img: "folder_images/92.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "93": { 
        img: "folder_images/93.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "94": { 
        img: "folder_images/94.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "95": { 
        img: "folder_images/95.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "96": { 
        img: "folder_images/96.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "97": { 
        img: "folder_images/97.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "98": { 
        img: "folder_images/98.jpg",
        year: "",
        country: "",
        desc: "  "
    },
    "99": { 
        img:"folder_images/99.jpg",
      year:"",
      country:"",
      desc:""
   },
  	"100": {
      img:"folder_images/100.jpg",
      year:"",
      country:"",
      desc:""
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
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
const speed = 0.5; // سرعة الحركة التلقائية

// 1. استنساخ الصور برمجياً لضمان الاستمرارية
// نأخذ محتوى الـ track ونكرره مرتين
const originalContent = track.innerHTML;
track.innerHTML += originalContent; 

// حساب عرض الصور الأصلية (نصف العرض الكلي الجديد)
let totalWidth = track.scrollWidth / 2;

function playAnimation() {
    if (!isDragging) {
        currentTranslate -= speed;

        // إذا وصل الشريط لنهاية النسخة الأولى، يصفر الموقع فوراً
        // Math.abs يحول الرقم لسالب لسهولة المقارنة
        if (Math.abs(currentTranslate) >= totalWidth) {
            currentTranslate = 0;
        }
        
        track.style.transform = `translateX(${currentTranslate}px)`;
    }
    requestAnimationFrame(playAnimation);
}

// تشغيل الأنميشن
playAnimation();

// 2. أحداث السحب (الماوس واللمس)
track.addEventListener('mousedown', startDrag);
track.addEventListener('touchstart', startDrag);
window.addEventListener('mousemove', drag);
window.addEventListener('touchmove', drag);
window.addEventListener('mouseup', endDrag);
window.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    track.style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging) return;
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const walk = x - startX;
    
    currentTranslate += walk;
    startX = x;

    // معالجة السحب العكسي (إذا سحب المستخدم لليمين ووصل للبداية)
    if (currentTranslate > 0) {
        currentTranslate = -totalWidth;
    }
    // معالجة السحب للأمام (إذا سحب لليسار ووصل للنهاية)
    if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
    }

    track.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
    isDragging = false;
    track.style.cursor = 'grab';
}

// 3. وظيفة الأزرار (السابق والتالي) مع دعم الاستمرارية
function moveManual(direction) {
    const step = 300; 
    track.style.transition = "transform 0.5s ease-out"; // تنعيم الحركة للزر فقط
    
    currentTranslate += (direction * step);

    // التحقق من الحدود أثناء الضغط على الأزرار
    if (currentTranslate > 0) {
        currentTranslate = -totalWidth;
    }
    if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
    }

    track.style.transform = `translateX(${currentTranslate}px)`;

    // إزالة التنعيم بعد انتهاء الحركة لكي لا يخرب السحب اليدوي
    setTimeout(() => {
        track.style.transition = "none";
    }, 500);
}
//the end