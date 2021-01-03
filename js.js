document.querySelector('#horario').innerHTML = new Date().toLocaleString()

var malzaimg = document.querySelector('#malzaimg')

function alterarimg(){
    if(malzaimg.src.match('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg')){
        malzaimg.src = 'https://static2.lolwallpapers.net/2015/03/malzahar-fan-art.png'
    }else {
        malzaimg.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg'
    }
}

var malzatxt = document.querySelector('#title')

function alterartxt(){
        if(malzatxt.innerHTML ==  'Malzahar'){
            malzatxt.innerHTML =  'O profeta do vazio.'
        } else{
            malzatxt.innerHTML = 'Malzahar'
    }
}