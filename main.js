stock = [{
    id: 1,
    nombre: 'Magsafe',
    precio: '$17.000,00',
    cantidad: 2,
    imagen: "./imagenes/magsafe.jpg",
    modelo: 'cargador',
    }, 
    {
    id: 2,
    nombre: 'Joystick PS3',
    precio: '$15.000,00',
    cantidad: 1,
    imagen: "./imagenes/joystickps3.jpg",
    modelo:'joysticks',
    },
    {    
    id: 3,
    nombre: 'Joystick PS4',
    precio: '$45.000,00',
    cantidad: 3,
    imagen: "./imagenes/joystickps4.jpg",
    modelo:'joysticks',
    },
    {
    id: 4,
    nombre: 'MiniPrinter',
    precio: '$30.000,00',
    cantidad: 0,
    imagen: "./imagenes/miniprinter.jpg",
    modelo: 'camaras',
    },
    {
    id: 5,
    nombre: 'Parlante JBL',
    precio: '$56.000,00',
    cantidad: 0,
    imagen: "./imagenes/parlantejbl.jpg",
    modelo: 'audio',
    },
    {
    id: 6,
    nombre: 'Patillera',
    precio: '$11.000,00',
    cantidad: 0,
    imagen: "./imagenes/patillera.jpg",
    modelo: 'barba',
    },
    {
    id: 7,
    nombre: 'Porta Sube',
    precio: '$3.500,00',
    cantidad: 0,
    imagen: "./imagenes/portasube.jpg",
    modelo: 'portasube',
    },
    {
    id: 8,
    nombre: 'Velador',
    precio: '$11.000,00',
    cantidad: 0,
    imagen: "./imagenes/velador.jpg",
    modelo: 'luz',
    },
]

const container = document.getElementById('container');

const filter = document.getElementById('filtroModelo');

let stockFiltrado = [...stock];

function actualizarCantidad (producto, cant) {
    producto.cantidad = Math.max(0,  producto.cantidad + cant);
    filtrarProductos();
}

function renderizar (){
    container.innerHTML = '';
    stockFiltrado.forEach((producto) => {
        let section = document.createElement('div');
        section.classList.add('productos')
        section.innerHTML = `
            <p>Nombre: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <img src="${producto.imagen}" alt='${producto.nombre}'>
            <p>Cantidad</p>
                <div class='div-cantidad'>
                    <button class='resta' data-id='${producto.id}'>-</button> 
                    ${producto.cantidad} 
                    <button class='sumar' data-id='${producto.id}'>+</button>
                </div>
            `;
        container.appendChild(section);
    });
}




function filtrarProductos(){
    const opcionElegida = filtroModelo.value;
    stockFiltrado = stock.filter(producto => opcionElegida === '' || producto.modelo === opcionElegida);
    renderizar(stockFiltrado);
}

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('resta')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const producto = stock.find(p => p.id === id);
        actualizarCantidad(producto, -1);
    }
    if (event.target.classList.contains('sumar')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const producto = stock.find(p => p.id === id);
        actualizarCantidad(producto, 1);
    }
});

filtroModelo.addEventListener('change', filtrarProductos);


renderizar();