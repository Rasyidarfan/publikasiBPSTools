var kecData = ['Wamena',
'Asolokobal',
'Walelagama',
'Trikora',
'Napua',
'Walaik',
'Wouma',
'Walesi',
'Asotipo',
'Maima',
'Hubikosi',
'Pelebaga',
'Ibele',
'Tailarek',
'Hubikiak',
'Asologaima',
'Musatfak',
'Silo Karno Doga',
'Pyramid',
'Muliama',
'Wame',
'Kurulu',
'Usilimo',
'Wita Waya',
'Libarek',
'Wadangku',
'Pisugi',
'Bolakme',
'Wollo',
'Yalengga',
'Tagime',
'Molagalome',
'Tagineri',
'Bugi',
'Bpiri',
'Koragi',
'Wesaput',
'Siepkosi',
'Itlay Hisage',
'Popugoba'
];
var kabData = 'Jayawijaya';
var judulKeywords = ['Kecamatan', '(1)']; // Kata kunci untuk mencari baris judul


    var doc = app.activeDocument;
    var tables = doc.stories.everyItem().tables.everyItem().getElements();

    for (var i = 0; i < tables.length; i++) {
        var table = tables[i];
        var foundTitles = 0;
        var startDataIndex = -1;

        // Cari semua baris judul dan hitung jumlah judul yang ditemukan
        for (var j = 0; j < table.rows.length; j++) {
            var cellText = table.rows[j].cells[0].contents;

            for (var k = 0; k < judulKeywords.length; k++) {
                if (cellText.indexOf(judulKeywords[k]) !== -1) {
                    foundTitles++;
                }
            }

            // Jika semua judul ditemukan, mulai proses penggantian
            if (foundTitles === judulKeywords.length) {
                startDataIndex = j + 1;
                break;
            }
        }

        // Jika semua judul ditemukan, lanjutkan proses
        if (startDataIndex >= 0) {
            // Sesuaikan jumlah baris tabel terlebih dahulu
            var targetRowCount = startDataIndex + kecData.length; // Hitung berdasarkan indeks awal data
            var currentRowCount = table.rows.length - 1; // Exclude baris terakhir

            if (currentRowCount > targetRowCount) {
                // Hapus baris berlebih mulai dari baris setelah data terakhir
                for (var j = currentRowCount - 1; j >= targetRowCount; j--) {
                    table.rows[j].remove();
                }
            } else if (currentRowCount < targetRowCount) {
                // Tambah baris kurang setelah baris data terakhir
                for (var j = currentRowCount; j < targetRowCount; j++) {
                    table.rows.add(LocationOptions.AFTER, table.rows[table.rows.length - 2]);
                }
            }

            // Ganti nilai data
            for (var k = startDataIndex; k < table.rows.length - 1; k++) {
                table.rows[k].cells[0].contents = kecData[k - startDataIndex] || '';
            }

            // Ganti nilai baris terakhir
            table.rows[table.rows.length - 1].cells[0].contents = kabData;
        }
    }
