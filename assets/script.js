let grafici =[
    {
        id: 1,
        nome: "coseno", 
        img:"./assets/img/coseno.png",
    },
    {
        id: 2,
        nome: "cotangente", 
        img:"./assets/img/cotangente.png",
    },
    {
        id: 3,
        nome: "Esponenziale con 0<a<1", 
        img:"./assets/img/esp 0<a<1.png",
    },
    {
        id: 4,
        nome: "Esponenziale con a=1", 
        img:"./assets/img/esp a=1.png",
    },
    {
        id: 3,
        nome: "Esponenziale con a>1", 
        img:"./assets/img/esp a>1.png",
    },
    {
        id: 5,
        nome: "Logaritmo con 0<a<1", 
        img:"./assets/img/log 0<a<1.png",
    },
    {
        id: 6,
        nome: "Logaritmo con a>1", 
        img:"./assets/img/log a>1.png",
    },
    {
        id: 7,
        nome: "Potenza con n dispari", 
        img:"./assets/img/potenza con n dispari.png",
    },
    {
        id: 8,
        nome: "Potenza con n pari", 
        img:"./assets/img/potenza con n pari.png",
    },
    {
        id: 9,
        nome: "Radice con n dispari", 
        img:"./assets/img/radice n-sima con n dispari.png",
    },
    {
        id: 10,
        nome: "Radice con n pari", 
        img:"./assets/img/radice n-sima con n pari.png",
    },
    {
        id: 11,
        nome: "seno", 
        img:"./assets/img/seno.png",
    },
    {
        id: 12,
        nome: "tangente", 
        img:"./assets/img/tangente.png",
    },
    {
        id: 13,
        nome: "valore assoluto di -x", 
        img:"./assets/img/valore assoluto di -x.png",
    },
    {
        id: 14,
        nome: "valore assoluto di x", 
        img:"./assets/img/valore assoluto di x.png",
    },
];

function getRandomInt() {
    return Math.floor((Math.random() * 14));
}

let a = 0;
let card = document.querySelector(".card .content");
let i = getRandomInt();
card.innerHTML = grafici[i].nome;

card.addEventListener("click", function(){
    if(a==0){
        a = 1;
        card.innerHTML = '<img src="'+grafici[i].img+'">'
    }else{
        a = 0;
        i = getRandomInt();
        card.innerHTML = grafici[i].nome;
    }
  });