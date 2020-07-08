const listaNoticias = document.getElementById('contenidoNoticias');

// IIFE: se ejecutan sin llamarlas
(function(tecnologia){
    var noticias = [
        {
            id: '1',
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: 'image/example.png',
            imgExtra2: 'image/example.png',
            imgExtra3: 'image/example.png'
        },
        {
            id: '2',
            title: 'Navidad',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: 'image/example.png',
            imgExtra2: 'image/example.png',
            imgExtra3: 'image/example.png'
        },
        {
            id: '3',
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: 'image/example.png',
            imgExtra2: 'image/example.png',
            imgExtra3: 'image/example.png'
        },
        {
            id: '4',
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: 'image/example.png',
            imgExtra2: 'image/example.png',
            imgExtra3: 'image/example.png'
        },
    ];
    
    noticias.forEach(function(noticia, index){
        const divPart = document.createElement('div');
        divPart.innerHTML = `
            <div class="noticia-container">
                <div class="noticias-head">
                    <div class="noticias-date">
                        <img class="badge" src="image/exampleLogo.png">
                        <p class="data">${noticia.time}</p>
                    </div>
                    <div class="noticias-title">
                        <h2>${noticia.title}</h2>
                    </div>
                </div>
                <div class="noticias-contenido">
                    <div class="principal-img">
                        <img src="image/example.png">
                    </div>
                    <div class="noticias-texto">
                        <p>${noticia.description}</p>
                        <p class="text-more" id="vma${noticia.id}" onclick="document.getElementById('n${noticia.id}').style.display = 'flex'; document.getElementById('vma${noticia.id}').style.display = 'none'; document.getElementById('vme${noticia.id}').style.display = 'contents'" style="display:contents;">Ver mas</p>
                        <p class="text-less" id="vme${noticia.id}" onclick="document.getElementById('n${noticia.id}').style.display = 'none'; document.getElementById('vme${noticia.id}').style.display = 'none'; document.getElementById('vma${noticia.id}').style.display = 'contents'" style="display:none;">Ver menos</p>
                    </div>
                </div>
                <div class="noticias-adicional" id="n${noticia.id}">
                    <div class="addition-img">
                        <img src="${noticia.imgExtra1}">
                    </div>
                    <div class="addition-img">
                        <img src="${noticia.imgExtra2}">
                    </div>
                    <div class="addition-img">
                        <img src="${noticia.imgExtra3}">
                    </div>
                </div>
            </div>
        `;
        listaNoticias.appendChild(divPart);
    });
})();