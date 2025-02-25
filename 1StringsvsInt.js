/* #7daysOfCode by AluraLatam
    #1 Comparar variables enteras con strings para verificar que sean del mismo tipo sin errores

*/
/*
    arreglar codigo para que imprima la información de manera correcta,
    que tenga sentido y sin errores.
*/

//definiendo variables enteras
let numeroUn = 1
let numeroDiez = 10
let numeroTreinta = 30

//definiendo variables strings
let stringUn = '1'
let stringDiez = '10'
let stringTreinta = '30'

//main organizado

if (numeroUn === parseInt(stringUn))
    {
        console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
    }
else 
    {
        console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
    }

if (numeroDiez === parseInt(stringDiez))
    {
        console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
    }
else
    {
        console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
    }

if (numeroTreinta === parseInt(stringTreinta))
    {
        console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
    }
else 
    {
        console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
    }
