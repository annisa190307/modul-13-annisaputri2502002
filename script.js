const deskripsi = document.getElementById("deskripsi");
const btnUbah = document.getElementById("btnUbah");

btnUbah.addEventListener("click", function() {
  deskripsi.textContent = "Deskripsi berhasil diubah menggunakan JavaScript.";
  deskripsi.style.color = "#2563eb";
  deskripsi.style.fontWeight = "bold";
});