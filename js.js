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
        img: "folder_images/   .jpg",
        year: "1222 هـ - 1807 م",
        country: "uvhr",
        desc: "غلاف كتاب لايام الطازجة"
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

