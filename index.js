
var assert = require ("assert");

function EjerciciosObjetos(){
  this.ejercicio_1 = function ej1(){
    function reduceArray(valorAnt, valorActual){
    return valorAnt * valorActual;
    };
    var resultado = arr.reduce(reduceArray,num);
  }

  this.ejercicio2 = function eje2(){
    function ejerPersona (nombre, dia, mes, anio){
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

    const sue = new Persona("Maria", 24, 7, 1994);
  }

   this.ejercicio3 = function eje3(){
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

    const maria = new Persona("Maria", 22, "ver pelis");
    }

}

var ejercicios = new EjerciciosObjetos();
