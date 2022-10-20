// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  }
  return gato;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}
/* tambien se puede resolver de esta otra manera, pero es mas larga
var multi = objetoMisterioso.numeroMisterioso * 5;
return multi; */



function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad]; //esto es si nos piden el codigo mas resumido posible
  return objeto;
}
/* tambien se puede resolver de esta otra manejarla
es muy buena porque con el condicional se revisa si la propiedad unaPropiedad
existe o no, lo que podria arrojar error si estuviera undefined

if(objetoMisterioso[unaPropiedad] === undefined){
  return objeto;
}
else{
  delete objeto[unaPropiedad];
  return objeto;
} */



function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  }
  return usuario;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario["email"]) return true;
  else return false;
}
/* la propiedad "email" va con comillas porque es el nombre definido para esa propiedad
pero en el caso de abajo, va sin comillas porque como esta como parametro en la funcion
"tienePropiedad" entonces es un string que puede ser cualquier cosa
ej. revisar los tests para ver que se usa x y y como nombre de ese parametro */



function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]){
    return true;
  }
  else return false;
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario["password"] === password;
}
/* if(usuario.password === password) return true;
else return false;
} */
//la igualdad da true en caso de ser verdad, si no, da false
//devuelve el valor booleano



function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
/* NOTAS IMPORTANTES
para bracket notation, se usan comillas porque con esta notación se pueden pasar propiedades que
no tengan ese nombre especifico, como los parametros (realmente no son el nombre de la propiedad,
  porque podria ser cualquier nombre).
  si se hubiera usado sin comillas, seria un parametro (o la variable), no el nombre exacto
  con las comillas, se hace referencia al nombre especifico de la propiedad, es un nombre definido
*/
/* con el dot notation, es como usar las comillas, hace referencia al nombre especifico
 */

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0; i < usuarios.length; i++){
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

/* usuarios = [{diferentesUsuarios},{},{},{}] 
diferentesUsuarios = [{
  esPremium: true;
}]
*/



function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var sumaLikes = 0;
  for (var i = 0; i < usuario.posts.length; i++){ //se recorre el array dentro del objeto usuario, no todo lo que hay dentro del usuario
    sumaLikes = sumaLikes + usuario.posts[i].likes; //o sumaLikes += usuario.posts[i].likes;
  }
  return sumaLikes;
}
/* usuario.posts = [{post: likes = numero},{},{},{}] 
post = [{
  likes: numero entero;
}]
*/



function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    return this.precio - (this.precio * this.porcentajeDeDescuento); /* esto es lo mismo que: return producto.precio - (producto.precio * producto.porcentajeDeDescuento); */
  }
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
