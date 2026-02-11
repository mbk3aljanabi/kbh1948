/* 1. قاعدة بيانات بسيطة داخل الكود */
const detailsData = {
    "1": {
        img: "folder_images/شعار قبيلة الجنابيين.jpg",
        year: "123",
        country: "",
        desc: "هذا هو شعار قبيلة الجنابيين العريقة، يرمز للأصالة والتاريخ."
   },
    "2": {
        img: "folder_images/غلاف كتاب ابو صماخ.jpg",
        year: "1222 هـ - 1807 م",
        country: "uvhr",
        desc: "غلاف كتاب \"ابو صماخ\"."
    },
    "3": {
        img: "folder_images/غلاف كتاب الايام الطازجة.jpg",
        year: "1222 هـ - 1807 م",
        country: "uvhr",
        desc: "غلاف كتاب لايام الطازجة"
    }
};

// هذا الكود يوضع في الصفحة الأولى فقط
document.querySelectorAll('.card_count').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault(); // أوقف الانتقال المؤقت
        
        const id = this.href.split('id=')[1]; // جلب الـ ID من الرابط
        const text = this.querySelector('p').innerText; // جلب النص من داخل الـ p
        
        // الانتقال للرابط الجديد مع النص تلقائياً
        window.location.href = `kbh_page2.html?id=${id}&infoText=${encodeURIComponent(text)}`;
    });
});
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
            document.getElementById('item-title-display').innerText = textFromP; 
        }

        // باقي البيانات من المصفوفة (detailsData)
        if (document.getElementById('item-year')) {
            document.getElementById('item-year').innerText = detailsData[itemId].year;
        }
        
        if (document.getElementById('item-desc')) {
            document.getElementById('item-desc').innerText = detailsData[itemId].desc;
        }
    }
}
function toggleLang() {
  // محاولة جلب عنصر الاختيار الخاص بجوجل
  const select = document.querySelector(".goog-te-combo");
  
  if (!select) {
    alert("المترجم لم يكتمل تحميله بعد، انتظر ثانية...");
    return;
  }

  // إذا كانت القيمة الحالية فارغة أو 'ar'، نحولها لـ 'en'
  // ملاحظة: جوجل أحياناً تضع القيمة الأصلية "" (فراغ)
  let currentVal = select.value;
  let targetLang = (currentVal === 'en') ? 'ar' : 'en';

  // تغيير الاختيار
  select.value = targetLang;

  // أهم خطوة: إطلاق الحدث لكي تبدأ الترجمة
  select.dispatchEvent(new Event("change"));

  // تعديل اتجاه الصفحة يدوياً لضمان الدقة
  document.documentElement.dir = (targetLang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = targetLang;
  
  console.log("تم تحويل اللغة إلى: " + targetLang);
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

