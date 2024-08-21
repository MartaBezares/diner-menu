const menu = {
    desayuno: {
        entrantes: [
            { nombre: "Bacon", precio: 2.99 },
            { nombre: "Sirope", precio: 1.49 },
            { nombre: "tortitas", precio: 2.50 }
        ],
        principal: [
            { nombre: "Tortilla", precio: 2.45 },
            { nombre: "Huevos", precio: 2.45 },
            { nombre: "Tostada", precio: 1.49 }
        ],
        bebida: [
            { nombre: "Café", precio: 1.20 },
            { nombre: "Té", precio: 1.40 },
            { nombre: "Chocolate", precio: 2.15 }
        ]
    },
    comida: {
        entrantes: [
            { nombre: "alitas", precio: 3.99 },
            { nombre: "nachos", precio: 3.59 },
            { nombre: "patatas fritas", precio: 2.49 }
        ],
        principal: [
            { nombre: "Hamburguesa", precio: 5.99 },
            { nombre: "Bocadillo", precio: 6.99 },
            { nombre: "Sandwich", precio: 5.49 }
        ],
        bebida: [
            { nombre: "Vino", precio: 2.50 },
            { nombre: "Cerveza", precio: 2.25 },
            { nombre: "Refrescos", precio: 2.25 }
        ]
    },
    cena: {
        entrantes: [
            { nombre: "Alitas", precio: 2.59 },
            { nombre: "Nachos", precio: 2.59 },
            { nombre: "Patatas fritas", precio: 1.49 }
        ],
        principal: [
            { nombre: "Hamburguesa", precio: 6.59 },
            { nombre: "Bocadillo", precio: 5.49 },
            { nombre: "Sandwich", precio: 4.99 }
        ],
        bebida: [
            { nombre: "Vino", precio: 2.00 },
            { nombre: "Cerveza", precio: 2.15 },
            { nombre: "Refrescos", precio: 2.35 }
        ]
    }
};

let hora = prompt("Bienvenido. Para poder atenderte mejor, ¿nos puedes indicar qué hora es?");
hora = parseInt(hora);

function mostrarMenu() {
    let menuSeleccionado;

    if (hora >= 8 && hora < 13) {
        menuSeleccionado = menu.desayuno;
    } else if (hora >= 13 && hora < 17) {
        menuSeleccionado = menu.comida;
    } else if (hora >= 20 && hora < 24) { 
        menuSeleccionado = menu.cena;
    } else {
        return "El horario de nuestro restaurante es de 8:00 a 17:00 y de 20:00 a 24:00.";
    }

    let mensajeMenu = "Este es el menú:\n\nEntrantes:\n";
    menuSeleccionado.entrantes.forEach(item => {
        mensajeMenu += `${item.nombre} - $${item.precio.toFixed(2)}\n`;
    });

    mensajeMenu += "\nPlatos Principales:\n";
    menuSeleccionado.principal.forEach(item => {
        mensajeMenu += `${item.nombre} - $${item.precio.toFixed(2)}\n`;
    });

    mensajeMenu += "\nBebidas:\n";
    menuSeleccionado.bebida.forEach(item => {
        mensajeMenu += `${item.nombre} - $${item.precio.toFixed(2)}\n`;
    });

    return mensajeMenu;
}

let menuMostrar = mostrarMenu();
alert(menuMostrar);

let elecciones = {
    entrante: null,
    principal: null,
    bebida: null,
    total: 0
};

const mensajesAleatorios = [
    "¡Buena elección!",
    "¡Gran decisión!",
    "¡Has elegido muy bien!",
    "¡Muy bien!",
    "¡Eso suena bien!"
];

function elegirOpcion(tipo, opciones) {
    let mensajeOpcion = `Elija su ${tipo}, por favor:\n`;
    opciones.forEach(item => {
        mensajeOpcion += `${item.nombre} - $${item.precio.toFixed(2)}\n`;
    });

    let seleccion;
    while (true) {
        seleccion = prompt(mensajeOpcion).toLowerCase();
        const encontrado = opciones.find(item => item.nombre.toLowerCase() === seleccion);
        
        if (encontrado) {
            elecciones[tipo] = encontrado;
            elecciones.total += encontrado.precio;
            const mensajeAleatorio = mensajesAleatorios[Math.floor(Math.random() * mensajesAleatorios.length)];
            alert(`Has elegido: ${encontrado.nombre} - $${encontrado.precio.toFixed(2)}.\n${mensajeAleatorio}`);
            break;
        } else {
            alert("Por favor, introduce una de las opciones disponibles.");
        }
    }
}

function elegirEntrante() {
    let menuSeleccionado = hora >= 8 && hora < 13 ? menu.desayuno : hora >= 13 && hora < 17 ? menu.comida : menu.cena;
    elegirOpcion('entrante', menuSeleccionado.entrantes);
}

function elegirPrincipal() {
    let menuSeleccionado = hora >= 8 && hora < 13 ? menu.desayuno : hora >= 13 && hora < 17 ? menu.comida : menu.cena;
    elegirOpcion('principal', menuSeleccionado.principal);
}

function elegirBebida() {
    let menuSeleccionado = hora >= 8 && hora < 13 ? menu.desayuno : hora >= 13 && hora < 17 ? menu.comida : menu.cena;
    elegirOpcion('bebida', menuSeleccionado.bebida);
}

elegirEntrante();
elegirPrincipal();
elegirBebida();

alert(`Tus elecciones son:\nEntrante: ${elecciones.entrante.nombre} - $${elecciones.entrante.precio.toFixed(2)}\nPlato Principal: ${elecciones.principal.nombre} - $${elecciones.principal.precio.toFixed(2)}\nBebida: ${elecciones.bebida.nombre} - $${elecciones.bebida.precio.toFixed(2)}\nTotal: $${elecciones.total.toFixed(2)}.\n¡Buen provecho!`);


 