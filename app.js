let cantidadVape;
let sabor;
let puffs;

cantidadVape = parseInt (prompt("Hola! Ingrese la cantidad de vapes"));

while (cantidadVape <=1) {
    alert ("Puede continuar su compra")
    break;
}

sabor = prompt (`Que sabor desea comprar?:
1: grape
2: peach
3: strawberry
`);

puffs = prompt (`Cuantos puffs desea?:
1: 1500puffs
2: 2500puufs
3: 3500puffs`)

function elegirSabor () {
    switch (sabor) {
        case "1":
            alert ("Elegiste sabor grape");
            break;
        case "2":
            alert ("Elegiste sabor peach");
            break;
        case "3":
            alert ("Elegiste sabor strawberry");
            break;
    } 
}

function elegirPuffs () {
    switch (puffs) {
        case "1":
            alert ("Elegiste 1500puffs");
            break;
        case "2":
            alert ("Elegiste 2500puffs");
            break;
        case "3":
                alert ("Elegiste 3500puffs");
                break;
    }
}

elegirSabor ();
elegirPuffs (); 

