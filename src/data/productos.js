// import enterizos  from '../data./assets/catalog/enterizos';
const enterizos = '/assets/catalogo/enterizos';
const busos = '/assets/catalogo/busos';
const shorts = '/assets/catalogo/shorts';
const blusas = '/assets/catalogo/blusas';
const blusones = '/assets/catalogo/blusones';
const shortMastop = '/assets/catalogo/short+top';
const licraMastop = '/assets/catalogo/licra+top';

const pushUp = 'push-up';
const enV = 'en-v';
const bolsillo = 'bolsillo-suplex';
const plus = 'plus';

const botaAncha = 'bota-ancha';
const cortoEla = 'corto-ela';
const mangaLarga = 'manga-larga';
const martina = 'martina';
const capriati = 'capriati';
const talego = 'talego';
const sinPushUp = 'sin-push-up';

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
    precio: 70000,
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
    precio: 30000,
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
    precio: 29000,
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
    precio: 18000,
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
    precio: 60000,
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
    precio: 38000,
    precio_compra: 23000,
    descripcion: "Tela suplex polimida",
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
  {
    id: 9,
    nombre: "Licra + Top",
    modelo: "Falta definir",
    genero: "dama",
    precio: 39000,
    precio_compra: 23000,
    descripcion: "Talla Plus",
    currentImage: `${licraMastop}/${plus}/delante-negro.jpg`,
    imagenes: [
      `${licraMastop}/${plus}/delante-negro.jpg`,
      `${licraMastop}/${plus}/atras-rojo.jpg`,
      `${licraMastop}/${plus}/muestra-azul-rey.jpg`,
      `${licraMastop}/${plus}/muestra-azul-oscuro.jpg`,
    ]
  },
  {
    id: 10,
    nombre: "Enterizo",
    modelo: "Push-up Corto Ela",
    genero: "dama",
    precio: 75000,
    precio_compra: 41500,
    descripcion: "Rojo, Negro, Verde Militar, Lila, Azul Bebe, Cocoa, Vainilla",
    currentImage: `${enterizos}/${pushUp}/${cortoEla}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${pushUp}/${cortoEla}/delante-rojo.jpg`,
    ]
  },
  {
    id: 11,
    nombre: "Bluson",
    modelo: "Capriati",
    genero: "dama",
    precio: 25000,
    precio_compra: 16000,
    descripcion: "Negro, Verde, Gris, Fucsia",
    currentImage: `${blusones}/${capriati}/delante-fucsia-claro.jpg`,
    imagenes: [
      `${blusones}/${capriati}/delante-fucsia-claro.jpg`,
      `${blusones}/${capriati}/delante-fucsia-oscuro.jpg`,
      `${blusones}/${capriati}/delante-negro.jpg`,
      `${blusones}/${capriati}/delante-gris.jpg`,
      `${blusones}/${capriati}/delante-blanco.jpg`,
      `${blusones}/${capriati}/delante-verde-bosque.jpg`,
      `${blusones}/${capriati}/delante-verde-claro.jpg`,
      `${blusones}/${capriati}/delante-verde-manzana.jpg`,
      `${blusones}/${capriati}/delante-rosado.jpg`,
    ]
  },
  {
    id: 12,
    nombre: "Enterizo",
    modelo: "Sin Push-up Talego",
    genero: "dama",
    precio: 59000,
    precio_compra: 37500,
    descripcion: "Tela nylon power",
    currentImage: `${enterizos}/${sinPushUp}/${talego}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${sinPushUp}/${talego}/delante-rojo.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/delante-negro.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/atras-azul-rey.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/atras-naranja.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/delante-lila.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/atras-terracota.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/delante-azul-claro.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/atras-verde-claro.jpg`,
      `${enterizos}/${sinPushUp}/${talego}/delante-rosado.jpg`,
    ]
  },
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