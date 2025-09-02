const projects = [
    {
        title: "Game Tangkap Koin",
        image: "images/game-koin.png",
        scratchId: "123456789", // ganti dengan ID asli project Scratch
        belajar: [
            "Menggunakan Scratch untuk membuat sprite bergerak",
            "Belajar logika kondisi jika menyentuh koin maka skor bertambah",
            "Menambahkan efek suara saat menang"
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
            "Menggunakan blok gerak untuk mengontrol sprite",
            "Membuat animasi roket naik ke angkasa",
            "Menambahkan background bintang"
        ],
        tujuan: [
            "Mengembangkan kreativitas dalam membuat animasi",
            "Memahami koordinat X dan Y"
        ],
        pdf: "tutorial/animasi-roket.pdf"
    },
    {
        title: "Kuis Matematika",
        image: "images/kuis-matematika.png",
        scratchId: "246810121",
        belajar: [
            "Menggunakan Scratch untuk membuat soal interaktif",
            "Memakai blok kondisi untuk memeriksa jawaban",
            "Menambahkan skor setiap kali jawaban benar"
        ],
        tujuan: [
            "Meningkatkan kemampuan berhitung",
            "Mengenal logika percabangan dalam coding"
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

// Modal
const modal = document.getElementById("modal");
const modalScratch = document.getElementById("modalScratch");
const modalTitle = document.getElementById("modalTitle");
const modalBelajar = document.getElementById("modalBelajar");
const modalTujuan = document.getElementById("modalTujuan");
const tutorialLink = document.getElementById("tutorialLink");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const proj = projects[card.dataset.index];
        modal.style.display = "block";

        modalTitle.textContent = proj.title;
        modalScratch.src = `https://scratch.mit.edu/projects/embed/${proj.scratchId}/?autostart=false`;
        modalBelajar.innerHTML = proj.belajar.map(item => `<li>${item}</li>`).join("");
        modalTujuan.innerHTML = proj.tujuan.map(item => `<li>${item}</li>`).join("");
        tutorialLink.href = proj.pdf;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalScratch.src = ""; // stop game saat ditutup
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalScratch.src = "";
    }
});
