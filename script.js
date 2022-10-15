document.querySelector(".bars__menu").addEventListener("click", animatedBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var desplegable = document.querySelector(".menu__desplegable")

var mostrar = true;

function animatedBars(){
    desplegable.classList.toggle("activemenu__desplegable");
}


//PROFE AHI REALICE UN ARRAY Y SE SUMA EL IVA Y TENGO QUE HACER LO MISMO CON LOS DEMAS PRODUCTOS


function Producto(id, nombre, precio){
    this.id = id,
    this.nombre = nombre,
    this.precio = parseFloat(precio)
}


let iphone = new Producto (1, "iphone", 1300)
let airpods = new Producto (2, "airpods", 150)
let cargador = new Producto (3, "cargador", 40)
let watch = new Producto (4, "watch", 400)


let total = 0
let precioTotal = 0


function agregarProducto(){
    precioTotal = total + iphone.precio
    let precioTotalConIva = precioTotal * 1.21
    console.log(precioTotal)
    document.getElementById('checkout').innerHTML= `Pagar: $${precioTotalConIva}`
    alert('Producto añadido al carrito se suma el iva')
    
}

let agregar = document.getElementById('agg')
agregar.addEventListener('click', agregarProducto)




function pay(){
    let precioTotalConIva = precioTotal * 1.21
    if(precioTotal == 0){
        alert("No hay productos en el carrito")
    }else{
    alert("Productos seleccionados: \n"  + " \n Total a Pagar con IVA: $" + precioTotalConIva)
}
}
