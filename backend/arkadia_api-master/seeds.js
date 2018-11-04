const db = require('./db/db')
const ObjectId = require('mongoose').Types.ObjectId

const HistoriaDeUsuario = require('./api/models/historiaDeUsuario')

var data = [
  {
    paquete: ObjectId('5bbc08b33e327f00155dbf6e'),
    nombre: 'Gestionar tarifas',
    referencia: 'eParking/Gestionar tarifas',
  },
  {
    paquete: ObjectId('5bbc08f13e327f00155dbf70'),
    nombre: 'Gestionar zona de parqueo',
    referencia: 'eParking/Gestionar zona',
  },
  {
    paquete: ObjectId('5bbc08ff3e327f00155dbf72'),
    nombre: 'Cobrar parqueo',
    referencia: 'Cobrar parqueo',
  },
  {
    paquete: ObjectId('5bbc090a3e327f00155dbf74'),
    nombre: 'Parquear automóvil',
    referencia: 'Parquear automóvil',
  },
  {
    paquete: ObjectId('5bbc095e3e327f00155dbf76'),
    nombre: 'Gestionar tarifas',
    referencia: 'Gestionar tarifas',
  },
  {
    paquete: ObjectId('5bbc096d3e327f00155dbf78'),
    nombre: 'Gestionar rutas',
    referencia: 'Gestionar rutas',
  },
  {
    paquete: ObjectId('5bbc09843e327f00155dbf7a'),
    nombre: 'Gestionar protectores',
    referencia: 'Gestionar protectores',
  },
  {
    paquete: ObjectId('5bbc09943e327f00155dbf7c'),
    nombre: 'Indicar cuidados',
    referencia: 'Indicar cuidados',
  },
  {
    paquete: ObjectId('5bbc09a03e327f00155dbf7e'),
    nombre: 'Implicar interesados',
    referencia: 'Implicar interesados',
  },
  {
    paquete: ObjectId('5bbc09ac3e327f00155dbf80'),
    nombre: 'Geolocalizar protegido',
    referencia: 'Geolocalizar protegido',
  },
  {
    paquete: ObjectId('5bbc09cf3e327f00155dbf82'),
    nombre: 'Reportar sanción',
    referencia: 'Reportar sanción',
  },
  {
    paquete: ObjectId('5bbc09e23e327f00155dbf84'),
    nombre: 'Planear reabastecimiento',
    referencia: 'Planear reabastecimiento',
  },
  {
    paquete: ObjectId('5bbc09ef3e327f00155dbf86'),
    nombre: 'Gestionar estaciones',
    referencia: 'Gestionar estaciones',
  },
  {
    paquete: ObjectId('5bbc09fa3e327f00155dbf88'),
    nombre: 'Realizar inscripción',
    referencia: 'Realizar inscripción',
  },
  {
    paquete: ObjectId('5bbc0a063e327f00155dbf8a'),
    nombre: 'Realizar recarga electrónica',
    referencia: 'Realizar recarga',
  },
  {
    paquete: ObjectId('5bbc0a113e327f00155dbf8c'),
    nombre: 'Notificar vencimiento de alquiler',
    referencia: 'Notificar vencimiento',
  },
  {
    paquete: ObjectId('5bbc0a1a3e327f00155dbf8e'),
    nombre: 'Ubicar bicicleta',
    referencia: 'Ubicar bicicleta',
  },
  {
    paquete: ObjectId('5bbc0a4f3e327f00155dbf90'),
    nombre: 'Establecer reglamento',
    referencia: 'Establecer reglamento',
  },
  {
    paquete: ObjectId('5bbc0a5a3e327f00155dbf92'),
    nombre: 'Ofertar ruta',
    referencia: 'Ofertar ruta',
  },
  {
    paquete: ObjectId('5bbc0a663e327f00155dbf94'),
    nombre: 'Demandar plaza',
    referencia: 'Demandar plaza',
  },
  {
    paquete: ObjectId('5bbc0a6e3e327f00155dbf96'),
    nombre: 'Notificar llegada del conductor',
    referencia: 'Notificar llegada',
  },
  {
    paquete: ObjectId('5bbc0a8d3e327f00155dbf98'),
    nombre: 'Establecer reglamento',
    referencia: 'Establecer reglamento',
  },
  {
    paquete: ObjectId('5bbc0ab43e327f00155dbf9a'),
    nombre: 'Ofertar curso',
    referencia: 'Ofertar curso',
  },
  {
    paquete: ObjectId('5bbc0abc3e327f00155dbf9c'),
    nombre: 'Demandar curso',
    referencia: 'Demandar curso',
  },
  {
    paquete: ObjectId('5bbc0ac63e327f00155dbf9e'),
    nombre: 'Proponer curso',
    referencia: 'Proponer curso',
  },
  {
    paquete: ObjectId('5bbc0ad43e327f00155dbfa0'),
    nombre: 'Cualificar rol',
    referencia: 'Cualificar rol',
  },
  {
    paquete: ObjectId('5bbc0b063e327f00155dbfa2'),
    nombre: 'Participar de chat',
    referencia: 'Participar de',
  },
  {
    paquete: ObjectId('5bbc0b113e327f00155dbfa4'),
    nombre: 'Ingresar a tribu',
    referencia: 'Ingresar a',
  },
  {
    paquete: ObjectId('5bbc0b253e327f00155dbfa6'),
    nombre: 'Realizar búsqueda',
    referencia: 'Realizar búsqueda',
  },
  {
    paquete: ObjectId('5bbc0b2e3e327f00155dbfa8'),
    nombre: 'Administrar usuario',
    referencia: 'Administrar usuario',
  },
  {
    paquete: ObjectId('5bbc0b383e327f00155dbfaa'),
    nombre: 'Visualizar calendario',
    referencia: 'Visualizar calendario',
  },
  {
    paquete: ObjectId('5bbc08f13e327f00155dbf70'),
    nombre: 'Ver zonas de parque',
    referencia: 'Ver zonas',
  },
]

db.then(async () => {
  await HistoriaDeUsuario.insertMany(data)

  process.exit(1)
})
