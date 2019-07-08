firebase.initializeApp({
    apiKey: "AIzaSyAKESsOoDuuPh6IxpTJlMQCM-GUkTtqfXU",
    authDomain: "agroconecta-7a3b9.firebaseapp.com",
    projectId: "agroconecta-7a3b9"
});

var db = firebase.firestore();


var auth = firebase.auth();

function registrar() {
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

    if (nombre != "" && representante != "" && telefono != "" && correo != "" && razon != "" && direccion != "" && empleados != "" && sucursales != "" && capacidad != "" && tipo != "" && temporalidad != "" && actividades != "") {
        db.collection("nuevasEmpresas").add({
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
            actividadesEmpresa: actividades
        })

            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('nombre').value = "";
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



            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        Swal.fire({
            type: 'success',
            title: 'Registro completo',
            text: 'Espera a que Agroconecta se ponga en contacto contigo para otorgarte tus credenciales',
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
