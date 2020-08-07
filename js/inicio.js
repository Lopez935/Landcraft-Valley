const indexMain = document.getElementById('contenidoGeneral');

(function(tecnologia){
    var infoIndex = [
        {
            titleImage: 'image/bienvenido.png',
            img: 'image/white-cubes.png',
            description: 'Lorem impusm dolor sit amet, consectetur adipiseing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo enim ad sunt consectetur proident amet consectetur commodo tempor minim proident Lorem aliquip. Nostrud culpa et duis irure. Magna esse occaecat ipsum ipsum irure occaecat reprehenderit deserunt nulla elit laborum.<br><br>Commodo adipisicing incididunt amet non deserunt. Ipsum aliqua pariatur mollit fugiat qui sunt magna aute ea veniam velit nostrud qui id. Sunt cillum incididunt sit eu dolore elit anim in cupidatat anim voluptate amet Lorem. Lorem anim velit proident eu aliqua velit cupidatat quis qui et occaecat aliquip in laborum.',
        },
    ];
    
    infoIndex.forEach(function(info, index){
        const divPart = document.createElement('div');
        divPart.innerHTML = `
        <div class="general-container">
            <div class="logo-inicio">
                <img src="${info.img}">
            </div>
            <div class="info-inicio">
                <div class="title-inicio">
                    <div class="inicio-image-container">
                        <img src="${info.titleImage}">
                    </div>
                </div>
                <div class="description-inicio">
                    <p>${info.description}
                    </p>
                </div>
                <div id="espacio-inicio">&nbsp;</div>
            </div>
        </div>
        `;
        indexMain.appendChild(divPart);
    });
})();