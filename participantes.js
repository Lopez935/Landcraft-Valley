const listaParticipantes = document.getElementById('contenidoParticipantes');

// IIFE: se ejecutan sin llamarlas
(function(tecnologia){
    var participantes = [
        {
            name: 'Ricardo Lopez',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            status: 25,
        },
        {
            name: 'Carlos Flores',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            status: 20,
        },
        {
            name: 'Jorge Garza',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            status: 26,
        },
        {
            name: 'Alberto Garza',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            status: 18,
        },
    ];
    
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
                    </div>
            </div>
        `;
        listaParticipantes.appendChild(divPart);
    });
})();