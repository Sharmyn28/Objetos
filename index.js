
var assert = require ("assert");

function EjerciciosObjetos(){
  this.ejercicio1 = function (base, altura){
    function Rectangulo (base, altura) {
      this.base =  base;
      this.altura = altura;
    }

    const rectangulito = new Rectangulo(base, altura);
    return (rectangulito.base * rectangulito.altura)
    //console.log(rectangulito.base * rectangulito.altura);
}

  this.ejercicio2 = function (nombre, dia, mes, anio){
    function Persona (nombre, dia, mes, anio){
      this.nombre = nombre;
      this.dia = dia;
      this.mes = mes;
      this.anio = anio;
      this.obtenerEdad = obtenerEdad;
   }

    var g = new Date();
    console.log(g.getDate()+"/"+(g.getMonth()+1)+ "/"+ g.getFullYear());

    function obtenerEdad(){
      var edad;
      var f = new Date();
      var diaActual = f.getDate();
      var mesActual = f.getMonth() +1;
      var anioActual = f.getFullYear();

        if(this.mes == mesActual){
          if(this.dia <= diaActual){
            edad = anioActual - this.anio;
          }else{
            edad = anioActual - this.anio -1;
          }
        }
        else if (this.mes > mesActual){
          edad = anioActual - this.anio -1;
        }
        else {
          edad = anioActual - this.anio;
        }
      return "La edad actual de " + this.nombre + " es " + edad;
    }

    this.obtenerEdad = obtenerEdad;

    const sue = new Persona(nombre, dia, mes, anio);
    return sue.obtenerEdad();
  }

   this.ejercicio3 = function (nombre, edad, pasatiempo){
     function Persona (nombre, edad, pasatiempo){
       this.nombre = nombre;
       this.edad = edad;
       this.pasatiempo = pasatiempo;
       this.imprimirInfoPersona = imprimirInfoPersona;
     }

     function imprimirInfoPersona(){
       return "Hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempo + ".";
     }

     this.imprimirInfoPersona = imprimirInfoPersona;

     const maria = new Persona(nombre, edad, pasatiempo);
     return maria.imprimirInfoPersona();
    }

}

var ejercicios = new EjerciciosObjetos();


// ********* PRUEBAS UNITARIAS ************

describe ("Ejercicios Objetos", function(){
  describe("Ejercicio 1", function () {
    it("Prueba de (2,10)", function () {
      assert.equal(20, ejercicios.ejercicio1(2,10));
    });
  });

  describe("Ejercicio 2", function () {
    it("Prueba de ('Maria', 24, 7, 1994)", function () {
      assert.equal("La edad actual de Maria es 22", ejercicios.ejercicio2('Maria', 24, 7, 1994));
    });
  });

  describe("Ejercicio 3", function () {
    it("Prueba de ('Maria', 22, 'ver pelis')", function () {
      assert.equal("Hola soy Maria tengo 22 años y me gusta ver pelis.", ejercicios.ejercicio3('Maria', 22, 'ver pelis'));
    });
  });
});
