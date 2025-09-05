// import enterizos  from '../data./assets/catalog/enterizos';
const enterizos = '/assets/catalogo/enterizos';
const busos = '/assets/catalogo/busos';
const shorts = '/assets/catalogo/shorts';
const blusas = '/assets/catalogo/blusas';
const shortMastop = '/assets/catalogo/short+top';

const pushUp = 'push-up';
const enV = 'en-v';
const bolsillo = 'bolsillo-suplex';

const botaAncha = 'bota-ancha';
const mangaLarga = 'manga-larga';
const martina = 'martina';

const basicas = 'basicas'

export const productos = [
  // {
  //   id: 1,
  //   nombre: "Enterizo",
  //   modelo: "bota ancha",
  //   genero: "dama",
  //   precio: 70000,
  //   precio_compra: 0,
  //   descripcion: "blanco,negro,zul petrolio",
  //   currentImage: '/assets/images/enterizo-bota-ancha-azul-rey.jpeg',
  //   imagenes: [
  //     '/assets/images/enterizo-bota-ancha-azul-rey.jpeg',
  //     '/assets/images/enterizo-bota-ancha-atras.jpeg',
      
  //   ]
  // },
  
  // {
  //   id: 2,
  //   nombre: "Enterizo",
  //   modelo: "push",
  //   genero: "dama",
  //   precio: 65000,
  //   descripcion: "",
  //   currentImage: '/assets/images/enterizo-lila.jpg',
  //   imagenes: [
  //     '/assets/images/enterizo-lila.jpg',
  //     '/assets/images/enterizo-morado.jpg',
  //     '/assets/images/enterizo-naranja.jpg',
  //   ]

  // },
  {
    id: 3,
    nombre: "Enterizo",
    modelo: "Push-up bota ancha",
    genero: "dama",
    precio: 80000,
    precio_compra: 48500,
    descripcion: "Rojo, Negro, Verde Militar, Lila, Habano",
    currentImage: `${enterizos}/${pushUp}/${botaAncha}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${pushUp}/${botaAncha}/delante-negro.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/atras-negro.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/delante-rojo.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/atras-rojo.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/delante-habano.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/atras-habano.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/delante-lila.jpg`,
      `${enterizos}/${pushUp}/${botaAncha}/atras-lila.jpg`,
    ]
  },
  {
    id: 4,
    nombre: "Buso",
    modelo: "Martina Manga Larga",
    genero: "dama",
    precio: 32000,
    precio_compra: 16000,
    descripcion: "",
    currentImage: `${busos}/${mangaLarga}/${martina}/amarillo-brillante.jpg`,
    imagenes: [
      `${busos}/${mangaLarga}/${martina}/amarillo-brillante.jpg`,
      `${busos}/${mangaLarga}/${martina}/amarillo-claro.jpg`,
      `${busos}/${mangaLarga}/${martina}/amarillo-mostaza.jpg`,
      `${busos}/${mangaLarga}/${martina}/azul-cielo.jpg`,
      `${busos}/${mangaLarga}/${martina}/azul-claro.jpg`,
      `${busos}/${mangaLarga}/${martina}/azul-oscuro.jpg`,
      `${busos}/${mangaLarga}/${martina}/azul-rey.jpg`,
      `${busos}/${mangaLarga}/${martina}/fucsia.jpg`,
      `${busos}/${mangaLarga}/${martina}/naranja.jpg`,
      `${busos}/${mangaLarga}/${martina}/negro.jpg`,
      `${busos}/${mangaLarga}/${martina}/terracota.jpg`,
      `${busos}/${mangaLarga}/${martina}/verde-bosque.jpg`,
      `${busos}/${mangaLarga}/${martina}/verde-manzana.jpg`,
      `${busos}/${mangaLarga}/${martina}/verde-turquesa.jpg`,
    ]
  },
  {
    id: 5,
    nombre: "Short (Solo)",
    modelo: "Push-up",
    genero: "dama",
    precio: 32000,
    precio_compra: 16000,
    descripcion: "Azul, Negro, Verde, Gris, Fucsia",
    currentImage: `${shorts}/${pushUp}/delante-fucsia.jpg`,
    imagenes: [
      `${shorts}/${pushUp}/delante-fucsia.jpg`,
      `${shorts}/${pushUp}/atras-fucsia.jpg`,
      `${shorts}/${pushUp}/delante-negro.jpg`,
      `${shorts}/${pushUp}/atras-negro.jpg`,
      `${shorts}/${pushUp}/delante-gris-claro.jpg`,
      `${shorts}/${pushUp}/atras-gris-claro.jpg`,
      `${shorts}/${pushUp}/delante-azul-oscuro.jpg`,
      `${shorts}/${pushUp}/atras-azul-oscuro.jpg`,
      `${shorts}/${pushUp}/delante-verde-bosque.jpg`,
      `${shorts}/${pushUp}/atras-verde-bosque.jpg`,
    ]
  },
{
    id: 6,
    nombre: "Blusa",
    modelo: "Basica",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    descripcion: "",
    currentImage: `${blusas}/${basicas}/delante-rosado-calido.jpg`,
    imagenes: [
      `${blusas}/${basicas}/delante-rosado-calido.jpg`,
      `${blusas}/${basicas}/delante-morado.jpg`,
      `${blusas}/${basicas}/delante-negro.jpg`,
      `${blusas}/${basicas}/delante-fucsia.jpg`,
      `${blusas}/${basicas}/delante-rojo.jpg`,
      `${blusas}/${basicas}/delante-rosado.jpg`,
      `${blusas}/${basicas}/delante-azul.jpg`,
      `${blusas}/${basicas}/delante-azul-cielo.jpg`,
      `${blusas}/${basicas}/delante-blanco.jpg`,
    ]
  },
  {
    id: 7,
    nombre: "Enterizo",
    modelo: "En V Power",
    genero: "dama",
    precio: 80000,
    precio_compra: 40500,
    descripcion: "Rojo, Negro, Verde Militar, Lila, Habano",
    currentImage: `${enterizos}/${enV}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${enV}/delante-negro.jpg`,
      `${enterizos}/${enV}/atras-negro.jpg`,
      `${enterizos}/${enV}/atras-azul.jpg`,
    ]
  },
  {
    id: 8,
    nombre: "Short + Top",
    modelo: "Bolsillo",
    genero: "dama",
    precio: 46000,
    precio_compra: 23000,
    descripcion: "Tela suplex",
    currentImage: `${shortMastop}/${bolsillo}/delante-habano-claro.jpg`,
    imagenes: [
      `${shortMastop}/${bolsillo}/delante-habano-claro.jpg`,
      `${shortMastop}/${bolsillo}/delante-lila.jpg`,
      `${shortMastop}/${bolsillo}/atras-lila.jpg`,
      `${shortMastop}/${bolsillo}/delante-negro.jpg`,
      `${shortMastop}/${bolsillo}/atras-negro.jpg`,
      `${shortMastop}/${bolsillo}/delante-habano-oscuro.jpg`,
      `${shortMastop}/${bolsillo}/atras-habano-oscuro.jpg`,
    ]
  },
  // {
  //   id: 9,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 10,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 11,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 12,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 13,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 14,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 15,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 16,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 17,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 18,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 19,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 20,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 21,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 22,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 23,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 24,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
  // {
  //   id: 25,
  //   nombre: "Short+Top",
  //   modelo: "short bolsillo+top poliamida",
  //   genero: "dama",
  //   precio: 38000,
  //   descripcion: "",
  //   currentImage: '/assets/images/short-bolsillo-poli.jpeg',
  //   imagenes: [
  //     '/assets/images/short-bolsillo-poli.jpeg',
  //     '/assets/images/short-bolsillo-atras.jpeg',
  //     '/assets/images/short-bolsillo-azul-petrolio.jpeg',
  //   ]
  // },
]