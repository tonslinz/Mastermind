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
function ob_jugador(nombre_in, NumIntentos_in, InteRestantes_in){ //Este es un objeto generico de jugadores.Se utiliza para crear los jugadores.
    this.nombre = nombre_in;
    this.NumIntentos = NumIntentos_in;
    this.IntenRestantes = InteRestantes_in;
}
function ob_combinacion(color1_in, color2_in, color3_in, color4_in){ //Este es un objeto generico de combinaciones, se usa tanto para la combinacion ganadora como para la combinacion que nosotros elegimos.
    this.color1 = color1_in;
    this.color2 = color2_in;
    this.color3 = color3_in;
    this.color4 = color4_in;
}
function FunComprobarCombinaciones(){ //Esta funcion comprueba la combinacion elegida por nosotros con la combinacion ganadora para decirnos como estan los colores, es decir para poder generar las pistas
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
function FunDibujarTablero(intentos){ //Esta funcion se encarga de dibujar la matriz del tablero cada vez que jugamos un intento, se llama a trabes del objeto Tablero que hemos creado.
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

function FunDibujarPistas(intentos){ //Esta funcion se encarga de dibujar la matriz de pistas cada vez que jugamos un intento, se llama a trabes del objeto Tablero que hemos creado.
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
function FunDibujarComGanadora(){ //Esta funcion se encarga de dibujar la combinacion ganadora cada vez que terminamos el juego, se llama a traves del objeto Tablero que hemos creado.
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

function ob_tablero(MatTablero_in, MatPistas_in, combinacionGanadora_in){ //Creamos un objeto llamado tablero.
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

function ResetearDibujoCombinacionGanadora(){ //Esta funcion la usamos para dibujar el trablero donde se muestra la combinacion ganadora cada vez que jugamos un nuevo jugo.
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

function ResetearArray(){//Esta trozo de codigo genera una array de Colores(tablero) vacias. Para poder resetearlo cada vez que hacemos un nuevo juego
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
function ResetearPistas(){ //Esta trozo de codigo genera una array de pistas vacias. Para poder resetearlo cada vez que hacemos un nuevo juego
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
function DesactivarTodo(){ //Esta funcion la usamos para desactivar los botones al cargar la pagina y en algunos navegadores que no funciona
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
function ComprobarSiEsGanador(){ //Esta funcion comprueba despues de cada intento si el jugador a acertado la combinacion ganadora mediante la variable global que ya tiene dentro que ya ha comprbado la combinacion introducida y la ganadora, si no ha ganado comprueba si ha agotado los intentos y ha perdido
    console.log("Contador colores" +ContadorColoresBien);
    if (ContadorColoresBien == 4){
        console.log("Es ganador");
        ObTablero.DibujarCombGanadora();
        window.open("PartidaGanada.html","Juego nuevo","width=400,height=100,top=200,left=475,toolbar=no,location=no,status=no,menubar=no")
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
function InsertarLineaTablero(){//Con esta funcion insertamos en el array del objeto tablero la linea correspondiente con el intento que estamos en el array de colores
    var num = contadorIntentos;
    //alert(ObTablero.MatTablero[num].length);
    for (var e=0; e<ObTablero.MatTablero[num].length; e++)
        {
            //console.log("Pinta: "+coloresElegidos[e]);
           ObTablero.MatTablero[num][e]= coloresElegidos[e];
            //console.log("Pintado: "+ObTablero.MatTablero[num][e]);
        }
}
function InsertarLineaPistas(){ //Con esta funcion insertamos en el array del objeto tablero la linea correspondiente con el intento que estamos en el array de pistas
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
function InsertarColores(color){ //Esta funcion se llama cada vez que introducimos un color en la combinacion que elegimos en los intentos, con ella se desactivan los colores que se pulsan y cuando estan los 4 colores se desactivan todos los colores(pulsados o no) y se activa el boton de "Jugar"
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
function ComprobarRepetidos(num, matriz){ //Esta funcion se encarga de comprobar que no ahi numeros repetidos en la combinacion ganadora.
    var aux = true;
    for(var i = 0 ; i < matriz.length; i++){
        if( num == matriz[i]){
            aux = false;
        }
    }
    return aux;
}
function Aleatorio(max, min){ //esta funcion genera un numero aleatorio del numero "Max" hasta el numero "Min"
    var num = Math.floor(Math.random() * (max - min));
    return num + min;
}
function CambiarNumerosColores(numeros){ //Con esta funcion segun el numero se cambia por un color.
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
function GeneradorCombinacion(){ //En esta funcion se genera una combinacion ganadora comprobando con la llamada de otra funcion que no se repita ningun color, se crean numeros por lo que mediante otra funcion se cambian los numeros por sus correspondientes colores y finalmente se crea el objeto de la combinacion ganadora.
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
    window.open("nuevoJugador.html","Juego nuevo","width=400,height=275,top=200,left=475,toolbar=no,location=no,status=no,menubar=no");
}
function IniciarJuego(){ //Desde aqui reseteamos todos los tableros y generamos una nueva combinacion ganadora. Es decir, se resetea el juego entero tras crear el nuevo jugador
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
function JugarIntento(){ //Esta funcion se ejecuta cada vez que se juega un intento, al pulsar el boton "Jugar"
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
function EmpiezaJuego(){ //Con esta funcion se ejecuta en la ventana generada para introducir el nuevo jugador y la dificultad, en esta funcion se recogen esos datos y crea el ojeto jugador.
    var nombre = document.getElementById("nombrejugadorform").value;
    var numInten = numIntentosform.options[numIntentosform.selectedIndex].value;
    window.opener.Jugador = new ob_jugador(nombre, numInten, numInten);
    opener.document.getElementById("NombreJugador").innerHTML= window.opener.Jugador.nombre;
    opener.document.getElementById("NumIntentosRestantes").innerHTML = window.opener.Jugador.NumIntentos;
    window.opener.IniciarJuego();
    window.close();
}

function MostrarAyuda(){ //Funcion que muestra un alert con la ayuda al pulsar "Ayuda"
    alert("-Si la pista es negra: significa que ahí uno de los cuatro colores en la combinación secreta y esta en su sitio.\n-Si la pista es blanca significa que uno de los colores esta en la combinación secreta, pero no esta en su sitio. \n-Si falta alguna de las 4 pistas, significa que uno de los colores no esta en la combinación.");
}
function MostrarComoJugar(){ //Funcion que muestra el alert a la hora de pulsar "¿Como jugar?
    var ComoJugar = "";
    ComoJugar += "- Debes jugar en una pantalla como mínimo de resolución de 1280 x 720.\n "
    ComoJugar += "- Tu pantalla es de: " + window.screen.height + " x " + window.screen.width + " Pixeles.\n ";
    ComoJugar += "- Para Comenzar el Juego pulsa sobre Nuevo Juego.\n";
    ComoJugar += "- Despues Introduce tu nombre y La dificultad\n";
    ComoJugar += "- Pulsa sobre los colores para crear tu combinación y adivinar la combinación secreta, recuerda pulsarlos en el orden que tu quieres que estén\n";
    ComoJugar += "- Una vez elegida la combinación, pulsa sobre jugar\n ";
    ComoJugar += "Gracias por jugarlo.";
    alert(ComoJugar);
}
/************************************************************************
========================== final de funciones ===========================
************************************************************************/


/************************************************************************
========================== Inicio codio extra ===========================
************************************************************************/

//Con este siguiente codigo lo usamos para crear el reloj y mostrarlo.
var myVar = setInterval(function(){myTimer()}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("columnaDerecha").innerHTML = "<img src='Img/reloj.png' alt='reloj'/>"+t;
}

//Creamos el siguiente codigo para sacar el navegador web que estamos utilizando.
var informacionNav = "";

informacionNav += "<span>Estas usando el navegador:</span>";
if (navigator.userAgent.indexOf('NET') !=-1) {
    informacionNav += "<img src='Img/internetExplorer.png' alt='internetExplorer'/>";
    alert("Este juego no funciona en Internet Explorer, Utilice Mozilla Firefox por favor");
    DesactivarTodo();
    document.getElementById("NuevoJugoBtn").disabled = true;
} else if (navigator.userAgent.indexOf('Firefox') !=-1) {
    informacionNav += "<img src='Img/firefox.png' alt='firefox'/>";
} else if (navigator.userAgent.indexOf('Chrome') !=-1) {
    informacionNav += "<img src='Img/chrome.png' alt='chrome'/>"
    alert("Este juego no funciona en Chrome, Utilice Mozilla Firefox por favor");
    DesactivarTodo();
    document.getElementById("NuevoJugoBtn").disabled = true;
} else {
 informacionNav +='está usando un navegador no identificado ...';
}

//informacionNav += navigator.userAgent ;

document.getElementById("columnaIzquierda").innerHTML = informacionNav;

/************************************************************************
=========================== final codio extra ===========================
************************************************************************/