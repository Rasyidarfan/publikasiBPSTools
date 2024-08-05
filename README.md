# Script Indesign - Publikasi BPS
* script [findRepace.jsx](https://github.com/Rasyidarfan/publikasiBPSTools/blob/master/findRepace.jsx) digunakan untuk mengganti text dari template menjadi sesuai satker dalam satu file idml/indd 
* script [gantiJudulBaris.jsx](https://github.com/Rasyidarfan/publikasiBPSTools/blob/master/gantiJudulBaris.jsx) digunakan untuk mengganti judul baris pada tabel indesign menjadi nama kecamatan/desa dalam satu file idml/indd 

## Cara menggunakan script
* Download script [findRepace.jsx](https://github.com/Rasyidarfan/publikasiBPSTools/blob/master/findRepace.jsx) dan [gantiJudulBaris.jsx](https://github.com/Rasyidarfan/publikasiBPSTools/blob/master/gantiJudulBaris.jsx) dan letakkan pada folder script indesign
* Cara mengetahui folder indesign bisa dengan (Buka Adobe InDesign, lalu pergi ke Window > Utilities > Scripts untuk membuka panel script) <br/>
![window](https://github.com/Rasyidarfan/publikasiBPSTools/blob/main/Screenshot%202024-07-30%20121146.png)
* Apabila panel script sudah terbuka > Klik User > Klik kanan dan Klik Reveal In Explorer, lalu akan terbuka folder dimana script harus disimpan <br/>
![reveal](https://github.com/Rasyidarfan/publikasiBPSTools/blob/main/Screenshot%202024-07-30%20121256.png)
* Copykan script yang sudah didownload ke folder tersebut <br/> ![folder](https://github.com/Rasyidarfan/publikasiBPSTools/blob/main/Screenshot%202024-08-01%20215945.png)
* Setelah dicopykan script akan muncul pada panel script di indesign
* Lakukan modifikasi pada script **findRepace.jsx** dan/atau **gantiJudulBaris.jsx** sesuai dengan data yang akan diganti, contohnya sebagai berikut
```javascript
// findRepace.jsx
var findReplacePairs = [
  ['kata template 1','ganti 1'],
  ['kata template 2','ganti 2'],
  ['kata template 3','ganti 3'],
  ['find','replace'],
  ...
]  
```
```javascript
// gantiJudulBaris.jsx
var kecData = ['nmKec1','nmKec2','nmKec3','nmKec4','nmKec5','nmKecN',....];
var kabData = 'Nama Kabupaten';
```
* Jalankan script **findRepace.jsx** kemudian **gantiJudulBaris.jsx** dari indesign dengan cara double click script tersebut pada panel script atau klik kanan lalu klik run script <br/>
![runEdit](https://github.com/Rasyidarfan/publikasiBPSTools/blob/main/Screenshot%202024-08-01%20220042.png)

