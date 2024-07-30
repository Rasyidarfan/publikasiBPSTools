# Ganti Judul baris di Indesign
script ini digunakan untuk mengganti judul baris pada tabel indesign menjadi nama kecamatan/desa dalam satu file idml/indd 

## Cara menggunakan script
* Download script [gantiJudulBaris.jsx](https://github.com/Rasyidarfan/Indesign-gantiJudulBaris/blob/master/gantiJudulBaris.jsx) dan letakkan pada folder script indesign
* Cara mengetahui folder indesign bisa dengan “Buka Adobe InDesign, lalu pergi ke Window > Utilities > Scripts untuk membuka panel script
![window](https://github.com/Rasyidarfan/Indesign-gantiJudulBaris/blob/main/Screenshot%202024-07-30%20121146.png)
* Apabila panel script sudah terbuka > Klik User > Klik kanan dan Klik Reveal In Explorer, lalu akan terbuka folder dimana script harus disimpan
![reveal](https://github.com/Rasyidarfan/Indesign-gantiJudulBaris/blob/main/Screenshot%202024-07-30%20121256.png)
* Setelah dicopykan script akan muncul pada panel script di indesign
* Lakukan modifikasi pada script **gantiJudulBaris.jsx**
```javascript
var kecData = ['nmKec1','nmKec2','nmKec3','nmKec4','nmKec5','nmKecN',....];
var kabData = 'Nama Kabupaten';
```
* Jalankan script **gantiJudulBaris.jsx** dari indesign dengan cara double click script tersebut pada
panel script atau klik kanan lalu klik run script

