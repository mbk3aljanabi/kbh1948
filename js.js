/* 1. قاعدة بيانات بسيطة داخل الكود */
const detailsData = {
    "1": {
        img: "folder_images/شعار قبيلة الجنابيين.jpg",
        year: "",
        country: "",
        desc: "هذا هو شعار قبيلة الجنابيين العريقة، يرمز للأصالة والتاريخ."
    },
    "2": {
        img: "folder_images/.jpg",
        year: "",
        country: "",
        desc: ""
    }
};

/* 2. دالة معالجة تفاصيل الصفحة (قراءة الـ ID) */
function loadDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    const itemTitle = urlParams.get('title'); // 1. قراءة النص من الرابط
    
    if (itemId) {
        if (detailsData[itemId]) {
            if(document.getElementById('main-img')) document.getElementById('main-img').src = detailsData[itemId].img;
            
            // 2. إضافة النص أسفل الصورة
            const titleElement = document.getElementById('item-title-display');
            if(titleElement && itemTitle) {
                titleElement.innerText = decodeURIComponent(itemTitle); // فك تشفير النص العربي
            }
            
            if(document.getElementById('item-year')) document.getElementById('item-year').innerText = detailsData[itemId].year;
            if(document.getElementById('item-country')) document.getElementById('item-country').innerText = detailsData[itemId].country;
            if(document.getElementById('item-desc')) document.getElementById('item-desc').innerText = detailsData[itemId].desc;
        } else {
            // تنبيه بوجود خطأ فقط إذا لم يعثر على الـ ID في قاعدة البيانات
            console.error("ID غير موجود في قاعدة البيانات");
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

//    عرض اسم الصورة p  في الرابط عند الضغط على الكارد
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card_count');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const text = this.querySelector('p').innerText;
            const currentHref = this.getAttribute('href').split('&title=')[0];
            this.setAttribute('href', `${currentHref}&title=${encodeURIComponent(text)}`);
        });
    });
});