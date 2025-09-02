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
        pdf: "tutorial/latihan07.pdf"
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
    modalScratch.src = "";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalScratch.src = "";
    }
});
