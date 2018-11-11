const estaciones = [
  {
    _id: 1,
    nombre: "Moravia",
    ciclas: 0,
    parking: 40,
    direccion: "CALLE 82A # 52-29",
    descripcion:
      "Frente a la entrada principal del Centro de Desarrollo Cultural de Moravia",
    zona: 1,
    lat: 6.276585,
    lng: -75.5669927
  },
  {
    _id: 2,
    nombre: "Universidad",
    ciclas: 10,
    parking: 30,
    direccion: "CALLE 73 # 52-2",
    descripcion: "Bajo el viaducto de la estacion Universidad del Metro.",
    zona: 1,
    lat: 6.2692541,
    lng: -75.5676977
  },
  {
    _id: 3,
    nombre: "Ruta N",
    ciclas: 4,
    parking: 36,
    direccion: "CARRERA 52 # 67A-13",
    descripcion:
      "Frente a la fachada principal de Ruta N sobre la ciclorruta de la Avenida Carabobo.",
    zona: 1,
    lat: 6.2655124,
    lng: -75.5688354
  },
  {
    _id: 4,
    nombre: "Punto Cero",
    ciclas: 2,
    parking: 15,
    direccion: "CARRERA 64 # 65-59",
    descripcion:
      "Intercambio vial de Punto Cero al lado de la estacion de policia",
    zona: 2,
    lat: 6.265161,
    lng: -75.5772547
  },
  {
    _id: 5,
    nombre: "Robledo",
    ciclas: 1,
    parking: 34,
    direccion: "CARRERA 77B # 60-22",
    descripcion: "Diagonal al Colegio Mayor de Antioquia",
    zona: 2,
    lat: 6.271922,
    lng: -75.5935127
  },
  {
    _id: 6,
    nombre: "SIU-UdeA",
    ciclas: 9,
    parking: 11,
    direccion: "CARRERA 52 # 61-21",
    descripcion: "Costado oriental de la SIU sobre la ciclorruta de Carabobo",
    zona: 3,
    lat: 6.2600518,
    lng: -75.5695899
  },
  {
    _id: 7,
    nombre: "Colombia",
    ciclas: 8,
    parking: 12,
    direccion: "CARRERA 65 # 50-29",
    descripcion: "Esquina occidental de la Carrera 65 con Calle 51",
    zona: 4,
    lat: 6.2563173,
    lng: -75.5830855
  },
  {
    _id: 8,
    nombre: "Suramericana",
    ciclas: 8,
    parking: 12,
    direccion: "CALLE 47D # 65-92",
    descripcion: "Bajo el viaducto de la estación Suramericana del Metro",
    zona: 4,
    lat: 6.2580278,
    lng: -75.599072
  },
  {
    _id: 9,
    nombre: "Primavera",
    ciclas: 8,
    parking: 12,
    direccion: "Calle 24 con Carrera 43F",
    descripcion: "Barrio Colombia sobre la Cll. 24 con Cra. 43F",
    zona: 5,
    lat: 6.2256029,
    lng: -75.574938
  },
  {
    _id: 10,
    nombre: "Sabaneta Parque",
    ciclas: 6,
    parking: 18,
    direccion: "CARRERA 45 # 70 SUR",
    descripcion: "Desconocida",
    zona: 7,
    lat: 6.1512175,
    lng: -75.6181565
  },
  {
    _id: 11,
    nombre: "Sabaneta Metro",
    ciclas: 24,
    parking: 6,
    direccion: "CARRERA 49 # 67 SUR",
    descripcion: "Desconocida",
    zona: 7,
    lat: 6.1565718,
    lng: -75.618994
  },
  {
    _id: 12,
    nombre: "Universidad Nacional",
    ciclas: 21,
    parking: 18,
    direccion: "CALLE 59A # 64E-44",
    descripcion:
      "Porteria de la Iguan con Carrera 65 de la Universidad Nacional",
    zona: 2,
    lat: 6.2596231,
    lng: -75.5812055
  },
  {
    _id: 13,
    nombre: "Museo de Antioquia",
    ciclas: 37,
    parking: 3,
    direccion: "CARRERA 52 # 52-36",
    descripcion:
      "Plazoleta de Botero frente a la entrada principal del Museo de Antioquia",
    zona: 3,
    lat: 6.2520471,
    lng: -75.5710131
  },
  {
    _id: 14,
    nombre: "Plaza Mayor",
    ciclas: 2,
    parking: 15,
    direccion: "CALLE 41 # 55-80",
    descripcion:
      "Costado sur de Plaza Mayor sobre la Avenida Ferrocarril, salida puente peatonal de Metropolis",
    zona: 3,
    lat: 6.252047,
    lng: -75.5775792
  },
  {
    _id: 15,
    nombre: "Los Colores",
    ciclas: 6,
    parking: 16,
    direccion: "CARRERA 70 # TRANSVERSAL 51A",
    descripcion:
      "Al frente de la entrada principal de la Institución Universitaria Salazar y Herrera",
    zona: 4,
    lat: 6.260004,
    lng: -75.5873247
  },
  {
    _id: 16,
    nombre: "UPB",
    ciclas: 0,
    parking: 25,
    direccion: "CARRERA 70 # CIRCULAR 1-50",
    descripcion:
      "Sobre la ciclorruta de la Carrera 70 frente a la entrada de la UPB",
    zona: 4,
    lat: 6.244998,
    lng: -75.5913767
  },
  {
    _id: 17,
    nombre: "Industriales Metro",
    ciclas: 7,
    parking: 31,
    direccion: "CARRERA 48 # 27-86",
    descripcion:
      "Plazoleta del Centro Comercial Punto Clave sobre la ciclorruta de la Av. Las Vegas",
    zona: 5,
    lat: 6.2221586,
    lng: -75.5918157
  },
  {
    _id: 18,
    nombre: "Industriales Metroplus",
    ciclas: 7,
    parking: 23,
    direccion: "CARRERA 52 # 29B-138",
    descripcion: "Costado occidental de la Estación Industriales de Metroplus",
    zona: 6,
    lat: 6.2289131,
    lng: -75.57674
  },
  {
    _id: 19,
    nombre: "Nutibara",
    ciclas: 15,
    parking: 21,
    direccion: "CARRERA 65 # 30-1",
    descripcion:
      "Costado Occidental de la estacion Nutibara de Metroplus sobre la Carrera 65 con Calle 30",
    zona: 6,
    lat: 6.2320495,
    lng: -75.5850259
  },
  {
    _id: 20,
    nombre: "Unidad Deportiva de Belen",
    ciclas: 8,
    parking: 20,
    direccion: "CALLE 30A # 66B-18",
    descripcion:
      "Porteria de la Circular 1era con Av. Nutibara de la UPB al frente del periódico El Tiempo",
    zona: 6,
    lat: 6.2324571,
    lng: -75.5896561
  }
];

const usuarios = [
  {
    _id: 1,
    nombre: "Juanes Quintero",
    correo: "juaneschrome@gmail.com",
    tipo: "registrado",
    clave: "juanesquintero",
    celular: "3173368759",
    contacto_emergente: "sebastian - 305 2564190"
  },
  {
    _id: 2,
    nombre: "Cristian Pa",
    correo: "cc.acosta00@gmail.com",
    tipo: "registrado",
    clave: "cristianchica",
    celular: "313 6262117",
    contacto_emergente: "cristian - 301 7901863"
  },
  {
    _id: 3,
    nombre: "Felipe Usma",
    correo: "felipeusma@gmail.com",
    tipo: "registrado",
    clave: "felipeusma",
    celular: "300 7596871",
    contacto_emergente: "alejandro - 311 6569152"
  },
  {
    _id: 4,
    nombre: "Daniel Sanchez",
    correo: "danisanchez@gmail.com",
    tipo: "registrado",
    clave: "danielsanchez",
    celular: "316 4991180",
    contacto_emergente: "kevin - 350 2521951"
  }
];

const ciclas = [
  {
    _id: 1,
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: 2,
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: 3,
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: 4,
    estado: "en translado",
    disponibilidad: false
  },
  {
    _id: 5,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 6,
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: 7,
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: 8,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 9,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 10,
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: 11,
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: 12,
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: 13,
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: 14,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 15,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 16,
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: 17,
    estado: "en espera",
    disponibilidad: true
  }
];

const reservas = [
  {
    _id: 1,
    fecha_reserva: "2018/04/06 15:06:05",
    fecha_pago: "2018/04/06 15:16:15",
    fecha_prestamo: "2018/04/06 15:16:45",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 8,
    Cicla: 6,
    Usuario: 2
  },
  {
    _id: 2,
    fecha_reserva: "2018/04/02 20:06:05",
    fecha_pago: "2018/04/02 20:16:15",
    fecha_prestamo: "2018/04/02 20:16:45",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 2,
    Cicla: 10,
    Usuario: 3
  },
  {
    _id: 3,
    fecha_reserva: "2018/03/30 08:06:05",
    fecha_pago: "2018/03/30 08:28:15",
    fecha_prestamo: "2018/03/30 08:28:48",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 16,
    Cicla: 12,
    Usuario: 4
  },
  {
    _id: 4,
    fecha_reserva: "2018/03/30 12:36:35",
    fecha_pago: "2018/03/30 12:49:43",
    fecha_prestamo: "2018/03/30 12:50:08",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 13,
    Cicla: 9,
    Usuario: 3
  },
  {
    _id: 5,
    fecha_reserva: "2018/03/28 15:56:05",
    fecha_pago: "2018/03/28 16:05:51",
    fecha_prestamo: "2018/03/28 16:06:04",
    medio_pago: "Civica",
    monto: 1000,
    Estacion: 15,
    Cicla: 5,
    Usuario: 2
  },
  {
    _id: 6,
    fecha_reserva: "2018/04/06 15:06:05",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Civica",
    monto: 1000,
    Estacion: 1,
    Cicla: 2,
    Usuario: 1
  },
  {
    _id: 7,
    fecha_reserva: "2018/03/26 12:06:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 16,
    Cicla: 9,
    Usuario: 4
  },
  {
    _id: 8,
    fecha_reserva: "2018/04/01 10:56:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 5,
    Cicla: 12,
    Usuario: 2
  },
  {
    _id: 9,
    fecha_reserva: "2018/03/29 11:02:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 20,
    Cicla: 13,
    Usuario: 1
  },
  {
    _id: 10,
    fecha_reserva: "2018/04/02 13:06:05",
    fecha_pago: "2018/04/02 13:14:55",
    fecha_prestamo: "2018/04/02 13:15:15",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: 17,
    Cicla: 8,
    Usuario: 2
  }
];

const crud = require("./app/services/crud_mongo");

crud.Mongo().insertMany("estaciones", estaciones);
crud.Mongo().insertMany("usuarios", usuarios);
crud.Mongo().insertMany("ciclas", ciclas);
crud.Mongo().insertMany("reservas", reservas);

const reservas2 = [
  {
    _id: "5bde3408e7179a1b5302589f",
    fecha_reserva: "2018-04-06 15:06:05",
    fecha_pago: "2018-04-06 15:16:15",
    fecha_prestamo: "2018-04-06 15:16:45",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdbc65de7179a1b53018a0e",
    Cicla: "5bdbd88fe7179a1b53018f4f",
    Usuario: "5bde0b18e7179a1b53024be9"
  },
  {
    _id: "5bde1c12e7179a1b530253d3",
    fecha_reserva: "2018-04-02 20:06:05",
    fecha_pago: "2018-04-02 20:16:15",
    fecha_prestamo: "2018-04-02 20:16:45",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdb2503e7179a1b53013204",
    Cicla: "5bdbd82de7179a1b53018f37",
    Usuario: "5bde0573e7179a1b53024a6a"
  },
  {
    _id: "5bde30e4e7179a1b5302580c",
    fecha_reserva: "2018-03-30 08:06:05",
    fecha_pago: "2018-03-30 08:28:15",
    fecha_prestamo: "2018-03-30 08:28:48",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdb253de7179a1b53013282",
    Cicla: "5bdbd88fe7179a1b53018f4f",
    Usuario: "5bde0a09e7179a1b53024bba"
  },
  {
    _id: "5bde321fe7179a1b5302585e",
    fecha_reserva: "2018-03-30 12:36:35",
    fecha_pago: "2018-03-30 12:49:43",
    fecha_prestamo: "2018-03-30 12:50:08",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdb255ae7179a1b53013293",
    Cicla: "5bdbd88fe7179a1b53018f4f",
    Usuario: "5bde0a09e7179a1b53024bba"
  },
  {
    _id: "5bde3909e7179a1b53025926",
    fecha_reserva: "2018-03-28 15:56:05",
    fecha_pago: "2018-03-28 16:05:51",
    fecha_prestamo: "2018-03-28 16:06:04",
    medio_pago: "Civica",
    monto: 1000,
    Estacion: "5bdbc81ae7179a1b53018a6a",
    Cicla: "5bdbd936e7179a1b53018f73",
    Usuario: "5bde0c57e7179a1b53024c41"
  },
  {
    _id: "5bde39ede7179a1b5302594b",
    fecha_reserva: "2018-04-06 15:06:05",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Civica",
    monto: 1000,
    Estacion: "5bdbc65de7179a1b53018a0e",
    Cicla: "5bdbd8d7e7179a1b53018f55",
    Usuario: "5bde0b18e7179a1b53024be9"
  },
  {
    _id: "5bde3a4ee7179a1b5302595a",
    fecha_reserva: "2018-03-26 12:06:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdbc8b9e7179a1b53018a85",
    Cicla: "5bdbd88fe7179a1b53018f4f",
    Usuario: "5bde0a09e7179a1b53024bba"
  },
  {
    _id: "5bde3b5ce7179a1b53025977",
    fecha_reserva: "2018-04-01 10:56:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdb2503e7179a1b53013204",
    Cicla: "5bdbd969e7179a1b53018f96",
    Usuario: "5bde0c57e7179a1b53024c41"
  },
  {
    _id: "5bde3d41e7179a1b530259e9",
    fecha_reserva: "2018-03-29 11:02:35",
    fecha_pago: "",
    fecha_prestamo: "",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdb2503e7179a1b53013204",
    Cicla: "5bdbd88fe7179a1b53018f4f",
    Usuario: "5bde0c57e7179a1b53024c41"
  },
  {
    _id: "5bde508776cb1f1b54996078",
    fecha_reserva: "2018-04-02 13:06:05",
    fecha_pago: "2018-04-02 13:14:55",
    fecha_prestamo: "2018-04-02 13:15:15",
    medio_pago: "Efectivo",
    monto: 1500,
    Estacion: "5bdbc65de7179a1b53018a0e",
    Cicla: "5bdbd7d9e7179a1b53018f1e",
    Usuario: "5bde0c57e7179a1b53024c41"
  }
];

const estaciones2 = [
  {
    _id: "5bdb253de7179a1b53013282",
    nombre: "Universidad",
    ciclas: 10,
    parking: 30,
    direccion: "CALLE 73 # 52-2",
    descripcion: "Bajo el viaducto de la estacion Universidad del Metro.",
    zona: 1,
    lat: 6.2692541,
    lng: -75.5676977
  },
  {
    _id: "5bdbc65de7179a1b53018a0e",
    nombre: "Punto Cero",
    ciclas: 2,
    parking: 15,
    direccion: "CARRERA 64 # 65-59",
    descripcion:
      "Intercambio vial de Punto Cero al lado de la estacion de policia",
    zona: 2,
    lat: 6.265161,
    lng: -75.5772547
  },
  {
    _id: "5bdbc8b9e7179a1b53018a85",
    nombre: "Robledo",
    ciclas: 1,
    parking: 34,
    direccion: "CARRERA 77B # 60-22",
    descripcion: "Diagonal al Colegio Mayor de Antioquia",
    zona: 2,
    lat: 6.271922,
    lng: -75.5935127
  },
  {
    _id: "5bdbc9dfe7179a1b53018ad1",
    nombre: "SIU-UdeA",
    ciclas: 9,
    parking: 11,
    direccion: "CARRERA 52 # 61-21",
    descripcion: "Costado oriental de la SIU sobre la ciclorruta de Carabobo",
    zona: 3,
    lat: 6.2600518,
    lng: -75.5695899
  },
  {
    _id: "5bdbca7de7179a1b53018b02",
    nombre: "Colombia",
    ciclas: 8,
    parking: 12,
    direccion: "CARRERA 65 # 50-29",
    descripcion: "Esquina occidental de la Carrera 65 con Calle 51",
    zona: 4,
    lat: 6.2563173,
    lng: -75.5830855
  },
  {
    _id: "5bdbcac8e7179a1b53018b1a",
    nombre: "Suramericana",
    ciclas: 8,
    parking: 12,
    direccion: "CALLE 47D # 65-92",
    descripcion: "Bajo el viaducto de la estación Suramericana del Metro",
    zona: 4,
    lat: 6.2580278,
    lng: -75.599072
  },
  {
    _id: "5bdbce57e7179a1b53018c50",
    nombre: "Primavera",
    ciclas: 8,
    parking: 12,
    direccion: "Calle 24 con Carrera 43F",
    descripcion: "Barrio Colombia sobre la Cll. 24 con Cra. 43F",
    zona: 5,
    lat: 6.2256029,
    lng: -75.574938
  },
  {
    _id: "5bdbcff5e7179a1b53018cd7",
    nombre: "Sabaneta Parque",
    ciclas: 6,
    parking: 18,
    direccion: "CARRERA 45 # 70 SUR",
    descripcion: "Desconocida",
    zona: 7,
    lat: 6.1512175,
    lng: -75.6181565
  },
  {
    _id: "5bdbd017e7179a1b53018cd9",
    nombre: "Sabaneta Metro",
    ciclas: 24,
    parking: 6,
    direccion: "CARRERA 49 # 67 SUR",
    descripcion: "Desconocida",
    zona: 7,
    lat: 6.1565718,
    lng: -75.618994
  },
  {
    _id: "5bdbcfcbe7179a1b53018cc9",
    nombre: "Unidad Deportiva de Belen",
    ciclas: 8,
    parking: 20,
    direccion: "CALLE 30A # 66B-18",
    descripcion:
      "Porteria de la Circular 1era con Av. Nutibara de la UPB al frente del periódico El Tiempo",
    zona: 6,
    lat: 6.2324571,
    lng: -75.5896561
  },
  {
    _id: "5bdb2503e7179a1b53013204",
    nombre: "Ruta N",
    ciclas: 4,
    parking: 36,
    direccion: "CARRERA 52 # 67A-13",
    descripcion:
      "Frente a la fachada principal de Ruta N sobre la ciclorruta de la Avenida Carabobo.",
    zona: 1,
    lat: 6.2655124,
    lng: -75.5688354
  },
  {
    _id: "5bdb255ae7179a1b53013293",
    nombre: "Moravia",
    ciclas: 0,
    parking: 40,
    direccion: "CALLE 82A # 52-29",
    descripcion:
      "Frente a la entrada principal del Centro de Desarrollo Cultural de Moravia",
    zona: 1,
    lat: 6.276585,
    lng: -75.5669927
  },
  {
    _id: "5bdbc81ae7179a1b53018a6a",
    nombre: "Universidad Nacional",
    ciclas: 21,
    parking: 18,
    direccion: "CALLE 59A # 64E-44",
    descripcion:
      "Porteria de la Iguan con Carrera 65 de la Universidad Nacional",
    zona: 2,
    lat: 6.2596231,
    lng: -75.5812055
  },
  {
    _id: "5bdbca09e7179a1b53018adc",
    nombre: "Museo de Antioquia",
    ciclas: 37,
    parking: 3,
    direccion: "CARRERA 52 # 52-36",
    descripcion:
      "Plazoleta de Botero frente a la entrada principal del Museo de Antioquia",
    zona: 3,
    lat: 6.2520471,
    lng: -75.5710131
  },
  {
    _id: "5bdbca44e7179a1b53018aeb",
    nombre: "Plaza Mayor",
    ciclas: 2,
    parking: 15,
    direccion: "CALLE 41 # 55-80",
    descripcion:
      "Costado sur de Plaza Mayor sobre la Avenida Ferrocarril, salida puente peatonal de Metropolis",
    zona: 3,
    lat: 6.252047,
    lng: -75.5775792
  },
  {
    _id: "5bdbcaa3e7179a1b53018b0c",
    nombre: "Los Colores",
    ciclas: 6,
    parking: 16,
    direccion: "CARRERA 70 # TRANSVERSAL 51A",
    descripcion:
      "Al frente de la entrada principal de la Institución Universitaria Salazar y Herrera",
    zona: 4,
    lat: 6.260004,
    lng: -75.5873247
  },
  {
    _id: "5bdbcdeae7179a1b53018c41",
    nombre: "UPB",
    ciclas: 0,
    parking: 25,
    direccion: "CARRERA 70 # CIRCULAR 1-50",
    descripcion:
      "Sobre la ciclorruta de la Carrera 70 frente a la entrada de la UPB",
    zona: 4,
    lat: 6.244998,
    lng: -75.5913767
  },
  {
    _id: "5bdbce30e7179a1b53018c48",
    nombre: "Industriales Metro",
    ciclas: 7,
    parking: 31,
    direccion: "CARRERA 48 # 27-86",
    descripcion:
      "Plazoleta del Centro Comercial Punto Clave sobre la ciclorruta de la Av. Las Vegas",
    zona: 5,
    lat: 6.2221586,
    lng: -75.5918157
  },
  {
    _id: "5bdbce91e7179a1b53018c73",
    nombre: "Industriales Metroplus",
    ciclas: 7,
    parking: 23,
    direccion: "CARRERA 52 # 29B-138",
    descripcion: "Costado occidental de la Estación Industriales de Metroplus",
    zona: 6,
    lat: 6.2289131,
    lng: -75.57674
  },
  {
    _id: "5bdbcf6fe7179a1b53018cb1",
    nombre: "Nutibara",
    ciclas: 15,
    parking: 21,
    direccion: "CARRERA 65 # 30-1",
    descripcion:
      "Costado Occidental de la estacion Nutibara de Metroplus sobre la Carrera 65 con Calle 30",
    zona: 6,
    lat: 6.2320495,
    lng: -75.5850259
  }
];

const usuarios2 = [
  {
    _id: "5bde0573e7179a1b53024a6a",
    nombre: "Juanes Quintero",
    correo: "juaneschrome@gmail.com",
    tipo: "registrado",
    clave: "juanesquintero",
    celular: "3173368759",
    contacto_emergente: "sebastian - 305 2564190"
  },
  {
    _id: "5bde0a09e7179a1b53024bba",
    nombre: "Cristian Pa",
    correo: "cc.acosta00@gmail.com",
    tipo: "registrado",
    clave: "cristianchica",
    celular: "313 6262117",
    contacto_emergente: "cristian - 301 7901863"
  },
  {
    _id: "5bde0b18e7179a1b53024be9",
    nombre: "Felipe Usma",
    correo: "felipeusma@gmail.com",
    tipo: "registrado",
    clave: "felipeusma",
    celular: "300 7596871",
    contacto_emergente: "alejandro - 311 6569152"
  },
  {
    _id: "5bde0c57e7179a1b53024c41",
    nombre: "Daniel Sanchez",
    correo: "danisanchez@gmail.com",
    tipo: "registrado",
    clave: "danielsanchez",
    celular: "316 4991180",
    contacto_emergente: "kevin - 350 2521951"
  }
];

const ciclas2 = [
  {
    _id: "5bdbd7d9e7179a1b53018f1e",
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: "5bdbd82de7179a1b53018f37",
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: "5bdbd88fe7179a1b53018f4f",
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: "5bdbd8d7e7179a1b53018f55",
    estado: "en translado",
    disponibilidad: false
  },
  {
    _id: "5bdbd936e7179a1b53018f73",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbd94fe7179a1b53018f76",
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: "5bdbd969e7179a1b53018f96",
    estado: "en reparacion",
    disponibilidad: false
  },
  {
    _id: "5bdbd988e7179a1b53018f97",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbd997e7179a1b53018f9a",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbd9e9e7179a1b53018fb7",
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: "5bdbd9f9e7179a1b53018fc5",
    estado: "en reserva",
    disponibilidad: false
  },
  {
    _id: "5bdbda0fe7179a1b53018fe0",
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: "5bdbda16e7179a1b53018fe4",
    estado: "en uso",
    disponibilidad: false
  },
  {
    _id: "5bdbda7fe7179a1b53018ff1",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbda87e7179a1b53018ff2",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbda8ee7179a1b53018ff4",
    estado: "en espera",
    disponibilidad: true
  },
  {
    _id: "5bdbdaa5e7179a1b53018ff7",
    estado: "en espera",
    disponibilidad: true
  }
];
