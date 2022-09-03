function holamundo () {
    alert("Hola mundo");
    console.log(Event);

};

const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = function(e){
    alert("Hola mundo Manejador de Eventos Semantico");
    console.log(e);
    
}

const $eventomultiple = document.getElementById("evento-multiple");
$eventomultiple.addEventListener("click",holamundo);
$eventomultiple.addEventListener("click",(e) => {
    alert("Hola mundo Manejador de Eventos Multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);

});

function saludar(nombre="Desconcido"){
    alert(`Hola ${nombre}`);
}

$eventomultiple.addEventListener("click",()=>{
    saludar();
    saludar("Raúl");

});
const $eventoremover = document.getElementById("evento-remover");
$eventoremover.addEventListener("dblclick",(e)=>{
    alert(`removiendo el evento de tipo ${e.type}`);
    console.log(e);
})

