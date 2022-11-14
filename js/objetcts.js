const destinos = [
    {
        nombre: "MENDOZA",
        imagen: "../assets/mendoza-portada.jpg",
        precioIda: 6999,
        precioVuelta: 5649,
        total: 6999 + 5649
    },

    {
        nombre: "IGUAZU",
        imagen: "../assets/iguazu-portada.jpg",
        precioIda: 6455,
        precioVuelta: 5000,
        total: 6455 + 5000,
        descripcion:""
    },

    {
        nombre: "CORDOBA",
        imagen: "../assets/cordoba-portada.jpg",
        precioIda: 13187,
        precioVuelta: 24861,
        total: 13187 + 24861
    },
    
    {
        nombre: "BARILOCHE",
        imagen: "../assets/bariloche-portada.jpg",
        precioIda: 12300,
        precioVuelta: 10500,
        total: 12300 + 10500
        
    },

    {
        nombre: "PUERTO MADRYN",
        imagen: "../assets/madryn-portada.jpg",
        precioIda: 15675,
        precioVuelta: 9942,
        total: 15675+ 9942
    },

    {
        nombre: "JUJUY",
        imagen: "../assets/jujuy-portada.jpg",
        precioIda: 9931,
        precioVuelta: 11478,
        total: 9931+ 11478
    },

    {
        nombre: "USHUAIA",
        imagen: "../assets/ushuaia-portada.jpg",
        precioIda: 13699,
        precioVuelta: 10930,
        total: 13699+10930
    },

    {
        nombre: "SALTA",
        imagen: "../assets/salta-portada.jpg",
        precioIda: 16448,
        precioVuelta: 7309,
        total: 16448+7309
    }
];

const destinosAumento = destinos.map(destino => {
    return {
        nombre: destino.nombre, precioIda: Math.ceil(destino.precioIda * 1.20), precioVuelta: Math.ceil(destino.precioVuelta * 1.20), total: Math.floor((destino.precioIda * 1.20) + (destino.precioVuelta * 1.20))
    }
})

const equipajes = [
    { id: 1, peso: 23, precio: 3399 },
    { id: 2, peso: 12, precio: 2599 },
    { id: 3, peso: 10, precio: 2399 },
    { id: 4, peso: 0, precio: 0 }
]
