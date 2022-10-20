// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre;
  }

  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
    String.prototype.reverse = function () {
    var palabraInvertida = "";

    for (var i = this.lenght; i != 0; i--) {
      palabraInvertida += this.charAt(i - 1);
    }
    return palabraInvertida;
  };
/*   String.prototype.reverse = function () {
    var stringInvertida = "";
    for (var i = this.lenght - 1; i >= 0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  }; */ //POR ALGUNA RAZON ESTE CONGELA LA EJECUCION O NO FUNCIONA :))))))) REVISAR OTRAS MANERAS DE RESOLVER EL EJERCICIO?
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) /*Escribir los argumentos que recibe el constructor*/ {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function() {
        return {
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        };
      };
    }
}
/* DETALLE TAMBIEN SE PUEDE HACER CON GET, DE LA SIGUIENTE MANERA:

get detalle(){
  return this.getDetalle();
}

getDetalle(){
  Nombre: this.nombre,
  Apellido: this.apellido,
  Edad: this.edad,
  Domicilio: this.domicilio
};

 */



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  let persona = new Persona(nombre, apellido, edad, dir);
  return persona;
}
/* o se puede dejar como una sola linea de codigo y hacer lo siguiente: 
  return new Persona(nombre, apellido, edad, dir);
 */


  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    /* return this.nombre + ", " + this.edad + " años" */
    return `${this.nombre}, ${this.edad} años` //MUCHO MEJOR VISUALMENTE, INCLUSO SE PUEDE HACER MULTILINEA. Esta muy bien recordar esta forma.
  };
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
