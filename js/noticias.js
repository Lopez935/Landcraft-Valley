const listaNoticias = document.getElementById('contenidoNoticias');

// IIFE: se ejecutan sin llamarlas
(function(tecnologia){
    var noticias = [
        {
            id: '1',
            title: 'Hallowen',
            date: 'DD/MM/AA',
            time: 'Hora',
            img: 'image/imgPrueba8.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            etiquetas: 'Quis ut elit eiusmod in officia aute pariatur elit.',
            imgExtra1: 'image/imgPrueba8.jpg',
            imgExtra2: 'image/imgPrueba9.jpg',
            imgExtra3: 'image/imgPrueba10.jpg'
        },
        {
            id: '2',
            title: 'Navidad',
            date: 'DD/MM/AA',
            time: 'Hora',
            img: 'image/imgPrueba9.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            etiquetas: 'Quis ut elit eiusmod in officia aute pariatur elit.',
            imgExtra1: 'image/imgPrueba8.jpg',
            imgExtra2: 'image/imgPrueba9.jpg',
            imgExtra3: 'image/imgPrueba10.jpg'
        },
        {
            id: '3',
            title: 'Hallowen',
            date: 'DD/MM/AA',
            time: 'Hora',
            img: 'image/imgPrueba8.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            etiquetas: 'Quis ut elit eiusmod in officia aute pariatur elit.',
            imgExtra1: 'image/imgPrueba8.jpg',
            imgExtra2: 'image/imgPrueba9.jpg',
            imgExtra3: 'image/imgPrueba10.jpg'
        },
        {
            id: '4',
            title: 'Hallowen',
            date: 'DD/MM/AA',
            time: 'Hora',
            img: 'image/imgPrueba10.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            etiquetas: 'Quis ut elit eiusmod in officia aute pariatur elit.',
            imgExtra1: 'image/imgPrueba8.jpg',
            imgExtra2: 'image/imgPrueba9.jpg',
            imgExtra3: 'image/imgPrueba10.jpg'
        },
    ];
    
    noticias.forEach(function(noticia, index){
        const divPart = document.createElement('div');
        divPart.className += "noticias-background";
        divPart.innerHTML = `
            <div class="noticia-container">
                <div class="border-noticias">
                    <div class="noticias-left">
                        <div class="principal-img">
                            <img src="${noticia.img}">
                        </div>
                    </div>
                    <div class="noticias-right">
                        <div class="noticias-head">
                            <div class="noticias-title">
                                <h2>${noticia.title}</h2>
                            </div>
                            <div class="noticias-date">
                                <img src="image/date-icon.png">
                                <p class="data">${noticia.date} - </p>
                                <img src="image/time-icon.png">
                                <p class="data">${noticia.time}</p>
                            </div>
                        </div>
                        <div class="second-img">
                            <img src="${noticia.img}">
                        </div>
                        <div class="noticias-texto">
                            <p>${noticia.description}</p>
                            <div class="noticias-texto-position">
                                <div class="text-container text-more" id="vma${noticia.id}" onclick="
                                document.getElementById('n${noticia.id}').style.visibility = 'visible'; 
                                document.getElementById('n${noticia.id}').style.height = '48vh'; 
                                document.getElementById('n${noticia.id}').style.opacity = '1';
                                document.getElementById('n${noticia.id}').style.transition = 'visibility 2s, opacity 2s, height 0.4s';
                                
                                
                                document.getElementById('vma${noticia.id}').style.display = 'none'; 
                                document.getElementById('vme${noticia.id}').style.display = 'block'">
                                    <p>Ver más</p>
                                </div>
                                <div class="text-container text-less" id="vme${noticia.id}" onclick="
                                document.getElementById('n${noticia.id}').style.visibility = 'hidden'; 
                                document.getElementById('n${noticia.id}').style.height = '0px';
                                document.getElementById('n${noticia.id}').style.opacity = '0';
                                document.getElementById('n${noticia.id}').style.transition = 'visibility 0.4s, opacity 0.3s, height 0.6s';
                                
                                
                                document.getElementById('vme${noticia.id}').style.display = 'none'; 
                                document.getElementById('vma${noticia.id}').style.display = 'block'" style="display:none;">
                                    <p>Ver menos</p>
                                </div>
                            </div>
                            <div class="noticias-date data-2">
                                <img src="image/date-icon.png">
                                <p class="data">${noticia.date} - </p>
                                <img src="image/time-icon.png">
                                <p class="data">${noticia.time}</p>
                            </div>
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
                </div
            </div>
        `;
        listaNoticias.appendChild(divPart);
    });
})();