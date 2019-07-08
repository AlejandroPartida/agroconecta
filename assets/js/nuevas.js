firebase.initializeApp({
    apiKey: "AIzaSyAKESsOoDuuPh6IxpTJlMQCM-GUkTtqfXU",
    authDomain: "agroconecta-7a3b9.firebaseapp.com",
    projectId: "agroconecta-7a3b9"
});
var db = firebase.firestore();

function agregar() {
    var nombre = document.getElementById('nombre').value;
    var representante = document.getElementById('representante').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var razon = document.getElementById('razon').value;
    var direccion = document.getElementById('direccion').value;
    var empleados = document.getElementById('empleados').value;
    var sucursales = document.getElementById('sucursales').value;
    var capacidad = document.getElementById('capacidad').value;
    var tipo = document.getElementById('tipo').value;
    var temporalidad = document.getElementById('temporalidad').value;
    var actividades = document.getElementById('actividades').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    var empresa =document.getElementById('empresa').value;

    if (pass1 == pass2) {
        if (nombre != "" && representante != "" && telefono != "" && correo != "" && razon != "" && direccion != "" && empleados != "" && sucursales != "" && capacidad != "" && tipo != "" && temporalidad != "" && actividades != "") {

            firebase.auth().createUserWithEmailAndPassword(correo, pass1)
            .then(cred => {
            })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });

            db.collection("empresasRegistradas").add({
                tipoEmpresa: empresa,
                nombreEmpresa: nombre,
                representante: representante,
                telefono: telefono,
                correoElectronico: correo,
                razonSocial: razon,
                direccion: direccion,
                numEmpleados: empleados,
                numSucursales: sucursales,
                capacidadProduccion: capacidad,
                tipoVenta: tipo,
                temporalidad: temporalidad,
                actividadesEmpresa: actividades,
                "profilePicURL": 'https://firebasestorage.googleapis.com/v0/b/agroconecta-7a3b9.appspot.com/o/fotosPerfil%2Fprofilepicture.png?alt=media&token=9ab1a930-1ebc-4ce2-943f-68c2905bd787',
                "coverPicURL": 'https://firebasestorage.googleapis.com/v0/b/agroconecta-7a3b9.appspot.com/o/fotosPortada%2FgenericCoverPicture.jpg?alt=media&token=70022301-be9c-41d6-8777-49ce70a5a738'
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    document.getElementById('nombre').value = "";
                    document.getElementById('empresa').value = "";
                    document.getElementById('representante').value = "";
                    document.getElementById('telefono').value = "";
                    document.getElementById('correo').value = "";
                    document.getElementById('razon').value = "";
                    document.getElementById('direccion').value = "";
                    document.getElementById('empleados').value = "";
                    document.getElementById('sucursales').value = "";
                    document.getElementById('capacidad').value = "";
                    document.getElementById('tipo').value = "";
                    document.getElementById('temporalidad').value = "";
                    document.getElementById('actividades').value = "";
                    document.getElementById('pass1').value = "";
                    document.getElementById('pass2').value = "";
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            Swal.fire({
                type: 'success',
                title: 'Registro completo',
                text: 'Empresa agregada correctamente por Agroconecta',
                footer: 'Gracias',
            })
        }
        else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los campos',
            })
        }
    }
    else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden',
        })
    }
}