//1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
//Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.

class persona {
  constructor(nombre, apellido,id,edad,ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion;
  }

  saludar(){
      return "Holi brou soy:" + this.nombre + " " + this.apellido
  }
}

const saludopro =  new persona ("juan","sacasa");
console.log(saludopro.saludar())

//2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
//Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado,

class empleado extends persona{
  constructor(nombre, apellido,id,edad,ubicacion,sueldo, posicion, departamento, ingreso){
    super(nombre, apellido,id,edad,ubicacion);
    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.ingreso = ingreso;
    }
    imprimirsueldo(){
      const sueldoanual = this.sueldo * 12
      console.log(sueldoanual)
  }
}
const sueldoanual = new empleado("juan","sacasa",12, 39,"aserri",1200,"vago", "caja", "abril")
sueldoanual.imprimirsueldo()



//3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
//Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
//el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico
class desarrollador extends empleado{
  constructor(nombre, apellido,id,edad,ubicacion,sueldo, posicion, departamento, ingreso,lenguajes){
    super(nombre, apellido,id,edad,ubicacion,sueldo, posicion, departamento, ingreso)
    this.lenguajes = lenguajes;
  }
  lenguajeDominado(){
    let mayor = this.lenguajes [0];
    for(let i = 0; i < this.lenguajes.length; i++){
      if(this.lenguajes[i].conocimiento > mayor.conocimiento ){
        mayor = this.lenguajes[i]
      }
    }
    return mayor.lenguaje
    //console.log(lenguajeDominado)
  }
  agregarInfo(lenguaje,conocimiento){
    const A = {lenguaje,conocimiento};
    this.lenguajes.push(A);
    //console.log(agregarinfo)
  }
}
const desarrolladorUno = new desarrollador("juan","sacasa",12, 39,"aserri",1200,"vago", "caja", "abril",[{lenguaje:"java", conocimiento: 60},{lenguaje:"Python", conocimiento: 100}])
console.log(desarrolladorUno.lenguajeDominado())
//console.log(desarrolladorUno.lenguajes)