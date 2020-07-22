const indexMain = document.getElementById('contenidoGeneral');

(function(tecnologia){
    var infoIndex = [
        {
            title: '¿Qué es OmegaCraft?',
            img: 'image/exampleLogo.png',
            description: 'Id culpa qui quis nostrud eiusmod nostrud. Duis nostrud ullamco aute anim cillum veniam proident anim cillum voluptate elit enim commodo. Commodo enim ad sunt consectetur proident amet consectetur commodo tempor minim proident Lorem aliquip. Nostrud culpa et duis irure. Magna esse occaecat ipsum ipsum irure occaecat reprehenderit deserunt nulla elit laborum.<br>Commodo adipisicing incididunt amet non deserunt. Ipsum aliqua pariatur mollit fugiat qui sunt magna aute ea veniam velit nostrud qui id. Sunt cillum incididunt sit eu dolore elit anim in cupidatat anim voluptate amet Lorem. Lorem anim velit proident eu aliqua velit cupidatat quis qui et occaecat aliquip in laborum.',
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
                    <h1>${info.title}</h1>
                </div>
                <div class="description-inicio">
                    <p>${info.description}
                    </p>
                </div>
            </div>
        </div>
        `;
        indexMain.appendChild(divPart);
    });
})();