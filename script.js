
const nomorToko = "083198764777";

// Tombol pada kartu produk.
function pesan(namaProduk) {
  document.getElementById("produkPilihan").value = namaProduk;

  document.getElementById("pesan").scrollIntoView({
    behavior: "smooth"
  });
}

// Formulir pemesanan.
document.getElementById("orderForm").addEventListener(
  "submit",
  function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const produk = document.getElementById("produkPilihan").value;
    const ukuran = document.getElementById("ukuran").value;
    const catatan = document.getElementById("catatan").value.trim();

    const status = document.getElementById("pesanStatus");

    if (!nama || !telepon || !produk || !ukuran) {
      status.textContent = "Mohon lengkapi semua data wajib.";
      return;
    }

    const isiPesan =
      "Halo DSNSPORT, saya ingin memesan sepatu." +
      "\nNama: " + nama +
      "\nNomor WhatsApp: " + telepon +
      "\nProduk: " + produk +
      "\nUkuran: " + ukuran +
      "\nCatatan: " + (catatan || "-");

    const url =
      "https://wa.me/" + nomorToko +
      "?text=" + encodeURIComponent(isiPesan);

    window.open(url, "_blank", "noopener,noreferrer");

    status.textContent =
      "Detail pesanan disiapkan. Silakan lanjutkan melalui WhatsApp.";
  }
);

// Tahun pada footer otomatis diperbarui.
document.getElementById("tahun").textContent =
  new Date().getFullYear();
