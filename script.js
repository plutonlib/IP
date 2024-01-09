// Kullanıcının giriş bilgilerini doğrulayan fonksiyon
function validateLogin() {
    // Kullanıcı adı ve şifreyi HTML formundan al
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kullanıcı adı ve şifre doğruysa giriş bölümünü gizle ve çarpım tablosunu göster
    if(username === "ketcap" && password === "ketcap") {
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("multiplicationSection").classList.remove("hidden");
        createMultiplicationTable(); // Çarpım tablosunu oluştur
    } else {
        alert("Kullanıcı adı veya şifre hatalı."); // Hatalı giriş durumunda uyarı ver
    }
}

// Çarpım tablosunu oluşturan fonksiyon
function createMultiplicationTable() {
    var table = document.getElementById("multiplicationTable");
    table.innerHTML = ""; // Tabloyu sıfırla

    // 1'den 10'a kadar olan sayılarla çarpım tablosunu oluştur
    for(var i = 1; i <= 10; i++) {
        var row = table.insertRow(-1); // Yeni satır ekle
        for(var j = 1; j <= 10; j++) {
            var cell = row.insertCell(-1); // Yeni hücre ekle
            cell.innerHTML = i * j; // Hücreye çarpım sonucunu yaz
        }
    }
}

// Çarpım sonuçlarını renklendirme yeri
function highlightMultiplication() {
    // Kullanıcının girdiği 2 input (girdi)
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2; // İki inputun çarpım sonucunu hesapla
    var table = document.getElementById("multiplicationTable");

    // Tablodaki önceki vurguları temizle
    for(var i = 0; i < table.rows.length; i++) {
        for(var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].classList.remove("highlight");
        }
    }

    // Çarpım sonucuna eşit olan tüm hücreleri bul ve vurgula
    for(var i = 0; i < table.rows.length; i++) {
        for(var j = 0; j < table.rows[i].cells.length; j++) {
            if(table.rows[i].cells[j].innerHTML == result) {
                table.rows[i].cells[j].classList.add("highlight");
            }
        }
    }
}
