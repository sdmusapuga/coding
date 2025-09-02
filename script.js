// Data project
const projects = [
  {
    title: "Latihan 01 - GAME FEEDING FRENZY",
    image: "images/latihan01.jpg",
    scratchId: "1094506269",
    belajar: [
        "Menggunakan blok gerak (move, turn, point towards) untuk mengontrol sprite sesuai input",
        "Menerapkan blok kontrol (when green flag clicked, forever, if...then) untuk membuat alur permainan",
        "Memanfaatkan sensor 'touching' untuk deteksi interaksi antar objek",
        "Membuat variabel skor dengan blok data (set, change by, show variable)",
        "Mengatur posisi menggunakan koordinat X dan Y untuk mempelajari sistem kartesius",
        "Menggunakan glide to random position untuk menghasilkan gerakan acak (randomization)",
        "Menambahkan audio interaktif dengan blok play sound agar game lebih hidup",
        "Mengatur sprite dengan show, hide, dan change size untuk efek visual",
        "Menduplikasi dan memodifikasi sprite untuk variasi permainan",
        "Memahami konsep inti pemrograman: loop, kondisi, variabel, event, dan random"
    ],
    tujuan: [
        "Melatih anak berpikir logis dan memahami hubungan sebab-akibat",
        "Mengembangkan keterampilan problem solving melalui percobaan dan debugging",
        "Mengasah kreativitas dalam merancang tampilan dan alur game",
        "Meningkatkan konsistensi, kesabaran, dan ketekunan dalam menyelesaikan tugas",
        "Memperkuat pemahaman matematika dasar (koordinat, ukuran, kecepatan) lewat praktik",
        "Mendorong rasa percaya diri anak melalui karya nyata berupa game buatan sendiri",
        "Membangun fondasi keterampilan digital dan pemrograman sejak dini"
    ],
    pdf: "https://drive.google.com/file/d/1LMM-gBYt-oh0i3-BJJBjvk_d3cwNdZqG/view?usp=sharing"
},
   {
    title: "Modul 02 - GAME LOMPAT & SKOR",
    image: "images/latihan04.jpg",
    scratchId: "1205893568",
    belajar: [
        "Menggunakan blok acara (when green flag clicked) untuk memulai game",
        "Mengatur posisi awal sprite kelinci dengan blok go to x: y:",
        "Membuat gerakan lompat halus menggunakan blok kontrol (repeat, change y)",
        "Menambahkan efek suara lompat (play sound chirp)",
        "Membuat variabel 'skor' dengan blok data (set skor to 0, change skor by...)",
        "Mengontrol skor bertambah saat lompat dan berkurang saat menyentuh musuh (Crab)",
        "Mengatur kondisi menang (skor = 5) dan kalah (skor = –1) dengan blok if... then",
        "Menggerakkan musuh (Crab) secara terus menerus via blok forever, glide, dan go to",
        "Menggunakan logika event-driven dan loop untuk interaksi game dinamis"
    ],
    tujuan: [
        "Melatih algoritma dasar: event-driven programming, loop, dan kondisi",
        "Mengasah kemampuan problem solving melalui eksperimen dan debugging logika game",
        "Melatih keterampilan matematika dasar (koordinat, naik turun, penambahan skor)",
        "Meningkatkan fokus, ketekunan, dan disiplin berpikir dalam menyelesaikan game",
        "Membantu anak mengembangkan mindset sebagai pembuat (bukan hanya pemain) game digital",
        "Membangun fondasi praktis pemrograman visual sembari membangkitkan rasa percaya diri"
    ],
    pdf: "https://drive.google.com/file/d/1LU3PCvi7utdKZLZzjd7zjWx9usFgBB2z/view?usp=sharing"
},

    {
        title: "Latihan 05 - Game Scratch", 
        image: "images/latihan05.jpg",
        scratchId: "1207429223",
        belajar: [
            "Menggunakan blok gerak untuk mengontrol sprite",
            "Belajar kondisi jika menyentuh objek",
            "Menambahkan skor saat berhasil"
        ],
        tujuan: [
            "Melatih logika pemrograman dasar",
            "Memahami koordinat X dan Y di Scratch"
        ],
        pdf: "https://drive.google.com/file/d/1TTuexrAbSlfF9-bXF76eZb9rPbIRp6pK/view?usp=sharing" 
    }
];

// Generate Cards
const grid = document.getElementById("projectGrid");

projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.index = index;
    card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-info"><h3>${proj.title}</h3></div>
    `;
    grid.appendChild(card);
});

// Modal elements
const modal = document.getElementById("modal");
const modalScratch = document.getElementById("modalScratch");
const modalTitle = document.getElementById("modalTitle");
const modalBelajar = document.getElementById("modalBelajar");
const modalTujuan = document.getElementById("modalTujuan");
const tutorialLink = document.getElementById("tutorialLink");
const closeBtn = document.querySelector(".close-btn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

// Buka modal dan langsung load game
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const proj = projects[card.dataset.index];
        modal.style.display = "flex";

        modalTitle.textContent = proj.title;
        modalScratch.src = `https://scratch.mit.edu/projects/embed/${proj.scratchId}/?autostart=true&ui=false`;
        modalBelajar.innerHTML = proj.belajar.map(item => `<li>${item}</li>`).join("");
        modalTujuan.innerHTML = proj.tujuan.map(item => `<li>${item}</li>`).join("");
        tutorialLink.href = proj.pdf;
    });
});

// Tutup modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalScratch.src = "";
});

// Tutup modal kalau klik luar area
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalScratch.src = "";
    }
});

// Fullscreen iframe
fullscreenBtn.addEventListener("click", () => {
    if (modalScratch.requestFullscreen) {
        modalScratch.requestFullscreen();
    }
});
