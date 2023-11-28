function book() {
  var nomorWhatsApp = "6285721543488";
  var walink = "https://web.whatsapp.com/send";
  var service = document.getElementById("services").value;
  var nama = document.getElementById("nama").value;
  var hair = document.getElementById("hair").value;
  var hari = document.getElementById("hari").value;
  var jam = document.getElementById("jam").value;

  console.log("Service: " + services);
  console.log("Nama: " + nama);
  console.log("Hair Artis: " + hair);
  console.log("Hari: " + hari);
  console.log("Jam: " + jam);

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  var url =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    "Service: " +
    service +
    "%0A" +
    "Nama: " +
    nama +
    "%0A" +
    "Hair Artis: " +
    hair +
    "%0A" +
    "Hari: " +
    hari +
    "%0A" +
    "Jam:" +
    jam;
  window.open(url, "_blank");
}
