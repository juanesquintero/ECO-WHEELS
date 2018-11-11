/**
 * Servicio de mongodb
 */
const mongo = require("mongodb");

module.exports = {
  Mongo: function() {
    return new CrudOperations();
  }
};

class CrudOperations {
  constructor() {
    //Conexion a la base de datos: mongodb://{{username}}:{{password}}@{{address}}:{{port}}
    this.url =
      "mongodb://juanesquintero:juanesquintero1@ds115022.mlab.com:15022/arkadia_ew";
    //Nombre de la base de datos
    this.dbName = "arkadia_ew";
    this.db = null;
    this.client = null;
  }

  /**
   * Consultar datos en una colección
   * @param {*} collection
   * @param {*} payload
   */
  async get(collection, payload) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Convierto el _id de mongo en ObjectId
      if (payload._id != undefined) {
        payload._id = mongo.ObjectID(payload._id);
      }
      //Consulto datos en la coleccion
      let result = await this.db
        .collection(collection)
        .find(payload)
        .toArray();
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      //Cierro la conexión
      this.client.close();
      return err;
    }
  }

  /**
   * Insertar datos en una colección
   * @param {*} collection
   * @param {*} payload
   */
  async insert(collection, payload) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Inserto un datos a una colección
      let result = await this.db.collection(collection).insertOne(payload);
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      this.client.close();
      return err;
    }
  }

  async insertMany(collection, payload) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Inserto un datos a una colección
      let result = await this.db.collection(collection).insertMany(payload);
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      this.client.close();
      return err;
    }
  }

  /**
   * Modificar dato en una colección
   * @param {*} collection
   * @param {*} filter
   * @param {*} data
   */
  async update(collection, filter, data) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Convierto el _id de mongo en ObjectId
      if (filter._id != undefined) {
        filter._id = mongo.ObjectID(filter._id);
      }
      //Modifico un dato en una colección
      let result = await this.db
        .collection(collection)
        .updateOne(filter, { $set: data });
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      //Cierro la conexión

      this.client.close();
      return err;
    }
  }

  /**
   * Eliminar dato en una colección
   * @param {*} collection
   * @param {*} filter
   */
  async delete(collection, filter) {
    try {
      //Crear la conexion a la db
      this.client = await mongo.MongoClient.connect(this.url);
      //Obtengo la db
      this.db = this.client.db(this.dbName);
      //Convierto el _id de mongo en ObjectId
      if (filter._id != undefined) {
        filter._id = mongo.ObjectID(filter._id);
      }
      //Elimino un dato en una colección
      let result = await this.db.collection(collection).deleteOne(filter);
      //Cierro la conexión
      this.client.close();
      return result;
    } catch (err) {
      //Cierro la conexión
      this.client.close();
      return err;
    }
  }
}
