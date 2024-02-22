function leitura() {
    let somatorio = 0;
    let somaPesos = 0;
    for(let i = 0; i < 5; i++) {
        let nota = Number(document.getElementById("nota" + i).value);
        let peso = Number(document.getElementById("peso" + i).value);
        /* console.log(nota);
        console.log(peso); */

        let product = (nota*peso);
        somatorio += product;
        somaPesos += peso;
    }
    let resultado = (somatorio)/somaPesos;
    window.alert("Sua média foi " + resultado);
}

