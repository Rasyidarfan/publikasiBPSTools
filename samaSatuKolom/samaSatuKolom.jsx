var konten = prompt(`Masukkan isi Cell`,"");

function selectColumn(konten) {
    var s = app.selection[0];
    var startDataIndex = false;

    if (!s) {
        return 'letakkan cursor di kolom';
    }
    while (s.constructor !== Cell){
        s = s.parent;
        if (s.constructor === Application) {
            return 'letakkan cursor di kolom';
        }
    }
    var target = s.parentColumn;
    var pccells = target.cells;
    for (var i = 0; i < pccells.length -1; i++) {
            if (pccells[i].contents.indexOf('(') !== -1) {
                startDataIndex = true;
            }
            if (startDataIndex) {
                pccells[i+1].contents = konten
            }
    }
}

selectColumn(konten);