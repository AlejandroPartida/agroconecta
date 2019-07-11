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
      user.getIdTokenResult().then(idTokenResult => {
        user.moderador = idTokenResult.claims.moderador;
        user.pyme = idTokenResult.claims.pyme;
        user.ancla = idTokenResult.claims.ancla;

        if(user.moderador){
          location.href = "moderador.html";
        }else if(user.pyme){
          location.href = "pyme.html";
        }else if(user.ancla){
          location.href = "ancla.html";
        }
      });
      
      
    } else {
      // User is signed out.
      // ...
    }
  });
})

