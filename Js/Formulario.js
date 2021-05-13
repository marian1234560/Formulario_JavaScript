function alertas() {
  let esVacio = false;

  let edad = document.getElementById("edad").value;
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("lastname").value;
  let correo = document.getElementById("email").value;

  edad= parseInt(edad)
  
  let formulario = [nombre, apellido, apellido, email];
  console.log(formulario.length)
  for(let i = 0; i < formulario.length; i++){
    console.log("entre")
    if(formulario[i] === ""){
      esVacio = true
    }
  }

  if(esVacio === true) {
    alert(`Por favor ingrese todos los campos`);
  }

  if(edad >= 18 && esVacio === false) {
    alert(`Hola ${nombre} ${apellido} has aplicado correctamente te contactaremos en ${correo}`);
    vaciarCampos();
  } 

  if(edad < 18 && esVacio === false){
    alert(`Hola ${nombre} ${apellido} no cumples con la edad requerida`);
    vaciarCampos();
  }

}

function vaciarCampos(){
  document.getElementById("name").value = ""
  document.getElementById("lastname").value = ""
  document.getElementById("edad").value = ""
  document.getElementById("email").value = ""
}
