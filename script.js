var inicio = document.getElementById('inicio');
var ventas = document.getElementById('ventas');
var reportes = document.getElementById('reportes');
var clientes = document.getElementById('clientes');
var productos = document.getElementById('productos');

function inicio(){
    inicio.style.display="iniherit";
    ventas.style.display="none";
    reportes.style.display="none";
    clientes.style.display="none";
    productos.style.display="none";
}
function ventas(){
    inicio.style.display="none";
    ventas.style.display="inherit";
    reportes.style.display="none";
    clientes.style.display="none";
    productos.style.display="none";
}
function reportes(){
    inicio.style.display="none";
    ventas.style.display="none";
    reportes.style.display="iniherit";
    clientes.style.display="none";
    productos.style.display="none";
}
function clientes(){
    inicio.style.display="none";
    ventas.style.display="none";
    reportes.style.display="none";
    clientes.style.display="iniherit";
    productos.style.display="none";
}
function productos(){
    inicio.style.display="none";
    ventas.style.display="none";
    reportes.style.display="none";
    clientes.style.display="none";
    productos.style.display="iniherit";
}