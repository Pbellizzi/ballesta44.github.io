

function prueba() {
    let numero = Number(prompt("Elegí un Número"))
    if (!Number.isNaN(numero) && Numero != "") {
    alert("Bien")
    } else {
    alert("Dale pelotudo")
    alert("Bueno, vamos de nuevo")
    let letra =  prompt("Is this the real life?")
    if (letra.toLowerCase() == "is this just fantasy?") {
        alert("Ta, te perdono")
    } else {
        /*alert("Cancelado")
    document.write("CANCELAAAAAAAADO")*/
    alert("Ah si? Tomá")
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0"}
    }
};

let coso = 0;
function set(){
    document.getElementById("variable").innerHTML = coso
    }
function contador() {
    coso = coso + 1
    document.getElementById("variable").innerHTML = coso
    document.getElementById("comentario").innerHTML = "qué irresponsable"
};
