// TAREA:
// Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

// Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

document.querySelector('#agregar-integrante').onclick = function(){
    
    agregarIntegrante();
    
}

document.querySelector('#quitar-integrante').onclick = function(){

    quitarIntegrante();

}

document.querySelector('#calcular').onclick = function (event){
    const salarios = obtenerSalariosIntegrantes();
    mostrarSalario('mayor' , obtenerMayorSalario(salarios));
    mostrarSalario('menor' , obtenerMenorSalario(salarios)); 
    mostrarSalario('promedio' , obtenerPromedioSalario(salarios));
    mostrarSalario('promediomensual' , obtenerPromedioMensual(salarios));
    mostrarResultados();
   
    event.preventDefault();
}

document.querySelector('#resetar').onclick = resetear;
   



function agregarIntegrante(){
    
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'ingrese salario anual ';

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.className = 'sueldo-anual';

    $div.appendChild($label);
    $label.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}


function quitarIntegrante(){
    const $labelBorrado = document.querySelector('label');
    const $inputBorrado = document.querySelector('input');

    $labelBorrado.remove();
    $inputBorrado.remove();  
}


function obtenerSalariosIntegrantes(){
    const $salarios = document.querySelectorAll('.sueldo-anual');
    const salarios =[];
    for (let i = 0; i < $salarios.length; i++){
        if ($salarios[i].value!==""){
            salarios.push(Number($salarios[i].value));
        }
        
    }
    return salarios;
   
}

function obtenerMayorSalario(salarios){
    let mayorSalario = salarios[0];
    for(let i=0; i<salarios.length; i++){
        if(salarios[i] > mayorSalario){
        mayorSalario = salarios[i];
    }    
 }
 return mayorSalario;
}

function obtenerMenorSalario(salarios){
    let menorSalario = salarios[0];
    for(let i=0; i<salarios.length; i++){
        if(salarios[i] < menorSalario){
        menorSalario = salarios[i];
    }
}
return menorSalario;
}

function obtenerPromedioSalario(salarios) {
    let acumuladorSalarios = 0;
    for(let i=0; i<salarios.length; i++){
        acumuladorSalarios+=salarios[i];
    }

    return(acumuladorSalarios/salarios.length).toFixed(2);
}


function obtenerPromedioMensual(salarios){
    let mesesEnUnAnio = 12;
    let acumuladorSalarios = 0;
    for(let i=0; i<salarios.length;i++){
        acumuladorSalarios+=salarios[i];
    }
    
    return((acumuladorSalarios/salarios.length)/mesesEnUnAnio).toFixed(2);
    
}

function mostrarSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;


}

function mostrarResultados(){
    document.querySelector('#resultados').className = '';
}

function resetear(){
    borrarDatos();
    ocultarResultados();
}

function borrarDatos(){
    const $labels = document.querySelectorAll('label');
    const $inputs = document.querySelectorAll('.sueldo-anual');
    for(let i = 0; i<$inputs.length; i++){
        $inputs[i].remove();
    }
    for(let i = 0; i<$labels.length; i++){
        $labels[i].remove();
    }
    
}

function ocultarResultados() {
    document.querySelector('#resultados').className = 'oculto';
}



