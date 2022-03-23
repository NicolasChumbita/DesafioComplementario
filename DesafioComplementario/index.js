const maximoRendimiento = 650;
alert("Su autonomía es de 650km");
let kmRecorridos = 0;

for (let i = 0; i < 3; i++) {
    let pregunta = parseInt(prompt("Indique los kilometros recorridos" ));
    kmRecorridos = kmRecorridos + pregunta;
    console.log("El total de kilometros recorridos es :" + kmRecorridos);


if (kmRecorridos > maximoRendimiento){
    alert("Nivel de Carburante Bajo")
    break;    
}else{
    let kilometros = maximoRendimiento - kmRecorridos;
    alert("Autonomia disponible " + " " + kilometros);
}
}
console.log = alert("El total de kilometros recorridos es : " + kmRecorridos); 