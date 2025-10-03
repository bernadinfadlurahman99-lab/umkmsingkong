// Toggle menu hamburger
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

// Scroll smooth dan highlight menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if(scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// Form WhatsApp otomatis
document.getElementById('formPesan').addEventListener('submit', function(e){
  e.preventDefault();
  let nama = document.getElementById('nama').value;
  let produk = document.getElementById('produk').value;
  let jumlah = document.getElementById('jumlah').value;
  let nomor = "6281234567890"; // Ganti nomor WA
  let url = `https://wa.me/${nomor}?text=Halo,%20saya%20${nama}%20ingin%20pesan%20${produk}%20sebanyak%20${jumlah}`;
  window.open(url, "_blank");
});
