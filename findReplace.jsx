var myDocument = app.activeDocument;
var findReplacePairs = [
  ['BADAN PUSAT STATISTIK^pPROVINSI KEPULAUAN BANGKA BELITUNG^pBPS-STATISTICS KEPULAUAN BANGKA BELITUNG PROVINCE','BADAN PUSAT STATISTIK KABUPATEN JAYAWIJAYA^pBPS-STATISTICS JAYAWIJAYA REGENCY'],
  ['BPS Provinsi Kepulauan Bangka Belitung^pBPS-Statistics Kepulauan Bangka Belitung Province','BPS Kabupaten Jayawijaya^pBPS-Statistics Jayawijaya Regency'],
  ['tertulis dari Badan Pusat Statistik Provinsi Kepulauan Bangka Belitung.','tertulis dari Badan Pusat Statistik Kabupaten Jayawijaya.'],
  ['permission from BPS-Statistics Kepulauan Bangka Belitung Province.','permission from BPS-Statistics Jayawijaya Regency.'],
  ['Provinsi Kepulauan Bangka Belitung', 'Kabupaten Nduga'],
  ['Kepulauan Bangka Belitung Province', 'Nduga Regency'],
  ['Menurut Provinsi', 'Menurut Kecamatan'],
  ['by Province', 'by District'],
  ['Provinsi^pProvince', 'Kecamatan^pDistrict'],
  ['Jl. dr. Sutomo No. 6-8 Jakarta 10710^pTelp: (021) 3841195, 3842508, 3810291, Fax: (021) 38410291','Jl. Diponegoro No.25, Wamena Jayawijaya 99511'],
  ['Homapage: https://www.bps.go.id  Email:bpshq@bps.go.id','Homapage: jayawijayakab.go.id  Email:bps9402@bps.go.id'],
  ['(Kepala BPS Prov/Kab/Kota)','Arther Ludwig Purmiasa'],
  ['(Ketua Tim ST2023)','Betsy donggiri'],
  ['Editors^p (Tim ST2023 BPS Prov/Kab/Kota)','Editors^pRachel Lyberti Mayasiah Rumadas'],
  ['Writers^p (Tim ST2023 BPS Prov/Kab/Kota)','Writers^pAhmad Arfan Arsyad'],
  ['(IPD Daerah)','Ahmad Arfan Arsyad'],
  ['Heryanto • (Tim Daerah)','Heryanto • Athiyya Eka Dewanti'], //layout
  ['Sanjaya • (Tim Daerah)','Sanjaya • Lanang Adi Berkah • Ahmad Fauzan'], //infografis
  ['Pangkal Pinang','Wamena'],
  ['^pxxxx','^pArther Ludwig Purmiasa'], //kepala
  ['XXXXXX.XX','XXXXXX.XX'], //Katalog
  ['XXXXX.XXXXX','XXXXX.XXXXX'] //no publikasi
];

function replaceText(document, findReplacePairs) {
  // Mengatur preferensi pencarian dan penggantian
  app.findTextPreferences = NothingEnum.NOTHING;
  app.changeTextPreferences = NothingEnum.NOTHING;

  // Melakukan penggantian teks untuk setiap pasangan find/replace
  for (var i = 0; i < findReplacePairs.length; i++) {
    app.findTextPreferences.findWhat = findReplacePairs[i][0]; // Tanpa modifikasi regex
    app.changeTextPreferences.changeTo = findReplacePairs[i][1];
    document.changeText();
  }

  // Menghapus preferensi pencarian dan penggantian setelah selesai
  app.findTextPreferences = NothingEnum.NOTHING;
  app.changeTextPreferences = NothingEnum.NOTHING;
}

replaceText(myDocument, findReplacePairs);
