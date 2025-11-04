// Data project
const projects = [
  {
    title: "Latihan 01 - Membuat Game FEEDING FRENZY",
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
    title: "Latihan 02 - Membuat Game JUMPING RABBIT ADVENTURE",
    image: "images/latihan02.jpg",
    scratchId: "1205893568",
    belajar: [
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
    title: "Latihan 03 - Membuat Game FLAPPY BIRD",
    image: "images/latihan05.jpg",
    scratchId: "1207429223",
    belajar: [
        "Membuat sprite burung bisa terbang dengan blok when space key pressed + change y",
        "Menambahkan efek gravitasi menggunakan loop forever + change y by –2",
        "Membuat pipa muncul dari kanan ke kiri dengan blok create clone of dan move",
        "Menggunakan koordinat X dan Y untuk mengatur posisi awal pipa secara acak",
        "Mendeteksi tabrakan dengan sensor touching (pipa/tepi bawah) menggunakan if then",
        "Mengatur skor dengan variabel: bertambah setiap kali burung melewati celah pipa",
        "Menambahkan efek suara saat loncat (flap) dan saat tabrakan (game over)",
        "Menggunakan blok broadcast untuk mengatur transisi dari main game ke layar Game Over",
        "Menerapkan konsep loop, kondisi, dan variabel agar gameplay terasa menantang dan interaktif"
    ],
    tujuan: [
        "Melatih logika pemrograman dengan konsep gravitasi, collision detection, dan cloning objek",
        "Mengembangkan kemampuan problem solving melalui debugging gerakan dan skor",
        "Memahami penggunaan variabel sebagai pencatat data (skor) dan kontrol alur game",
        "Mengasah koordinasi mata-tangan dan konsentrasi melalui gameplay yang cepat",
        "Menumbuhkan kreativitas dengan menambahkan variasi pipa, kecepatan, dan desain burung",
        "Membangun mindset anak sebagai pembuat game, bukan hanya pemain",
        "Memberikan pengalaman nyata dalam menciptakan game populer dengan teknik sederhana Scratch"
    ],
    pdf: "https://drive.google.com/file/d/1LGVroBWw4BSiu2hXQKDHwVRhSzYzRDbk/view?usp=sharing"
},
  {
    title: "Latihan 04 - Membuat Game ULAR PANJANG CARI MAKAN",
    image: "images/latihan06.jpg",
    scratchId: "1209414595",
    belajar: [
        "Mengontrol arah gerakan ular menggunakan tombol panah (when key pressed → point in direction / change x/y)",
        "Membuat gerakan ular bergerak terus-menerus dengan loop 'forever' dan variabel 'Speed' untuk mengatur kecepatan",
        "Mengimplementasikan variabel 'Snake Length' dan cloning sprite untuk memperpanjang tubuh ular setiap makan",
        "Menggunakan blok sensing dan kontrol untuk mendeteksi tabrakan dengan dinding atau tubuh ular sendiri (if touching edge / body → game over)",
        "Membuat makanan (misalnya apel) muncul secara acak dan bertambah panjang saat dimakan (touching, go to random position, change score/length)",
        "Menambahkan efek suara untuk aksi makan dan saat game over agar permainan lebih interaktif",
        "Menerapkan logika loop, conditional, variabel, cloning, random untuk gameplay yang kompleks dan dinamis"
    ],
    tujuan: [
        "Memahami pola perulangan dan variabel sebagai pondasi logika pemrograman visual di Scratch",
        "Mengembangkan kemampuan problem solving melalui debugging mekanisme pertumbuhan ular dan deteksi tabrakan",
        "Mengasah pemahaman matematika (koordinat, kecepatan, panjang) dengan praktik coding nyata",
        "Melatih koordinasi mata-tangan dan ketelitian dalam mengontrol pergerakan cepat",
        "Menumbuhkan kreativitas anak dengan memungkinkan modifikasi desain ular, makanan, atau aturan permainan",
        "Membangun kepercayaan diri karena anak berhasil menciptakan versi kustom game klasik secara mandiri"
    ],
    pdf: "https://drive.google.com/file/d/1f_HBQC-Q3bO7VSZfPAvh_IRGcFyfBamh/view?usp=sharing"
},
{
    title: "Latihan 05 - Membuat Game KUCING TERBANG KUMPULKAN KOIN",
    image: "images/latihan07.jpg",
    scratchId: "1210865011",
    belajar: [
        "Memulai game dengan blok 'when green flag clicked' dan atur posisi awal kucing (go to x:-150, y:0)",
        "Menggerakkan kucing naik-turun dengan blok 'when up/down arrow pressed' → change y by ±5",
        "Menambahkan latar bergulir dengan sprite bintang yang bergerak (go to layer belakang, glide, hide/show loop)",
        "Membuat objek koin muncul secara acak dan bergerak ke kiri (go to x:240, y: random; glide; hide; repeat)",
        "Membuat variabel 'koin' dan 'missed' untuk mencatat koin yang dikumpulkan dan yang terlewat",
        "Menambahkan skor naik saat kucing menyentuh koin: 'if touching' → change 'koin' by 1, play sound, hide coin",
        "Menambah variabel 'missed' ketika koin melewati tepi kanan/kiri: 'if touching edge' → change missed by 1",
        "Mengakhiri permainan ketika kelewatan mencapai batas (misal missed = 3): broadcast 'Game Over' + stop all",
        "Menampilkan layar Game Over dengan sprite teks saat menerima broadcast dan menghentikan script"
    ],
    tujuan: [
        "Memahami event-driven programming: respon terhadap input (panah), game loop, dan kondisi akhir permainan",
        "Mengasah logika interaksi antar objek melalui sensor, kondisi, dan variabel interaktif",
        "Melatih matematika dasar: koordinat, randomisasi posisi, kecepatan gerak obiect",
        "Memupuk kemampuan problem solving lewat debugging logika koin & deteksi tabrakan",
        "Mengasah kreativitas dengan menambahkan suara, variasi desain koin dan background jalur luar angkasa",
        "Meningkatkan fokus dan refleks anak lewat gameplay dinamis menghindari rintangan sambil mengumpulkan koin",
        "Membangun rasa percaya diri karena anak menghasilkan game berbasis misi fungsional sendiri"
    ],
    pdf: "https://drive.google.com/file/d/1TTuexrAbSlfF9-bXF76eZb9rPbIRp6pK/view?usp=sharing"
},{
    title: "Latihan 06 - Membuat Game TENDANG BOLA KE GAWANG",
    image: "images/latihan08.jpg",
    scratchId: "1217409016",
    belajar: [
        "Memulai game dengan blok 'when green flag clicked', set skor = 0 dan timer = 30",
        "Mengatur posisi awal bola di bawah lapangan (go to x:-4, y:-117)",
        "Menggerakkan bola ke kiri/kanan dengan tombol panah (if key left/right pressed → change x by ±3)",
        "Menendang bola ke atas dengan tombol spasi (repeat until touching gawang/monyet/tepi layar → change y by 10)",
        "Menambahkan penjaga gawang (Monkey) yang bergerak bolak-balik dengan glide atau posisi acak",
        "Menambahkan variabel 'score' untuk mencatat gol yang berhasil",
        "Mendeteksi kondisi gol (touching color gawang) → change score by 1, bunyikan 'Goal Cheer', tampilkan pesan 'GOLL!!'",
        "Mendeteksi kondisi gagal (touching Monkey) → bunyikan 'Boing', tampilkan pesan 'Gagal!'",
        "Menambahkan timer 30 detik: setiap 1 detik kurangi timer, hentikan game saat timer = 0"
    ],
    tujuan: [
        "Memahami konsep koordinat dan pergerakan sprite di Scratch",
        "Melatih penggunaan kondisi if-else untuk membuat logika permainan (gol/gagal)",
        "Menggunakan variabel untuk mencatat skor dan waktu permainan",
        "Mengenal penggunaan loop (repeat until, forever) untuk mengontrol alur game",
        "Mengembangkan logika pemrograman sederhana berbasis interaksi objek",
        "Mengasah fokus dan refleks siswa melalui permainan yang menantang",
        "Meningkatkan kreativitas anak dengan menambahkan suara, animasi, dan variasi gerakan penjaga gawang"
    ],
    pdf: "https://drive.google.com/file/d/1zCD0EwqYS6TksGnmJ5HsJ1daX_N_xgC6/view?usp=sharing"
},{
    title: "Latihan 07 - Membuat Game ROKET VS MUSUH",
    image: "images/latihan09.jpg",
    scratchId: "1225705375", 
    belajar: [
        "Menggerakkan sprite roket ke atas dan bawah menggunakan tombol panah",
        "Menembakkan peluru dengan tombol spasi menggunakan clone",
        "Membuat musuh muncul otomatis dan bergerak dari kanan ke kiri",
        "Menambahkan sistem skor dan nyawa dengan variabel",
        "Menentukan kondisi kalah (nyawa habis) dan menang (skor mencapai target)",
        "Menambahkan efek suara pada tembakan dan tabrakan",
        "Menampilkan pesan GAME OVER dan YOU WIN menggunakan broadcast",
        "Menambahkan animasi dan efek visual seperti ledakan atau suara latar",
        "Mengatur jumlah clone maksimum agar game tetap seimbang"
    ],
    tujuan: [
        "Memahami penggunaan keyboard untuk menggerakkan dan menembak sprite",
        "Menerapkan konsep clone untuk membuat objek muncul otomatis",
        "Menggunakan variabel untuk mencatat skor, nyawa, dan status permainan",
        "Melatih logika percabangan (if-else) dan kontrol alur dengan broadcast",
        "Meningkatkan keterampilan mengelola interaksi antar objek dalam game",
        "Mengembangkan kreativitas dalam menambah efek suara dan animasi",
        "Melatih kemampuan berpikir logis dan tanggap melalui permainan menembak"
    ],
    pdf: "https://drive.google.com/file/d/1D0yAOgkrROqNwvCZVaIhLOx4atrYWcXb/view?usp=sharing"
},{
    title: "Latihan 08 - Membuat Game BALAPAN PENYELAM",
    image: "images/latihan10.jpg",
    scratchId: "1228495466", 
    belajar: [
        "Menggunakan broadcast message untuk mengatur mulai dan selesai permainan",
        "Membuat dua sprite penyelam yang dapat bergerak ke arah garis finish",
        "Mengatur gerakan manual (spasi) untuk pemain dan otomatis (acak) untuk lawan",
        "Menambahkan variabel Waktu, Pemenang, dan gameSelesai untuk logika permainan",
        "Menentukan kondisi kemenangan berdasarkan siapa yang lebih dulu mencapai garis finish",
        "Menampilkan pesan pemenang dan waktu tempuh dengan timer",
        "Menggunakan loop dan kondisi if untuk mengontrol jalannya game",
        "Menambahkan efek animasi kostum saat penyelam bergerak",
        "Mengatur tampilan latar bawah laut agar lebih menarik dan interaktif"
    ],
    tujuan: [
        "Memahami cara menggunakan broadcast untuk sinkronisasi antar sprite di Scratch",
        "Melatih logika kondisi untuk menentukan pemenang permainan",
        "Menerapkan penggunaan variabel untuk mencatat waktu dan hasil lomba",
        "Membuat animasi sprite dengan perubahan kostum (next costume)",
        "Mengembangkan kemampuan berpikir algoritmik melalui permainan kompetitif",
        "Meningkatkan keterampilan dalam mendesain dan memprogram permainan sederhana",
        "Menumbuhkan kreativitas dengan menambahkan efek suara dan visual bertema laut"
    ],
    pdf: "https://drive.google.com/file/d/1WMzJ3LwQ-xsnRKdvp3Y3zX_4o24y57L-/view?usp=sharing"
},{
    title: "Latihan 09 - Membuat Game MENANGKAP APEL DENGAN KERANJANG",
    image: "images/latihan11.jpg",
    scratchId: "1234189379", 
    belajar: [
        "Menggerakkan sprite keranjang ke kiri dan kanan menggunakan tombol panah",
        "Menjatuhkan apel dari atas secara acak menggunakan perintah clone",
        "Menambahkan sistem skor yang bertambah jika apel tertangkap dan berkurang jika terlewat",
        "Mengatur kondisi Game Over saat skor mencapai batas tertentu (misalnya -1)",
        "Menggunakan pesan broadcast untuk menampilkan tulisan GAME OVER",
        "Menambahkan efek suara saat apel tertangkap atau terlewat",
        "Menggunakan logika if dan repeat until untuk kontrol pergerakan apel",
        "Membuat game yang interaktif dan melatih refleks pemain",
        "Menambahkan elemen visual dan latar belakang agar tampilan lebih menarik"
    ],
    tujuan: [
        "Melatih logika pemrograman dasar menggunakan Scratch",
        "Memahami konsep variabel, kondisi, dan perulangan dalam game",
        "Menggunakan clone untuk membuat objek muncul berulang secara otomatis",
        "Menentukan kondisi menang dan kalah berdasarkan nilai skor",
        "Mengembangkan keterampilan berpikir logis dan pengambilan keputusan cepat",
        "Meningkatkan kreativitas melalui desain karakter dan latar permainan",
        "Meningkatkan kemampuan anak dalam membuat game sederhana berbasis interaksi"
    ],
    pdf: "https://drive.google.com/file/d/1LKCDayCG9CO4cmrYkeJUHSIfwe5kgQ9r/view?usp=sharing"
},{
    title: "Latihan 10 - Membuat Game MEMANAH SASARAN",
    image: "images/latihan12.jpg",
    scratchId: "1237537788", 
    belajar: [
        "Menggerakkan busur panah mengikuti arah kursor mouse",
        "Menembakkan anak panah ke papan sasaran menggunakan tombol spasi",
        "Membuat papan sasaran bergerak otomatis ke kanan dan kiri",
        "Menambahkan sistem skor yang bertambah setiap kali panah mengenai papan",
        "Menentukan kondisi menang saat skor mencapai batas tertentu (misalnya 6 poin)",
        "Menggunakan pesan broadcast untuk menampilkan tulisan YOU WIN",
        "Menggunakan fitur clone untuk membuat panah baru setiap kali menembak",
        "Melatih logika arah dan deteksi tabrakan antar sprite",
        "Menambahkan efek suara saat panah mengenai target"
    ],
    tujuan: [
        "Memahami konsep gerak otomatis dan arah sprite menggunakan Scratch",
        "Mengenal penggunaan variabel untuk menyimpan skor permainan",
        "Mempelajari logika perulangan dan kondisi (if–else) dalam game",
        "Menggunakan broadcast untuk mengatur alur kemenangan",
        "Meningkatkan kemampuan berpikir logis melalui interaksi antar sprite",
        "Melatih koordinasi antara kontrol pemain dan logika program",
        "Mengembangkan kreativitas dalam membuat game interaktif berbasis refleks"
    ],
    pdf: "https://drive.google.com/file/d/1bmBK-iFA1BQTwFZozO0PBjgqAR2sIWcH/view?usp=sharing"
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
