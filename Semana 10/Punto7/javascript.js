/*Autor: Hariharakumar Bandaru*/
/*Fuente: https://www.youtube.com/watch?v=DeSmpjYIVS8*/

/*Primero declaramos una funcion de nombre palindromo, en la que se va a realizar todo el proceso para descomponer la palabra y que al compararla se pueda determinar si es palindromo*/
function palindromo(){
    revString= "";
    /*Luego tenemos que tomar la palabra digitada en el cuadro de texto*/
    inpString = document.getElementById("text").value;
    /*Luego determinamos el tamaño de la palabra*/
    i=inpString.length;
   /*Ahora recorremos dicha palabra, para asi compararla en los if*/
    for(var j=i; j>=0; j--){
        revString=revString+inpString.charAt(j);
    }
    /*Si la palabra coincide con la palabra invertida, debe arrojar una alerta que diga que es palindromo*/
    if(inpString===revString){
        alert(inpString+" Es un palindromo")
    /*Si la palabra no coincide con la palabra invertida, debe arrojar una alerta que diga que no es palindromo*/
    }else{
        alert(inpString+" No es un palindromo")
    }
}