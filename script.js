function coletaDados(){
    console.log("-----------------Eu fui clicado!");
    let serie = document.querySelector(".série");
    let descanso = document.querySelector(".descanso");
    event.preventDefault();

    let numeroSeries;
    let sectionNumSeries = document.querySelector(".numero__series");

    let h2 = document.querySelector(".numero__series h2");



    //remover os h1 anteriores
    sectionNumSeries.innerHTML = "";
    
    //Laço para adicionar as séries
    if(0 < serie.value && serie.value < 7) {

        for(let i = 0; i < serie.value; i++){
            numeroSeries = document.createElement("h2");

            numeroSeries.classList.add("numero")

            numeroSeries.textContent = i + 1;

            sectionNumSeries.appendChild(numeroSeries);

            // console.log(numeroSeries);
        };
    } else if(serie.value <= 0) {
        alert("Digite alguma série");
    } else {
        alert("Você não é o CBUM! Digite uma série menor");
    }

    //Definindo o tempo de descanso

    if(0 < descanso.value && descanso.value < 200) {
        tempoDigitado = descanso.value;
    } else if (descanso.value <= 0) {
        alert("Pensa que é quem? Descanse mais!!!");
    } else {
        alert("Tá querendo dormir? Escreva um descanso menor!!!");
    }

}

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let sectionNumSeries = document.querySelector(".numero__series");

let cron;

var botao = document.querySelector(".botão");

var i = 0;

botao.addEventListener("click", coletaDados);


//Cronometro

"use strict";


document.form_main.start.onclick = () => start(tempoDigitado);
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start(tempoDigitado) {
    pause();
    
    cron = setInterval(() => { timer(tempoDigitado); }, 10);
    
}

function pause() {
    clearInterval(cron);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
    $("#start").attr("disabled", false);
}


function timer(tempoDigitado) {

    var timer = tempoDigitado, minutes, seconds;

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;        
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    if (second == seconds && minute == minutes) {
        pause();
        $("#start").attr("disabled", true);
        $(".numero__series").children().eq(i).addClass("numero-completo");
        i++;


        if(i == $(".numero__series").children().size()) {
            alert("acabou");
            $("#start").attr("disabled", false);
            $(".numero__series").children().removeClass("numero-completo");
            reset();
            i = 0;
        }

    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

