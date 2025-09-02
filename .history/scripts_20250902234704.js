const projects = [
    {
        title: "Game Tangkap Koin",
        image: "images/latihan01.jpg",
        scratchId: "1094506269", // Ganti dengan ID Scratch asli
        belajar: [
            "Menggunakan Scratch untuk membuat sprite bergerak",
            "Logika jika menyentuh koin maka skor bertambah",
            "Efek suara ketika menang"
        ],
        tujuan: [
            "Melatih logika pemrograman dasar",
            "Mengenal event handling di Scratch"
        ],
        pdf: "tutorial/game-tangkap-koin.pdf"
    },
    {
        title: "Animasi Roket Terbang",
        image: "images/roket.png",
        scratchId: "987654321",
        belajar: [
            "Kontrol sprite dengan blok gerak",
            "Animasi roket naik ke angkasa",
            "Menambahkan background bintang"
        ],
        tujuan: [
            "Mengembangkan kreativitas animasi",
            "Memahami koordinat X dan Y"
        ],
        pdf: "tutorial/animasi-roket.pdf"
    },
    {
        title: "Kuis Matematika",
        image: "images/kuis-matematika.png",
        scratchId: "246810121",
        belajar: [
            "Membuat soal interaktif dengan Scratch",
            "Percabangan untuk memeriksa jawaban",
            "Menambahkan skor setiap jawaban benar"
        ],
        tujuan: [
            "Meningkatkan kemampuan berhitung",
            "Mengenal logika IF ELSE dalam coding"
        ],
        pdf: "tutorial/kuis-matematika.pdf"
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
      <div class="project-info">
        <h3>${proj.title}</h3>
      </div>
  `;
    grid.appendChild(card);
});

// Modal Elements
const modal = document.getElementById("modal");
const modalScratch = document.getElementById("modalScratch");
const modalTitle = document.getElementById("modalTitle");
const modalBelajar = document.getElementById("modalBelajar");
const modalTujuan = document.getElementById("modalTujuan");
const tutorialLink = document.getElementById("tutorialLink");
const closeBtn = document.querySelector(".close-btn");

// Open Modal
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const proj = projects[card.dataset.index];
        modal.style.display = "flex";

        modalTitle.textContent = proj.title;
        modalScratch.src = `https://scratch.mit.edu/projects/embed/${proj.scratchId}/?autostart=false`;
        modalBelajar.innerHTML = proj.belajar.map(item => `<li>${item}</li>`).join("");
        modalTujuan.innerHTML = proj.tujuan.map(item => `<li>${item}</li>`).join("");
        tutorialLink.href = proj.pdf;
    });
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalScratch.src = "";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalScratch.src = "";
    }
});
