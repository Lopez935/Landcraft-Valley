const listaFotos = document.getElementById('contentGlobal');

// IIFE: se ejecutan sin llamarlas
(function(){
    var fotos = [
        {
            fecha: '28 de agosto del 2020',
            imagenes: [
                'image/imgPrueba1.jpg', 
                'image/imgPrueba2.jpg', 
                'image/imgPrueba3.jpg', 
                'image/imgPrueba4.png', 
                'image/imgPrueba4.png'
            ],
        },
        {
            fecha: '22 de agosto del 2020',
            imagenes: [
                'image/imgPrueba5.jpg', 
                'image/imgPrueba6.jpg', 
                'image/imgPrueba7.jpg', 
                'image/imgPrueba8.jpg', 
                'image/imgPrueba8.jpg'
            ],
        },
        {
            fecha: '15 de agosto del 2020',
            imagenes: [
                'image/imgPrueba9.jpg', 
                'image/imgPrueba10.jpg', 
                'image/imgPrueba11.jpg', 
                'image/imgPrueba12.jpg', 
                'image/imgPrueba12.jpg', 
                'image/imgPrueba12.jpg', 
                'image/imgPrueba12.jpg', 
                'image/imgPrueba12.jpg', 
                'image/imgPrueba12.jpg'
            ],
        },
    ];

    let constante = 0;
    let constante2 = 0;

    fotos.forEach(function(foto, index){
        const h2Foto = document.createElement('h2');
        h2Foto.innerHTML = `${foto.fecha}`;
        const divFoto = document.createElement('div');

        divFoto.innerHTML = `
            ${foto.imagenes.map(function (imagen) {
                return `
                    <a href="#image${constante++}">
                        <img src="${imagen}" alt="foto"/>
                    </a>
                `
            }).join('')}
        `;

        const divlightbox = document.createElement('div');
        divlightbox.innerHTML = `
            ${foto.imagenes.map(function (imagen) {
                return `
                    <div class="light-box" id="image${constante2++}">
                        <img src="${imagen}" alt="">
                        <a href="#" class="close">X</a>
                    </div>
                `
            }).join('')}
        `;

        listaFotos.appendChild(h2Foto);
        divFoto.className="gridFoto";
        listaFotos.appendChild(divFoto);
        listaFotos.parentElement.parentElement.appendChild(divlightbox);
        
    });
})();