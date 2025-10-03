document.getElementById("formPesan").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let produk = document.getElementById("produk").value;
  let jumlah = document.getElementById("jumlah").value;

  Swal.fire({
    title: "Pesanan Berhasil!",
    html: `Terima kasih, <b>${nama}</b>.<br>Pesanan: <b>${produk}</b> (x${jumlah}) sudah diterima.`,
    icon: "success",
    confirmButtonColor: "#28a745"
  });

  this.reset();
});
