// Data project
const projects = [
    {
        title: "Latihan 01 - Game Scratch",
        image: "images/latihan01.jpg",
        scratchId: "1094506269",
        belajar: [
            "Menggunakan blok gerak untuk mengontrol sprite",
            "Belajar kondisi jika menyentuh objek",
            "Menambahkan skor saat berhasil"
        ],
        tujuan: [
            "Melatih logika pemrograman dasar",
            "Memahami koordinat X dan Y di Scratch"
        ],
        pdf: "https://drive.google.com/file/d/1LMM-gBYt-oh0i3-BJJBjvk_d3cwNdZqG/view?usp=sharing"
    },
    {
        title: "Latihan 04 - Game Scratch",
        image: "images/latihan04.jpg",
        scratchId: "1205893568",
        belajar: [
            "Menggunakan blok gerak untuk mengontrol sprite",
            "Belajar kondisi jika menyentuh objek",
            "Menambahkan skor saat berhasil"
        ],
        tujuan: [
            "Melatih logika pemrograman dasar",
            "Memahami koordinat X dan Y di Scratch"
        ],
        pdf: "https://drive.google.com/file/d/1f_HBQC-Q3bO7VSZfPAvh_IRGcFyfBamh/view?usp=sharing" 
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
