//Basado en el codigo de Santiago Henao, Semana 9
'use strict';

//Definimos las variables de entrada

let mCuadrados=0;
let tipoInmueble=0;
let valorAdministracion=0;
let valorAseo=0;
let edad=0;
let genero= "";
let valorGimnasio=0;
let nPersonas=0;
let totalValor=0;

//Pedir datos por pantalla

mCuadrados=prompt("Digite los metros cuadrados del inmueble")
tipoInmueble=prompt('¿Cual es el tipo del inmueble?: "Casa" o "Apartamento" ')
nPersonas=prompt('Digite la cantidad de personas que habitan en el inmueble')
tipoInmueble = tipoInmueble.toUpperCase();

//Procesos, Funciones, Condicionales y Ciclos del Codigo

valorAdministracion = calcularValorAdministracion(mCuadrados, tipoInmueble);
valorAseo = calcularValorAseo(valorAdministracion, mCuadrados);
//valorGimnasio = calcularValorGimnasio(genero, edad); //(Solo hace un solo calculo)
totalValor= (valorAdministracion + valorAseo + valorGimnasio)


for(let i=0; i<nPersonas; i++){
    edad=prompt('Digite la edad de la persona ' + (i+1));
    genero=prompt('Indique el genero ("Masculino" o "Femenino") para la persona ' + (i+1));
    genero=genero.toLowerCase();
    valorGimnasio += calcularValorGimnasio(genero, edad);
}

function calcularValorAdministracion(mCuadrados, tipoInmueble) {

    if(tipoInmueble=="CASA"){
        return mCuadrados * 1500 + 100000;

    }else if (tipoInmueble== "APARTAMENTO"){
        return mCuadrados * 1500 + 50000;

    }else{
        return "Tipo de Inmueble no valido";
    }
    
}

function calcularValorAseo(valorAdministracion, mCuadrados){
    return (valorAdministracion * 0.1) + (mCuadrados*1000);
}

function calcularValorGimnasio(genero, edad){
    switch(genero){

        case 'masculino':
            if(edad<10 || edad>=60){
                return 0;
            }else if(edad>=10 && edad<20){
                return 20000;
            }else if(edad>=20 && edad<40){
                return 15000;
            }else if(edad>=40 && edad<60){
                return 10000;
            }
            break;

        case 'femenino':
            if(edad<10 || edad>=55){
                return 0;
            }else if(edad>=10 && edad<20){
                return 15000;
            }else if(edad>=18 && edad<35){
                return 12000;
            }else if(edad>=45 && edad<55){
                return 8000;
            }
            break;
    }
}

//Hacer la factura

document.querySelector('#Admin').innerHTML = "$" + valorAdministracion;
document.querySelector('#Aseo').innerHTML = "$" + valorAseo;
document.querySelector('#Gym').innerHTML = "$" + valorGimnasio;
document.querySelector('#Total').innerHTML = "$" + totalValor;
