function cerrars() {
    Swal.fire({
        title: '¿Cerrar sesión?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar sesión'
    }).then((result) => {
        if (result.value) {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.

                location.href = "index.html"

            }).catch(function (error) {
                // An error happened..
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'No se ha cerrado la sesión exitosamente',
                })
            })
        } else {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'No se ha cerrado la sesión exitosamente',
            })
        }
    })
}



