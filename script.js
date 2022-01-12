const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

  // Para que sirve 'preventDefault'? Intenta averiguarlo
  e.preventDefault();

  console.log("Valor del input: ", e.target.value)

  // Tu código aquí --->

   
  // Asignar los valores de los inputs a variables
  let height = form.querySelector('#height').value;
  let weight = form.querySelector('#weight').value;
  let imc;
  
  // Condición si inputs vacíos 

  if (!height || !weight) {   

    // Mostrar "Faltan Valores" en pantalla.
    form.querySelector('#results').innerText = "Faltan Valores";
      
    } else { 
    // Calculo del imc
    imc = weight / ((height * height) / 10000);

    // Mostrar resultado en pantalla.    
    form.querySelector('#results').innerText = Math.round(imc *10) /10;}

});