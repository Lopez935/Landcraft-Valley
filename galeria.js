const listaFotos = document.getElementById('contentGlobal');

// IIFE: se ejecutan sin llamarlas
(function(){
    var fotos = [
        {
            fecha: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            fecha: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
        },
        {
            fecha: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
        },
    ];
    
    fotos.forEach(function(foto, index){
        const h2Foto = document.createElement('h2');
        h2Foto.innerHTML = `26 de agosto 2020`;

        const divFoto = document.createElement('div');
        divFoto.innerHTML = `
            <a href="" src="#image1">
                <img src="image/example.png" alt="foto"/>
            </a>
            <a href="" src="#image1">
                <img src="image/example.png" alt="foto"/>
            </a>
            <a href="" src="#image1">
                <img src="image/example.png" alt="foto"/>
            </a>
            <a href="" src="#image1">
                <img src="image/example.png" alt="foto"/>
            </a>
        `;
        listaFotos.appendChild(h2Foto);
        divFoto.className="gridFoto";
        listaFotos.appendChild(divFoto);
    });
})();