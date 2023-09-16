
// Class untuk mengelola pendaftar
class Pendaftar {
  constructor(nama, umur, uangSangu) {
    this.nama = nama;
    this.umur = umur;
    this.uangSangu = uangSangu;
  }
}
// Array untuk menyimpan daftar pendaftar
const daftarPendaftar = [];
// Fungsi untuk menambahkan pendaftar
function tambahPendaftar(nama, umur, uangSangu) {
  const pendaftar = new Pendaftar(nama, umur, uangSangu);
  daftarPendaftar.push(pendaftar);
}
// Fungsi untuk menghitung rata-rata umur dan uang sangu
function hitungRataRata() {
  let totalUmur = 0;
  let totalUangSangu = 0;
  for (const pendaftar of daftarPendaftar) {
    totalUmur += pendaftar.umur;
    totalUangSangu += pendaftar.uangSangu;
  }
  const rataRataUmur = totalUmur / daftarPendaftar.length;
  const rataRataUangSangu = totalUangSangu / daftarPendaftar.length;
  return { rataRataUmur, rataRataUangSangu };
}
// Fungsi untuk menampilkan data pendaftar dan resume
function tampilkanData() {
  const pendaftarData = document.getElementById("pendaftarData");
  pendaftarData.innerHTML = "";
  for (const pendaftar of daftarPendaftar) {
    const row = pendaftarData.insertRow();
    row.insertCell(0).textContent = pendaftar.nama;
    row.insertCell(1).textContent = pendaftar.umur;
    row.insertCell(2).textContent = pendaftar.uangSangu;
  }
  const { rataRataUmur, rataRataUangSangu } = hitungRataRata();
  document.getElementById("avgUangSangu").textContent =
    rataRataUangSangu.toFixed(2);
  document.getElementById("avgUmur").textContent = rataRataUmur.toFixed(2);
}
// Fungsi untuk menangani submit form
function submitForm() {
  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangSangu = parseInt(document.getElementById("uangSangu").value);
  // Validasi kriteria
  if (
    nama.length < 10 ||
    umur < 25 ||
    uangSangu < 100000 ||
    uangSangu > 1000000
  ) {
    alert("Data tidak memenuhi kriteria");
    return;
  }
  // Tambahkan pendaftar
  tambahPendaftar(nama, umur, uangSangu);
  // Tampilkan data baru
  tampilkanData();
  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("uangSangu").value = "";
}
// Fungsi untuk mengaktifkan tab yang dipilih
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (const content of tabcontent) {
    content.style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tablinks");
  for (const link of tablinks) {
    link.className = link.className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Default: tampilkan tab Registrasi saat halaman dimuat
document.getElementById("Registrasi").style.display = "block";
