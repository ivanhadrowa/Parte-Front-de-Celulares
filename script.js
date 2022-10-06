document.querySelector(".bars__menu").addEventListener("click", animatedBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var desplegable = document.querySelector(".menu__desplegable")

var mostrar = true;

function animatedBars(){
    desplegable.classList.toggle("activemenu__desplegable");
}






 let products = []
let total = 0

function add(product, price){
    console.log(product,price)
    products.push(product)
    total = total + price
    document.getElementById('checkout').innerHTML= `Pagar: $${total}`
    alert('Producto añadido al carrito')
}

function pay(){
    if(products == 0){
        alert("No hay productos en el carrito")
    }else{
    alert("Productos seleccionados: \n" + products.join(", \n") + " \n Total a Pagar: $" + total)
}
}
