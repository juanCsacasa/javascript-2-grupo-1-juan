// **** Constructors ****
function EstudianteConstructor(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  this.nombre = nombre;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.id = id;
  this.nuevoIngreso = nuevoIngreso;
  this.carrera = carrera;
  this.cursosMatriculados = cursosMatriculados || [];
  this.cursosCursados = cursosCursados || [];

  this.matricular = function (curso) {
    this.cursosMatriculados.push(curso)
  }

  this.retirarMatricula = function (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }

    // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }

  this.agregarCursosCursado = function (curso, nota) {
    const cursoObj = { curso, nota };
    //cursoObj.estado = nota >= 70 ? 'aprobado' : 'reprobado';
    if (nota >= 70) {
      cursoObj.estado = 'aprobado'
    } else {
      cursoObj.estado = 'reprobado'
    }
    this.cursosCursados.push(cursoObj)
  }
}

const estudiantePrueba = new EstudianteConstructor('Test', 'Testing', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'], [{ curso: 'Prueba', nota: 50 }])



//Prototypes
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `Name: ${this.name}. Age: ${this.age}`;
  };
  // this.gender = 'male';
}

Person.prototype.gender = "male";

const person1 = new Person('Alex', '30');
const person2 = new Person('John', '25');

// prototype value of Person
// console.log(Person.prototype);

// inheriting the property from prototype
// console.log(person1.gender); // output: male

// por qué agregar propiedades a la funciónn constructor usando el prototype y no directamente en el constructor?
// porque si se agregan directamente en el constructor, se van a crear tantas copias de la propiedad como objetos se creen a partir de ese constructor, y eso es ineficiente
// por eso se agregan al prototype, porque así se crea una sola copia de la propiedad, y todos los objetos creados a partir de ese constructor van a heredar esa propiedad

//cómo modificar una propiedad del prototype? con la palabra reservada prototype seguida del nombre del constructor, y luego el nombre de la propiedad que se quiere modificar
// ejemplo de modificación de una propiedad del prototype de un constructor

Person.prototype.gender = 'unknown';

// console.log(Person.prototype);
// console.log(person1.gender);
// console.log(person2.gender);

Object.prototype.hello = function () {
  return 'Hola Mundo!';
};

const miObjeto = {};
// console.log(miObjeto.hello());


// Classes
class Persona {
  constructor(nombre, publicaciones) {
    this.nombre = nombre;
    this.publicaciones = publicaciones || [];
  }

  // setter
  set setPublicacion(publicacion) {
    this.publicaciones.push(publicacion);
  }

  // getter 
  get getPublicaciones() {
    return this.publicaciones;
  }
}

const persona1 = new Persona('Pedro');
laura.setPublicacion = { titulo: 'Cómo hacer un postre', contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' };
console.log(persona1.getPublicaciones);