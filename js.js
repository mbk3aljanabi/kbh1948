/* script.js */

// 1. قاعدة بيانات بسيطة داخل الكود
const detailsData = {
    "1": {
        img: "folder_images/شعار قبيلة الجنابيين.jpg",
        year: "1999",
        country: "العراق",
        desc: "هذا هو شعار قبيلة الجنابيين العريقة، يرمز للأصالة والتاريخ."
    },
    "2": {
        img: "folder_images/غلاف كتاب السياسة في صرير القلم.jpg",
        year: "2024",
        country: "العراق - بغداد",
        desc: "كتاب يتناول القضايا السياسية بأسلوب أدبي رفيع، تأليف الشيخ كريم برهان."
    }
    
    
};

// 2. وظيفة لقراءة الـ ID من الرابط وتغيير المحتوى
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

// التأكد من أن الصفحة قد حُملت بالكامل قبل تشغيل الكود
window.onload = function() {
    if (itemId && detailsData[itemId]) {
        document.getElementById('main-img').src = detailsData[itemId].img;
        document.getElementById('item-year').innerText = detailsData[itemId].year;
        document.getElementById('item-country').innerText = detailsData[itemId].country;
        document.getElementById('item-desc').innerText = detailsData[itemId].desc;
    } else {
        document.body.innerHTML = "<div style='text-align:center; color:white; margin-top:50px;'><h1>يرجى اعادة تحميل الصفحة هناك خطأ!!!!!!  </h1><a href='index.html' style='color:cyan;'>الرجوع الى الموقع </a></div>";
    }
};