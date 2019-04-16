
function inicio(){
    document.getElementById("aInicio").style.display="block";
    document.getElementById("aVentas").style.display="none";
    document.getElementById("aReportes").style.display="none";
    document.getElementById("aClientes").style.display="none";
    document.getElementById("aProductos").style.display="none";    
}
function ventas(){
    document.getElementById("aInicio").style.display="none";
    document.getElementById("aVentas").style.display="block";
    document.getElementById("aReportes").style.display="none";
    document.getElementById("aClientes").style.display="none";
    document.getElementById("aProductos").style.display="none";    
}
function reportes(){
    document.getElementById("aInicio").style.display="none";
    document.getElementById("aVentas").style.display="none";
    document.getElementById("aReportes").style.display="block";
    document.getElementById("aClientes").style.display="none";
    document.getElementById("aProductos").style.display="none";    
}
function clientes(){
    document.getElementById("aInicio").style.display="none";
    document.getElementById("aVentas").style.display="none";
    document.getElementById("aReportes").style.display="none";
    document.getElementById("aClientes").style.display="block";
    document.getElementById("aProductos").style.display="none";    
}
function productos(){
    document.getElementById("aInicio").style.display="none";
    document.getElementById("aVentas").style.display="none";
    document.getElementById("aReportes").style.display="none";
    document.getElementById("aClientes").style.display="none";
    document.getElementById("aProductos").style.display="block";    
}

var tCliente = document.getElementById('tCliente');
var tProducto = document.getElementById('tProducto');
var tPrecio = document.getElementById('tPrecio');
var tCantidad = document.getElementById('tCantidad');
var bBuscar = document.getElementById('tBuscar')
var bProducto = document.getElementById('bProducto');
var bEnviar = document.getElementById('bEnviar');


