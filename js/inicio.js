const indexMain = document.getElementById('contenidoGeneral');

(function(tecnologia){
    var infoIndex = [
        {
            titleImage: 'image/bienvenido.png',
            img: 'image/white-cubes.png',
            description: '<strong>¿Qué es Landcraft Valley?</strong><br>Landcraft Valley es un servidor privado de Minecraf compuestos por creadores de contenido de variedad y Minecraft. Somos amigos, conocidos y colegas que buscan pasarla bien, jugar juntos y, en el proceso, crear grandes cosas.<br><br><strong>¿Qué tienen que hacer los participantes?</strong><br><br>Los participantes tendrán que crear una mega construcción, cuyo único requisito es ser grande. Como es un proyecto principalmente individual es posible que sea diferente a otras mega construcciones comunitarias que conozcas. Quizá incluso un poco más pequeña. <br><br>¡Echa un vistazo a la <a href="/participantes.html">lista de participantes</a> y <a href="/noticias.html">noticias</a> para más información!',
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