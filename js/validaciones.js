function validaCampos(){

  
    var usuario =  document.getElementById("txtNombre").value; 
    var clave =  document.getElementById("txtClave").value;
    var producto = document.getElementById("txtNombreProducto").value;
 
    

    if( usuario.length == 0 | /\s/.test(usuario) ) {
        alert("Debe ingresar su nombre de usuario");
        document.getElementById("txtNombre").focus();
        return false;
    } 

    if (clave.length == 0 | /\s/.test(clave)) {
        alert("Debe ingresar su clave");
        document.getElementById("txtClave").focus;
        return false;
        
    }

    if (producto.length == 0 | /\s/.test(producto)) {
        alert("Debe ingresar nombre de producto");
        document.getElementById("txtNombreProducto");
    }

 
    


}

