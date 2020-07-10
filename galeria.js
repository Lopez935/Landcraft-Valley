const listaFotos = document.getElementById('contentGlobal');

// IIFE: se ejecutan sin llamarlas
(function(){
    var fotos = [
        {
            fecha: '28 de agosto del 2020',
            img1: 'image/imgPrueba1.jpg',
            img2: 'image/imgPrueba2.jpg',
            img3: 'image/imgPrueba3.jpg',
            img4: 'image/imgPrueba4.png',
        },
        {
            fecha: '22 de agosto del 2020',
            img1: 'image/imgPrueba5.jpg',
            img2: 'image/imgPrueba6.jpg',
            img3: 'image/imgPrueba7.jpg',
            img4: 'image/imgPrueba8.jpg',
        },
        {
            fecha: '15 de agosto del 2020',
            img1: 'image/imgPrueba9.jpg',
            img2: 'image/imgPrueba10.jpg',
            img3: 'image/imgPrueba11.jpg',
            img4: 'image/imgPrueba12.jpg',
        },
    ];
    
    fotos.forEach(function(foto, index){
        const h2Foto = document.createElement('h2');
        h2Foto.innerHTML = `${foto.fecha}`;

        const divFoto = document.createElement('div');
        divFoto.innerHTML = `
            <a href="#image1">
                <img src="${foto.img1}" alt="foto"/>
            </a>
            <a href="#image2">
                <img src="${foto.img2}" alt="foto"/>
            </a>
            <a href="#image3">
                <img src="${foto.img3}" alt="foto"/>
            </a>
            <a href="#image4">
                <img src="${foto.img4}" alt="foto"/>
            </a>
        `;
        listaFotos.appendChild(h2Foto);
        divFoto.className="gridFoto";
        listaFotos.appendChild(divFoto);
    });
})();