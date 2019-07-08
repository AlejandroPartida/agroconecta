const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //Get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      user.getIdTokenResult().then(idTokenResult => {
        user.moderador = idTokenResult.claims.moderador;
        location.href = "moderador.html";
      })
      var email = user.email;
      // ...
      //

    } else {
      // User is signed out.
      // ...
    }
  });
})

