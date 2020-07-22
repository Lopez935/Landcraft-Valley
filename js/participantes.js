const listaParticipantes = document.getElementById('contenidoParticipantes');

// IIFE: se ejecutan sin llamarlas
(function(){
    var participantes = [
        {
            name: 'Ricardo Lopez',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            puntos: 25,
            status: 'nose',
            facebook: '',
            twitter: '',
            youtube: '',
            twitch: '',
        },
        {
            name: 'Carlos Flores',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            puntos: 25,
            status: 'nose',
            facebook: '',
            twitter: '',
            youtube: '',
            twitch: '',
        },
        {
            name: 'Jorge Garza',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            puntos: 40,
            status: 'nose',
            facebook: '',
            twitter: '',
            youtube: '',
            twitch: '',
        },
        {
            name: 'Alberto Garza',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            puntos: 50,
            status: 'nose',
            facebook: '',
            twitter: '',
            youtube: '',
            twitch: '',
        },
    ];
    /*
    participantes.forEach(function(participante, index){
        const divPart = document.createElement('div');
        divPart.innerHTML = `
            <div class="participantes">
                <div class="nombreImagen">
                    <h2>${participante.name}</h2>
                    <img src="image/imgParticipante.png" alt="imagen participante">
                </div>
                <div class="descripcion">
                        <h3>Descripcion</h3>
                        <p>
                            ${participante.description}
                        </p>
                        <p>Puntos: ${participante.status}</p>
                        <div class="social">
                            <a href="${participante.facebook}" class="facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="${participante.twitter}" class="twitter"><i class="fab fa-twitter"></i></a>
                            <a href="${participante.youtube}" class="youtube"><i class="fab fa-youtube"></i></a>
                            <a href="${participante.twitch}" class="twitch"><i class="fab fa-twitch"></i></a>
                        </div>
                </div>
            </div>
        `;
        listaParticipantes.appendChild(divPart);
    });*/

    for(let i = 0; i <= participantes.length; i++){
        aleatorio = Math.floor(Math.random()*(participantes.length));
        const divPart = document.createElement('div');
        divPart.innerHTML = `
            <div class="participantes">
                <div class="nombreImagen">
                    <h2>${participantes[aleatorio].name}</h2>
                    <img src="image/imgParticipante.png" alt="imagen participante">
                </div>
                <div class="descripcion">
                        <h3>Descripcion</h3>
                        <p>
                            ${participantes[aleatorio].description}
                        </p>
                        <p class="puntos">Puntos: <strong>${participantes[aleatorio].puntos}</strong></p>
                        <p class="status">Status: <strong>${participantes[aleatorio].status}</strong></p>
                        <div class="social">
                            <a href="${participantes[aleatorio].facebook}" class="facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="${participantes[aleatorio].twitter}" class="twitter"><i class="fab fa-twitter"></i></a>
                            <a href="${participantes[aleatorio].youtube}" class="youtube"><i class="fab fa-youtube"></i></a>
                            <a href="${participantes[aleatorio].twitch}" class="twitch"><i class="fab fa-twitch"></i></a>
                        </div>
                </div>
            </div>
        `;
        listaParticipantes.appendChild(divPart);
        participantes.splice(aleatorio, 1);
        i=0;
    }
})();

