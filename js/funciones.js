/************************************************************************
=================== Inicio Variables Globales ==========================
************************************************************************/

var Jugador = new ob_jugador();
var contadorAux = 1; // usamos esta variable para ver cuantos colores a introducido el jugador, Max -> 4.
var coloresElegidos = new Array(4); //creo el array aqui para poder almacenar los colores, ya que se le llamara varias veces a la funcion para poner diferentes colores.
var contadorIntentos = 0; //Usamos esta variable para ver cuantos intentos lleva el jugador.
var ContadorColoresBien = 0; //usamos esta variable para poder ver la comprobacion de la linea de cual color esta en la combinacion y en su sitio
var ContadorColoresEstan = 0; //usamos esta variable apra poder ver la comprobacion de la linea de cual color esta en la combinacion.
var CombinacionGanadora = new ob_combinacion(); //Inicializamos el objeto para poder usarlo en todas las funciones
var CombinacionElegida = new ob_combinacion(); //Inicializamos el objeto para poder usarlo en todas las funciones
var ObTablero = new ob_tablero(); //Inicializamos el objeto para poder usarlo en todas las funciones

/************************************************************************
===================== Final Variables Globales ==========================
************************************************************************/


/************************************************************************
======================== Inicio de objetos ==============================
************************************************************************/
function ob_jugador(nombre_in, NumIntentos_in, InteRestantes_in){
    this.nombre = nombre_in;
    this.NumIntentos = NumIntentos_in;
    this.IntenRestantes = InteRestantes_in;
}
function ob_combinacion(color1_in, color2_in, color3_in, color4_in){
    this.color1 = color1_in;
    this.color2 = color2_in;
    this.color3 = color3_in;
    this.color4 = color4_in;
}
function FunComprobarCombinaciones(){
    var bien = 0; //contador para ver cuantos colores estan en su sitio.
    var estan = 0; // contador para ver cuatos colores estan, sin que esten en su sitio.
    //console.log(CombinacionElegida.color1+" "+ this.CombinacionGanadora.color1);
    if (CombinacionElegida.color1 == this.CombinacionGanadora.color1){
        bien ++;
    }else if(CombinacionElegida.color1 == this.CombinacionGanadora.color2){
        estan++;
    }else if(CombinacionElegida.color1 == this.CombinacionGanadora.color3){
        estan++;
    }else if(CombinacionElegida.color1 == this.CombinacionGanadora.color4){
        estan++;
    }
    if (CombinacionElegida.color2 == this.CombinacionGanadora.color1){
        estan ++;
    }else if(CombinacionElegida.color2 == this.CombinacionGanadora.color2){
        bien++;
    }else if(CombinacionElegida.color2 == this.CombinacionGanadora.color3){
        estan++;
    }else if(CombinacionElegida.color2 == this.CombinacionGanadora.color4){
        estan++;
    }
    if (CombinacionElegida.color3 == this.CombinacionGanadora.color1){
        estan ++;
    }else if(CombinacionElegida.color3 == this.CombinacionGanadora.color2){
        estan++;
    }else if(CombinacionElegida.color3 == this.CombinacionGanadora.color3){
        bien++;
    }else if(CombinacionElegida.color3 == this.CombinacionGanadora.color4){
        estan++;
    }
    if (CombinacionElegida.color4 == this.CombinacionGanadora.color1){
        estan ++;
    }else if(CombinacionElegida.color4 == this.CombinacionGanadora.color2){
        estan++;
    }else if(CombinacionElegida.color4 == this.CombinacionGanadora.color3){
        estan++;
    }else if(CombinacionElegida.color4 == this.CombinacionGanadora.color4){
        bien++;
    }
    ContadorColoresBien = bien;
    ContadorColoresEstan = estan;

}
function FunDibujarTablero(intentos){
    var MosTablero = "";
    for (var i=0; i<intentos; i++)
    {
        MosTablero += " <div class='row'>";
        for (var e=0; e<this.MatTablero[i].length; e++)
        {
            if(i == contadorIntentos){
               MosTablero += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
            }else{
               MosTablero += "<div class='col-lg-3 col-sm-3 fichas '>";
            }
            //MosTablero += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
            switch(this.MatTablero[i][e]){
                case "rojo":
                    MosTablero += "<div class='ficha' id='ActivoRojo'></div>";
                    break;
                case "azul":
                    MosTablero += "<div class='ficha' id='ActivoAzul'></div>";
                    break;
                case "verde":
                    MosTablero += "<div class='ficha' id='ActivoVerde'></div>";
                    break;
                case "amarillo":
                    MosTablero += "<div class='ficha' id='ActivoAmarillo'></div>";
                    break;
                case "morado":
                    MosTablero += "<div class='ficha' id='ActivoMorado'></div>";
                    break;
                case "lila":
                    MosTablero += "<div class='ficha' id='ActivoLila'></div>";
                    break;
                default:
                    MosTablero += "<div class='ficha'></div>";
            }
            
            MosTablero += "</div>";
        }
        MosTablero += "</div>";
    }
    document.getElementById("tablero").innerHTML = MosTablero;
}

function FunDibujarPistas(intentos){
    var MosTableroPis = "";
    for (var i=0; i<intentos; i++)
    {
        MosTableroPis += " <div class='row'>";
        for (var e=0; e<this.MatPistas[i].length; e++)
        {
            if(i == contadorIntentos){
            MosTableroPis += "<div class='col-lg-3 col-sm-3 pistas animated fadeInDown'>";
            }else{
            MosTableroPis += "<div class='col-lg-3 col-sm-3 pistas'>";
            }
            //MosTableroPis += "<div class='col-lg-3 col-sm-3 pistas animated fadeInDown'>";
            switch(this.MatPistas[i][e]){
                case "negra":
                    MosTableroPis += "<div class='pista' id='PistaNegra'></div>";
                    break;
                case "blanca":
                    MosTableroPis += "<div class='pista' id='PistaBlanca'></div>";
                    break;
                default:
                    MosTableroPis += "<div class='pista' id='PistaNula'></div>";
            }
            
            MosTableroPis += "</div>";
        }
        MosTableroPis += "</div>";
    }
    document.getElementById("ZonaPistas").innerHTML = MosTableroPis;
}
function FunDibujarComGanadora(){
var ComGanadora = "";
    //console.log(this.CombinacionGanadora.color1);
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
    switch(this.CombinacionGanadora.color1){
        case "rojo":
            ComGanadora += "<div class='ficha' id='ActivoRojo'></div>";
            break;
        case "azul":
            ComGanadora += "<div class='ficha' id='ActivoAzul'></div>";
            break;
        case "verde":
            ComGanadora += "<div class='ficha' id='ActivoVerde'></div>";
            break;
        case "amarillo":
            ComGanadora += "<div class='ficha' id='ActivoAmarillo'></div>";
            break;
        case "morado":
            ComGanadora += "<div class='ficha' id='ActivoMorado'></div>";
            break;
        case "lila":
            ComGanadora += "<div class='ficha' id='ActivoLila'></div>";
            break;
        default:
            ComGanadora += "<div class='ficha'></div>";
    }
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
    switch(this.CombinacionGanadora.color2){
        case "rojo":
            ComGanadora += "<div class='ficha' id='ActivoRojo'></div>";
            break;
        case "azul":
            ComGanadora += "<div class='ficha' id='ActivoAzul'></div>";
            break;
        case "verde":
            ComGanadora += "<div class='ficha' id='ActivoVerde'></div>";
            break;
        case "amarillo":
            ComGanadora += "<div class='ficha' id='ActivoAmarillo'></div>";
            break;
        case "morado":
            ComGanadora += "<div class='ficha' id='ActivoMorado'></div>";
            break;
        case "lila":
            ComGanadora += "<div class='ficha' id='ActivoLila'></div>";
            break;
        default:
            ComGanadora += "<div class='ficha'></div>";
    }
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
    switch(this.CombinacionGanadora.color3){
        case "rojo":
            ComGanadora += "<div class='ficha' id='ActivoRojo'></div>";
            break;
        case "azul":
            ComGanadora += "<div class='ficha' id='ActivoAzul'></div>";
            break;
        case "verde":
            ComGanadora += "<div class='ficha' id='ActivoVerde'></div>";
            break;
        case "amarillo":
            ComGanadora += "<div class='ficha' id='ActivoAmarillo'></div>";
            break;
        case "morado":
            ComGanadora += "<div class='ficha' id='ActivoMorado'></div>";
            break;
        case "lila":
            ComGanadora += "<div class='ficha' id='ActivoLila'></div>";
            break;
        default:
            ComGanadora += "<div class='ficha'></div>";
    }
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas animated fadeInDown'>";
    switch(this.CombinacionGanadora.color4){
        case "rojo":
            ComGanadora += "<div class='ficha' id='ActivoRojo'></div>";
            break;
        case "azul":
            ComGanadora += "<div class='ficha' id='ActivoAzul'></div>";
            break;
        case "verde":
            ComGanadora += "<div class='ficha' id='ActivoVerde'></div>";
            break;
        case "amarillo":
            ComGanadora += "<div class='ficha' id='ActivoAmarillo'></div>";
            break;
        case "morado":
            ComGanadora += "<div class='ficha' id='ActivoMorado'></div>";
            break;
        case "lila":
            ComGanadora += "<div class='ficha' id='ActivoLila'></div>";
            break;
        default:
            ComGanadora += "<div class='ficha'></div>";
    }
    ComGanadora += "</div>";
    document.getElementById("Combinacion").innerHTML = ComGanadora;
}

function ob_tablero(MatTablero_in, MatPistas_in, combinacionGanadora_in){
    this.MatTablero = MatTablero_in;
    this.MatPistas = MatPistas_in;
    this.CombinacionGanadora = combinacionGanadora_in;
    this.Comprobador = FunComprobarCombinaciones;
    this.DibujarTablero = FunDibujarTablero;
    this.DibujarPistas = FunDibujarPistas;
    this.DibujarCombGanadora = FunDibujarComGanadora;
}
/************************************************************************
========================= Final de objetos ==============================
************************************************************************/


/************************************************************************
==================== Inicio de Arrays y matrices ========================
************************************************************************/

function ResetearDibujoCombinacionGanadora(){
var ComGanadora = "";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas'>";
        ComGanadora += "<div class='ficha'>";
        ComGanadora += "</div>";
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas'>";
        ComGanadora += "<div class='ficha'>";
        ComGanadora += "</div>";
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas'>";
        ComGanadora += "<div class='ficha'>";
       ComGanadora += "</div>";
    ComGanadora += "</div>";
    ComGanadora += "<div class='col-lg-3 col-sm-3 fichas'>";
        ComGanadora += "<div class='ficha'>";
        ComGanadora += "</div>";
    ComGanadora += "</div>";
    document.getElementById("Combinacion").innerHTML = ComGanadora;
}

var Tablero = new Array(10);
for (var i = 0; i < Tablero.length; i++){
    Tablero[i]=new Array(4);
}

function ResetearArray(){
    for (var i=0; i<Tablero.length; i++)
    {
        for (var e=0; e<Tablero[i].length; e++)
        {
           Tablero[i][e]= "gris";
        }
    }
}

var Pistas = new Array(10);
for (var i = 0; i < Pistas.length; i++){
    Pistas[i]=new Array(4);
}
function ResetearPistas(){
    for (var i=0; i<Pistas.length; i++)
    {
        for (var e=0; e<Pistas[i].length; e++)
        {
           Pistas[i][e]= " ";
        }
    }
}
/************************************************************************
===================== Final de Arrays y matrices ========================
************************************************************************/

/************************************************************************
========================== Inicio de funciones ==========================
************************************************************************/
function DesactivarTodo(){
    document.getElementById("BotonProbarCombi").disabled = true;
    document.getElementById("PosibleRojo").disabled = true;
    document.getElementById("PosibleRojo").style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
    document.getElementById("PosibleAzul").disabled = true;
    document.getElementById("PosibleAzul").style.backgroundColor = "rgba(0, 0, 255, 0.5)"; 
    document.getElementById("PosibleVerde").disabled = true;
    document.getElementById("PosibleVerde").style.backgroundColor = "rgba(0, 182, 0, 0.5)"; 
    document.getElementById("PosibleAmarillo").disabled = true;
    document.getElementById("PosibleAmarillo").style.backgroundColor = "rgba(255, 255, 0, 0.5)"; 
    document.getElementById("PosibleMorado").disabled = true;
    document.getElementById("PosibleMorado").style.backgroundColor = "rgba( 142, 10, 224, 0.5 )"; 
    document.getElementById("PosibleLila").disabled = true;
    document.getElementById("PosibleLila").style.backgroundColor = "rgba( 226, 147, 255, 0.5)";
}
function ComprobarSiEsGanador(){
    console.log("Contador colores" +ContadorColoresBien);
    if (ContadorColoresBien == 4){
        console.log("Es ganador");
        ObTablero.DibujarCombGanadora();
        window.open("PartidaGanada.html","Juego nuevo","width=400,height=250,top=200,left=475,toolbar=no,location=no,status=no,menubar=no")
        DesactivarTodo();
        ObTablero.DibujarCombGanadora();
    }else{
        console.log("Contador de intentos = " +contadorIntentos);
        if (contadorIntentos == Jugador.NumIntentos){
        
        ObTablero.DibujarCombGanadora();
        window.open("PartidaPerdida.html","Juego nuevo","width=400,height=150,top=200,left=475,toolbar=no,location=no,status=no,menubar=no")
        DesactivarTodo();
        ObTablero.DibujarCombGanadora();
        
        }
    }
}
function InsertarLineaTablero(){
    var num = contadorIntentos;
    //alert(ObTablero.MatTablero[num].length);
    for (var e=0; e<ObTablero.MatTablero[num].length; e++)
        {
            //console.log("Pinta: "+coloresElegidos[e]);
           ObTablero.MatTablero[num][e]= coloresElegidos[e];
            //console.log("Pintado: "+ObTablero.MatTablero[num][e]);
        }
}
function InsertarLineaPistas(){
    var num = contadorIntentos;
    var coloresBien = ContadorColoresBien;
    var coloresEstan = ContadorColoresEstan;
    console.log("Colores en su sitio: " + coloresBien);
    console.log("Estan colores: " + coloresEstan);
    //alert("Pistas: "+ ObTablero.MatPistas[num].length);
    for (var e=0; e<ObTablero.MatPistas[num].length; e++)
        {
            if ( coloresBien > 0){
                
                ObTablero.MatPistas[num][e]= "negra";
                coloresBien--;
            }else  if (coloresBien <= 0 && coloresEstan > 0){
                ObTablero.MatPistas[num][e]= "blanca";
                coloresEstan--;
            }else if (coloresBien < 0 && coloresEstan < 0){
                ObTablero.MatPistas[num][e]= " ";
            }
        }
}
function ResetearBotones(){ //usamos esta funcion para devolver los botones de los colores a su estado original despues de cada intento.
    coloresElegidos = new Array(4);
    contadorAux = 1;
    document.getElementById("PosibleRojo").disabled = false;
                document.getElementById("PosibleRojo").style.backgroundColor = "rgba(255, 0, 0, 1)"; 
    document.getElementById("PosibleAzul").disabled = false;
                document.getElementById("PosibleAzul").style.backgroundColor = "rgba(0, 0, 255, 1)"; 
    document.getElementById("PosibleVerde").disabled = false;
                document.getElementById("PosibleVerde").style.backgroundColor = "rgba(0, 182, 0, 1)"; 
    document.getElementById("PosibleAmarillo").disabled = false;
                document.getElementById("PosibleAmarillo").style.backgroundColor = "rgba(255, 255, 0, 1)";
    document.getElementById("PosibleMorado").disabled = false;
                document.getElementById("PosibleMorado").style.backgroundColor = "rgba( 142, 10, 224, 1)"; 
    document.getElementById("PosibleLila").disabled = false;
                document.getElementById("PosibleLila").style.backgroundColor = "rgba( 226, 147, 255, 1)"; 
    document.getElementById("BotonProbarCombi").disabled = true;
}
function InsertarColores(color){
    if(contadorAux <= 4 ){
        switch(color){
            case "rojo":
                document.getElementById("PosibleRojo").disabled = true;
                document.getElementById("PosibleRojo").style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
                break;
            case "azul":
                document.getElementById("PosibleAzul").disabled = true;
                document.getElementById("PosibleAzul").style.backgroundColor = "rgba(0, 0, 255, 0.5)"; 
                break;
            case "verde":
                document.getElementById("PosibleVerde").disabled = true;
                document.getElementById("PosibleVerde").style.backgroundColor = "rgba(0, 182, 0, 0.5)"; 
                break;    
            case "amarillo":
                document.getElementById("PosibleAmarillo").disabled = true;
                document.getElementById("PosibleAmarillo").style.backgroundColor = "rgba(255, 255, 0, 0.5)"; 
                break;
            case "morado":
                document.getElementById("PosibleMorado").disabled = true;
                document.getElementById("PosibleMorado").style.backgroundColor = "rgba( 142, 10, 224, 0.5 )"; 
                break;
            case "lila":
                document.getElementById("PosibleLila").disabled = true;
                document.getElementById("PosibleLila").style.backgroundColor = "rgba( 226, 147, 255, 0.5)";
                break;
        }        
        switch(contadorAux){
            case 1:
                coloresElegidos[0] = color;
                contadorAux++;
                break;
            case 2:
                coloresElegidos[1] = color;
                contadorAux++;
                break;
            case 3:
                coloresElegidos[2] = color;
                contadorAux++;
                break;    
            case 4:
                coloresElegidos[3] = color;
                contadorAux++;
                document.getElementById("PosibleRojo").disabled = true;
                document.getElementById("PosibleRojo").style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
                document.getElementById("PosibleAzul").disabled = true;
                document.getElementById("PosibleAzul").style.backgroundColor = "rgba(0, 0, 255, 0.5)"; 
                document.getElementById("PosibleVerde").disabled = true;
                document.getElementById("PosibleVerde").style.backgroundColor = "rgba(0, 182, 0, 0.5)"; 
                document.getElementById("PosibleAmarillo").disabled = true;
                document.getElementById("PosibleAmarillo").style.backgroundColor = "rgba(255, 255, 0, 0.5)"; 
                document.getElementById("PosibleMorado").disabled = true;
                document.getElementById("PosibleMorado").style.backgroundColor = "rgba( 142, 10, 224, 0.5 )"; 
                document.getElementById("PosibleLila").disabled = true;
                document.getElementById("PosibleLila").style.backgroundColor = "rgba( 226, 147, 255, 0.5)";
                document.getElementById("BotonProbarCombi").disabled = false;
                CombinacionElegida = new ob_combinacion(coloresElegidos[0],coloresElegidos[1],coloresElegidos[2],coloresElegidos[3]);
                break;
        }
    }else{
        alert("ya has introducido 4 colores");
                //console.log(coloresElegidos);
    }
}
function ComprobarRepetidos(num, matriz){
    var aux = true;
    for(var i = 0 ; i < matriz.length; i++){
        if( num == matriz[i]){
            aux = false;
        }
    }
    return aux;
}
function Aleatorio(max, min){
    var num = Math.floor(Math.random() * (max - min));
    return num + min;
}
function CambiarNumerosColores(numeros){
    var colores = numeros;
    for(var i = 0; i<numeros.length; i++){
        switch(numeros[i]){
            case 1:
               colores[i]="rojo";
               break;
            case 2:
               colores[i]="azul";
               break;
            case 3:
               colores[i]="verde";
               break;
            case 4:
               colores[i]="amarillo";
               break;
            case 5:
               colores[i]="morado";
               break;
            default:
               colores[i]="lila";
        }
    }
    return colores;
}
function GeneradorCombinacion(){
    var colores = new Array(4);
    var i = 0;
    while(i<4){
        var num = Aleatorio(1,7);
        if(ComprobarRepetidos(num, colores)){
           colores[i] = num;        
            i++;
        }   
    }
    colores = CambiarNumerosColores(colores);
    CombinacionGanadora = new ob_combinacion(colores[0], colores[1], colores[2],colores[3])
}
function NuevoJugador(){ //funcion para abrir la ventana de nuevo jugador
    window.open("nuevoJugador.html","Juego nuevo","width=400,height=250,top=200,left=475,toolbar=no,location=no,status=no,menubar=no");
}
function IniciarJuego(){ //Desde aqui reseteamos todos los tableros y generamos una nueva combinacion ganadora.
    ResetearArray();
    ResetearPistas();
    ResetearBotones();
    ResetearDibujoCombinacionGanadora();
    contadorIntentos = 0;
    GeneradorCombinacion();
    ObTablero = new ob_tablero(Tablero, Pistas, CombinacionGanadora);
    ObTablero.DibujarTablero(Jugador.NumIntentos);
    ObTablero.DibujarPistas(Jugador.NumIntentos);
}
function JugarIntento(){
        ObTablero.Comprobador();
        InsertarLineaTablero();
        InsertarLineaPistas()
        ObTablero.DibujarTablero(Jugador.NumIntentos);
        ObTablero.DibujarPistas(Jugador.NumIntentos);
        ResetearBotones();
        contadorIntentos++;
        Jugador.IntenRestantes--;
        document.getElementById("NumIntentosRestantes").innerHTML = Jugador.IntenRestantes;
        ComprobarSiEsGanador();
}
function EmpiezaJuego(){ //Con esta funcion se empezaria el juego de cero, es decir es el inicio de un nuevo juego
    var nombre = document.getElementById("nombrejugadorform").value;
    var numInten = numIntentosform.options[numIntentosform.selectedIndex].value;
    window.opener.Jugador = new ob_jugador(nombre, numInten, numInten);
    opener.document.getElementById("NombreJugador").innerHTML= window.opener.Jugador.nombre;
    opener.document.getElementById("NumIntentosRestantes").innerHTML = window.opener.Jugador.NumIntentos;
    window.opener.IniciarJuego();
    window.close();
}