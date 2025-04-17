
 // gece ,gündüz modu
function darkMode(){
 document.getElementsByTagName("body")[0].style.color="white";
 document.getElementsByTagName("body")[0].style.backgroundColor="black";
}
function lightMode(){
 document.getElementsByTagName("body")[0].style.color="black";
 document.getElementsByTagName("body")[0].style.backgroundColor="white";
}


 // yorum ekleme kısmı
function yorumGonder() {
    var cinsiyet = document.getElementById("cinsiyet").value;
    var yorum = document.getElementById("yorum").value.trim();

    if (yorum === "") {
        alert("Lütfen bir yorum yazın.");
        return;
    }

    var yorumlarKutusu = document.getElementById("yorumlarKutusu");
    var yeniYorum = document.createElement("div");
    yeniYorum.classList.add("yorum");

    
    var cinsiyetBaslik = cinsiyet === "erkek" ? "Erkek Kullanıcı" : "Kadın Kullanıcı";
    yeniYorum.innerHTML = "<span>" + cinsiyetBaslik + ":</span> " + yorum;

    yorumlarKutusu.appendChild(yeniYorum);
    document.getElementById("yorum").value = ""; 
}


  // arama çubuğu kodlar
function filterCities() {
    
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cityCards = document.querySelectorAll('#cities .col-md-4');

   
    cityCards.forEach(card => {
        const cardTitle = card.querySelector('.card-title');
        if (cardTitle) {
            const txtValue = cardTitle.textContent || cardTitle.innerText;
            
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    });
}


// favoriler

function addToFavorites(cityName) {
    const favoritesList = document.getElementById("favoritesList");
    
   
    const newFavorite = document.createElement("li");
    newFavorite.className = "list-group-item";
    newFavorite.textContent = cityName;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Sil";
    removeButton.className = "btn-remove";
    removeButton.onclick = function() {
        favoritesList.removeChild(newFavorite);
    };

    newFavorite.appendChild(removeButton);
    favoritesList.appendChild(newFavorite);
}


// kayıt kullanici
const users = JSON.parse(localStorage.getItem('users')) || [];

window.onload = function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = "Hoş geldiniz! Gezi rehberimizi keşfetmeye başlayın.";
    welcomeMessage.style.display = "block"; 
};


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

  
    if (users.some(user => user.username === username)) {
        document.getElementById('message').textContent = 'Bu kullanıcı adı zaten alınmış.';
        return;
    }

   
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('message').textContent = 'Kayıt başarılı! Giriş yapabilirsiniz.';
    document.getElementById('registerForm').reset();
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

   
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('message').textContent = 'Giriş başarılı! Hoş geldiniz, ' + username + '!';
        
       
        window.location.href = 'index.html'; 
    } else {
        document.getElementById('message').textContent = 'Kullanıcı adı veya şifre hatalı.';
    }
});


// resim değiştirme
let currentImageIndex = 1;

function resmiGoster(index) {
    // Tüm resimleri gizle
    for (let i = 1; i <= 3; i++) {
        document.getElementById('resim' + i).style.display = 'none';
    }
    // Seçilen resmi göster
    document.getElementById('resim' + index).style.display = 'block';
}