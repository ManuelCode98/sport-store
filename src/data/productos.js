// import enterizos  from '../data./assets/catalog/enterizos';
const enterizos = '/assets/catalogo/enterizos';
const buzos = '/assets/catalogo/buzos';
const shorts = '/assets/catalogo/shorts';
const blusas = '/assets/catalogo/blusas';
const blusones = '/assets/catalogo/blusones';
const shortMastop = '/assets/catalogo/short+top';
const licraMastop = '/assets/catalogo/licra+top';
const licra = '/assets/catalogo/licra';
const top = '/assets/catalogo/top';
const medias = '/assets/catalogo/medias';
const cinturillas = '/assets/catalogo/cinturillas';

const basicas = 'basicas';
const pushUp = 'push-up';
const calentadoras = 'calentadoras';
const unicolor = 'unicolor';
const enV = 'en-v';
const bolsillo = 'bolsillo-suplex';
const plus = 'plus';
const seamless = 'seamless';
const corto = 'corto';
const largo = 'largo';
const latex = 'latex';
const powernet = 'powernet';

const serenity = 'serenity';
const ela = 'ela';
const mangaLarga = 'manga-larga';
const martina = 'martina';
const oversizeCapriati = 'oversize-capriati';
const talego = 'talego';
const sinPushUp = 'sin-push-up';
const corazon = 'corazon';
const picapiedras = 'picapiedras';
const angie = 'angie';
const luxury = 'luxury';

const libelula = 'libelula'

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
    modelo: "Largo Push-up Serenity",
    genero: "dama",
    precio: 85000,
    precio_compra: 48500,
    precio_anterior:100000,
    descripcion: "Rojo, Negro, Verde Militar, Lila, Habano",
    currentImage: `${enterizos}/${largo}/${pushUp}/${serenity}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${largo}/${pushUp}/${serenity}/delante-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/atras-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/delante-rojo.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/atras-rojo.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/delante-habano.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/atras-habano.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/delante-lila.jpg`,
      `${enterizos}/${largo}/${pushUp}/${serenity}/atras-lila.jpg`,
    ],
    descuento: true
  },
  {
    id: 4,
    nombre: "Buzo",
    modelo: "Unicolor Manga Larga",
    genero: "dama",
    precio: 32000,
    precio_compra: 16000,
    precio_anterior:42000,
    descripcion: "",
    currentImage: `${buzos}/${unicolor}/${mangaLarga}/delante-amarillo-brillante.jpg`,
    imagenes: [
      `${buzos}/${unicolor}/${mangaLarga}/delante-amarillo-brillante.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-amarillo-claro.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-amarillo-mostaza.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-azul-cielo.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-azul-oscuro.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-azul-rey.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-fucsia.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-naranja.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-negro.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-terracota.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-verde-bosque.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-verde-manzana.jpg`,
      `${buzos}/${unicolor}/${mangaLarga}/delante-verde-turquesa.jpg`,
    ],
    descuento: true
  },
  {
    id: 5,
    nombre: "Short (Solo)",
    modelo: "Push-up Corazon",
    genero: "dama",
    precio: 29000,
    precio_compra: 16000,
    precio_anterior:35000,
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
    ],
    descuento: true
  },
{
    id: 6,
    nombre: "Blusa",
    modelo: "Libelula",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    precio_anterior:27000,
    descripcion: "",
    currentImage: `${blusas}/${basicas}/${libelula}/delante-rosado-calido.jpg`,
    imagenes: [
      `${blusas}/${basicas}/${libelula}/delante-rosado-calido.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-morado.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-negro.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-fucsia.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-rojo.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-rosado.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-azul.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-azul-cielo.jpg`,
      `${blusas}/${basicas}/${libelula}/delante-blanco.jpg`,
    ],
    descuento: true
  },
  {
    id: 7,
    nombre: "Enterizo",
    modelo: "Largo Push Up Luxury",
    genero: "dama",
    precio: 75000,
    precio_compra: 40500,
    precio_anterior:83000,
    // descripcion: "Rojo, Negro, Verde Militar, Lila, Habano",
    descripcion: "",
    currentImage: `${enterizos}/${largo}/${pushUp}/${luxury}/delante-negro.jpg`,
    imagenes: [
      `${enterizos}/${largo}/${pushUp}/${luxury}/delante-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${luxury}/atras-negro.jpg`,
      `${enterizos}/${largo}/${pushUp}/${luxury}/atras-azul.jpg`,
    ],
    descuento: true
  },
  {
    id: 8,
    nombre: "Short + Top",
    modelo: "Bolsillo",
    genero: "dama",
    precio: 40000,
    precio_compra: 23000,
    precio_anterior:48000,
    descripcion: "",
    currentImage: `${shortMastop}/${bolsillo}/delante-habano-claro.jpg`,
    imagenes: [
      `${shortMastop}/${bolsillo}/delante-habano-claro.jpg`,
      `${shortMastop}/${bolsillo}/delante-lila.jpg`,
      `${shortMastop}/${bolsillo}/atras-lila.jpg`,
      `${shortMastop}/${bolsillo}/delante-negro.jpg`,
      `${shortMastop}/${bolsillo}/atras-negro.jpg`,
      `${shortMastop}/${bolsillo}/delante-habano-oscuro.jpg`,
      `${shortMastop}/${bolsillo}/atras-habano-oscuro.jpg`,
    ],
    descuento: true
  },
  {
    id: 9,
    nombre: "Licra + Top",
    modelo: "Cuatro Tiras",
    genero: "dama",
    precio: 60000,
    precio_compra: 32000,
    precio_anterior:69000,
    descripcion: "Talla Plus",
    currentImage: `${licraMastop}/${plus}/delante-negro.jpg`,
    imagenes: [
      `${licraMastop}/${plus}/delante-negro.jpg`,
      `${licraMastop}/${plus}/atras-rojo.jpg`,
      `${licraMastop}/${plus}/muestra-azul-rey.jpg`,
      `${licraMastop}/${plus}/muestra-azul-oscuro.jpg`,
    ],
    descuento: true
  },
  // {
  //   id: 10,
  //   nombre: "Enterizo",
  //   modelo: "Push-up Corto Ela",
  //   genero: "dama",
  //   precio: 75000,
  //   precio_compra: 41500,
  //   precio_anterior:85000,
  //   // descripcion: "Rojo, Negro, Verde Militar, Lila, Azul Bebe, Cocoa, Vainilla",
  //   descripcion: "",
  //   currentImage: `${enterizos}/${corto}/${pushUp}/${ela}/delante-rojo.jpg`,
  //   imagenes: [
  //     `${enterizos}/${corto}/${pushUp}/${ela}/delante-rojo.jpg`,
  //   ],
  //   descuento: true
  // },
  {
    id: 11,
    nombre: "Bluson",
    modelo: "Oversize Capriati",
    genero: "dama",
    precio: 35000,
    precio_compra: 16000,
    precio_anterior: 45000,
    descripcion: "",
    currentImage: `${blusones}/${oversizeCapriati}/delante-fucsia-claro.jpg`,
    imagenes: [
      `${blusones}/${oversizeCapriati}/delante-fucsia-claro.jpg`,
      `${blusones}/${oversizeCapriati}/delante-fucsia-oscuro.jpg`,
      `${blusones}/${oversizeCapriati}/delante-negro.jpg`,
      `${blusones}/${oversizeCapriati}/delante-gris.jpg`,
      `${blusones}/${oversizeCapriati}/delante-blanco.jpg`,
      `${blusones}/${oversizeCapriati}/delante-verde-bosque.jpg`,
      `${blusones}/${oversizeCapriati}/delante-verde-claro.jpg`,
      `${blusones}/${oversizeCapriati}/delante-verde-manzana.jpg`,
      `${blusones}/${oversizeCapriati}/delante-rosado.jpg`,
    ],
    descuento: true
  },
  {
    id: 12,
    nombre: "Enterizo",
    modelo: "Corto Sin Push-up Talego",
    genero: "dama",
    precio: 75000,
    precio_compra: 37500,
    precio_anterior:83000,
    descripcion: "",
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
    ],
    descuento: true
  },
  //
  {
    id: 13,
    nombre: "Licra (Solo)",
    modelo: "Push Up Corazon",
    genero: "dama",
    precio: 38000,
    precio_compra: 24000,
    precio_anterior:44000,
    descripcion: "",
    currentImage: `${licra}/${pushUp}/${corazon}/atras-azul-petroleo.jpg`,
    imagenes: [
      `${licra}/${pushUp}/${corazon}/atras-azul-petroleo.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-cafe.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-fucsia.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-gris.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-lila.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-negro.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-rojo.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-terracota.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-uva.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-vainilla.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-verde-esmeralda.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-azul-rey.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-verde-militar.jpg`,
      `${licra}/${pushUp}/${corazon}/atras-azul-turqui.jpg`,
    ],
    descuento: true
  },
  {
    id: 14,
    nombre: "Short (Solo)",
    modelo: "Seamles",
    genero: "dama",
    precio: 59000,
    precio_compra: 39000,
    precio_anterior:65000,
    descripcion: "",
    currentImage: `${shorts}/${seamless}/delante-negro.jpg`,
    imagenes: [
      `${shorts}/${seamless}/delante-negro.jpg`,
      `${shorts}/${seamless}/delante-terracota.jpg`,
      `${shorts}/${seamless}/delante-rosado.jpg`,
    ],
    descuento: true
  },
  {
    id: 15,
    nombre: "Top",
    modelo: "",
    genero: "dama",
    precio: 15000,
    precio_compra: 7000,
    precio_anterior:20000,
    descripcion: "",
    currentImage: `${top}/delante-terracota.jpg`,
    imagenes: [
      `${top}/delante-terracota.jpg`,
    ],
    descuento: true
  },
  {
    id: 16,
    nombre: "Top",
    modelo: "",
    genero: "dama",
    precio: 19000,
    precio_compra: 11000,
    precio_anterior:25000,
    descripcion: "",
    currentImage: `${top}/delante-rojo.jpg`,
    imagenes: [
      `${top}/delante-rojo.jpg`,
    ],
    descuento: true
  },
  {
    id: 17,
    nombre: "Medias",
    modelo: "Calentadoras",
    genero: "dama",
    precio: 15000,
    precio_compra: 9000,
    precio_anterior:18000,
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
    ],
    descuento: true
  },
  {
    id: 18,
    nombre: "Top",
    modelo: "Unicolor Picapiedras",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    precio_anterior:25000,
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
    ],
    descuento: true
  },
  {
    id: 19,
    nombre: "Top",
    modelo: "Unicolor Angie",
    genero: "dama",
    precio: 20000,
    precio_compra: 10000,
    precio_anterior:25000,
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
    ],
    descuento: true
  },
  {
    id: 20,
    nombre: "Enterizo",
    modelo: "Corto Push-up Luxury",
    genero: "dama",
    precio: 60000,
    precio_compra: 38500,
    precio_anterior:68000,
    descripcion: "",
    currentImage: `${enterizos}/${corto}/${pushUp}/${luxury}/delante-rojo.jpg`,
    imagenes: [
      `${enterizos}/${corto}/${pushUp}/${luxury}/delante-rojo.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-rojo.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-azul.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-morado.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/atras-negro.jpg`,
      `${enterizos}/${corto}/${pushUp}/${luxury}/delante-terracota.jpg`,
    ],
    descuento: true
  },
  {
    id: 21,
    nombre: "Cinturilla",
    modelo: "Latex",
    genero: "dama",
    precio: 68000,
    precio_compra: 38000,
    precio_anterior:74000,
    descripcion: "Hasta 2XL",
    currentImage: `${cinturillas}/${latex}/delante-negra.jpg`,
    imagenes: [
      `${cinturillas}/${latex}/delante-negra.jpg`,
      `${cinturillas}/${latex}/guia-negra.jpg`,
      `${cinturillas}/${latex}/calibre-negra.jpg`,
    ],
    descuento: true
  },
  {
    id: 22,
  nombre: "Cinturilla",
    modelo: "Power Net Premium",
    genero: "dama",
    precio: 98000,
    precio_compra: 45000,
    precio_anterior:110000,
    descripcion: "Hasta 2XL",
    currentImage: `${cinturillas}/${powernet}/delante-negra.jpg`,
    imagenes: [
      `${cinturillas}/${powernet}/delante-negra.jpg`,
      `${cinturillas}/${powernet}/guia-negra.jpg`,
    ],
    descuento: true
  },
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