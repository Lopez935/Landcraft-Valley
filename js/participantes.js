const listaParticipantes = document.getElementById('contenidoParticipantes');

// IIFE: se ejecutan sin llamarlas
(function(){
    var participantes = [
        {
            name: 'Ricardo Lopez',
            img: 'image/profiles/profile1.png',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            puntos: 25,
            status: 'nose',
            facebook: '',
            twitter: '',
            youtube: '',
            twitch: '',
        },
        {
            name: 'Carlos Flores',
            img: 'image/profiles/profile2.png',
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
            img: 'image/profiles/profile3.png',
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
            img: 'image/profiles/profile4.png',
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
                    <img src="${participantes[aleatorio].img}" class="profiles" width="150" heigth="150" alt="imagen participante">
                </div>
                <div class="descripcion">
                        <h2>${participantes[aleatorio].name}</h2>
                        <p>
                            ${participantes[aleatorio].description}
                        </p>
                        <div class="status-social">
                            <div class="status">
                                <p class="puntos"><strong>Puntos:</strong> ${participantes[aleatorio].puntos}</p>
                                <p class="status"><strong>Status:</strong> ${participantes[aleatorio].status}</p>
                            </div>
                            <div class="social">
                                <a href="${participantes[aleatorio].facebook}" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="${participantes[aleatorio].twitter}" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="${participantes[aleatorio].youtube}" class="youtube"><i class="fab fa-youtube"></i></a>
                                <a href="${participantes[aleatorio].twitch}" class="twitch"><i class="fab fa-twitch"></i></a>
                            </div>
                        </div>
                </div>
                <img class="participantes-image" src="../image/post-bg.png" width="870" alt="contorno">
            </div>
        `;
        listaParticipantes.appendChild(divPart);
        participantes.splice(aleatorio, 1);
        i=0;
    }
})();

const menor1024 = window.matchMedia('screen and (max-width: 1024px)');
const image = document.querySelectorAll('.participantes-image');
menor1024.addListener(validation);

function validation(event) {
    if (menor1024.matches){
        for(let i = 0; i < image.length; i++) {
            padre = image[i].parentElement;
            padre.removeChild(image[i]);
        }
    }
} 

validation(menor1024);