/* 1)	Se requiere conocer el área de un rectángulo. Realice un algoritmo para tal fin El área 
    del rectángulo se halla así: (base*altura)*/

let area;
let base;
let altura;

base = Number(prompt('¿Cuál es la base del rectángulo? '));
altura = Number(prompt('¿Cuál es la altura del rectángulo? '));

//Procedimiento
area = areaRectangulo(base, altura);

//Imprimir
document.write('El área del rectángulo es: ' + area);

function areaRectangulo(base, altura){
    area = base * altura;
    return area;
}