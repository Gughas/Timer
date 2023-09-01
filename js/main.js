const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let relogio;

const segs = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        timeZone: 'UTC',
    });
};

iniciar.addEventListener('click', ()=>{
    clearInterval(relogio);
    relogio = setInterval(()=>{
        clock.textContent = segs(segundos++);
    }, 1000);
});

pausar.addEventListener('click', ()=>{
    clearInterval(relogio);
});

zerar.addEventListener('click', ()=>{
    clock.style.color = 'white';
    clock.textContent = '00:00:00';
    segundos = 0;
})
