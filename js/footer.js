const footer = document.getElementById('footer');

(function(tecnologia){
    var infoIndex = [
        {
            textoInfo: '© 2020 Landcraft Valley. Todos los derechos reservados.<br>@LancraftValley (<a href="https://twitter.com/LandcraftValley" target="_blank">https://twitter.com/LandcraftValley</a>)<br>Administrado y creado por Pranzedd: @Pranzedd (<a href="https://twitter.com/Pranzedd" target="_blank">https://twitter.com/Pranzedd</a>)<br>Servidor y página web hosteados por Nitrado.',
            urlTwitter: 'https://twitter.com/LandcraftValley'
        },
    ];
    
    infoIndex.forEach(function(info, index){
        const divPart = document.createElement('div');
        divPart.className += "footer__container";
        divPart.innerHTML = `
        <ul class="footer-left">
            <li class="footer__diamond">
                <img src="image/footer-diamond.png">
            </li>
            <li class="footer__text">
                <p>${info.textoInfo}</p>
            </li>
        </ul>
        <div class="footer__figure">
            <img src="image/footer-figure.png">
        </div>
        <ul class="footer-right">
            <li class="footer__twitter">
                <a href="${info.urlTwitter}" target="_blank"><img src="image/footer-twitter.png"></a>
            </li>
            <li class="footer__diamond">
                <img src="image/footer-diamond.png">
            </li>
        </ul>
        `;
        footer.appendChild(divPart);
    });
})();