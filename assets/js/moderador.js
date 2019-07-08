firebase.initializeApp({
    apiKey: "AIzaSyAKESsOoDuuPh6IxpTJlMQCM-GUkTtqfXU",
    authDomain: "agroconecta-7a3b9.firebaseapp.com",
    projectId: "agroconecta-7a3b9"
});

var db = firebase.firestore();
const functions = firebase.functions();

function moderador() {
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    if (pass1 == pass2) {
        if (email != "") {
            Swal.fire({
                title: '¿Estás seguro de agregar un nuevo moderador?',
                type: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                cancelButtonText: "No, cancelar",
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Sí, agregar'
            }).then((result) => {
                if (result.value) {
                    firebase.auth().createUserWithEmailAndPassword(email, pass1)
                        .then(function () {
                                const moderadorEmail = document.querySelector('#email').value;
                                const addModeratorRole = functions.httpsCallable('addModeratorRole');
                                addModeratorRole({ email: moderadorEmail }).then(result => {
                                    console.log(result);

                            })
                            Swal.fire({
                                type: 'success',
                                title: 'Registro completo',
                                text: 'Empresa agregada correctamente por Agroconecta',
                                footer: 'Gracias',
                            })
                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode == 'auth/weak-password') {
                                alert('The password is too weak.');
                            }
                            console.log(error);
                        });
                } else {
                    location.href = "moderador.html"
                }
            })
        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los campos',
            })
        }
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden',
        })
    }
}