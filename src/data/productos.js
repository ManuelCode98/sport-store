// import enterizos  from '../data./assets/catalog/enterizos';
const enterizos = '/assets/catalogo/enterizos';
const busos = '/assets/catalogo/busos';
const shorts = '/assets/catalogo/shorts';
const blusas = '/assets/catalogo/blusas';
const blusones = '/assets/catalogo/blusones';
const shortMastop = '/assets/catalogo/short+top';
const licraMastop = '/assets/catalogo/licra+top';
const licra = '/assets/catalogo/licra';
const top = '/assets/catalogo/top';
const medias = '/assets/catalogo/medias';


const pushUp = 'push-up';
const calentadoras = 'calentadoras';
const unicolor = 'unicolor';
const enV = 'en-v';
const bolsillo = 'bolsillo-suplex';
const plus = 'plus';
const seamless = 'seamless';
const corto = 'corto';
const largo = 'largo';

const botaAncha = 'bota-ancha';
const ela = 'ela';
const mangaLarga = 'manga-larga';
const martina = 'martina';
const capriati = 'capriati';
const talego = 'talego';
const sinPushUp = 'sin-push-up';
const corazon = 'corazon';
const picapiedras = 'picapiedras';
const angie = 'angie';
const luxury = 'luxury';

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
    currentImage: `${enterizos}/${largo}/${pushUp}/${botaAncha}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/delante-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/atras-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/delante-rojo.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/atras-rojo.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/delante-habano.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/atras-habano.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/delante-lila.jpg`,
      `${enterizos}/${largo}/${pushUp}/${botaAncha}/atras-lila.jpg`,
    ]
  },
  {
    id: 4,
    nombre: "Buso",
    modelo: "Unicolor Manga Larga",
    genero: "dama",
    precio: 30000,
    precio_compra: 16000,
    descripcion: "",
    currentImage: `${busos}/${unicolor}/${mangaLarga}/delante-amarillo-brillante.jpg`,
    imagenes: [
      `${busos}/${unicolor}/${mangaLarga}/delante-amarillo-brillante.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-amarillo-claro.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-amarillo-mostaza.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-azul-cielo.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-azul-oscuro.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-azul-rey.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-fucsia.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-naranja.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-negro.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-terracota.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-verde-bosque.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-verde-manzana.jpg`,
      `${busos}/${unicolor}/${mangaLarga}/delante-verde-turquesa.jpg`,
    ]
  },
  {
    id: 5,
    nombre: "Short (Solo)",
    modelo: "Push-up Corazon",
    genero: "dama",
    precio: 29000,
    precio_compra: 16000,
    descripcion: "Azul, Negro, Verde, Gris, Fucsia",
    currentImage: `${shorts}/${pushUp}/${corazon}/delante-fucsia.jpg`,
    imagenes: [
      `${shorts}/${pushUp}/${corazon}/delante-fucsia.jpg`,
      `${shorts}/${pushUp}/${corazon}/atras-fucsia.jpg`,
      `${shorts}/${pushUp}/${corazon}/delante-negro.jpg`,
      `${shorts}/${pushUp}/${corazon}/atras-negro.jpg`,
      `${shorts}/${pushUp}/${corazon}/delante-gris-claro.jpg`,
      `${shorts}/${pushUp}/${corazon}/atras-gris-claro.jpg`,
      `${shorts}/${pushUp}/${corazon}/delante-azul-oscuro.jpg`,
      `${shorts}/${pushUp}/${corazon}/atras-azul-oscuro.jpg`,
      `${shorts}/${pushUp}/${corazon}/delante-verde-bosque.jpg`,
      `${shorts}/${pushUp}/${corazon}/atras-verde-bosque.jpg`,
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
    // descripcion: "Rojo, Negro, Verde Militar, Lila, Habano",
    descripcion: "",
    currentImage: `${enterizos}/${largo}/${pushUp}/${enV}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${largo}/${pushUp}/${enV}/delante-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${enV}/atras-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${enV}/atras-azul.jpg`,
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
    // descripcion: "Rojo, Negro, Verde Militar, Lila, Azul Bebe, Cocoa, Vainilla",
    descripcion: "",
    currentImage: `${enterizos}/${corto}/${pushUp}/${ela}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${corto}/${pushUp}/${ela}/delante-rojo.jpg`,
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
    modelo: "Corto Sin Push-up Talego",
    genero: "dama",
    precio: 59000,
    precio_compra: 37500,
    descripcion: "Tela nylon power",
    currentImage: `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-rojo.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-negro.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/atras-azul-rey.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/atras-naranja.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-lila.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/atras-terracota.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-azul-claro.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/atras-verde-claro.jpg`,
      `${enterizos}/${corto}/${sinPushUp}/${talego}/delante-rosado.jpg`,
    ]
  },
  //
  {
    id: 13,
    nombre: "Licra (Solo)",
    modelo: "Push Up Corazon",
    genero: "dama",
    precio: 38000,
    precio_compra: 24000,
    descripcion: "",
    currentImage: `${licra}/${pushUp}/${corazon}/atras-azul-rey.jpg`,
    imagenes: [
      `${licra}/${pushUp}/${corazon}/atras-azul-rey.jpg`,
    ]
  },
  {
    id: 14,
    nombre: "Short (Solo)",
    modelo: "Seamles",
    genero: "dama",
    precio: 59000,
    precio_compra: 39000,
    descripcion: "",
    currentImage: `${shorts}/${seamless}/delante-negro.jpg`,
    imagenes: [
      `${shorts}/${seamless}/delante-negro.jpg`,
      `${shorts}/${seamless}/delante-terracota.jpg`,
      `${shorts}/${seamless}/delante-rosado.jpg`,
    ]
  },
  {
    id: 15,
    nombre: "Top",
    modelo: "",
    genero: "dama",
    precio: 19000,
    precio_compra: 11000,
    descripcion: "",
    currentImage: `${top}/delante-terracota.jpg`,
    imagenes: [
      `${top}/delante-terracota.jpg`,
    ]
  },
  {
    id: 16,
    nombre: "Top",
    modelo: "",
    genero: "dama",
    precio: 15000,
    precio_compra: 7000,
    descripcion: "",
    currentImage: `${top}/delante-rojo.jpg`,
    imagenes: [
      `${top}/delante-rojo.jpg`,
    ]
  },
  {
    id: 17,
    nombre: "Medias",
    modelo: "Calentadoras",
    genero: "dama",
    precio: 18000,
    precio_compra: 9000,
    descripcion: "",
    currentImage: `${medias}/${calentadoras}/delante-azul-celeste.jpg`,
    imagenes: [
      `${medias}/${calentadoras}/delante-azul-celeste.jpg`,
      `${medias}/${calentadoras}/delante-azul-rey.jpg`,
      `${medias}/${calentadoras}/delante-azul-turquesa.jpg`,
      `${medias}/${calentadoras}/delante-blanco.jpg`,
      `${medias}/${calentadoras}/delante-gris.jpg`,
      `${medias}/${calentadoras}/delante-naranja.jpg`,
      `${medias}/${calentadoras}/delante-negro.jpg`,
      `${medias}/${calentadoras}/delante-rosado-claro.jpg`,
      `${medias}/${calentadoras}/delante-rosado-oscuro.jpg`,
      `${medias}/${calentadoras}/delante-verde-menta.jpg`,
    ]
  },
  {
    id: 18,
    nombre: "Top",
    modelo: "Unicolor Picapiedras",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    descripcion: "",
    currentImage: `${top}/${unicolor}/${picapiedras}/delante-fucsia.jpg`,
    imagenes: [
      `${top}/${unicolor}/${picapiedras}/delante-fucsia.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-amarillo-colombia.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-azul-celeste.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-amarillo-neon.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-azul-turqueza.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-azul-turqui.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-blanco.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-cafe.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-cereza.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-coral.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-gris.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-naranja.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-terracota.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-verde-cali.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-verde-militar.jpg`,
      `${top}/${unicolor}/${picapiedras}/delante-verde-neon.jpg`,
    ]
  },
  {
    id: 19,
    nombre: "Top",
    modelo: "Unicolor Angie",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    descripcion: "",
    currentImage: `${top}/${unicolor}/${angie}/delante-verde-cali.jpg`,
    imagenes: [
      `${top}/${unicolor}/${angie}/delante-verde-cali.jpg`,
      `${top}/${unicolor}/${angie}/delante-amarillo-mostaza.jpg`,
      `${top}/${unicolor}/${angie}/delante-azul-rey.jpg`,
      `${top}/${unicolor}/${angie}/delante-amarillo-neon.jpg`,
      `${top}/${unicolor}/${angie}/delante-coral.jpg`,
      `${top}/${unicolor}/${angie}/delante-azul-turqui.jpg`,
      `${top}/${unicolor}/${angie}/delante-cafe.jpg`,
      `${top}/${unicolor}/${angie}/delante-negro.jpg`,
      `${top}/${unicolor}/${angie}/delante-gris.jpg`,
      `${top}/${unicolor}/${angie}/delante-terracota.jpg`,
      `${top}/${unicolor}/${angie}/delante-verde-militar.jpg`,
    ]
  },
  {
    id: 20,
    nombre: "Enterizo",
    modelo: "Corto Push-up Luxury",
    genero: "dama",
    precio: 60000,
    precio_compra: 45000,
    descripcion: "",
    currentImage: `${enterizos}/${corto}/${pushUp}/${luxury}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${corto}/${pushUp}/${luxury}/delante-rojo.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-rojo.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-azul.jpg`,
    ]
  },
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