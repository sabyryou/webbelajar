  function lifeupdate(event) {
  event.preventDefault(); // cegah halaman refresh

  const isi = document.querySelector(".ketikan").value;

  if (isi.trim() !== "") {
    const wadah = document.getElementById("daftar-komentar");

    const komentarBaru = document.createElement("p");
    komentarBaru.textContent = isi;

    wadah.appendChild(komentarBaru);

    // kosongkan textarea setelah kirim
    document.querySelector(".ketikan").value = "";
  }
}

  
