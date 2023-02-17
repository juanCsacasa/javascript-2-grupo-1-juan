/*const product = {

  name: 'productName',
  price: 200,
  quantity: 50,
  tax: 13,
  category: ['home'],
  subCategory: 'furniture',
  total: function () {
    return price + (price * this.tax / 100);
  },
}

//dot notation
console.log(product.category);
product.nuevoKey = 'es un nuevo key';
product.category.push('xcategory');
delete product.subCategory
//bracket notation
console.log(product['category']);
console.log(product);
*/

/* EJEMPLOS OOP
// =======================================================================================
// ============================= EJEMPLOS OOP ============================================
const estudianteUno = {
  nombre: 'Andy',
  apellidos: 'Smith',
  fechaNacimiento: '1990-10-30',
  id: 'a-0001',
  nuevoIngreso: true,
  carrera: 'Historía del Arte',
  cursosMatriculados: ['Introducción a la pintura', 'Historia del Arte I'],
  cursosCursados: [],
// }*/

/*function estudianteNuevo(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  const datos = {};
  datos.nombre = nombre;
  datos.apellidos = apellidos;
  datos.fechaNacimiento = fechaNacimiento;
  datos.id = id;
  datos.nuevoIngreso = nuevoIngreso;
  datos.carrera = carrera;
  datos.cursosMatriculados = cursosMatriculados || [];
  datos.cursosCursados = cursosCursados || [];

  datos.matricular = function (curso) {
    this.cursosMatriculados.push(curso)
  }

  datos.retirarMatricula = function (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }

    // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }

  return datos;
}

const andy = estudianteNuevo('Andy', 'Smith', '1990-10-30', 'a-0001', true, 'Historía del Arte', ['Introducción a la pintura']);
const ana = estudianteNuevo('Ana', 'Patel', '1990-10-30', 'arq-0001', true, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I']);
// console.log(ana);

const listaEstudiantes = [];
listaEstudiantes.push(andy)
listaEstudiantes.push(ana)

// console.log(listaEstudiantes);
// console.log(andy);

andy.matricular('Historia del Arte I');
ana.retirarMatricula('Historia del Arte I')

console.log(andy)

// console.log(listaEstudiantes);
*/

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
    //this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }
}

const estudiantePrueba = new EstudianteConstructor('Test', 'Testing', '1990-10-30', 'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'], [{ curso: 'Prueba', nota: 50 }])

console.log(estudiantePrueba);