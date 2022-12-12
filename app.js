// venta de vapes, mayor a 18 años, eleccion de sabor y puffs.

/*
let edad;
let sabor;
let puffs;
let respuesta;

edad = parseInt (prompt("Hola! Ingrese su edad"));

while (edad >=18) {
    alert ("Puede continuar su compra")
}

function elegirSabor () {
    sabor = prompt (`Que sabor desea comprar?:
    1: grape
    2: peach
    3: strawberry
    `);
    let respuesta ="";
    switch (sabor) {
        case "1":
            respuesta = "grape";
            break;
        case "2":
            respuesta = "peach";
            break;
        case "3":
            respuesta = "strawberry";
            break;
    } 
    return respuesta;
}

sabor = elegirSabor ();
alert (`el sabor elegido es` + " " + sabor)

function elegirPuffs () {
    puffs = prompt (`Cuantos puffs desea?:
    1: 1500puffs
    2: 2500puufs
    3: 3500puffs`);
    let respuesta = "";
    switch (puffs) {
        case "1":
            respuesta = "1500 puffs";
            break;
        case "2":
            respuesta = "2500 puffs";
            break;
        case "3":
            respuesta = "2500 puffs";
                break;
    }
    return respuesta;
}

puffs = elegirPuffs ();
alert (`elegiste` + " " + puffs)

*/


// SEGUNDA PRE-ENTREGA

let edad;
edad = parseInt (prompt("Hola! Ingrese su edad"));

if (edad >= 18){
    alert ("Puede continuar con la compra")
} else { 
    alert ("No puede continuar con la compra")
    
}

const productos = [
    {nombre: "vape 800puffs", precio: 4300 },
    {nombre: "vape 1500puffs", precio: 5200 },
    {nombre: "vape 2500puffs" , precio : 6500},
    {nombre: "vape 3500puffs" , precio: 7500},
    {nombre: "equipo recargable" , precio: 9500},
    
]

productos.forEach((producto) => {
    console.log (producto.nombre);
    console.log (producto.precio);
})

function filtrarVapes (productos) {
    const vapes = productos.filter((productos) => productos.nombre.includes ("vape")) ;
    console.log(vapes)
    }

function filtrarVapes (productos) {
    const vapes = productos.filter((productos) => productos.nombre.includes ("recargable")) ;
    console.log(vapes)
    }

filtrarVapes(productos);

// SUMA TOTAL DE LA COMPRA//

const totalCarrito = productos.reduce((acumulador,producto) => acumulador + producto.precio, 0)
console.log(totalCarrito);



