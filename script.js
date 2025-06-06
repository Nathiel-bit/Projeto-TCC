function inicializadorArray() {
    var largura = document.getElementById('width').value;
    var altura = document.getElementById('height').value;

    if (largura <= 0 || altura <= 0) {
        alert("Largura e altura devem ser maiores que zero.");
        return;
    } else{
        largura = parseInt(largura);
        altura = parseInt(altura);
        if (isNaN(largura) || isNaN(altura)) {
            alert("Por favor, insira apenas números, meu caro amigo(a).");
            return;
        }
    }

    var canvas = document.getElementById('canvas');
    canvas.width = largura * 100;
    canvas.height = altura * 100;

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var x = 0; x < largura; x++) {
        for (var y = 0; y < altura; y++) {
            ctx.strokeRect(x * 100, y * 100, 100, 100);
        }
    }
}

mapa = [];

function inicializadorArray(largura, altura){
for ( var x = 0; x < largura; x++){
    mapa [x] = [];
    for(var y = 0; y < altura; j++)
        mapa[x].push = ( "vazio");
    }
}

function printMapa(){
for(var x = 0; x < largura; x++){
    for(var y = 0; y < altura; y++){
        if(mapa [x][y] == "vazio"){
            ctx.strokeRect(x * 100, y * 100, 100, 100);
        }
    }
 }
}

//inicializadorArray();
//printMapa();