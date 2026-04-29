<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>پروژه مبهم</title>
    <style>
        body {
            background-color: #f0f0f0; /* یه رنگ خاکستری ملایم */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        button {
            background-color: #0070f3; /* رنگ معروف Vercel */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #0051a8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>به پروژه مبهم خوش آمدید!</h1>
        <p>این یک پروژه تست با تغییرات تصادفی است.</p>
        <button id="myButton">کلیک کنید</button>
    </div>

    <script>
        // اینجا کد اصلی اجرا می‌شه
        (function() {
            // پیغام تست در کنسول
            console.log("پیغام تست: کد مبهم شده و آماده است.");
            const button = document.getElementById('myButton');
            if (button) {
                button.addEventListener('click', function() {
                    alert("شما روی دکمه کلیک کردید!");
                    //می‌تونید هر عملیات دیگه‌ای رو اینجا اضافه کنید
                });
            } else {
                console.error("دکمه پیدا نشد!"); // خطای احتمالی
            }
            
            // یه سری کد اضافه و بی‌ربط برای گیج کردن تشخیص دهنده‌ها
            let unnecessaryVariable;
            function doNothing() {
                return "nothing";
            }
            console.log(doNothing() + " انجام شد.");
        })();
    </script>
</body>
</html>