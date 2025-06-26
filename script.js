function gerarMapa(){
    var largura = document.getElementById('width').value;
    var altura = document.getElementById('height').value;

    inicializadorArray(largura, altura);

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
    for(var y = 0; y < altura; y++)
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

// Função para desenhar o cubo no canvas
/*window.addEventListener('mousedown', function(event) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Calcula a posição do cubo baseado no clique
    var posX = Math.floor(x / 100) * 100;
    var posY = Math.floor(y / 100) * 100;

    // Desenha o cubo na posição calculada
    ctx.drawImage(cubos, 0, 0, 100, 100, posX, posY, 100, 100);
});*/


// Função para salvar o mapa em PDF
function salvarPDF() {
    var canvas = document.getElementById('canvas');
    var imgData = canvas.toDataURL('image/png');

    var pdf = new jsPDF('l', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 10, 10, 280, 200);
    pdf.save('mapa.pdf');
}

//Salvar em imagem
function salvarMapa() {
    var canvas = document.getElementById('canvas');
    var link = document.createElement('a');
    link.download = 'mapa.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}


/*let cubos=new Image();
cubos.src = 'images/cubos.jpg';
cubos.addEventListener('load', function() {
    //imagem, xiniRecorte, yiniRecorte, LRecorte, Arecorte, posX, posY, Limagem, Aimagem)
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d')
    ctx.drawImage(cubos, 0, 0, 100, 100, 0, 0, 50, 50);
});*/