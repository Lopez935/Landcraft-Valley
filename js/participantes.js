const listaParticipantes = document.getElementById('contenidoParticipantes');

// IIFE: se ejecutan sin llamarlas
(function(){
    var participantes = [
        {
            name: 'MarisaKurisu',
            img: 'image/profiles/profile1.png',
            description: 'Retornando a los streams, animadora, ilustradora y jugadora de todo tipo de juegos. MarisaKurisu hace su llegada.<br><br>¡Bienvenida de vuelta y  bienvenida a Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/MarisaKurisu',
            youtube: '#',
            twitch: 'https://www.twitch.tv/marisakurisu',
        },
        {
            name: 'TITOVASH',
            img: 'image/profiles/profile2.png',
            description: '¡La leyenda! ¡El mito! !El héroe de muchos!<br><br>Megáfono de animación Símbolo de gotas de sudor<br><br>¡Es músico, es cantante, es actor, es alto, es bronceado, es guapo. Lo es todo!<br><br>¡Estará con nosotros en el valle!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/xxtitovashxx',
            twitter: 'https://twitter.com/TITOVASH',
            youtube: 'https://www.youtube.com/c/TITOVASH',
            twitch: 'https://www.twitch.tv/TITOVASH',
        },
        {
            name: 'TortillaSquad',
            img: 'image/profiles/profile3.png',
            description: '¿Alguien pidió tortillas?<br><br>Porque llegan los expertos en hardware y entretenimiento. Los tortillos Gabs y Posho. Recientemente clavados con Minecraft Bedrock.<br><br>¡Vienen a explorar más cosas en Java con Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/TortillaSquad',
            twitter: 'https://twitter.com/TortillaSquad',
            youtube: 'https://www.youtube.com/c/TortillaSquad',
            twitch: 'https://www.twitch.tv/tortillasquad',
        },
        {
            name: 'Mariyolo1',
            img: 'image/profiles/profile4.png',
            description: '¡Una artista viajera surcando diferentes caminos y aventuras a través de videojuegos, animes, cine y más!<br><br>¡Streamer de variedad y de arte, bienvenida a Landcraft Valley! ¡Esperamos que disfrutes este lienzo en blanco!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/Mariyolo-1089304621126149/',
            twitter: 'https://twitter.com/Cenandoconlobos',
            youtube: 'https://www.youtube.com/channel/UCcbLzCPe9Aw5peaECtYy-Ww?view_as=subscriber',
            twitch: 'https://www.twitch.tv/mariyolo1',
        },
        {
            name: 'AnnieVnKr',
            img: 'image/profiles/profile5.jpg',
            description: 'Si encuentran plumas de chocobo en sus casa, ya sabrán de quien será la culpa.<br><br>Locutora, amante de la música, los videojuegos, y las avestruces grandes y amarillas. Se une al valle. Cara sonriente con cuernos',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/AnnieVnKr/',
            twitter: 'https://twitter.com/AnnieVnKr',
            youtube: 'https://www.youtube.com/annievnkr',
            twitch: 'https://www.twitch.tv/annievnkr',
        },
        {
            name: 'ElChilee',
            img: 'image/profiles/profile6.png',
            description: '!No podía faltar un actor de doblaje en estas tierras!<br><br>Profesor de inglés de día; y streamer, músico y actor en secreto. Viene a sazonar este valle con su picor. ',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/El-Chile-1612481572355518/?fref=ts',
            twitter: 'https://twitter.com/El_Chilee',
            youtube: 'https://www.youtube.com/user/TijuanaFanduber',
            twitch: 'https://www.twitch.tv/elchilee',
        },
        {
            name: 'OmarSmosh',
            img: 'image/profiles/profile7.jpg',
            description: 'Probablemente uno de los pocos creadores de contenido dedicados al Minecraft que habrá en el valle. OmarSmosh se une a la contienda también proveniente desde las oscuras tierras de Minecraft PvP.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/omarsmosh',
            youtube: 'https://www.youtube.com/c/OmarSmosh',
            twitch: '#',
        },
        {
            name: 'La_Lizeth',
            img: 'image/profiles/profile8.jpeg',
            description: '¡La gadget girl! ¡Amante de los juegos de estrategia, pero jugadora y streamer de todo un poco!<br><br>¡YouTuber de tecnología!<br><br>¡La_Lizeth, geek hecha y derecha, entra al valle y le damos la bienvenida!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/LizethLizardiPacheco/',
            twitter: 'https://twitter.com/La_Lizeth',
            youtube: 'https://www.youtube.com/c/Gadgetsgirls',
            twitch: 'https://www.twitch.tv/la_lizeth/',
        },
        {
            name: 'MissParanoid',
            img: 'image/profiles/profile33.jpg',
            description: 'Recién salida de "El Gallinero" el hospital psiquiátrico. MissParanoid, jugadora y streamer de juegos independientes y underground de Steam, viene con todo el pollerío al valle.',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/MissParanoidTV/',
            twitter: 'https://twitter.com/MissParanoid',
            youtube: 'https://www.youtube.com/user/MissParanoidG',
            twitch: 'https://www.twitch.tv/missparanoid',
        },
        {
            name: 'Aruzeya',
            img: 'image/profiles/profile10.jpg',
            description: '¡Preparense todos!<br><br>La recolectora de almas está aquí. Streamer de arte y juegos independientes de los cuales difícilmente habrás escuchado hablar.<br><br>¡Aruzeya viene por sus hamburguesas a Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/people/Aru-Zeya/100015127514089',
            twitter: 'https://twitter.com/aruzeya',
            youtube: 'https://www.youtube.com/channel/UC42ZnFKTsFlNbrGXtEvlQfw',
            twitch: 'https://www.twitch.tv/aruzeya',
        },
        {
            name: 'Harpaw',
            img: 'image/profiles/profile11.jpeg',
            description: '*Suenan relámpagos en un cielo nocturno*<br><br>Es una señal de que la profesora Harpswell (Harpaw) llega a las tierras de Landcraft Valley.',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/TheHarpaw/',
            twitter: 'https://twitter.com/Harpaw',
            youtube: '#',
            twitch: 'https://www.twitch.tv/harpaw',
        },
        {
            name: 'GrettzyOfi',
            img: 'image/profiles/profile12.jpg',
            description: '¡Diseñadora, postproductora y creadora de contenido de videojuegos como Minecraft, The Sims y juegos survival!<br><br>¡grettzyofi entra al valle para sorpredernos con sus habilidades de contrucción!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/grettzyofi',
            youtube: 'https://www.youtube.com/c/Grettzy',
            twitch: 'https://www.twitch.tv/grettzyofi',
        },
        {
            name: 'Wences',
            img: 'image/profiles/profile13.jpeg',
            description: 'La voz de Wences es ideal para relatar las grandes hazañas de los habitantes de Landcraft Valley.<br><br>Con streams de lectura ha logrado cautivar el corazón de muchas personas. ¡Le damos la bienvenida al valle!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/VVenzz',
            youtube: '#',
            twitch: 'https://www.twitch.tv/wences',
        },
        {
            name: 'RADICAL_XTOM',
            img: 'image/profiles/profile14.png',
            description: '¡Directo desde Argentina! ¡Midiendo casi 2 metros de altura! ¡Campeón de pesos pesados! ¡Fan de boquita! ¡El pibe al que se le cae la cabeza cuando juega!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/RadicalXtom',
            youtube: '#',
            twitch: 'https://www.twitch.tv/radical_xtom',
        },
        {
            name: 'Bunny_Wolf',
            img: 'image/profiles/profile15.jpg',
            description: '¡La eterna 17añera! Streamer de variedad de juegos y diseñadora. Una gran creadora de contenido con sus pláticas chill streams cautivadores.<br><br>¡Bienvenida a Landcraft Valley. Esperamos disfrutes esta aventura!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/BunnyWolf_Zero',
            youtube: '#',
            twitch: 'https://www.twitch.tv/bunny_wolf',
        },
        {
            name: 'Killastorm',
            img: 'image/profiles/profile16.png',
            description: '¡Estratega y fanático de la historia! ¡Amante de los esports, el LoL, el AoE y el ron! ¡Otro participante de altura! killastorm sacá su cuerno de guerra y abre la puerta con una patada hacia Landcraft Valley.',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/killastorm/',
            twitter: 'https://twitter.com/killastorm_',
            youtube: 'https://www.youtube.com/channel/UCI2Y4Vf7e6ijK8oRjqkaCAQ',
            twitch: 'https://www.twitch.tv/killastorm',
        },
        {
            name: 'Alination',
            img: 'image/profiles/profile17.png',
            description: 'Desarrolladora de videojuegos, gran streamer de variedad. Jugadora de cualquier género, excepto de terror porque no se asusta con facilidad. Una guerrera vikinga.<br><br>¡Alination, Fifth of Her Name, entra al valle!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Alination',
            youtube: '#',
            twitch: 'https://www.twitch.tv/alination',
        },
        {
            name: 'Erix79',
            img: 'image/profiles/profile18.jpg',
            description: '¡Ostras! Con pasión por Minecraft y con grandes proyectos realizados en el juego, desde España para el mundo, ¡arriba Erix79 a Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Erix1979',
            youtube: '#',
            twitch: 'https://www.twitch.tv/erix79',
        },
        {
            name: 'ZekerToonz',
            img: 'image/profiles/profile19.png',
            description: 'Artista conceptual, adorador de las ardillas, creador de grandes personajes y escenas. Regresando a Minecraft con Landcraft Valley, llega ZekerToons a la contienda.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/ZekerToons',
            youtube: 'https://www.youtube.com/channel/UCvNbUaj2ClplmUgv7Wsz6FQ?view_as=subscriber',
            twitch: 'https://www.twitch.tv/zekertoonz',
        },
        {
            name: 'Axel_Becerril',
            img: 'image/profiles/profile20.png',
            description: 'Programador de día, comediante standupero de noche. Speedrunner por temporadas y ahora jugador de Minecraft.<br>Axel_Becerril viene a tomar el micrófono abierto de Landcraft Valley.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/AxlBecerril',
            youtube: '#',
            twitch: 'https://www.twitch.tv/axel_becerril',
        },
        {
            name: 'Axel_Becerril',
            img: 'image/profiles/profile20.png',
            description: 'Programador de día, comediante standupero de noche. Speedrunner por temporadas y ahora jugador de Minecraft.<br>Axel_Becerril viene a tomar el micrófono abierto de Landcraft Valley.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/AxlBecerril',
            youtube: '#',
            twitch: 'https://www.twitch.tv/axel_becerril',
        },
        {
            name: 'DaveElBarbarísimo',
            img: 'image/profiles/profile21.png',
            description: '¡Cuenta la leyenda de un guerrero tan letal que sus enemigos quedaban ciegos por la sobreexposición a tanta barbarosida!<br><br>¡Ese guerrero es DaveElBarbarisimo quien llega Landcraft Valley! Un nombre tan bárbaro que apenas cupo en esta imagen.',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/DaveElBarbarisimo',
            twitter: 'https://twitter.com/DaveBarbarisimo',
            youtube: '#',
            twitch: 'https://www.twitch.tv/DaveElBarbarisimo',
        },
        {
            name: 'TDXRocker',
            img: 'image/profiles/profile22.png',
            description: '¡Llegando al mundo de los creadores de contenido, con un lienzo en blanco que llenar con sus creaciones, ideas, streams y videos!<br><br>¡Bienvenido a la familia y bienvenido a Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/TDXrocker/',
            twitter: 'https://twitter.com/TDXrocker',
            youtube: 'https://www.youtube.com/c/AdrianMarthz',
            twitch: 'https://www.twitch.tv/tdxrocker01',
        },
        {
            name: 'ElderionMC',
            img: 'image/profiles/profile23.png',
            description: 'Compositor y gran fan de Minecraft. Su edad es un misterio, pero su intención de hacer grandes cosas es evidente. Cuenta la leyenda que compondrá el himno nacional Landcraft Valley. ElderionMC se une a la aventura.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/ElderionMC',
            youtube: '#',
            twitch: 'https://www.twitch.tv/elderionmc',
        },
        {
            name: 'RxLars',
            img: 'image/profiles/profile24.png',
            description: 'Jugando con pasión todo tipo de videojuegos, le damos la bienvenida a RxLars a la aventura. Descripción pendiente...',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/RxLars',
            twitter: 'https://twitter.com/RxLars',
            youtube: 'https://www.youtube.com/c/RicardoLarsblog',
            twitch: 'https://www.twitch.tv/RxLars',
        },
        {
            name: 'R4SCON',
            img: 'image/profiles/profile25.png',
            description: 'Programador y músico. Creador de contenido, streamer de videojuegos con tocadas ocasionales de guitarra. ¡Aficionado que vive la intensidad del fútbol!<br><br>¡R4SC0N, bienvenido a nuestro valle!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/R4SC0N/',
            twitter: 'https://twitter.com/R4SC0N',
            youtube: 'https://www.youtube.com/r4sc0n',
            twitch: 'https://www.twitch.tv/R4SC0N',
        },
        {
            name: 'Atomika13',
            img: 'image/profiles/profile26.png',
            description: 'Una increíble creadora de contenido atómico se nos une en el valle. ¡Atomika13 una gran líder de comunidad y streamer de videojuegos varios!<br><br>Desde Landcraft Valley le damos la bienvenida y le deseamos una pronta recuperación. ¡Un gran abrazo!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/atomika13/',
            twitter: 'https://twitter.com/Atomika13_',
            youtube: 'https://www.youtube.com/c/atomika13',
            twitch: 'https://www.twitch.tv/atomika13',
        },
        {
            name: 'Kozmica',
            img: 'image/profiles/profile27.jpg',
            description: '¡Animadora, ilustradora, diseñadora y navegante del espacio!<br><br>¡kozmica, la cosmonauta con un amplio repertorio de gusto en videojuegos, aterriza de sus viajes espaciales al valle de Landcraft!<br><br>¡Feliz aterrizaje y bienvenida!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/kozmica64/',
            twitter: 'https://twitter.com/kozmica',
            youtube: '#',
            twitch: 'https://www.twitch.tv/kozmica',
        },
        {
            name: 'Surrogaat',
            img: 'image/profiles/profile28.png',
            description: '¡Llegó el bigote!<br><br>¡Surrogaat, diseñador y jugador de videojuegos, un enano minero de corazón que llenará de agujeros el valle de Landcraft!<br><br>Never surronder!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/surrogaattv',
            youtube: '#',
            twitch: 'https://www.twitch.tv/surrogaat',
        },
        {
            name: 'EDUARDOLUGO51',
            img: 'image/profiles/profile29.png',
            description: 'Desde las oscuras tierras de Minecraft PvP, llega EDUARDOLUGO51. Descripcion pendiente...',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/EDUARDOLUGO511/',
            twitter: 'https://twitter.com/EDUARDOLUGO51',
            youtube: 'https://www.youtube.com/EDUARDOLUGO51',
            twitch: 'https://www.twitch.tv/EDUARDOLUGO51',
        },
        {
            name: 'Pranzedd',
            img: 'image/profiles/profile30.png',
            description: 'Pranzedd, creador de contenido de variedad, amante de los videojuegos y el café. Acompañado por dragones.<br><br>¡Landcraft Valley te espera!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Pranzedd',
            youtube: '#',
            twitch: 'https://www.twitch.tv/pranzedd',
        },
        {
            name: 'OkamiVictoria',
            img: 'image/profiles/profile31.jpg',
            description: '¡El más grande! ¡El okami más okama de todo Twitch!<br><br>¡OkamiVictoria, igual conocido como... *shh*, jugador de shooters con la personalidad más flamboyante que conocerás!<br><br>¡Lo vamos a hacer jugar Minecraft en Landcraft Valley! ¡Bienvenido!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Pranzedd',
            youtube: '#',
            twitch: 'https://www.twitch.tv/pranzedd',
        },
        {
            name: 'Liaph',
            img: 'image/profiles/profile34.png',
            description: '¡Tiemblen participantes! El jugador más competitivo de todo Landcraft Valley ha llegado.<br><br>Liaph se hace profesional en cada juego que toca y ahora llega a Minecraft como nuevo jugador y nos acompañará en Landcraft Valley.  *clench*',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/LiaphHS',
            youtube: '#',
            twitch: 'https://www.twitch.tv/liaph',
        },
        {
            name: 'Deiniel_',
            img: 'image/profiles/profile35.png',
            description: '¡Escondan sus hornos si no quieren que les azoten la puerta!<br><br>Speedrunner de Darkest Dungeon y un perfecto ejemplo de streamer y creador de contenido de variedad. Un amante de Persona y connoisseur de juegos.<br><br>¡Deiniel_ inicia su aventura en Minecraft con Landcraft Valley!',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Deiniel_',
            youtube: '#',
            twitch: 'https://www.twitch.tv/Deiniel_',
        },
        {
            name: 'Zilverk',
            img: 'image/profiles/profile36.png',
            description: 'Haciendo un pinshi desmadre y con un six de chelas en la mano, Zilverk hace su entrada bailando cumbia con la mano alzada.<br><br>¡Pásele, joven!',
            puntos: 0,
            status: 'nose',
            facebook: 'https://www.facebook.com/Ziilverk',
            twitter: 'https://twitter.com/Ziilverk',
            youtube: 'https://www.youtube.com/user/ZiilverK',
            twitch: 'https://www.twitch.tv/zilverk',
        },
        {
            name: 'Loopz935',
            img: 'image/profiles/profile37.png',
            description: '¿Loopz? ¿Lopez? ¿Loopéz?<br>Ya no sabemos. ¯\\_(ツ)_/¯<br><br>Pero Loopez935, programador y jugador de Call of Duty y Minecraft ha llegado al valle a hacer historia.',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/Loopez935',
            youtube: '#',
            twitch: 'https://www.twitch.tv/loopz935',
        },
        {
            name: 'AlexXxvo',
            img: 'image/profiles/profile38.png',
            description: '¡El señor de los patos ha arribado!<br><br>Por si faltaban plumas en el valle, ahora llegan de pato.<br>AlexXxvo streamer de variedad llega al show.<br><br>*cuack*',
            puntos: 0,
            status: 'nose',
            facebook: '#',
            twitter: 'https://twitter.com/AlexXxvo41',
            youtube: '#',
            twitch: 'https://www.twitch.tv/alexxxvo',
        },
    ];

    
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
                                <a href="${participantes[aleatorio].facebook}" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="${participantes[aleatorio].twitter}" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="${participantes[aleatorio].youtube}" target="_blank" class="youtube"><i class="fab fa-youtube"></i></a>
                                <a href="${participantes[aleatorio].twitch}" target="_blank" class="twitch"><i class="fab fa-twitch"></i></a>
                            </div>
                        </div>
                </div>
                <img class="participantes-image" src="image/post-bg.png" width="300" alt="contorno">
            </div>
        `;
        listaParticipantes.appendChild(divPart);
        participantes.splice(aleatorio, 1);
        i=0;
    }
})();

const menor1301 = window.matchMedia('screen and (max-width: 1301px)');
const image = document.querySelectorAll('.participantes-image');
const participantes = document.querySelectorAll('.participantes');
menor1301.addListener(validation);

function validation(event) {
    if (menor1301.matches){
        for(let i = 0; i < image.length; i++) {
            padre = image[i].parentElement;
            padre.removeChild(image[i]);
        }
    }else {
        for(let i = 0; i < participantes.length; i++) {
            participantes[i].appendChild(image[i]);
        }
    }
} 

validation(menor1301);