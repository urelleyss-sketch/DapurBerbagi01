/* === DATABASE WILAYAH BERJENJANG (TRENGGALEK & JAWA TIMUR) === */
const REGION_DATA = {
    "Kab. Trenggalek": {
        "Durenan": ["Kendalrejo", "Baruharjo", "Kamulan", "Malasan", "Pakis", "Semarum", "Sumbergayam", "Pandan", "Ngadisuko", "Gador", "Sumberejo", "Pandean"],
        "Gandusari": ["Gandusari", "Sukorejo", "Widoro", "Karanganyar", "Ngrayung", "Jajar", "Melis", "Krandegan", "Wonoanti", "Wonorejo", "Ngulankulon", "Ngulanwetan"],
        "Panggul": ["Panggul", "Nglebeng", "Depok", "Wonocoyo", "Karangtengah", "Gayam", "Banjar", "Bulus", "Tumpak", "Besuki", "Bodag", "Kertosono", "Manggis", "Ngrambingan", "Sawahan", "Terbis"],
        "Karangan": ["Karangan", "Sumber", "Kayen", "Jati", "Salamrejo", "Kedunglurah", "Mlinjon", "Buluagung", "Jatiprahu", "Kerjo", "Ngentrong", "Sukowetan"],
        "Trenggalek": ["Kelutan", "Surodakan", "Ngantru", "Sumbergedong", "Baworan", "Parakan", "Rejowinangun", "Tamanan", "Dawuhan", "Karangsoko", "Ngares", "Sambirejo", "Sukosari"],
        "Pogalan": ["Pogalan", "Ngetrep", "Ngadirejo", "Bendorejo", "Kedunglor", "Bantengan", "Gembleb", "Ngulankulon", "Wonocoyo", "Ngadirenggo"],
        "Watulimo": ["Prigi", "Tasikmadu", "Watulimo", "Watuagung", "Sengupaten", "Dukuh", "Kademangan", "Gemaharjo", "Karanggandu", "Margomulyo", "Ngembel", "Slawe"],
        "Kampak": ["Kampak", "Bendo", "Sengon", "Bogoran", "Ngadimulyo", "Karangrejo", "Sugihan", "Timahan"],
        "Dongko": ["Dongko", "Pandean", "Cering", "Watuagung", "Siki", "Sumberbening", "Ngerdani", "Petung", "Pringapus", "Salamwates"],
        "Munjungan": ["Munjungan", "Bendoroto", "Tawing", "Sobo", "Ngulungwetan", "Ngulungkulon", "Bangun", "Besuki", "Craken", "Karangturi", "Masaran"],
        "Bendungan": ["Sitimur", "Depok", "Sumurup", "Dompyong", "Srabah", "Botoputih", "Masaran", "Sengon"],
        "Suruh": ["Suruh", "Nglebo", "Gondang", "Mlinjon", "Pucanganak", "Ngrandu", "Purwo"],
        "Tugu": ["Tugu", "Nglongsor", "Dermosari", "Gondang", "Pucangan", "Nglinggis", "Banaran", "Duren", "Gading", "Jambu", "Ngepeh", "Prambon", "Sukorejo", "Tegaren", "Winong"]
    },
    "Kab. Tulungagung": {
        "Tulungagung": ["Botoran", "Kauman", "Kutoanyar", "Kepatihan", "Kampungdalem", "Tamanan", "Jepun"],
        "Boyolangu": ["Beji", "Boyolangu", "Sobontoro", "Wajak Kidul", "Moyoketen"],
        "Kedungwaru": ["Boro", "Lembupeteng", "Kedungwaru", "Tawangsari", "Ngujang"]
    },
    "Kab. Ponorogo": {
        "Ponorogo": ["Kertosari", "Mangkujayan", "Banyudono", "Paju", "Brotonegaran"],
        "Babadan": ["Babadan", "Coper", "Demangan", "Kadipaten", "Patihan Wetan"],
        "Jenangan": ["Jenangan", "Nglayang", "Paringan", "Semanding", "Wates"]
    },
    "Kab. Kediri": {
        "Kota Kediri": ["Ngadirejo", "Balowerti", "Dandangan", "Kemasan", "Manisrenggo"],
        "Mojoroto": ["Mojoroto", "Bandar Kidul", "Campurejo", "Lirboyo", "Sukorame"],
        "Pare": ["Pare", "Tulungrejo", "Pelem", "Gedangsewu", "Sumberbendo"]
    },
    "Kota Surabaya": {
        "Gubeng": ["Kertajaya", "Pucang Sewu", "Mojo", "Barata Jaya", "Airlangga"],
        "Wonokromo": ["Darmo", "Sawunggaling", "Wonokromo", "Ngagel", "Ngagelrejo"],
        "Rungkut": ["Rungkut Kidul", "Medokan Ayu", "Kalirungkut", "Penjaringan Sari", "Kedung Baruk"]
    }
};

/* === FOTO UNSPLASH ANTI-BLOKIR & CADANGAN PER KATEGORI === */
const CATEGORY_DEFAULT_IMAGES = {
    "Sayuran": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "Lauk Pauk": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    "Buah": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    "Makanan Matang": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "Bumbu": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
};

function handleFoodImageError(imgEl, category) {
    if (imgEl.dataset.fallbackApplied === "true") {
        imgEl.onerror = null;
        imgEl.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
                <rect width="600" height="400" fill="#ecfdf5"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#059669" font-family="sans-serif" font-size="22" font-weight="bold">DapurBerbagi - ${category || 'Pangan Sehat'}</text>
            </svg>`
        );
        return;
    }
    imgEl.dataset.fallbackApplied = "true";
    imgEl.src = CATEGORY_DEFAULT_IMAGES[category] || CATEGORY_DEFAULT_IMAGES["Sayuran"];
}

/* === DATABASE RESEP (NUSANTARA & INTERNASIONAL) === */
const RECIPES_DATABASE = [
    {
        id: "r1",
        title: "Classic Creamy Mashed Potato",
        mainIngredient: "Kentang",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Kentang (500 gr)", "Susu Cair (100 ml)", "Mentega (2 sdm)", "Garam & Lada Hitam"],
        steps: [
            "Kupas kentang, potong dadu besar, lalu rebus dalam air mendidih hingga empuk selama 15 menit.",
            "Tiriskan kentang lalu haluskan selagi hangat.",
            "Masukkan mentega dan tuang susu cair hangat sedikit demi sedikit sambil diaduk hingga lembut.",
            "Bumbui dengan garam dan lada hitam, sajikan hangat."
        ]
    },
    {
        id: "r2",
        title: "Pan Margherita Pizza Teflon",
        mainIngredient: "Tepung Terigu",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Tepung Terigu (250 gr)", "Ragi Instan (1 sdt)", "Air Hangat (130 ml)", "Saus Tomat", "Keju Mozzarella"],
        steps: [
            "Campur tepung terigu, ragi instan, dan air hangat. Uleni hingga kalis lalu diamkan 30 menit.",
            "Pipihkan adonan di atas teflon anti lengket dan tusuk-tusuk permukaannya dengan garpu.",
            "Oleskan saus tomat lalu taburi keju mozzarella parut.",
            "Tutup teflon dan panggang di api sangat kecil selama 12-15 menit hingga keju meleleh."
        ]
    },
    {
        id: "r3",
        title: "Spaghetti Aglio e Olio",
        mainIngredient: "Pasta",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Pasta / Spageti (200 gr)", "Bawang Putih (4 siung)", "Cabai Rawit (3 buah)", "Minyak Zaitun / Goreng", "Garam & Lada"],
        steps: [
            "Rebus spageti hingga al dente, tiriskan dan sisakan 3 sdm air rebusan pasta.",
            "Tumis irisan tipis bawang putih dan cabai rawit dengan minyak hingga harum.",
            "Masukkan pasta dan air rebusannya, bumbui garam serta lada, lalu aduk rata."
        ]
    },
    {
        id: "r4",
        title: "Chicken Teriyaki Donburi",
        mainIngredient: "Ayam",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1604908176997-125f2596f37c?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Daging Ayam Fillet (300 gr)", "Saus Teriyaki (3 sdm)", "Kecap Manis (1 sdm)", "Bawang Bombay (1/2 buah)", "Bawang Putih (2 siung)"],
        steps: [
            "Potong ayam ukuran gigitan, tumis bersama bawang putih cincang hingga berubah warna.",
            "Masukkan irisan bawang bombay, saus teriyaki, kecap manis, dan sedikit air.",
            "Masak hingga kuah mengental dan meresap ke ayam, sajikan di atas nasi hangat."
        ]
    },
    {
        id: "r5",
        title: "Sambal Goreng Kentang",
        mainIngredient: "Kentang",
        category: "Nusantara",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Kentang (400 gr)", "Bawang Merah (5 siung)", "Bawang Putih (3 siung)", "Cabai Merah (5 buah)", "Santan (100 ml)", "Daun Salam"],
        steps: [
            "Potong dadu kentang lalu goreng hingga berkulit kecokelatan, tiriskan.",
            "Tumis bumbu halus (bawang merah, bawang putih, cabai) dan daun salam hingga harum.",
            "Tuang santan, bumbui garam dan gula merah, lalu masukkan kentang goreng dan aduk hingga meresap."
        ]
    },
    {
        id: "r6",
        title: "Sayur Bening Bayam Segar",
        mainIngredient: "Sayuran",
        category: "Nusantara",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Bayam Segar (2 ikat)", "Bawang Merah (4 siung)", "Temu Kunci (2 cm)", "Garam & Gula Pasir"],
        steps: [
            "Didihkan 700 ml air bersama irisan bawang merah dan temu kunci yang dimemarkan.",
            "Masukkan daun bayam yang sudah dicuci bersih, tambahkan garam dan sedikit gula.",
            "Masak selama 2 menit saja agar bayam tetap hijau segar, lalu angkat."
        ]
    },
    {
        id: "r7",
        title: "Telur Dadar Padang Tebal",
        mainIngredient: "Telur",
        category: "Nusantara",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Telur Ayam (4 butir)", "Tepung Beras (2 sdm)", "Daun Bawang (2 batang)", "Bawang Merah & Cabai Halus", "Garam"],
        steps: [
            "Kocok telur bersama bumbu halus, irisan daun bawang, garam, dan tepung beras yang dilarutkan sedikit air.",
            "Panaskan minyak agak banyak di wajan cekung dengan api sedang.",
            "Tuang adonan telur, masak hingga bagian bawah matang kecokelatan lalu balik perlahan hingga matang merata."
        ]
    }
];

/* === STATE & STORAGE === */
let currentUser = null;
let currentSharingFilter = "Semua";
let sharedItems = [];
let pantryItems = [];
let ownedVouchers = [];
let userStats = { points: 45, savedFoodKg: 2.4, sharedCount: 3 };

const VOUCHER_CATALOG = [
    { id: "v1", title: "Potongan Rp 10.000 Belanja Sayur", pts: 30, desc: "Berlaku di seluruh Mitra UMKM DapurBerbagi", code: "SEHAT10K" },
    { id: "v2", title: "Gratis Es Teh / Minuman Segar", pts: 15, desc: "Tukarkan saat jajan di warung mitra sekitar", code: "SEGAR15" },
    { id: "v3", title: "Diskon Rp 20.000 Paket Sembako", pts: 60, desc: "Minimal belanja Rp 50.000 di toko mitra", code: "BERKAH20" }
];

const UMKM_PARTNERS = [
    { name: "Warung Berkah Ibu Siti", area: "Durenan, Kab. Trenggalek", category: "Masakan Rumah & Lauk", badge: "Mitra Aktif" },
    { name: "Toko Sembako Barokah", area: "Karangan, Kab. Trenggalek", category: "Bahan Pokok & Sayur", badge: "Mitra Aktif" },
    { name: "Dapur Kue & Roti Lestari", area: "Trenggalek Kota", category: "Roti & Jajanan Pasar", badge: "Zero-Waste Partner" }
];

window.onload = function() {
    initRegionDropdowns();
    loadAppState();
    migrateBrokenImages();
    renderCommonIngredientsDatalist();
    renderRecipesList();
};

/* === DROPDOWN WILAYAH BERJENJANG === */
function initRegionDropdowns() {
    const selects = [document.getElementById("login-kab"), document.getElementById("profile-kab")];
    selects.forEach(sel => {
        if (!sel) return;
        sel.innerHTML = '<option value="">-- Pilih Kabupaten / Kota --</option>';
        Object.keys(REGION_DATA).forEach(kab => {
            const opt = document.createElement("option");
            opt.value = kab;
            opt.textContent = kab;
            sel.appendChild(opt);
        });
    });
}

function populateKecamatan(kabId, kecId, desaId) {
    const kab = document.getElementById(kabId).value;
    const kecSel = document.getElementById(kecId);
    const desaSel = document.getElementById(desaId);
    kecSel.innerHTML = '<option value="">-- Pilih Kec. --</option>';
    desaSel.innerHTML = '<option value="">-- Pilih Desa --</option>';
    if (kab && REGION_DATA[kab]) {
        Object.keys(REGION_DATA[kab]).forEach(kec => {
            const opt = document.createElement("option");
            opt.value = kec;
            opt.textContent = kec;
            kecSel.appendChild(opt);
        });
    }
}

function populateDesa(kabId, kecId, desaId) {
    const kab = document.getElementById(kabId).value;
    const kec = document.getElementById(kecId).value;
    const desaSel = document.getElementById(desaId);
    desaSel.innerHTML = '<option value="">-- Pilih Desa --</option>';
    if (kab && kec && REGION_DATA[kab][kec]) {
        REGION_DATA[kab][kec].forEach(desa => {
            const opt = document.createElement("option");
            opt.value = desa;
            opt.textContent = desa;
            desaSel.appendChild(opt);
        });
    }
}

function updateKecamatanDropdown() { populateKecamatan("login-kab", "login-kec", "login-desa"); }
function updateDesaDropdown() { populateDesa("login-kab", "login-kec", "login-desa"); }
function updateProfileKecamatan() { populateKecamatan("profile-kab", "profile-kec", "profile-desa"); }
function updateProfileDesa() { populateDesa("profile-kab", "profile-kec", "profile-desa"); }

/* === PERSISTENCE & MIGRASI GAMBAR === */
function getDefaultSharedItems(user) {
    const desa = user ? user.desa : "Kendalrejo";
    const rtrw = user ? user.rtrw : "RT 02 / RW 01";
    const kab = user ? user.kab : "Kab. Trenggalek";
    const kec = user ? user.kec : "Durenan";

    return [
        {
            id: "sh-init-1",
            name: "Sayur Bayam & Kangkung Petik Pagi",
            category: "Sayuran",
            qty: "3 Ikat",
            condition: "Baru dipetik dari pekarangan, segar tanpa pestisida",
            kab, kec, desa, rtrw,
            user: "Bu Siti Aminah",
            phone: "081234567890",
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
            status: "available",
            timestamp: "15 menit lalu"
        },
        {
            id: "sh-init-2",
            name: "Tempe Kedelai & Tahu Putih Segar",
            category: "Lauk Pauk",
            qty: "4 Bungkus",
            condition: "Kelebihan belanja dapur, baru dibeli pagi ini",
            kab, kec, desa, rtrw,
            user: "Pak Budi Santoso",
            phone: "081987654321",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
            status: "available",
            timestamp: "45 menit lalu"
        },
        {
            id: "sh-init-3",
            name: "Pisang Kepok Matang Pohon",
            category: "Buah",
            qty: "1 Sisir",
            condition: "Manis alami, cocok untuk digoreng atau dikukus",
            kab, kec, desa, rtrw,
            user: "Mbak Rina Wati",
            phone: "085712349876",
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
            status: "available",
            timestamp: "1 jam lalu"
        }
    ];
}

function loadAppState() {
    const savedUser = localStorage.getItem("dapur_user");
    const savedItems = localStorage.getItem("dapur_shared_items");
    const savedPantry = localStorage.getItem("dapur_pantry_items");
    const savedStats = localStorage.getItem("dapur_user_stats");
    const savedVouchers = localStorage.getItem("dapur_owned_vouchers");

    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById("login-screen").classList.add("hidden");
    }

    sharedItems = savedItems ? JSON.parse(savedItems) : getDefaultSharedItems(currentUser);
    pantryItems = savedPantry ? JSON.parse(savedPantry) : [
        { id: "p-1", name: "Kentang", category: "Sayuran", qty: "1 kg", daysLeft: 5 },
        { id: "p-2", name: "Telur Ayam", category: "Lauk Pauk", qty: "6 butir", daysLeft: 2 },
        { id: "p-3", name: "Tepung Terigu", category: "Bumbu", qty: "500 gr", daysLeft: 14 }
    ];
    if (savedStats) userStats = JSON.parse(savedStats);
    if (savedVouchers) ownedVouchers = JSON.parse(savedVouchers);

    if (currentUser) updateAppUI();
}

function saveAppState() {
    localStorage.setItem("dapur_shared_items", JSON.stringify(sharedItems));
    localStorage.setItem("dapur_pantry_items", JSON.stringify(pantryItems));
    localStorage.setItem("dapur_user_stats", JSON.stringify(userStats));
    localStorage.setItem("dapur_owned_vouchers", JSON.stringify(ownedVouchers));
}

function migrateBrokenImages() {
    let changed = false;
    sharedItems.forEach(item => {
        if (!item.image || item.image.includes("wikimedia.org") || item.image.includes("wikipedia.org")) {
            item.image = CATEGORY_DEFAULT_IMAGES[item.category] || CATEGORY_DEFAULT_IMAGES["Sayuran"];
            changed = true;
        }
    });
    if (changed) saveAppState();
}

/* === LOGIN & PROFIL === */
function handleUserLogin(event) {
    event.preventDefault();
    currentUser = {
        name: document.getElementById("login-name").value.trim(),
        phone: document.getElementById("login-phone").value.trim(),
        kab: document.getElementById("login-kab").value,
        kec: document.getElementById("login-kec").value,
        desa: document.getElementById("login-desa").value,
        rtrw: document.getElementById("login-rt").value.trim()
    };
    localStorage.setItem("dapur_user", JSON.stringify(currentUser));

    if (!localStorage.getItem("dapur_shared_items")) {
        sharedItems = getDefaultSharedItems(currentUser);
    }
    saveAppState();
    document.getElementById("login-screen").classList.add("hidden");
    updateAppUI();
}

function updateUserProfileLocation(event) {
    event.preventDefault();
    currentUser.kab = document.getElementById("profile-kab").value;
    currentUser.kec = document.getElementById("profile-kec").value;
    currentUser.desa = document.getElementById("profile-desa").value;
    currentUser.rtrw = document.getElementById("profile-rt").value.trim();
    localStorage.setItem("dapur_user", JSON.stringify(currentUser));
    updateAppUI();
    alert("Wilayah domisili berhasil diperbarui!");
}

function updateAppUI() {
    if (!currentUser) return;
    document.getElementById("user-location-badge").textContent = `${currentUser.desa}, ${currentUser.rtrw}`;
    document.getElementById("feed-location-subtitle").textContent = `Komunitas ${currentUser.desa} (${currentUser.rtrw})`;
    document.getElementById("profile-name").textContent = currentUser.name;
    document.getElementById("profile-phone").textContent = currentUser.phone;
    document.getElementById("profile-address").textContent = `${currentUser.desa}, Kec. ${currentUser.kec}, ${currentUser.kab} (${currentUser.rtrw})`;
    document.getElementById("profile-initials").textContent = currentUser.name.charAt(0).toUpperCase();

    updateStatsDisplay();
    renderSharingFeed();
    renderPantryItems();
    renderVouchers();
    renderUmkmList();
}

/* === NAVIGASI TAB === */
function switchTab(tabId) {
    ["sharing", "pantry", "voucher", "umkm", "profile"].forEach(t => {
        const sec = document.getElementById(`tab-${t}`);
        const btn = document.getElementById(`nav-btn-${t}`);
        if (t === tabId) {
            sec.classList.remove("hidden");
            btn.className = "nav-btn flex flex-col items-center text-emerald-600 space-y-0.5";
            btn.querySelector("span").className = "text-[10px] font-bold";
        } else {
            sec.classList.add("hidden");
            btn.className = "nav-btn flex flex-col items-center text-slate-400 space-y-0.5";
            btn.querySelector("span").className = "text-[10px] font-medium";
        }
    });
}

/* === BERBAGI TETANGGA & KONFIRMASI 2 TAHAP === */
function filterSharingCategory(cat) {
    currentSharingFilter = cat;
    document.querySelectorAll(".sharing-cat-btn").forEach(btn => {
        if (btn.textContent.trim() === cat) {
            btn.className = "sharing-cat-btn px-3.5 py-1.5 rounded-full font-bold bg-emerald-600 text-white whitespace-nowrap shadow-sm";
        } else {
            btn.className = "sharing-cat-btn px-3.5 py-1.5 rounded-full font-semibold bg-white text-slate-600 border border-slate-200 whitespace-nowrap";
        }
    });
    renderSharingFeed();
}

function renderSharingFeed() {
    const listEl = document.getElementById("sharing-feed-list");
    listEl.innerHTML = "";

    const filtered = currentSharingFilter === "Semua"
        ? sharedItems
        : sharedItems.filter(i => i.category === currentSharingFilter);

    if (filtered.length === 0) {
        listEl.innerHTML = `
            <div class="bg-white p-8 rounded-2xl text-center border border-slate-100">
                <i class="fa-solid fa-bowl-food text-3xl text-slate-300 mb-2"></i>
                <p class="text-xs text-slate-500 font-medium">Belum ada makanan di kategori "${currentSharingFilter}".</p>
            </div>`;
        return;
    }

    filtered.forEach(item => {
        let actionHtml = "";
        if (item.status === "available") {
            actionHtml = `
                <button onclick="bookItem('${item.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition">
                    Booking Ambil
                </button>`;
        } else if (item.status === "booked") {
            actionHtml = `
                <button onclick="confirmPickupDone('${item.id}')" class="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-sm transition">
                    Konfirmasi Sudah Diambil
                </button>`;
        } else {
            actionHtml = `
                <span class="px-3 py-1.5 bg-slate-100 text-slate-500 font-bold rounded-xl text-xs">
                    <i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> Selesai Diambil
                </span>`;
        }

        const card = document.createElement("div");
        card.className = "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden fade-in";
        card.innerHTML = `
            <div class="relative h-44 bg-slate-100">
                <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" onerror="handleFoodImageError(this, '${item.category}')" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">${item.category}</span>
                <span class="absolute top-3 right-3 bg-white/95 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    <i class="fa-solid fa-location-dot text-emerald-600 mr-1"></i>${item.desa} • ${item.rtrw}
                </span>
            </div>
            <div class="p-4 space-y-2.5">
                <div class="flex justify-between items-start gap-2">
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">${item.name}</h4>
                        <p class="text-xs text-emerald-600 font-bold mt-0.5">Porsi / Jumlah: ${item.qty}</p>
                    </div>
                    <span class="text-[10px] text-slate-400 shrink-0">${item.timestamp}</span>
                </div>
                <p class="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100 text-[11px] text-slate-600">
                    <strong class="text-slate-800">Kondisi:</strong> ${item.condition}
                </p>
                <div class="flex items-center justify-between pt-1">
                    <div class="flex items-center space-x-2 min-w-0">
                        <div class="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                            ${item.user.charAt(0).toUpperCase()}
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-800 truncate">${item.user}</p>
                            <p class="text-[10px] text-slate-400">WA: ${item.phone}</p>
                        </div>
                    </div>
                    <div class="shrink-0">${actionHtml}</div>
                </div>
            </div>`;
        listEl.appendChild(card);
    });
}

function openShareModal() {
    document.getElementById("modal-share").classList.remove("hidden");
    document.getElementById("modal-share").classList.add("flex");
}

function closeShareModal() {
    document.getElementById("modal-share").classList.add("hidden");
    document.getElementById("modal-share").classList.remove("flex");
    document.getElementById("share-photo-preview").classList.add("hidden");
}

function previewSharePhoto(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("share-photo-preview");
    if (!file) {
        preview.classList.add("hidden");
        return;
    }
    const reader = new FileReader();
    reader.onload = e => {
        preview.src = e.target.result;
        preview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
}

function handleShareSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("share-item-name").value.trim();
    const category = document.getElementById("share-item-category").value;
    const qty = document.getElementById("share-item-qty").value.trim();
    const condition = document.getElementById("share-item-condition").value.trim();
    const photoInput = document.getElementById("share-item-photo");

    const finalizePost = imgSrc => {
        sharedItems.unshift({
            id: "sh-" + Date.now(),
            name, category, qty, condition,
            kab: currentUser.kab,
            kec: currentUser.kec,
            desa: currentUser.desa,
            rtrw: currentUser.rtrw,
            user: currentUser.name,
            phone: currentUser.phone,
            image: imgSrc,
            status: "available",
            timestamp: "Baru saja"
        });
        userStats.points += 15;
        userStats.sharedCount += 1;
        userStats.savedFoodKg += 0.8;
        saveAppState();
        updateStatsDisplay();
        renderSharingFeed();
        document.getElementById("share-food-form").reset();
        closeShareModal();
    };

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => finalizePost(e.target.result);
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        finalizePost(CATEGORY_DEFAULT_IMAGES[category] || CATEGORY_DEFAULT_IMAGES["Sayuran"]);
    }
}

function bookItem(id) {
    const item = sharedItems.find(i => i.id === id);
    if (!item) return;
    item.status = "booked";
    saveAppState();
    renderSharingFeed();
    alert(`Berhasil booking "${item.name}"!\nSilakan hubungi ${item.user} (${item.phone}) lalu tekan "Konfirmasi Sudah Diambil" setelah makanan diterima.`);
}

function confirmPickupDone(id) {
    const item = sharedItems.find(i => i.id === id);
    if (!item) return;
    item.status = "claimed";
    userStats.points += 10;
    userStats.savedFoodKg += 0.6;
    saveAppState();
    updateStatsDisplay();
    renderSharingFeed();
    alert("Terima kasih! Makanan berhasil diselamatkan dan +10 Poin ditambahkan ke akunmu.");
}

/* === PELACAK KULKAS & RESEP === */
function renderPantryItems() {
    const listEl = document.getElementById("pantry-items-list");
    listEl.innerHTML = "";

    if (pantryItems.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 col-span-2 text-center py-4">Stok kulkas masih kosong.</p>`;
        return;
    }

    pantryItems.forEach(item => {
        const urgent = item.daysLeft <= 2;
        const div = document.createElement("div");
        div.className = `p-3 rounded-xl border ${urgent ? "bg-amber-50/70 border-amber-200" : "bg-slate-50 border-slate-100"} flex flex-col justify-between`;
        div.innerHTML = `
            <div class="flex items-start justify-between gap-1">
                <h5 class="font-bold text-slate-800 text-xs leading-snug">${item.name}</h5>
                <button onclick="removePantryItem('${item.id}')" class="text-slate-400 hover:text-rose-500 text-xs">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <div class="mt-2">
                <p class="text-[10px] text-slate-500">${item.qty} • ${item.category}</p>
                <span class="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${urgent ? "bg-amber-200 text-amber-900" : "bg-emerald-100 text-emerald-700"}">
                    Tahan ${item.daysLeft} hari lagi
                </span>
            </div>`;
        listEl.appendChild(div);
    });
}

function openAddPantryModal() {
    document.getElementById("modal-pantry").classList.remove("hidden");
    document.getElementById("modal-pantry").classList.add("flex");
}

function closeAddPantryModal() {
    document.getElementById("modal-pantry").classList.add("hidden");
    document.getElementById("modal-pantry").classList.remove("flex");
}

function handlePantrySubmit(event) {
    event.preventDefault();
    pantryItems.unshift({
        id: "p-" + Date.now(),
        name: document.getElementById("pantry-name").value.trim(),
        category: document.getElementById("pantry-category").value,
        qty: document.getElementById("pantry-qty").value.trim(),
        daysLeft: parseInt(document.getElementById("pantry-days").value, 10) || 3
    });
    saveAppState();
    document.getElementById("pantry-form").reset();
    closeAddPantryModal();
    renderPantryItems();
    renderCommonIngredientsDatalist();
    renderRecipesList();
}

function removePantryItem(id) {
    pantryItems = pantryItems.filter(i => i.id !== id);
    saveAppState();
    renderPantryItems();
    renderRecipesList();
}

function renderCommonIngredientsDatalist() {
    const datalist = document.getElementById("common-ingredients-list");
    datalist.innerHTML = "";
    const uniqueIngs = new Set();
    RECIPES_DATABASE.forEach(r => uniqueIngs.add(r.mainIngredient));
    pantryItems.forEach(p => uniqueIngs.add(p.name));
    uniqueIngs.forEach(ing => {
        const opt = document.createElement("option");
        opt.value = ing;
        datalist.appendChild(opt);
    });
}

function resetRecipeFilter() {
    document.getElementById("recipe-main-ingredient-search").value = "";
    renderRecipesList();
}

function renderRecipesList() {
    const listEl = document.getElementById("recipes-list");
    listEl.innerHTML = "";
    const query = (document.getElementById("recipe-main-ingredient-search")?.value || "").toLowerCase().trim();

    const filtered = query
        ? RECIPES_DATABASE.filter(r =>
            r.mainIngredient.toLowerCase().includes(query) ||
            r.title.toLowerCase().includes(query) ||
            r.ingredients.some(ing => ing.toLowerCase().includes(query))
        )
        : RECIPES_DATABASE;

    if (filtered.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-slate-400 text-center py-4">Belum ada resep yang cocok dengan kata kunci "${query}".</p>`;
        return;
    }

    filtered.forEach(recipe => {
        const inFridge = pantryItems.some(p =>
            p.name.toLowerCase().includes(recipe.mainIngredient.toLowerCase()) ||
            recipe.mainIngredient.toLowerCase().includes(p.name.toLowerCase())
        );

        const card = document.createElement("div");
        card.onclick = () => openRecipeDetail(recipe.id);
        card.className = "bg-slate-50 hover:bg-emerald-50/40 border border-slate-100 rounded-2xl p-3 flex items-center space-x-3 cursor-pointer transition";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" referrerpolicy="no-referrer" onerror="handleFoodImageError(this, 'Makanan Matang')" class="w-16 h-16 object-cover rounded-xl shrink-0 bg-slate-200">
            <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-1.5 flex-wrap gap-y-1">
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">${recipe.category}</span>
                    ${inFridge ? '<span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">Ada di Kulkas</span>' : ''}
                </div>
                <h4 class="font-bold text-slate-900 text-xs mt-1 truncate">${recipe.title}</h4>
                <p class="text-[10px] text-slate-500 mt-0.5">Bahan Utama: <strong class="text-slate-700">${recipe.mainIngredient}</strong></p>
            </div>
            <i class="fa-solid fa-chevron-right text-slate-400 text-xs pr-1"></i>`;
        listEl.appendChild(card);
    });
}

function openRecipeDetail(id) {
    const recipe = RECIPES_DATABASE.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById("modal-recipe-badge").textContent = `${recipe.category} • Bahan Utama: ${recipe.mainIngredient}`;
    document.getElementById("modal-recipe-title").textContent = recipe.title;
    document.getElementById("modal-recipe-img").src = recipe.image;

    const ingList = document.getElementById("modal-recipe-ingredients");
    ingList.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");

    const stepList = document.getElementById("modal-recipe-steps");
    stepList.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");

    document.getElementById("modal-recipe-detail").classList.remove("hidden");
    document.getElementById("modal-recipe-detail").classList.add("flex");
}

function closeRecipeModal() {
    document.getElementById("modal-recipe-detail").classList.add("hidden");
    document.getElementById("modal-recipe-detail").classList.remove("flex");
}

/* === VOUCHER & MITRA UMKM === */
function renderVouchers() {
    const listEl = document.getElementById("voucher-list");
    const ownedEl = document.getElementById("owned-voucher-list");
    listEl.innerHTML = "";
    ownedEl.innerHTML = "";

    document.getElementById("voucher-points-display").textContent = `${userStats.points} Poin`;

    VOUCHER_CATALOG.forEach(v => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-3";
        card.innerHTML = `
            <div>
                <span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">${v.pts} Poin</span>
                <h4 class="font-bold text-slate-900 text-xs mt-1.5">${v.title}</h4>
                <p class="text-[11px] text-slate-500 mt-0.5">${v.desc}</p>
            </div>
            <button onclick="claimVoucher('${v.id}')" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shrink-0">
                Tukar
            </button>`;
        listEl.appendChild(card);
    });

    if (ownedVouchers.length === 0) {
        ownedEl.innerHTML = `<p class="text-xs text-slate-400 bg-white p-4 rounded-2xl border border-slate-100 text-center">Belum ada voucher yang ditukarkan.</p>`;
    } else {
        ownedVouchers.forEach(ov => {
            const item = document.createElement("div");
            item.className = "bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl flex items-center justify-between";
            item.innerHTML = `
                <div>
                    <h5 class="font-bold text-emerald-900 text-xs">${ov.title}</h5>
                    <p class="text-[10px] text-emerald-700 mt-0.5">Tunjukkan kode ini ke kasir Mitra UMKM</p>
                </div>
                <span class="font-mono font-extrabold text-xs bg-white text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-300">${ov.code}</span>`;
            ownedEl.appendChild(item);
        });
    }
}

function claimVoucher(id) {
    const v = VOUCHER_CATALOG.find(item => item.id === id);
    if (!v) return;
    if (userStats.points < v.pts) {
        alert("Poinmu belum mencukupi. Yuk bagikan atau selamatkan makanan tetangga untuk menambah poin!");
        return;
    }
    userStats.points -= v.pts;
    ownedVouchers.unshift({ title: v.title, code: v.code });
    saveAppState();
    updateStatsDisplay();
    renderVouchers();
    alert(`Voucher "${v.title}" berhasil ditukarkan! Kode: ${v.code}`);
}

function renderUmkmList() {
    const listEl = document.getElementById("umkm-list");
    listEl.innerHTML = UMKM_PARTNERS.map(u => `
        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
                <h4 class="font-bold text-slate-900 text-xs">${u.name}</h4>
                <p class="text-[11px] text-slate-500 mt-0.5"><i class="fa-solid fa-location-dot text-emerald-600 mr-1"></i>${u.area}</p>
                <p class="text-[10px] text-slate-400 mt-0.5">${u.category}</p>
            </div>
            <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">${u.badge}</span>
        </div>
    `).join("");
}

function updateStatsDisplay() {
    document.getElementById("header-points").textContent = `${userStats.points} Poin`;
    document.getElementById("voucher-points-display").textContent = `${userStats.points} Poin`;
    document.getElementById("stat-saved-food").textContent = `${userStats.savedFoodKg.toFixed(1)} kg`;
    document.getElementById("stat-shared-count").textContent = `${userStats.sharedCount} Paket`;
}

function resetAppData() {
    if (confirm("Reset semua data lokal dan kembali ke halaman pendaftaran awal?")) {
        localStorage.removeItem("dapur_user");
        localStorage.removeItem("dapur_shared_items");
        localStorage.removeItem("dapur_pantry_items");
        localStorage.removeItem("dapur_user_stats");
        localStorage.removeItem("dapur_owned_vouchers");
        location.reload();
    }
}
