document.getElementById("formPesan").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let produk = document.getElementById("produk").value;
  let jumlah = document.getElementById("jumlah").value;

  Swal.fire({
    title: "Pesanan Berhasil!",
    html: `<b>${nama}</b>, pesanan Anda untuk <b>${jumlah} ${produk}</b> sudah kami terima.`,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#f57c00"
  });

  document.getElementById("formPesan").reset();
});

