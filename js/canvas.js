const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');

coloresMinecraft = ['rgba(97, 159, 58, 1)', 'rgba(149, 194, 104, 1)', 'rgba(146, 191, 101, 1)', 'rgba(118, 179, 78, 1)'];
fila2 = ['#412D1D', 'rgba(97, 159, 58, 1)', 'rgba(149, 194, 104, 1)', 'rgba(146, 191, 101, 1)', 'rgba(118, 179, 78, 1)'];
let contador;

for (let i = 0; i < 2; i++) {
    contador = 0;
    for (let j = 0; j < window.innerWidth && contador <= window.innerWidth; j++) {
        ctx.fillStyle = coloresMinecraft[Math.floor(Math.random() * coloresMinecraft.length)];
        ctx.fillRect(j * 20, i * 20, 20, 20);
        if(i == 1){
            ctx.fillStyle = fila2[Math.floor(Math.random() * fila2.length)];
            ctx.fillRect(j * 20, i * 20, 20, 20);
        }
        contador += 20;
    }
} 
