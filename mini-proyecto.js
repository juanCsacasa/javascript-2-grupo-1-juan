/* 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
1.1 Nombre
1.2.Dirección
1.3.Libros // lista de libros
1.4.Comics // lista de comics
1.5.Debe contar un método que permita agregar libros y comics a la librería */
class Libreria {
  constructor(Nombre, Direccion){
    this.Nombre = Nombre
    this.Direccion = Direccion
    this.Libros = []
    this.Comics = []
  }

  agregarObjeto(Libro){
    this.Libros.push(Libro)
  }
  agregarObjeto2(Comic){
    this.Comics.push(Comic)
  }
}

//Objeto.agregarObjeto()
//Objeto2.agregarObjeto2()


/*2. Debe tener una clase Libro que represente un libro y 
tenga las siguientes propiedades: título, autor, precio, cantidad y año.*/
class Libro{
  #Titulo;
  #Autor;
  #Precio;
  #Cantidad;
  #Año;
  constructor(Titulo, Autor, Precio, Cantidad, Año){
    this.#Titulo = Titulo
    this.#Autor = Autor
    this.#Precio = Precio
    this.#Cantidad = Cantidad
    this.#Año = Año
  }

  set modificarCantidad (Value){
    if (Value < 0) {
      Value = 0 ;
    }
    this.#Cantidad = Value;
  }
  set modificarAño (Value){
    this.#Año = Value;
  }

  get getInfo(){
    if (this.#Cantidad == 0) {
      this.#Cantidad = "No hay ejemplares disponibles"
    }
    return this.#Titulo + " " + this.#Autor + "  " + this.#Precio + " " + this.#Cantidad + " " + this.#Año 
  }
}

/*3. Debe tener una clase Comic que herede de Libro y 
tenga las siguientes propiedades extras: dibujante, editorial, volumen.*/

class Comic extends Libro{
  #Dibujante;
  #Editorial;
  #Volumen;
    constructor(Titulo, Autor, Precio, Cantidad, Año, Dibujante,Editorial,Volumen){
    super(Titulo, Autor, Precio, Cantidad, Año)
    this.#Dibujante = Dibujante
    this.#Editorial = Editorial
    this.#Volumen = Volumen
  }
  get getInfo2(){
    return   this.#Dibujante + " " + this.#Editorial + " " + this.#Volumen
  }
}

/*4. Los usuarios no pueden modificar datos de los libros o comics, 
    pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma 
    deben ser propiedades privadas
    tener en cuenta que para poder acceder y modificar las propiedades 
    privadas debe usar getters y setters*/

/*5. Debe haber un método que permita obtener la información completa 
de un libro o comic, este debe llamarse "getInfo". */

/*6. En caso de que la cantidad de libros o comics sea 0, 
debe mostrar un mensaje que diga "No hay ejemplares disponibles".*/

//llamados ejercicio uno
const Objeto = new Libreria ("sadsa","dsasdsd");
Objeto.agregarObjeto ("Fundacion e Imperio")
Objeto.agregarObjeto2 ("Batman")
console.log(Objeto)

//llamados ejercicio dos
let libroUno = new Libro ("sdasdas","sdasda",2312312,0,3212);
libroUno.modificarAño = -1500;
console.log(libroUno.getInfo);

//llamados ejercicio tres
let comicUno = new Comic ("Fairy tail","sdasda",2312312,0,3212,"dasda","sdasdsdd",9);
libroUno.modificarAño = -1500;
console.log(comicUno.getInfo,comicUno.getInfo2);